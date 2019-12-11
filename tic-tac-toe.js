
    /* by grebennikovalex */
  
	'use strict'
	
let headbox = document.createElement('div');
headbox.className = "header";
document.body.append(headbox);

let nextPlayerField = document.createElement('div');
nextPlayerField.className = "npfield";
nextPlayerField.innerHTML = "START MOVE";
headbox.append(nextPlayerField);

let mark = document.createElement('div');
mark.className = "mark";
mark.innerHTML = "<img src = 'files/o.png'>";
headbox.append(mark);

let newgame = document.createElement('div');
newgame.className = "newgame";
newgame.innerHTML = "ONE MORE!"
headbox.append(newgame);


let main = document.createElement('div');	
document.body.append(main);
main.className = "container";	

	
let cells = [];
let counter = 0;
const wincolor = "#6a89cc";


for (let i = 0; i < 9; i++) {
	
		let cell = document.createElement('div');
		cell.className = "box";
		cell.innerHTML = " ";
		cell.flag = false;
		cell.check = " ";
		main.append(cell);
		cells.push(cell);
	};
	
[...cells].forEach(cell => {
			
				cell.onmousedown = () => {
					
					if (!cell.flag) {		
					
							counter++;
							nextPlayerField.innerHTML = "NEXT MOVE";
							
							
							 if(counter % 2 !== 0) {
								 
								if (!cell.flag){
									
									cell.innerHTML = "<img src = 'files/o.png'>";
									cell.flag = true;
									cell.check =  "o";
									mark.innerHTML = "<img src = 'files/x.png'>"
									
								};			
								
							 } 
							 
							 else { 
								
								if (!cell.flag){
									
									cell.innerHTML = "<img src = 'files/x.png'>";
									cell.flag = true;
									cell.check = "x";
									mark.innerHTML = "<img src = 'files/o.png'>"
									
								};
								
							 } 
	
					}
					
					if (winCheck(cells)) {
						[...cells].forEach(cell => {
							
							cell.flag = true;
							mark.style.background = "red";
							nextPlayerField.innerHTML = "THE WINNER";
							reload();
							
							
							if (counter % 2 !== 0) {
								
								mark.innerHTML = "<img src = 'files/o.png'>";
								
							} else {
								
								mark.innerHTML = "<img src = 'files/x.png'>";
								
								};
						});
					};
						
						if (counter == 9 && !winCheck(cells)) {
						mark.innerHTML = " ";	
						nextPlayerField.innerHTML = "STANDOFF";	
						[...cells].forEach(cell => cell.style.background = "silver");
						reload();
						};
				}
		
		});
						

let winCheck = (cells) => {
	
	for (let i = 0; i < cells.length; i++) {
		
		//checking rows
	
		if (cells[0].check == cells[1].check && cells[1].check == cells[2].check && cells[2].check != " ") {
				cells[0].style.background = wincolor;
				cells[1].style.background = wincolor;
				cells[2].style.background = wincolor;
				return true;
		};
		if (cells[3].check == cells[4].check && cells[4].check == cells[5].check && cells[5].check != " ") {
				cells[3].style.background = wincolor;
				cells[4].style.background = wincolor;
				cells[5].style.background = wincolor;
				return true;
		};				
		if (cells[6].check == cells[7].check && cells[7].check == cells[8].check && cells[8].check != " ") {
				cells[6].style.background = wincolor;
				cells[7].style.background = wincolor;
				cells[8].style.background = wincolor;
				return true;
		};
		
		//checking columns
				
		if (cells[0].check == cells[3].check && cells[3].check == cells[6].check && cells[6].check != " ") {
				cells[0].style.background = wincolor;
				cells[3].style.background = wincolor;
				cells[6].style.background = wincolor;
				return true;
		};
		if (cells[1].check == cells[4].check && cells[4].check == cells[7].check && cells[7].check != " ") {
				cells[1].style.background = wincolor;
				cells[4].style.background = wincolor;
				cells[7].style.background = wincolor;
				return true;
		};
		if (cells[2].check == cells[5].check && cells[5].check == cells[8].check && cells[8].check != " ") {
				cells[2].style.background = wincolor;
				cells[5].style.background = wincolor;
				cells[8].style.background = wincolor;
				return true;
		};
		
		//checking diagonals
				
		if (cells[0].check == cells[4].check && cells[4].check == cells[8].check && cells[8].check != " ") {
				cells[0].style.background = wincolor;
				cells[4].style.background = wincolor;
				cells[8].style.background = wincolor;
				return true;
		};
		if (cells[2].check == cells[4].check && cells[4].check == cells[6].check && cells[6].check != " ") {
				cells[2].style.background = wincolor;
				cells[4].style.background = wincolor;
				cells[6].style.background = wincolor;
				return true;
		};
		
		
		
	};	
};

let reload = () => {
	nextPlayerField.onmouseover = () =>  newgame.style.display = "flex";
	newgame.onmousedown = () =>	window.location.reload(false);
	newgame.onmouseout = () =>  newgame.style.display = "none";
	}