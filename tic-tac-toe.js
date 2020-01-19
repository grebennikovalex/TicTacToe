
    /* by grebennikovalex */
  
	'use strict'
	
	// some variables 
	
let players = []
let closeMarks = []
let cells = []
let arrinfo = []
let Rbtn = []
let counter = 0
let start, end
let cplr = ""
let rem = ""
let recordo = ""
let oddgame = true


	// creating the game board elements and addind initial properties for them
	
	// header
	
let headbox = document.createElement('div')
	headbox.className = "header"
	document.body.append(headbox)

	// field in the header for the next move display - text
	
let nextPlayerField = document.createElement('div')
	nextPlayerField.className = "npfield"
	nextPlayerField.innerHTML = "START"
	headbox.append(nextPlayerField)


	// field in the header for the next move display - signs O or X or empty
	
let mark = document.createElement('div')
	mark.className = "mark"
	mark.check = " "
	headbox.append(mark)

	// hidden element for new game start
	
let newgame = document.createElement('div')
	newgame.className = "newgame"
	newgame.style.display = "none"
	newgame.innerHTML = "START"
	newgame.flag = true
	headbox.append(newgame)

	// main container for the board
	
let main = document.createElement('div')
	document.body.append(main)
	main.className = "container"
	
	//couple fields for player name and "O" winner time
	
let playerField = document.createElement('div')
	playerField.className = "field"
	playerField.style.width = "296px"
	headbox.append(playerField)
	
let checkFool = document.createElement('input')
	checkFool.type = 'checkbox'
	checkFool.className = 'fool'
	

	
let playerScore = document.createElement('div')
	playerScore.className = "field"
	headbox.append(playerScore)


	// sounds
	
let popsound = new sound("pop.mp3") // popping sound
let winsound = new sound("win.mp3") // winning sound
let offsound = new sound("off.mp3") // standoff sound


	// creating an array of cells with initial properties for each cell

for (let i = 0; i < 9; i++) {
	
		let cell = document.createElement('div')
		cell.className = "mark"
		cell.delayflag = true
		cell.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
		main.append(cell)
		cells.push(cell)
	}
	
    //counters display 
 
let countfields = []

for (let i = 0; i < 6; i++) {
	let countfield = document.createElement('div')
	countfield.className = "field"
	main.append(countfield)
	countfields.push(countfield)
}

let playerAdd = document.createElement('div')
	playerAdd.className = "footfield"
	playerAdd.innerHTML = "PLAYERS  LIST"
	main.append(playerAdd);	

	
	// player selection
	
let startContainer = document.createElement('div')
	startContainer.className = "start"
	document.body.append(startContainer)

let initModal = document.createElement('div')
	initModal.className = "modal"
	initModal.innerHTML = "SELECT PLAYER OR TYPE NEW NAME:"
	startContainer.append(initModal)
	
let inputP = document.createElement('input')
	inputP.maxLength = 13
	inputP.placeholder = "Player..."
	inputP.className = "inputPlayer"
	initModal.append(inputP)
	
let saveBtn = document.createElement('div')
	saveBtn.className = "listPb"
	saveBtn.innerHTML = "SAVE"
	
	
let loadBtn = document.createElement('div')
	loadBtn.className = "listPb"
	loadBtn.innerHTML = "LOAD"

	
let A = document.createElement('a')
	A.className = "listPb"
	
    //inital modal window
  
function init() {
	
	startContainer.style.display = "flex"
	
	for (let i = 0; i < players.length; i++ ) {
		
		initModal.append(players[i])
		if(players[i].recordo != 30000 ) players[i].innerHTML = players[i].name + ":  " + players[i].ocounter + ":  " + timeMove(players[i].recordo)
		else players[i].innerHTML = players[i].name + ":  " + players[i].ocounter + ":  "
		
		initModal.append(Rbtn[i])
		initModal.append(closeMarks[i])
				
	}
		
	initModal.append(saveBtn)
	initModal.append(loadBtn)
	initModal.append(A)
	A.textContent = "SAVE to create JSON..."
	A.removeAttribute( 'href' )
	
}


   // new board

const board = () => {

	for (let i = 0; i < 9; i++) {
		
			cells[i].className = "box"
			cells[i].flag = false
			cells[i].delayflag = true
			cells[i].check = " "
			cells[i].num = 0
			cells[i].innerHTML = " "
			counter = 0
			nextPlayerField.innerHTML = " "
			mark.className = "mark"
			mark.check = " "
			
		}
		
		countfields[1].innerHTML = "SPENT: "
}

	//counters display

const countersDisplay = () => {
	
		playerScore.innerHTML = "SCORE: " + timeMove(players[cplr].record)
		countfields[5].innerHTML = "STANDOFFS:  " + players[cplr].offcounter
		countfields[4].innerHTML = "O WINS:  " + players[cplr].ocounter
		countfields[3].innerHTML = "X WINS:  " + players[cplr].xcounter
	
}
	//simple clock

setInterval(timefield, 1000)

	//listeners

playerAdd.onmousedown = () => {
				
		init();
		addPlayer();
		
}
	
saveBtn.onmousedown = () => {
	
		save(); 
		players.map(player => player.className = "listP");
		getFile();
	
}
	
	
loadBtn.onmousedown = () => {
		load()
		init()
}

	
nextPlayerField.onmouseover = () =>  {
		
		newgame.innerHTML = "START"
		newgame.style.display = "flex"
		
}
		
newgame.onmouseout = () =>  newgame.style.display = "none"
	
