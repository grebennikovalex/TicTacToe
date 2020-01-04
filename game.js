	 /* by grebennikovalex */
	
	// the game itself	
	
function game() {
	
mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
countfields[0].innerHTML = "GAME:  " + ++players[cplr].games
playerField.innerHTML = "PLAYER:  " + "<strong>" + players[cplr].name + "</strong>" + ": FOOL: "
playerField.append(checkFool)
//if(checkFool.checked === true) fool = true
start = Date.now()
mark.check = " "
nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}`


ra(cells)
						
	// changing the state of clicked cell
	
cells.map(cell => {
			
				cell.onmousedown = () => {
									
					// checking the clicked cell for respond state
					
				if (!cell.flag && !cell.delayflag)  {		
					
							counter++; 
							nextPlayerField.innerHTML = `LOGIC MOVE  ${counter + 1}`	
								 
									// placing the O in the corresponding cell
									cell.innerHTML = "<img src = 'files/o.png' class = 'oo'>"
									
									// flagging the cell for not responding onclick
									cell.flag = true
									
									// changing the state to marked with O
									cell.check =  "o"
									
									//number for logic
									cell.num =  5
									
									// the next player is "X"									
									mark.innerHTML = "<img src = 'files/x.png' class = 'xx'>"
									
									cell.className = "boxchecked"
									
									// playing sound
									popsound.play()
														
							setTimeout(logic, 500)
							
								
							// flagging all cells for not responding onckick while delay
							cells.map(cell => cell.delayflag = true)
							
						console.log(counter)	
						
					}
					
			}		
	})

	
}								