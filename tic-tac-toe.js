
    /* by grebennikovalex */
  
	'use strict'
	
	// some variables 
	
let players = [];
let closeMarks = [];
let cells = [];
let arrinfo = [];
let counter = 0;
let start, end;
let cplr = "";
let rem = "";
let recordo = "";


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
	newgame.style.display = "none";
	newgame.innerHTML = "START";
	headbox.append(newgame);

	// main container for the board
let main = document.createElement('div');	
	document.body.append(main);
	main.className = "container";	
	
let playerField = document.createElement('div');
	playerField.className = "field";
	playerField.style.width = "296px";
	headbox.append(playerField);

	
	
let playerScore = document.createElement('div');
	playerScore.className = "field";
	headbox.append(playerScore);


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

let playerAdd = document.createElement('div');
	playerAdd.className = "footfield";
	playerAdd.innerHTML = "PLAYERS  LIST";
	main.append(playerAdd);	

	
	// player selection
	
let startContainer = document.createElement('div');
	startContainer.className = "start";
	document.body.append(startContainer);

let initModal = document.createElement('div');
	initModal.className = "modal";
	initModal.innerHTML = "SELECT PLAYER OR TYPE NEW NAME:";
	startContainer.append(initModal);
	
let inputP = document.createElement('input');
	inputP.maxLength = 13;
	inputP.placeholder = "Player...";
	inputP.className = "inputPlayer";
	initModal.append(inputP);
	
let saveBtn = document.createElement('div');
	saveBtn.className = "listPb";
	saveBtn.innerHTML = "SAVE";
	
	
let loadBtn = document.createElement('div');
	loadBtn.className = "listPb";
	loadBtn.innerHTML = "LOAD";
	
	

	
let A = document.createElement('a');
	
	A.className = "listPb";
	

function init() {
	
	
	
	startContainer.style.display = "flex";
	
	
		
	for (let i = 0; i < players.length; i++ ) {
		
		initModal.append(players[i]);
		players[i].innerHTML = players[i].name + ":  " + players[i].ocounter + ":  " + timeMove(players[i].recordo);
		initModal.append(closeMarks[i]);
				
	};
		
	initModal.append(saveBtn);	
	initModal.append(loadBtn);
	initModal.append(A);
	A.textContent = "SAVE to create JSON...";
	A.removeAttribute( 'href' );
	
};	








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
	
		playerScore.innerHTML = "SCORE: " + timeMove(players[cplr].record);
		
		countfields[5].innerHTML = "STANDOFFS:  " + players[cplr].offcounter;
		countfields[4].innerHTML = "O WINS:  " + players[cplr].ocounter;
		countfields[3].innerHTML = "X WINS:  " + players[cplr].xcounter;
	
	
	};


setInterval(timefield, 1000);




playerAdd.onmousedown = () => {
				
		init();
		addPlayer();
		
		};
	
saveBtn.onmousedown = () => {
	
		save(); 
		[...players].forEach(player => player.className = "listP");
		getFile();
	
};

	
	
loadBtn.onmousedown = () => {
	
		
		load(); 
		init();
		
			
		};

	
nextPlayerField.onmouseover = () =>  {
		
		newgame.innerHTML = "START";
		newgame.style.display = "flex";
		
		};
		
	
		
newgame.onmouseout = () =>  newgame.style.display = "none";

newgame.onmousedown = () =>	{
							
		board();
		setTimeout(game, 500); 
			
		};



	
function addPlayer() {
	
	window.onkeyup = keyup;

	handle();
	
	function keyup(e) {
		
	  if (e.keyCode == 13)   { 
		
			console.clear();
				
			if (uniqueCheck(inputP.value)) {
				if (inputP.value === "") return;
						
			let player = document.createElement('div');
				player.className = "listPnew";
				player.name = inputP.value;
				player.name = player.name.toUpperCase();
				player.xcounter = 0;
				player.ocounter = 0;
				player.offcounter = 0;
				player.games = 0;
				player.record = 30000;
				player.recordo = 0;
				
				let	playerinfo = { 
					name : "player",
					xcounter : 0,
					ocounter : 0,
					offcounter : 0,
					games : 0, 
					record : 0,
					recordo : 0
					};			
			
			let closeM = document.createElement('div');
				closeM.className = "closeMark";
				closeM.innerHTML = "<img src = 'files/x_small.png' class = 'rem' height='32' width='32'>";
							
				players.push(player);
				closeMarks.push(closeM);
				arrinfo.push(playerinfo);
								
				[...players].forEach(player => console.log(player.name));
				
				};
				
				inputP.value = '';
			
			};
			
			
				init();
				handle();
				
			
			
	};
	
};



let save = () =>  {
	
	for (let i = 0; i < players.length; i++) {
		
				arrinfo[i].name = players[i].name;
				arrinfo[i].xcounter = players[i].xcounter;
				arrinfo[i].ocounter = players[i].ocounter;
				arrinfo[i].offcounter = players[i].offcounter;
				arrinfo[i].games = players[i].games;
				arrinfo[i].record = players[i].record;
				arrinfo[i].recordo = players[i].recordo;
				
	};
	
	localStorage.setItem('arrinfo', JSON.stringify(arrinfo));
};	
	





let load = () => {
	
	arrinfo = JSON.parse(localStorage.getItem('arrinfo'));
	
	console.log(JSON.stringify(arrinfo, null, 4));
	
	[...players].forEach(player => player.remove());
	players = [];
	
	[...closeMarks].forEach(mark => mark.remove());
	closeMarks = [];
	
	for (let i = 0; i < arrinfo.length; i++) {
		
		let player = document.createElement('div');
			player.className = "listP";
			
			player.name = arrinfo[i].name;
			player.xcounter = arrinfo[i].xcounter;
			player.ocounter = arrinfo[i].ocounter;
			player.offcounter = arrinfo[i].offcounter;
			player.games = arrinfo[i].games;
			player.record = arrinfo[i].record;
			player.recordo = arrinfo[i].recordo;
			
		let closeM = document.createElement('div');
			closeM.className = "closeMark";
			closeM.innerHTML = "<img src = 'files/x_small.png' class = 'rem' height='32' width='32'>";
							
		players.push(player);
		closeMarks.push(closeM);
			
		
	};
	
	
	addPlayer();
	
};

function handle() {	

		[...players].forEach(player => 
			
				player.onmousedown = () => {
				cplr = players.indexOf(player);
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
						arrinfo.splice(rem, 1);
						
						init();
		}
	});
	
	
};

let getFile = () => {

function encode(s) {
    let out = [];
    for ( let i = 0; i < s.length; i++ ) {
        out[i] = s.codePointAt(i);
		
    }
		
    return new Uint8Array(out);
}

let blob = new Blob( [encode(JSON.stringify(arrinfo))], {type: 'text/plain'});
	
    

	
	A.download = 'TicTacToeStatistics.json';
	A.textContent = "GET JSON FILE...";
	A.setAttribute( 'href', URL.createObjectURL( blob ) );
	
	
	
	   
}; 
    





load(); 
init();
addPlayer();
    

	












