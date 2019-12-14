
    /* by grebennikovalex */
  
	'use strict'
	
	// creating the game board elements and addind initial properties for them
	
	// header
let headbox = document.createElement('div');
headbox.className = "header";
document.body.append(headbox);

	// field in the header for the next move display - text
let nextPlayerField = document.createElement('div');
nextPlayerField.className = "npfield";
nextPlayerField.innerHTML = "START MOVE";
headbox.append(nextPlayerField);

	// field in the header for the next move display - signs O or X or empty
let mark = document.createElement('div');
mark.className = "mark";
mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
headbox.append(mark);

	// hidden element for new game start
let newgame = document.createElement('div');
newgame.className = "newgame";
newgame.innerHTML = "ONE MORE!"
headbox.append(newgame);

	// main container for the board
let main = document.createElement('div');	
document.body.append(main);
main.className = "container";	


	// some variables and constants
let cells = [];
let counter = 0;
const wincolor = "#6a89cc"; // color for winner row


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
};

let popsound = new sound("pop.mp3"); // popping sound

let putX = (rcell) => {
	
							cells[rcell].innerHTML = "<img src = 'files/x.png' class = 'xx'>";
							popsound.play();
							cells[rcell].flag = true;
							cells[rcell].check =  "x";
							mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>"
							nextPlayerField.innerHTML = "NEXT MOVE";
							cells[rcell].style.backgroundImage = "radial-gradient(#67cfe6, #a9e4f1)";
							
};

	// creating an array of cells with initial properties for each cell

for (let i = 0; i < 9; i++) {
	
		let cell = document.createElement('div');
		cell.className = "box";
		cell.flag = false;
		cell.delayflag = true;
		cell.check = " ";
		main.append(cell);
		cells.push(cell);
	};

let randomcheck = () => { 

let flag = true;
	
	// iterating the array while the random number finds an empty cell
	
	while (flag) {

		let rcell = Math.floor(Math.random() * 9); 
		
				for (let i = 0; i < cells.length; i++) {
					
						if (cells[rcell].check == " ") {
							
							putX(rcell);
							[...cells].forEach(cell => cell.delayflag = false);	
							if (winCheck()) winFill();
							flag = false;
						};
					
				
				};
				
		};
		
	
};	



	setTimeout(randomcheck, 1000);
	counter++;	
	

			
					
								
	// changing the state of clicked cell
	
[...cells].forEach(cell => {
			
				cell.onmousedown = () => {
					
					// checking the clicked cell for respond state
					
				if (!cell.flag && !cell.delayflag)  {		
					
					
							counter++; // odd number of move, O's move
							console.log(counter);
							
							
							// the O's move
							
							 if(counter % 2 == 0) {
								 
									// placing the O in the corresponding cell
									cell.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
									
									// playing sound
									popsound.play();
																		
									// flagging the cell for not responding onclick
									cell.flag = true;
									
									// changing the state to marked with O
									cell.check =  "o";
									
									// the next player is X									
									mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
									nextPlayerField.innerHTML = "RANDOM MOVE";
									cell.style.backgroundImage = "radial-gradient(#67cfe6, #a9e4f1)";	
									
								};			
								
							  
										
						// checking the winner after the O's move
						// and displaying the winner state of the game board if true
						if (winCheck()) winFill();
							
						
						// function call for the X's move with delay if O's didn't win 
						if (!winCheck() && counter < 9) {
							setTimeout(randomcheck, 1000);
							
							// flagging all cells for not responding onckick while delay
							[...cells].forEach(cell => cell.delayflag = true);
						}
						
						else winFill();
						
						
						counter++;	// even number of move, X's move
						console.log(counter);	
					};	
					
			};		
	});							
								
	// function for display the winner state of the game board					
	
let winFill = () =>	[...cells].forEach(cell => {
									
			cell.flag = true; // adding non-respond state for all the cells
			mark.style.background = "red";
			nextPlayerField.innerHTML = "THE WINNER";
			reload(); // calling for the start new game function
				
			// checking which move caused the winner state
									
			if (counter % 2 !== 0) {
										
				mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
										
			} else {
										
				mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>";
										
					};
					
			// checking the standoff state and changing the game board 		
										
			if (counter == 9 && !winCheck()) {
				mark.innerHTML = " ";	
				nextPlayerField.innerHTML = "STANDOFF";	
				[...cells].forEach(cell => cell.style.background = "silver");
				reload();
			};
										
	});
														
	




	// checking who's won the game, changing the color of the winner's row

let winCheck = () => {
	
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

	// new game start

let reload = () => {
	nextPlayerField.onmouseover = () =>  newgame.style.display = "flex";
	newgame.onmousedown = () =>	window.location.reload(false);
	newgame.onmouseout = () =>  newgame.style.display = "none";
	};
	
	// putting X check in a cpecific cell
	




