
    /* by grebennikovalex */
  
	'use strict'
	
	// some variables 
	
let players = [];
let closeMarks = [];
let cells = [];
let counter = 0;
let start, end;
let cplr = "";
let rem = "";

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
	
let playerField = document.createElement('div');
	playerField.className = "field";
	playerField.innerHTML = "PLAYER: ";
	headbox.append(playerField);

let playerAdd = document.createElement('div');
	playerAdd.className = "field";
	playerAdd.innerHTML = "PLAYERS  LIST";
	headbox.append(playerAdd);		
	
let playerScore = document.createElement('div');
	playerScore.className = "field";
	
	headbox.append(playerScore);



function save() {
	
	localStorage.setItem('players', JSON.stringify(players));
	
	
    
}

function load() {
	
	players = JSON.parse(localStorage.getItem('players'));
	
	
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
	countfield.className = "field";
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
	
	
	
	
	// player selection
	
let startContainer = document.createElement('div');
	startContainer.className = "start";
	document.body.append(startContainer);

let initModal = document.createElement('div');
	initModal.className = "modal";
	initModal.innerHTML = "SELECT PLAYER OR TYPE NEW NAME:";
	startContainer.append(initModal);
	
let inputP = document.createElement('input');
	inputP.maxLength = 8;
	inputP.placeholder = " Player...";
	inputP.className = "inputPlayer";
	initModal.append(inputP);
	


function init() {
	
	startContainer.style.display = "flex";
	
	
	for (let i = 0; i < players.length; i++ ) {
		
		initModal.append(players[i]);
		players[i].innerHTML = players[i].name;
		
	
		
		initModal.append(closeMarks[i]);
		
		
	};
		
	
	
};	

init();




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
			mark.check = " ";
			
		};
		
		countfields[1].innerHTML = "SPENT: ";
	};	


let countersDisplay = () => {
	
	
	
	countfields[5].innerHTML = "STANDOFFS:  " + players[cplr].offcounter;
	countfields[4].innerHTML = "O WINS:  " + players[cplr].ocounter;
	countfields[3].innerHTML = "X WINS:  " + players[cplr].xcounter;
	
	
	};


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





	playerAdd.onmousedown = () => {
		
		
		init();
		addPlayer();
		
		};
	
	saveBtn.onmousedown = () => {
					
		save(); 
				
		};
	
	
	loadBtn.onmousedown = () => {
		
		load(); 
		init();
				
		};
	
	
	clearBtn.onmousedown = () => {
		
		init(); 
		
		}
		 
		
	

	
	nextPlayerField.onmouseover = () =>  {
		
		newgame.innerHTML = "START";
		newgame.style.display = "flex";
		
		};
		
	
		
	newgame.onmouseout = () =>  newgame.style.display = "none";
	newgame.onmousedown = () =>	{
							
		board();
		setTimeout(game, 500); 
			
		};


addPlayer();

	
function addPlayer() {
	
	window.onkeyup = keyup;

	handle();
	
	function keyup(e) {
		
	  if (e.keyCode == 13)   { 
		
			console.clear();
				
			if (uniqueCheck(inputP.value)) {
				if (inputP.value === "") return;
						
			let player = document.createElement('div');
				player.className = "listP";
				player.name = inputP.value;
				player.name = player.name.toUpperCase();
				
				player.xcounter = 0;
				player.ocounter = 0;
				player.offcounter = 0;
				player.games = 0;
			
			let closeM = document.createElement('div');
				closeM.className = "closeMark";
				closeM.innerHTML = "<img src = 'files/x_small.png' class = 'rem' height='32' width='32'>";
							
				players.push(player);
				closeMarks.push(closeM);
								
				[...players].forEach(player => console.log(player.name));
				
				};

			};
			
			
			init();
			handle();
			
			//inputP.value = '';
			
	};
	
};


function handle() {	

		[...players].forEach(player => 
			
				player.onmousedown = () => {
				cplr = players.indexOf(player);
				player.record = 30000;
				startContainer.style.display = "none";
				board();
				countersDisplay();
				setTimeout(game, 500); 	
				return;
				
			}

		);
		
		

		
		[...closeMarks].forEach(mark => {
			
				mark.onmousedown = () => {
					
						rem = closeMarks.indexOf(mark);
					
						players[rem].remove();
						closeMarks[rem].remove();
						players.splice(rem, 1);
						closeMarks.splice(rem, 1);
		}
	});

};
 


