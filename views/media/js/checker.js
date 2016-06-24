window.onload = function() {

	/**
	* Written by Lugano
	* Script for check skill understanding of English grammar
	*
	*/
	

	var dragElements = document.querySelectorAll('#drag-elements li');
	var dropTarget = document.querySelectorAll('.drop-target');
	var droppedElements = document.querySelectorAll('.dropped-elements');
	var elementDragged = null;
	var elementSource = null;
	var finish = false;
	var show = false;
	var browser = navigator.userAgent.indexOf('Trident') != -1 && navigator.userAgent.indexOf('MSIE') == -1;
	
	
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}	
	
function elementsForDrag(){
	for (var i = 0; i < dragElements.length; i++) {

		// Event Listener for when the drag interaction starts.
		dragElements[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text', this.innerHTML);
			elementDragged = null;
			elementDragged = this;
			elementSource = this.parentNode.id;
		});

		// Event Listener for when the drag interaction finishes.
		dragElements[i].addEventListener('dragend', function(e) {
			elementDragged = null;
		});
	}
}

function mainOrigin(){
	
	         var origin = document.querySelector('#drag-elements');
			 
		     // Event Listener for when the dragged element is over the drop zone.
	         origin.addEventListener('dragover', function(e) {
		            if (e.preventDefault) {
			            e.preventDefault();
		            }

		             e.dataTransfer.dropEffect = 'move';

		             return false;
	        });
		

	        // Event Listener for when the dragged element dropped in the drop zone.
	        origin.addEventListener('drop', function(event) {
				
					var place = document.querySelector('#drag-elements');
					
			        if (place.childNodes[0] | elementDragged == null){
					  
					     event.preventDefault();
                         return false;
					} 
 
		            if (event.preventDefault){ 
		                event.preventDefault(); 
		            }
  	                if (event.stopPropagation){ 
		                event.stopPropagation(); 
		            }
		
		     // Remove the element from the list.
			
			 elementDragged.parentNode.removeChild(elementDragged);
		     place.appendChild(elementDragged);

		     return false;
	    });
	
	
	
	
}

function targetForDrop(){	
	for (var n = 0; n < dropTarget.length; n++) {
	
	    	// Event Listener for when the dragged element is over the drop zone.
	         dropTarget[n].addEventListener('dragover', function(e) {
		            if (e.preventDefault) {
			            e.preventDefault();
		            }

		             e.dataTransfer.dropEffect = 'move';

		             return false;
	        });
			
			// Event Listener for when the dragged element leaves the drop zone.
	        dropTarget[n].addEventListener('dragleave', function(e) {
				
				document.getElementById(this.id).style.backgroundColor = "#ffffff";
	       });

	        // Event Listener for when the dragged element dropped in the drop zone.
	        dropTarget[n].addEventListener('drop', function(event) {
				
					var place = this.querySelector('.dropped-elements');
			        var parent = place.parentNode.id;
                    
					
					
				    if (place.childNodes[0]){
					     document.getElementById(parent).style.backgroundColor = "#87CEFA";
					     event.preventDefault();
                         return false;
					}
					
					if (elementDragged == null){
					  
					     event.preventDefault();
						 return false;
					}
					
		            if (event.preventDefault){ 
		                event.preventDefault(); 
		            }
  	                if (event.stopPropagation){ 
		                event.stopPropagation(); 
		            }
					
		     // Remove the element from the list and change colour for the drop zone.
			 document.getElementById(parent).style.backgroundColor = "#87CEFA";
			 elementDragged.parentNode.removeChild(elementDragged);
		     place.appendChild(elementDragged);
			 
			 //Only for IE browser
			 if(browser){
			    place.childNodes[0].style.marginLeft = "-40px";
             }
		    return false;
	    });
	
	}
}

