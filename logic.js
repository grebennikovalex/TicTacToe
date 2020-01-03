	/* by grebennikovalex */
  
	//function checks where to put an "X" and calculates winner state

function logic() {
	
	for (let i = 0; i < cells.length; i++) {
		
		//checking for winner "O"
		
		if (cells[0].num + cells[1].num + cells[2].num === 15) {
				mark.check = "o"	
				winFill(0,1,2)
				return
		}
		
		if (cells[3].num + cells[4].num + cells[5].num === 15) {
				mark.check = "o"	
				winFill(3,4,5)
				return
		}
		
		if (cells[6].num + cells[7].num + cells[8].num === 15) {
				mark.check = "o"	
				winFill(6,7,8)
				return
		}
		
		if (cells[0].num + cells[3].num + cells[6].num === 15) {
				mark.check = "o"	
				winFill(0,3,6)
				return
		}
		
		if (cells[1].num + cells[4].num + cells[7].num === 15) {
				mark.check = "o"	
				winFill(1,4,7)
				return
		}
		
		if (cells[2].num + cells[5].num + cells[8].num === 15) {
				mark.check = "o"	
				winFill(2,5,8)
				return
		}
		
		if (cells[0].num + cells[4].num + cells[8].num === 15) {
				mark.check = "o"	
				winFill(0,4,8)
				return
		}
		
		if (cells[2].num + cells[4].num + cells[6].num === 15) {
				mark.check = "o"	
				winFill(2,4,6)
				return
		}
		
		//checking for winner "X"
		
		// rows
	
		else if (cells[0].num + cells[1].num + cells[2].num === 2) {
				if (cells[0].num === 0) putX(0, true)
				else if (cells[1].num === 0) putX(1, true)
				else if (cells[2].num === 0) putX(2, true)
				mark.check = "x"	
				winFill(0,1,2)
				return
		}
		
		else if (cells[3].num + cells[4].num + cells[5].num === 2) {
				if (cells[3].num === 0) putX(3, true)
				else if (cells[4].num === 0) putX(4, true)
				else if (cells[5].num === 0) putX(5, true)
				mark.check = "x"	
				winFill(3,4,5)
				return
		}

		else if (cells[6].num + cells[7].num + cells[8].num === 2) {
				if (cells[6].num === 0) putX(6, true)
				else if (cells[7].num === 0) putX(7, true)
				else if (cells[8].num === 0) putX(8, true)
				mark.check = "x"	
				winFill(6,7,8)
				return
		} 
				
		// columns
				
		else if (cells[0].num + cells[3].num + cells[6].num === 2) {
		        if (cells[0].num === 0) putX(0, true)
				else if (cells[3].num === 0) putX(3, true)
				else if (cells[6].num === 0) putX(6, true)
				mark.check = "x"	
				winFill(0,3,6)
				return
		}
						
		else if (cells[1].num + cells[4].num + cells[7].num === 2) {
				if (cells[1].num === 0) putX(1, true)
				else if (cells[4].num === 0) putX(4, true)
				else if (cells[7].num === 0) putX(7, true)
				mark.check = "x"	
				winFill(1,4,7)
				return
		}
		
		else if (cells[2].num + cells[5].num + cells[8].num === 2) {
				if (cells[2].num === 0) putX(2, true) 
				else if (cells[5].num === 0) putX(5, true) 
				else if (cells[8].num === 0) putX(8, true)
				mark.check = "x"	
				winFill(2,5,8)
				return
		}
		
		// diagonals
				
		else if (cells[0].num + cells[4].num + cells[8].num === 2) {
				if (cells[0].num === 0) putX(0, true)
				else if (cells[4].num === 0) putX(4, true)
				else if (cells[8].num === 0) putX(8, true)
				mark.check = "x"	
				winFill(0,4,8)
				return
		}
				
		else if (cells[2].num + cells[4].num + cells[6].num === 2) {
				if (cells[2].num === 0) putX(2, true)
				else if (cells[4].num === 0) putX(4, true)
				else if (cells[6].num === 0) putX(6, true)
				mark.check = "x"	
				winFill(2,4,6)
				return
		}
		
		// checking for "O"
		
		// rows
	
		if (cells[0].num + cells[1].num + cells[2].num === 10) {
				if 		(cells[0].num === 0) putX(0, false)
				else if (cells[1].num === 0) putX(1, false)
				else if (cells[2].num === 0) putX(2, false)
				return
		}
				
		
		else if (cells[3].num + cells[4].num + cells[5].num === 10) {
				if 		(cells[3].num === 0) putX(3, false)
				else if (cells[4].num === 0) putX(4, false)
				else if (cells[5].num === 0) putX(5, false)
				return
		}		
		
		
		else if (cells[6].num + cells[7].num + cells[8].num === 10) {
				if 		(cells[6].num === 0) putX(6, false)
				else if (cells[7].num === 0) putX(7, false)
				else if (cells[8].num === 0) putX(8, false)
				return
		} 
		
		
		// columns
				
		else if (cells[0].num + cells[3].num + cells[6].num === 10) {
		        if 		(cells[0].num === 0) putX(0, false)
				else if (cells[3].num === 0) putX(3, false)
				else if (cells[6].num === 0) putX(6, false)
				return	
		}
		
		
		else if (cells[1].num + cells[4].num + cells[7].num === 10) {
				if 		(cells[1].num === 0) putX(1, false)
				else if (cells[4].num === 0) putX(4, false)
				else if (cells[7].num === 0) putX(7, false)
				return	
		}
		
		
		else if (cells[2].num + cells[5].num + cells[8].num === 10) {
				if 		(cells[2].num === 0) putX(2, false)
				else if (cells[5].num === 0) putX(5, false)
				else if (cells[8].num === 0) putX(8, false)
				return
		}
				
		
		// diagonals
				
		else if (cells[0].num + cells[4].num + cells[8].num === 10) {
				if 		(cells[0].num === 0) putX(0, false)
				else if (cells[4].num === 0) putX(4, false)
				else if (cells[8].num === 0) putX(8, false)
				return
		}
		

		
		else if (cells[2].num + cells[4].num + cells[6].num === 10) {
				if 		(cells[2].num === 0) putX(2, false)
				else if (cells[4].num === 0) putX(4, false)
				else if (cells[6].num === 0) putX(6, false)
				return
		}
				
	}
	
	ra(cells) 	
	
}