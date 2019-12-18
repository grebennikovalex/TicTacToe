
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
nextPlayerField.innerHTML = "START";
headbox.append(nextPlayerField);


	// field in the header for the next move display - signs O or X or empty
let mark = document.createElement('div');
mark.className = "mark";
mark.check = " ";
headbox.append(mark);

	// hidden element for new game start
let newgame = document.createElement('div');
newgame.className = "newgame";
newgame.style.display = "flex";
newgame.innerHTML = "START";
headbox.append(newgame);

	// main container for the board
let main = document.createElement('div');	
document.body.append(main);
main.className = "container";	


	// some variables 
let cells = [];
let counter = 0;
let xcounter = " ";
let ocounter = " ";
let offcounter = " ";
let games = " ";
let start, end;



	// sound constructor
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

function save() {
  localStorage.setItem('counter', JSON.stringify(counter));
  localStorage.setItem('xcounter', JSON.stringify(xcounter));
  localStorage.setItem('ocounter', JSON.stringify(ocounter));
  localStorage.setItem('offcounter', JSON.stringify(offcounter));
  localStorage.setItem('games', JSON.stringify(games));
}

function load() {
  counter = JSON.parse(localStorage.getItem('counter'));
  xcounter = JSON.parse(localStorage.getItem('xcounter'));
  ocounter = JSON.parse(localStorage.getItem('ocounter'));
  offcounter = JSON.parse(localStorage.getItem('offcounter'));
  games = JSON.parse(localStorage.getItem('games'));
}


	// sounds
let popsound = new sound("pop.mp3"); // popping sound
let winsound = new sound("win.mp3"); // winning sound
let offsound = new sound("off.mp3"); // standoff sound


	// creating an array of cells with initial properties for each cell

for (let i = 0; i < 9; i++) {
	
		let cell = document.createElement('div');
		cell.className = "mark";
		cell.delayflag = true;
		cell.innerHTML = "<img src = 'files/x.png' class = 'xx'>";
		main.append(cell);
		cells.push(cell);
	};
	
	


let countfields = [];

for (let i = 0; i < 6; i++) {
	let countfield = document.createElement('div');
	countfield.className = "foot";
	main.append(countfield);
	countfields.push(countfield);
};



let saveBtn = document.createElement('div');
saveBtn.className = "btn";
saveBtn.innerHTML = "SAVE";
main.append(saveBtn);	
	
let loadBtn = document.createElement('div');
loadBtn.className = "btn";
loadBtn.innerHTML = "LOAD";
main.append(loadBtn);

let clearBtn = document.createElement('div');
clearBtn.className = "btn";
clearBtn.innerHTML = "CLEAR";
main.append(clearBtn);



   // new board

let board = () => {

	for (let i = 0; i < 9; i++) {
		
			cells[i].className = "box";
			cells[i].flag = false;
			cells[i].delayflag = true;
			cells[i].check = " ";
			cells[i].num = 0;
			cells[i].innerHTML = " ";
			counter = 0;
			nextPlayerField.innerHTML = " ";
			mark.className = "mark";
		};
		
		
};	


let countersDisplay = () => {
	
	countfields[5].innerHTML = "STANDOFFS:  " + offcounter;
	countfields[3].innerHTML = "X WINS:  " + xcounter;
	countfields[4].innerHTML = "O WINS:  " + ocounter;
	countfields[0].innerHTML = "GAME:  " + games;
	countfields[1].innerHTML = " ";
	
};


function timefield() {
	
	let time = new Date();
	countfields[2].innerHTML = 
	"TIME:" + (new Date().toLocaleTimeString());

	};

function timeMove() {
	
	countfields[1].innerHTML = (end - start)/1000 + " sec.";
				
		}




setInterval(timefield, 1000);



	
	// starting game button
newgame.onmouseover = () => newgame.style.background = "#c768f3";
newgame.onmouseout = () => newgame.style.background = "#f368e0";	
newgame.onmousedown = () => { 

	newgame.style.display = "none";
	mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>";
	board();
	setTimeout(game, 500); 	

};

	// random X function
