	// the game itself	
	
function game() {
	

countfields[0].innerHTML = "GAME:  " + ++players[cplr].games;
playerField.innerHTML = "CURRENT PLAYER:  " + "<strong>" + players[cplr].name + "</strong>";
start = Date.now();
mark.check = " ";
nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}`;



setTimeout(randomcheck, 500);	

		
						
	// changing the state of clicked cell
	
cells.map(cell => {
			
				cell.onmousedown = () => {
									
					// checking the clicked cell for respond state
					
				if (!cell.flag && !cell.delayflag)  {		
					
							counter++; 
							nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}`;	
								 
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
							cells.map(cell => cell.delayflag = true);
						};
						
						console.log(counter);	
						console.log(winCheck());
						
					};	
					
			};		
	});

	
};								