newgame.onmousedown = () =>	{
	
	if (newgame.flag) {	
								
		board()
		newgame.flag = false
		
		oddgame ? mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>" : mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>"
		oddgame ? nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}` : nextPlayerField.innerHTML = `${players[cplr].name} MOVE  ${counter + 1}`
		
		setTimeout(game, 500)
	}
}

	// add new player function
	
function addPlayer() {
	
	window.onkeyup = keyup

	handle()
	
	function keyup(e) {
		
	  if (e.keyCode === 13)   { 
		
			console.clear();
				
			if (uniqueCheck(inputP.value)) {
				if (inputP.value === "") return;
						
			let player = document.createElement('div')
				player.className = "listPnew"
				player.name = inputP.value
				player.name = player.name.toUpperCase()
				player.xcounter = 0
				player.ocounter = 0
				player.offcounter = 0
				player.games = 0
				player.record = 30000
				player.recordo = 30000
				
				let	playerinfo = { 
					name : "player",
					xcounter : 0,
					ocounter : 0,
					offcounter : 0,
					games : 0, 
					record : 0,
					recordo : 0
					}			
			let renameBtn = document.createElement('div')
				renameBtn.className = "renbtn"
				renameBtn.innerHTML = "R."
			
			let closeM = document.createElement('div')
				closeM.className = "closeMark"
				closeM.innerHTML = "<img src = 'files/x_small.png' class = 'rem' height='32' width='32'>"
							
				players.push(player)
				closeMarks.push(closeM)
				Rbtn.push(renameBtn)
				arrinfo.push(playerinfo)
								
				players.map(player => console.log(player.name))
				
				}
				
				inputP.value = ''
			
			}
			
				init()
				handle()
				
	}
	
}

	//save game results function

let save = () =>  {
	
	for (let i = 0; i < players.length; i++) {
		
				arrinfo[i].name = players[i].name
				arrinfo[i].xcounter = players[i].xcounter
				arrinfo[i].ocounter = players[i].ocounter
				arrinfo[i].offcounter = players[i].offcounter
				arrinfo[i].games = players[i].games
				arrinfo[i].record = players[i].record
				arrinfo[i].recordo = players[i].recordo
				
	}
	
	localStorage.setItem('arrinfo', JSON.stringify(arrinfo))
}

	//load game results function

let load = () => {
	
	arrinfo = JSON.parse(localStorage.getItem('arrinfo'))
	
	console.log(JSON.stringify(arrinfo, null, 4))
	
	players.map(player => player.remove())
	players = []
	
	closeMarks.map(mark => mark.remove())
	closeMarks = []
	
	Rbtn.map(player => player.remove())
	Rbtn = []
	
	for (let i = 0; i < arrinfo.length; i++) {
		
		let player = document.createElement('div')
			player.className = "listP"
			
			player.name = arrinfo[i].name
			player.xcounter = arrinfo[i].xcounter
			player.ocounter = arrinfo[i].ocounter
			player.offcounter = arrinfo[i].offcounter
			player.games = arrinfo[i].games
			player.record = arrinfo[i].record
			player.recordo = arrinfo[i].recordo
			
		let renameBtn = document.createElement('div')
			renameBtn.className = "renbtn"
			renameBtn.innerHTML = "R."	
			
		let closeM = document.createElement('div')
			closeM.className = "closeMark";
			closeM.innerHTML = "<img src = 'files/x_small.png' class = 'rem' height='32' width='32'>"
			
									
		players.push(player)
		closeMarks.push(closeM)
		Rbtn.push(renameBtn)
			
		
	}
	
	addPlayer();
	
}

	//handling events in modal

function handle() {	

		players.map(player => 
			
				player.onmousedown = () => {
				cplr = players.indexOf(player)
				player.className = "listPnew"
				startContainer.style.display = "none"
				board()
				countersDisplay()
				nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}`	
				mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
				setTimeout(game, 500)
				newgame.flag = false
				return
				
			}
		)
		
		Rbtn.map(renameBtn => 
		
				renameBtn.onmousedown = () => {
				cplr = Rbtn.indexOf(renameBtn)
				startContainer.style.display = "flex"
				renamePlayer(cplr)
				console.log(cplr)
				init()
				return
				
			}
			
		)
		
		
		closeMarks.map(mark => {
			
				mark.onmousedown = () => {
					
						rem = closeMarks.indexOf(mark)
					
						players[rem].remove()
						closeMarks[rem].remove()
						Rbtn[rem].remove()
						players.splice(rem, 1)
						closeMarks.splice(rem, 1)
						arrinfo.splice(rem, 1)
						Rbtn.splice(rem, 1)
						init()
		}
	})
	
}

	//creating JSON file

let getFile = () => {

function encode(s) {
    let out = [];
    for ( let i = 0; i < s.length; i++ ) {
        out[i] = s.codePointAt(i)
    }
		
    return new Uint8Array(out)
}

let blob = new Blob( [encode(JSON.stringify(arrinfo))], {type: 'text/plain'})
	
	A.download = 'TicTacToeStatistics.json'
	A.textContent = "GET JSON FILE..."
	A.setAttribute( 'href', URL.createObjectURL( blob ) )
	   
}
    
	//renaming player function

let renamePlayer = (i) => {
	
	
	console.log(players[i].name)
	inputP.focus()
	inputP.placeholder = players[i].name + "..."
	
	window.onkeyup = keyup

	function keyup(e) {
		
	  if (e.keyCode === 13)   { 
	
			if (uniqueCheck(inputP.value)) {
				if (inputP.value === "") return
			
			players[i].name = inputP.value.toUpperCase()
			inputP.placeholder = "Player..."
		}
		inputP.value = ''
		
		addPlayer()
		
		init()
		
	  }
	  
	}

}



load()
init()
addPlayer()
    

	