let ra = (cells) => { 



let flag = true;
	
	// iterating the array while the random number finds an empty cell
	
	while (flag) {

		let cell = Math.floor(Math.random() * 9); 
		
				for (let i = 0; i < cells.length; i++) {
					
						if (cells[cell].check == " ") {
							
							putX(cell);
							[...cells].forEach(cell => cell.delayflag = false);	
							if (winCheck()) winFill();
							flag = false;
						};
					
				
				};
				
		};
		
	
};	

	// an X insertion
let putX = (cell) => {
	
							cells[cell].innerHTML = "<img src = 'files/x.png' class = 'xx'>";
							popsound.play();
							counter++;
							nextPlayerField.innerHTML = `THIS MOVE  ${counter + 1}`;
							console.log(counter);
							cells[cell].flag = true;
							cells[cell].check =  "x";
							cells[cell].num =  1;
							mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
							cells[cell].className = "boxchecked";
							[...cells].forEach(cell => cell.delayflag = false);
							if (counter == 9) winFill();
							
};


    // function for display the winner state of the game board	
	
let winFill = () =>	{
	
				// adding non-respond state for all the cells
			[...cells].forEach(cell => cell.flag = true);
									
			 
			mark.className = "redmark";
			nextPlayerField.innerHTML = "THE WINNER";
			
			if (winCheck()) {
				
				if (mark.check = "o") { 
										
					mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
					
					}
					
					else if (mark.check = "x") {
											
					mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>";
					
					};
					
				setTimeout(winplay, 500);
				
				
				}; 
				
			
									
			
					
			// checking the standoff state and changing the game board 		
										
			if (!winCheck() && counter == 9) {
				mark.innerHTML = " ";	
				nextPlayerField.innerHTML = "STANDOFF";	
				offcounter++;
				mark.check = " ";
				[...cells].forEach(cell => cell.className = "boxoff");
				setTimeout(offplay, 500);
				
				
				
			};
	end = Date.now();
	timeMove();
};
	
	// functions used for delay	in setTimeout	
function winplay() {winsound.play()};
function offplay() {offsound.play()};
function randomcheck () {ra (cells)};

countersDisplay();

	// the game itself		
function game() {	
start = Date.now();
mark.check = " ";
nextPlayerField.innerHTML = `THIS MOVE  ${counter + 1}`;
setTimeout(randomcheck, 500);				
						
	// changing the state of clicked cell
	
[...cells].forEach(cell => {
			
				cell.onmousedown = () => {
									
					// checking the clicked cell for respond state
					
				if (!cell.flag && !cell.delayflag)  {		
					
							counter++; 
							nextPlayerField.innerHTML = `THIS MOVE  ${counter + 1}`;	
								 
									// placing the O in the corresponding cell
									cell.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
									
									// playing sound
									popsound.play();
																		
									// flagging the cell for not responding onclick
									cell.flag = true;
									
									// changing the state to marked with O
									cell.check =  "o";
									
									cell.num =  3;
									
									// the next player is X									
									mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
									
									cell.className = "boxchecked";
									
																			
						// checking the winner after the O's move
						// and displaying the winner state of the game board if true
						if (winCheck()) winFill()
						
											
						// function call for the X's move with delay if O's didn't win 
						else {
													
							setTimeout(logic, 500);
							// flagging all cells for not responding onckick while delay
							[...cells].forEach(cell => cell.delayflag = true);
						};
						
						console.log(counter);	
						console.log(winCheck());
						
					};	
					
			};		
	});

	
};								
					

	// checking who's won the game, changing the color of the winner's row