function getAnswers(answers){

     var answers = new Array();
   	 var rawAnswers = document.querySelectorAll('.dropped-elements');
	   
	 for(var n = 0; n < rawAnswers.length; n++){
		
		 var temp = rawAnswers[n];
         var text = getTextFromNode(temp, false);
		
		 if (text) {
			
			 answers[n] = text;
		 } else{
			
			  answers[n] = false;
		 }
		
		
	 }

   return answers;
}

function checkAnswer(mode){

       var mode;
	   var checkAnswer = document.querySelector('#check-answer');
	   var answers = new Array();
	   
	   if(mode){
	      valuationAnswer(rightAnswers, getAnswers());
	   }

	   
	   //Hang event click on button
       checkAnswer.addEventListener("click",function(){
	               
				   if(!finish){
                      valuationAnswer(rightAnswers, getAnswers());
	               }
	   });


}

function getTextFromNode(node, addSpaces) {
    var i, result, text, child;
    result = '';
    for (i = 0; i < node.childNodes.length; i++) {
        child = node.childNodes[i];
        text = null;
        if (child.nodeType === 1) {
            text = getTextFromNode(child, addSpaces);
        } else if (child.nodeType === 3) {
            text = child.nodeValue;
        }

        if (text) {
            if (addSpaces && /^\S/.test(text)){
				text = ' ' + text;
                result += text;
			} else if(!addSpaces && /^\S/.test(text)){
			   
			   result += text;
			}
        }
    }
    return result;
}

function valuationAnswer(rightAnswers, gotAnswers){

   var rightAnswers;
   var gotAnswers;
   var placeForValuation = document.querySelectorAll('.text-question');

   for(var n = 0; n < rightAnswers.length; n++){
    	  
	  var str = n + '';
	  str = 'valuation' + ' ' + str;
	  
	  var childPlace =  document.getElementById(str);
	  var text = '';
	  if(rightAnswers[n] == gotAnswers[n]){
	  
	      childPlace.className = 'right-answer';
		  text = 'Right!';
		  childPlace.textContent = text;
	  } else{
	  
	      childPlace.className = 'error-answer';
		  text = 'Mistake!'
		  childPlace.textContent = text;
	  }
   
      
   
   }

}

function finishAnswer(){

    
        var finishAnswer = document.querySelector('#finish-answer');

	
	    //Hang event click on button
        finishAnswer.addEventListener("click",function(){
		
	          if(!finish){
	             checkAnswer(true);
		         document.getElementById('show-answer').className = "btn btn-primary active";
	             document.getElementById('finish-answer').className = "btn btn-primary disabled";
				 document.getElementById('check-answer').className = "btn btn-primary disabled";
				 finish = true;
			  }
	    });

	
}


function showAnswers(){

   
       var showAnswers = document.querySelector('#show-answer');
   
   	   //Hook event click on button
       showAnswers.addEventListener("click",function(){
	
	      if(!show && finish){
		  
		     var placeForRightAnswers = document.querySelectorAll('.place-for-answers');
			 
			 for(var n = 0; n < placeForRightAnswers.length; n++){
    	  
	             var str = n + '';
	             str = 'show-right-answer' + ' ' + str;
	  
	             var childPlace =  document.getElementById(str);
	             var text = showRightAnswers[n];
				 
				  childPlace.className = 'show-right-answer';
				  childPlace.textContent = text;
				 
			 }
		     document.getElementById('show-answer').className = "btn btn-primary disabled";
			 show = true;
			 
		  }
	   });
	
}

function startAgain(){

   var startAgain = document.querySelector('#start-again');
   
   	//Hook event click on button
    startAgain.addEventListener("click",function(){
	
	       location.reload(true);
	
	});
}


    //Appoint elements for drag
	elementsForDrag();
	
	//Appoint elements for target
	targetForDrop();
	
	//Appoint element as origin of answer
	mainOrigin();
	
	//Hook action on button "Check"
	checkAnswer(false);
	
	//Hook action on button "Finish"
	finishAnswer();
	
	//Hook action on button "Show answers"
	showAnswers();
	
	//Hook action on button "Start again"
	startAgain();
	
};

