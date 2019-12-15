	
	/* by grebennikovalex */

	'use strict'
	
function logic() {
	
	for (let i = 0; i < cells.length; i++) {
		
		// rows
	
		if (cells[0].num + cells[1].num + cells[2].num == 2) {
				if (cells[0].num == 0) {putX(0); winFill();}
				else if (cells[1].num == 0) {putX(1); winFill();}
				else if (cells[2].num == 0) {putX(2); winFill();}
				return true;
		}
		else if (cells[3].num + cells[4].num + cells[5].num == 2) {
				if (cells[3].num == 0) {putX(3); winFill();}
				else if (cells[4].num == 0) {putX(4); winFill();}
				else if (cells[5].num == 0) {putX(5); winFill();}
				return true;
		}				
		else if (cells[6].num + cells[7].num + cells[8].num == 2) {
				if (cells[6].num == 0) {putX(6); winFill();}
				else if (cells[7].num == 0) {putX(7); winFill();}
				else if (cells[8].num == 0) {putX(8); winFill();}
				return true;
		} 
		
		// columns
				
		else if (cells[0].num + cells[3].num + cells[6].num == 2) {
		        if (cells[0].num == 0) {putX(0); winFill();}
				else if (cells[3].num == 0) {putX(3); winFill();}
				else if (cells[6].num == 0) {putX(6); winFill();}
				return true;
		}
		else if (cells[1].num + cells[4].num + cells[7].num == 2) {
				if (cells[1].num == 0) {putX(1); winFill();}
				else if (cells[4].num == 0) {putX(4); winFill();}
				else if (cells[7].num == 0) {putX(7); winFill();}
				return true;
		}
		else if (cells[2].num + cells[5].num + cells[8].num == 2) {
				if (cells[2].num == 0) {putX(2); winFill();}
				else if (cells[5].num == 0) {putX(5); winFill();}
				else if (cells[8].num == 0) {putX(8); winFill();}
				return true;
		}
		
		// diagonals
				
		else if (cells[0].num + cells[4].num + cells[8].num == 2) {
				if (cells[0].num == 0) {putX(0); winFill();}
				else if (cells[4].num == 0) {putX(4); winFill();}
				else if (cells[8].num == 0) {putX(8); winFill();}
				return true;
		}
		else if (cells[2].num + cells[4].num + cells[6].num == 2) {
				if (cells[2].num == 0) {putX(2); winFill();}
				else if (cells[4].num == 0) {putX(4); winFill();}
				else if (cells[6].num == 0) {putX(6); winFill();}
				return true;
		};
		
		
		
	};	
	
	// checking for O
	
	for (let i = 0; i < cells.length; i++) {
		
		// rows
	
		if (cells[0].num + cells[1].num + cells[2].num == 6) {
				if 		(cells[0].num == 0) {putX(0); if (winCheck()) winFill()}
				else if (cells[1].num == 0) {putX(1); if (winCheck()) winFill()}
				else if (cells[2].num == 0) {putX(2); if (winCheck()) winFill()}
				
		}
		else if (cells[3].num + cells[4].num + cells[5].num == 6) {
				if 		(cells[3].num == 0) {putX(3); if (winCheck()) winFill()}
				else if (cells[4].num == 0) {putX(4); if (winCheck()) winFill()}
				else if (cells[5].num == 0) {putX(5); if (winCheck()) winFill()}
				
		}				
		else if (cells[6].num + cells[7].num + cells[8].num == 6) {
				if 		(cells[6].num == 0) {putX(6); if (winCheck()) winFill()}
				else if (cells[7].num == 0) {putX(7); if (winCheck()) winFill()}
				else if (cells[8].num == 0) {putX(8); if (winCheck()) winFill()}
				
		} 
		
		// columns
				
		else if (cells[0].num + cells[3].num + cells[6].num == 6) {
		        if 		(cells[0].num == 0) {putX(0); if (winCheck()) winFill()}
				else if (cells[3].num == 0) {putX(3); if (winCheck()) winFill()}
				else if (cells[6].num == 0) {putX(6); if (winCheck()) winFill()}
				return true;
		}
		else if (cells[1].num + cells[4].num + cells[7].num == 6) {
				if 		(cells[1].num == 0) {putX(1); if (winCheck()) winFill()}
				else if (cells[4].num == 0) {putX(4); if (winCheck()) winFill()}
				else if (cells[7].num == 0) {putX(7); if (winCheck()) winFill()}
				return true;
		}
		else if (cells[2].num + cells[5].num + cells[8].num == 6) {
				if 		(cells[2].num == 0) {putX(2); if (winCheck()) winFill()}
				else if (cells[5].num == 0) {putX(5); if (winCheck()) winFill()}
				else if (cells[8].num == 0) {putX(8); if (winCheck()) winFill()}
				return true;
		}
		
		// diagonals
				
		else if (cells[0].num + cells[4].num + cells[8].num == 6) {
				if 		(cells[0].num == 0) {putX(0); if (winCheck()) winFill()}
				else if (cells[4].num == 0) {putX(4); if (winCheck()) winFill()}
				else if (cells[8].num == 0) {putX(8); if (winCheck()) winFill()}
				return true;
		}
		else if (cells[2].num + cells[4].num + cells[6].num == 6) {
				if 		(cells[2].num == 0) {putX(2); if (winCheck()) winFill()}
				else if (cells[4].num == 0) {putX(4); if (winCheck()) winFill()}
				else if (cells[6].num == 0) {putX(6); if (winCheck()) winFill()}
				return true;
		}
		
		else {
				ra(cells);	
				return true;	
		};
		
	};	
	
	
	
	
};