let winCheck = () => {
	
	for (let i = 0; i < cells.length; i++) {
		
	//checking rows
	
		if (cells[0].check == cells[1].check && cells[1].check == cells[2].check && cells[2].check != " ") {
				if 		(cells[0].num + cells[1].num + cells[2].num == 3) mark.check = "x"
				else if (cells[0].num + cells[1].num + cells[2].num == 6) mark.check = "o";
				cells[0].className = "boxwin";
				cells[1].className = "boxwin";
				cells[2].className = "boxwin";
				return true;
		}
		else if (cells[3].check == cells[4].check && cells[4].check == cells[5].check && cells[5].check != " ") {
				if 		(cells[3].num + cells[4].num + cells[5].num == 3) mark.check = "x"
				else if (cells[3].num + cells[4].num + cells[5].num == 6) mark.check = "o";
				cells[3].className = "boxwin";
				cells[4].className = "boxwin";
				cells[5].className = "boxwin";
				return true;
		}				
		else if (cells[6].check == cells[7].check && cells[7].check == cells[8].check && cells[8].check != " ") {
				if 		(cells[6].num + cells[7].num + cells[8].num == 3) mark.check = "x"
				else if (cells[6].num + cells[7].num + cells[8].num == 6) mark.check = "o";
				cells[6].className = "boxwin";
				cells[7].className = "boxwin";
				cells[8].className = "boxwin";
				return true;
		} 
		
		//checking columns
				
		else if (cells[0].check == cells[3].check && cells[3].check == cells[6].check && cells[6].check != " ") {
				if 		(cells[0].num + cells[3].num + cells[6].num == 3) mark.check = "x"
				else if (cells[0].num + cells[3].num + cells[6].num == 6) mark.check = "o";
				cells[0].className = "boxwin";
				cells[3].className = "boxwin";
				cells[6].className = "boxwin";
				return true;
		}
		else if (cells[1].check == cells[4].check && cells[4].check == cells[7].check && cells[7].check != " ") {
				if 		(cells[1].num + cells[4].num + cells[7].num == 3) mark.check = "x"
				else if (cells[1].num + cells[4].num + cells[7].num == 6) mark.check = "o";
				cells[1].className = "boxwin";
				cells[4].className = "boxwin";
				cells[7].className = "boxwin";
				return true;
		}
		else if (cells[2].check == cells[5].check && cells[5].check == cells[8].check && cells[8].check != " ") {
				if 		(cells[2].num + cells[5].num + cells[8].num == 3) mark.check = "x"
				else if (cells[2].num + cells[5].num + cells[8].num == 6) mark.check = "o";
				cells[2].className = "boxwin";
				cells[5].className = "boxwin";
				cells[8].className = "boxwin";
				return true;
		}
		
		//checking diagonals
				
		else if (cells[0].check == cells[4].check && cells[4].check == cells[8].check && cells[8].check != " ") {
				if 		(cells[0].num + cells[4].num + cells[8].num == 3) mark.check = "x"
				else if (cells[0].num + cells[4].num + cells[8].num == 6) mark.check = "o";
				cells[0].className = "boxwin";
				cells[4].className = "boxwin";
				cells[8].className = "boxwin";
				return true;
		}
		else if (cells[2].check == cells[4].check && cells[4].check == cells[6].check && cells[6].check != " ") {
				if 		(cells[2].num + cells[4].num + cells[6].num == 3) mark.check = "x"
				else if (cells[2].num + cells[4].num + cells[6].num == 6) mark.check = "o";
				cells[2].className = "boxwin";
				cells[4].className = "boxwin";
				cells[6].className = "boxwin";
				return true;
		}
		
		else return false;
		
		
		
	};	
};

	
	

	saveBtn.onmousedown = () => {
					
		save(); 
		
		counter = " ";
		xcounter = " ";
		ocounter = " ";
		offcounter = " ";
		games = " ";
		
		board();
			countersDisplay();
			setTimeout(game, 500); 
		
	};
	
	
	loadBtn.onmousedown = () => {
		
		load(); 
		board();
			countersDisplay();
			setTimeout(game, 500); 
		
	};
	
	
	clearBtn.onmousedown = () => { 
		
		counter = " ";
		xcounter = " ";
		ocounter = " ";
		offcounter = " ";
		games = " ";
	
		save(); 
		
		board();
			countersDisplay();
			setTimeout(game, 500); 
	
	};

	
	nextPlayerField.onmouseover = () =>  {
		
		newgame.innerHTML = "START";
		newgame.style.display = "flex";
		
		};
		
	
		
	newgame.onmouseout = () =>  newgame.style.display = "none";
	newgame.onmousedown = () =>	{
		
			games++;
			if (mark.check == "x") xcounter++
			else if (mark.check == "o") ocounter++;	
				
			board();
			countersDisplay();
			setTimeout(game, 500); 
			
			};

	
	
	




