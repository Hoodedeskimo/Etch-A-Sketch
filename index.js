$(document).ready(function(){

			
	var createDivs = function(rows, columns){
		var div  = "<div class='square'></div";
		var rowsCount = 0;
		var columnsCount = 0;
		

		for(i=0; i< rows;i++){
			for (j=1; j<columns;j++){
				$('.container').append(div);
				}
			$('.container').append(div);
			$('.container').append("<br>");
			}	
		}

		var randomColour = function(){
			var r = Math.floor(Math.random()*255+1).toString;
			var g = Math.floor(Math.random()*255+1).toString;
			var b = Math.floor(Math.random()*255+1).toString;
			return '#'+Math.floor(Math.random()*16777215).toString(16);
	}

	var changeColour = function(){
		$('.square').hover(function(){

			$(this).css('background-color', randomColour());
		},function(){
			//$(this).css("background-color","black");
		});
	}

	var button = function(){
		$('body').append("<button type='button'>Create New!</button>");
	}

	var createNew = function(){
		$('button').click(function(){
			var rows = prompt("Please enter the amount of Rows you want");
			var columns = prompt("please enter the amount of Columns you want");
			$('.container').empty();
			createDivs(rows,columns);
			changeColour();
		});
	}

	


	createDivs(4,4);
	changeColour();
	button();
	createNew();

});