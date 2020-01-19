	 /* by grebennikovalex */
	 
	 //helper functions file
	
	// random X function
	
const ra = (cells) => { 

let flag = true;
	
	// iterating the array while the random number finds an empty cell
	
	while (flag) {

		let cell = Math.floor(Math.random() * 9)
		
				for (let i = 0; i < cells.length; i++) {
					
						if (cells[cell].check === " ") {
							
							putX(cell, false)
							
							flag = false
													
						}
				}
		}
}	

	// an X insertion
	//"bool" is for distingush clear standoff state from "X" winner state on the very last move
	
function putX(cell, bool){ 
	
				cells[cell].innerHTML = "<img src = 'files/x.png' class = 'xx'>"
				popsound.play()
				counter++
				nextPlayerField.innerHTML = `${players[cplr].name} MOVE  ${counter + 1}`
				cells[cell].flag = true
				cells[cell].check =  "x"
				cells[cell].num =  1
				mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>"
				cells[cell].className = "boxchecked"
				cells.map(cell => cell.delayflag = false)
				console.log(counter)
				if (counter === 9 && !bool) standOff()
				
}



    // function for display the winner state of the game board	
	
const winFill = (a, b, c) =>	{
	
				// adding non-respond state for all the cells
				
			cells.map(cell => cell.flag = true)
			mark.className = "redmark"
			
				//changing color in corresponding cells
			
				cells[a].className = "boxwin";
				cells[b].className = "boxwin";
				cells[c].className = "boxwin";
				
				
				if (mark.check === "o") { 
					winplay()					
					mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>"
					nextPlayerField.innerHTML = "THE WINNER: " + players[cplr].name
					countfields[4].innerHTML = "O WINS:  " + ++players[cplr].ocounter
					
					}
					
				else if (mark.check === "x") {
					setTimeout(winplay, 500)						
					mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
					nextPlayerField.innerHTML = players[cplr].name + "  LOST"
					countfields[3].innerHTML = "X WINS:  " + ++players[cplr].xcounter
					
					}
					
					//calculating the time of move
					
				end = Date.now()
	
				countfields[1].innerHTML = "SPENT: " + timeMove(end - start)
				
				if ((end - start) < players[cplr].record) players[cplr].record = end - start
				if (mark.check === "o" && (end - start) < players[cplr].recordo) players[cplr].recordo = end - start
					
				countersDisplay()	
				newgame.flag = true
				
				return
}	
				
				
					
	// checking the standoff state and changing the game board 		
										
const standOff = () => {
				mark.innerHTML = " "	
				nextPlayerField.innerHTML = "STANDOFF"
				players[cplr].offcounter++
				mark.check = " "
				cells.map(cell => cell.className = "boxoff")
				setTimeout(offplay, 500)
				
				end = Date.now()
	
				countfields[1].innerHTML = "SPENT: " + timeMove(end - start)
				
				countersDisplay()	
				newgame.flag = true
				
				return
				
}
			
	


	// sound constructor
	
function sound(src) {
	this.sound = document.createElement("audio")
	this.sound.src = src
	this.sound.setAttribute("preload", "auto")
	this.sound.setAttribute("controls", "none")
	this.sound.style.display = "none"
	document.body.appendChild(this.sound)
	this.play = function(){
    this.sound.play()
  }
	this.stop = function(){
    this.sound.pause()
  }
}

	
	// setTimeout sound wrappers
	
function winplay() {winsound.play()}
function offplay() {offsound.play()}


	//checking for doubles in players' names

function uniqueCheck(value) {
	
	for (let i = 0; i < players.length; i++) {
		
		if (value.toUpperCase() === players[i].name) {
			alert("Existing name, try another one...")
			return false
		}
				
		
	}
	return true
}

	//clock

function timefield() {
	
	let time = new Date()
	countfields[2].innerHTML = 
	"TIME:" + (new Date().toLocaleTimeString())
}

	//time of a game

function timeMove(time) {
		
	let minutes = Math.floor((time) / 1000)
	let seconds = ((time) % 1000).toFixed(0)
		seconds = (seconds / 10).toFixed(0)
	let str = minutes
		+ ":" 
		+ (seconds < 10 ? '0' : '') 
		+ seconds
		+ "s."
		
	return str
	
}