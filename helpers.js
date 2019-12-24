	
	
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
							nextPlayerField.innerHTML = `${players[cplr].name} MOVE  ${counter + 1}`;
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
			
			
			if (winCheck()) {
				
				if (mark.check == "o") { 
										
					mark.innerHTML = "<img src = 'files/o.png' class = 'oo'>";
					
					nextPlayerField.innerHTML = "THE WINNER: " + players[cplr].name;
					
					countfields[4].innerHTML = "O WINS:  " + ++players[cplr].ocounter;
					
					
	
					}
					
				else if (mark.check == "x") {
											
					mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>";
					
					nextPlayerField.innerHTML = players[cplr].name + "  LOST";
															
					countfields[3].innerHTML = "X WINS:  " + ++players[cplr].xcounter;
					
					};
					
				setTimeout(winplay, 500);
				
				
				
				
				}; 
				
			
									
			
					
			// checking the standoff state and changing the game board 		
										
			if (!winCheck() && counter == 9) {
				mark.innerHTML = " ";	
				nextPlayerField.innerHTML = "STANDOFF";	
				players[cplr].offcounter++;
				mark.check = " ";
				[...cells].forEach(cell => cell.className = "boxoff");
				setTimeout(offplay, 500);
				
				
				
			};
			
	end = Date.now();
	
	countfields[1].innerHTML = "SPENT: " + timeMove(end - start);
	
	if ((end - start) < players[cplr].record) players[cplr].record = end - start;
	recordo = end - start;
	if (mark.check == "o") players[cplr].recordo = recordo;
	
	countersDisplay();
};

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

	
	// functions used for delay	in setTimeout	
	
function winplay() {winsound.play()};
function offplay() {offsound.play()};
function randomcheck () {ra (cells)};

	//checking for doubles in players' names

function uniqueCheck(value) {
	
	for (let i = 0; i < players.length; i++) {
		
		if (value.toUpperCase() == players[i].name) {
			alert("Existing name, try another one...");
			return false;
		};
				
		
	};
	return true;
};

function timefield() {
	
	let time = new Date();
	countfields[2].innerHTML = 
	"TIME:" + (new Date().toLocaleTimeString());
	if (time - start >= 30000) {
		
			
			
			};
	};

function timeMove(time) {
		
	let minutes = Math.floor((time) / 1000);
	let seconds = ((time) % 1000).toFixed(0);
		seconds = (seconds / 10).toFixed(0);
	let str = minutes
		+ ":" 
		+ (seconds < 10 ? '0' : '') 
		+ seconds
		+ "s.";
		
		return str;
	
	};