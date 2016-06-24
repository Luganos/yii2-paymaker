   
       var OnCopy = false;
       var copy;
       var SwitchState = 0; 
       var verbs = {
	               1: { infinitive : 'about',russian: 'о, про, относительно', status: '0'},
				   2: { infinitive : 'above',russian: 'выше;  свыше;  над;  наверху', status: '0'},
				   3: { infinitive : 'across',russian: 'поперек, через; на другой стороне', status: '0'},
				   4: { infinitive : 'after', russian: '1) после; <br> 2) за;', status: '0'},
				   5: { infinitive : 'against',russian: '1) против; <br> 2) об;', status: '0'},
				   6: { infinitive : 'along',russian: '1) вдоль, по; <br> 2) вместе;', status: '0'},
				   7: { infinitive : 'also',russian: 'также, тоже', status: '0'},
				   8: { infinitive : 'among',russian: 'среди', status: '0'},
				   9: { infinitive : 'and',russian: 'и; а', status: '0'},
				   10: { infinitive : 'around',russian: '1) вокруг; <br> 2) около;', status: '0'},
				   11: { infinitive : 'at last',russian: 'наконец', status: '0'},
				   12: { infinitive : 'at once',russian: 'сразу, тотчас', status: '0'},
				   13: { infinitive : 'at least',russian: 'по крайней мере', status: '0'},
				   14: { infinitive : 'because',russian: '1) потому что; <br> 2) из-за (of);', status: '0'},
				   15: { infinitive : 'before',russian: 'перед, до; раньше, прежде чем; до того как', status: '0'},
				   16: { infinitive : 'behind',russian: 'позади, за', status: '0'},
				   17: { infinitive : 'below', russian: 'ниже, внизу', status: '0'},
				   18: { infinitive : 'beside', russian: 'рядом', status: '0'},
				   19: { infinitive : 'besides',russian: 'кроме, помимо', status: '0'},
				   20: { infinitive : 'between',russian: 'между', status: '0'},
				   21: { infinitive : 'both...and',russian: 'как..., так и', status: '0'},
				   22: { infinitive : 'but',russian: '1) но; <br> 2) кроме;', status: '0'},
				   23: { infinitive : 'but for',russian: 'если бы не', status: '0'},
				   24: { infinitive : 'by',russian: '1) эквивалент творительного падежа; <br> 2) посредством, путем; <br> 3) (место) у, около, мимо;', status: '0'},
				   25: { infinitive : 'down',russian: 'вниз; вниз по', status: '0'},
				   26: { infinitive : 'for',russian: '1) для, ради, за; <br> 2) в течение;', status: '0'},
				   27: { infinitive : 'from',russian: '1)из; <br> 2) от, у;', status: '0'},
				   28: { infinitive : 'either...or',russian: 'или... или', status: '0'},
				   29: { infinitive : 'however',russian: 'однако(при наличии запятых), как бы ни(без запятых)', status: '0'},
				   30: { infinitive : 'in',russian: '1) (место) в; <br> 2) (время) через; в', status: '0'},
				   31: { infinitive : 'in case',russian: 'в случае, если', status: '0'},
				   32: { infinitive : 'in order to',russian: 'для того чтобы', status: '0'},
				   33: { infinitive : 'into',russian: 'в(на вопрос куда ?, во что ?)', status: '0'},
				   34: { infinitive : 'neither...nor',russian: 'ни... ни...', status: '0'},
				   35: { infinitive : 'of',russian: '1) эквивалент родит.падежа; <br> 2) из;', status: '0'},
				   36: { infinitive : 'of course',russian: 'конечно', status: '0'},
				   37: { infinitive : 'on', russian: '1) (место) на; <br> 2) (время) в; по, после; <br> 3) 0 , относительно;', status: '0'},
				   38: { infinitive : 'once',russian: '1) один раз, однажды; <br>2) когда-то;', status: '0'},
				   39: { infinitive : 'one',russian: '1) один, некий, какой-то;', status: '0'},
				   40: { infinitive : 'or',russian: 'или', status: '0'},
				   41: { infinitive : 'over',russian: '1) через, над;', status: '0'},
				   42: { infinitive : 'to be over',russian: 'окончиться', status: '0'},
				   43: { infinitive : 'provided',russian: 'при условии, что', status: '0'},
				   44: { infinitive : 'round',russian: '1) вокруг, за; <br> 2) кругом;', status: '0'},
				   45: { infinitive : 'since',russian: '1) с, с момента, с тех пор как; <br> 2) поскольку;', status: '0'},
				   46: { infinitive : 'so',russian: '1)так; <br> 2) также, тоже;', status: '0'},
				   47: { infinitive : 'so as, so that',russian: 'чтобы, с тем чтобы; так, чтобы', status: '0'},
				   48: { infinitive : 'still',russian: '1) все еще; <br> 2) но все же;', status: '0'},
				   49: { infinitive : 'than',russian: 'чем', status: '0'},
				   50: { infinitive : 'that',russian: '1) тот, та, то; это; <br>2) который, кто; <br>3)что;', status: '0'},
				   51: { infinitive : 'the...the',russian: 'чем ... тем', status: '0'},
				   52: { infinitive : 'though',russian: 'хотя', status: '0'},
				   53: { infinitive : 'through',russian: 'через, внутри, но, сквозь, насквозь', status: '0'},
				   54: { infinitive : 'to be through',russian: 'закончить(дело)', status: '0'},
				   55: { infinitive : 'throughout',russian: 'по всему, во всем', status: '0'},
				   56: { infinitive : 'thus',russian: '1) так, таким образом; <br>2) так, например;' , status: '0'},
				   57: { infinitive : 'till = until',russian: 'до; (до тех пор) пока не', status: '0'},
				   58: { infinitive : 'to',russian: 'I) эквивалент дательного падежа <br>2) к, в, на (на вопрос «куда?»)', status: '0'},
				   59: { infinitive : 'toward',russian: 'к, по направлению', status: '0'},
				   60: { infinitive : 'under',russian: '1) под; <br>2) при; <br>3) на основании;', status: '0'},
				   61: { infinitive : 'unless',russian: 'если... не', status: '0'},
				   62: { infinitive : 'up',russian: 'вверх; вверх по', status: '0'},
				   63: { infinitive : 'what',russian: '1) что; <br>2) то, что; <br>3)какой;', status: '0'},
				   64: { infinitive : 'whether',russian: 'ли (в косвенном вопросе)', status: '0'},
				   65: { infinitive : 'while',russian: '1) пока; <br>2)  несмотря на то, что; хотя; тогда как;', status: '0'},
				   66: { infinitive : 'with',russian: '1) эквивалент творит.падежа; <br>2) с, со;', status: '0'},
				   67: { infinitive : 'within',russian: '1) в пределах; <br>2) в течение;', status: '0'},
				   68: { infinitive : 'without',russian: 'без', status: '0'},
				   69: { infinitive : 'yet',russian: '1) все же, однако; <br>2) еще, все еще;', status: '0'},
				   70: { infinitive : 'not yet', russian: 'еще не', status: '0'},
				   71: { infinitive : 'something', russian: 'что-либо, что-нибудь, что-то', status: '0'},
				   72: { infinitive : 'anything', russian: 'что-либо, что-нибудь, что угодно', status: '0'},
				   73: { infinitive : 'everything', russian: 'всё', status: '0'},
				   74: { infinitive : 'nothing', russian: 'ничего, ничто', status: '0'},
				   75: { infinitive : 'somebody', russian: 'кто-то', status: '0'},
				   76: { infinitive : 'someone', russian: 'кто-либо', status: '0'},
				   77: { infinitive : 'anybody', russian: 'кто-нибудь', status: '0'},
				   78: { infinitive : 'everybody', russian: 'все, каждый человек', status: '0'},
				   79: { infinitive : 'nobody', russian: 'никто', status: '0'},
				   80: { infinitive : 'somewhere', russian: 'где-то, куда-то, куда-нибудь', status: '0'},
                   81: { infinitive : 'anywhere', russian: 'где-нибудь, куда-нибудь', status: '0'},
				   82: { infinitive : 'everywhere', russian: 'везде', status: '0'},
				   83: { infinitive : 'nowhere', russian: 'нигде', status: '0'}
	        };	   
   
$(function(){

     MainCase(SwitchState);
	 
});


//=======================================================================================================  
//It is main execute switch
   
   function MainCase(step)
   {
      var step;
       
      switch (step)
	  {
	     case 0:
		     writter();
	     break;
		 
		 case 1:
		     AssessAnswer(GetAnswers(), verbs);
		 break;
		 
		 default:;
	  }
   }
   
//=======================================================================================================  
// This function make clone of object
   
   function clone(obj) {
          if(obj == null || typeof(obj) != 'object')
		  {
              return obj;
          }			  
          var temp = new obj.constructor(); 
          for(var key in obj){
               temp[key] = clone(obj[key]);
          }			   
               return temp;
}

//========================================================================================================
//This function doing reading of answers

  function GetAnswers()
  {
  
    receive = [];
	var n;
  
    for (var i = 1; i < 84; i++)
    {  
        n = $('#name' + i).attr('value');		
		receive[n] = [];
		receive[n]['index'] = i;
		receive[n]['infinitive'] = $('#indefinit' + i).val();
	}
	 return receive;
  }
  
//=======================================================================================================
//This function doing assess answers

   function AssessAnswer(answer, verbs)
   {
      var answer;
	  var verbs;
	  
	  var header = ['<form action ="#">',  
	                     '<table class="table table-bordered" id = "verbs">',
                              '<thead>',
                                 '<tr>',
                                     '<th class="col-md-3">Служебное слово</th>',
							         '<th class="col-md-3">Перевод</th>',
                                 '</tr>',
                              '</thead>',
					           '<tbody>'
			      ];
				  
      header = header.join('');
	  
	  var row = '';
	  var ok = 0;
	  var NonOk = 0;
	  var absence = 0;
	  
	  for (var n = 1; n < 84; n++)
	  {
	  
	      if (verbs[answer[n]['index']].infinitive == answer[n]['infinitive'])
		  {
		      row += '<tr>';
              row += '<td style = "color:#00FF7F">'+answer[n]['infinitive']+'</td>';
		      row += '<td bgColor = "#00FF7F">'+verbs[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
			  ok++;
					 
		  }
		  else if (answer[n]['infinitive'] == '')
		  {
		      row += '<tr>';
              row += '<td style = "color:#6495ED">'+verbs[answer[n]['index']].infinitive+'</td>';
		      row += '<td bgColor = "#6495ED">'+verbs[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
		      absence++;
		  }
		  else
		  {
		      row += '<tr>';
			  
		      if (!(verbs[answer[n]['index']].infinitive == answer[n]['infinitive']))
			  {
			    
			      row += '<td style = "color:#FF6347"><span style = "text-decoration:line-through">'+answer[n]['infinitive']+'</span>&nbsp;';
				  row += '<span>'+verbs[answer[n]['index']].infinitive+'</span></td>';
				  
			  }
			  else
			  {
			  
			      row += '<td style = "color:#00FF7F">'+verbs[answer[n]['index']].infinitive+'</td>';
			  }
			  
			  row +='<td bgColor = "#FF6347">'+verbs[answer[n]['index']].russian+'</td';
			 
		      row += '</tr>';
		    
              NonOk++;			
		  }
	  
	  }
	
      row +='</tbody>';
      row +='</table>';
	  row +='</form>';
		
	  header += row;
	  
	  header += '<table class="table table-bordered" id = "answer">';
      header += '<thead>';
      header += '<tr>';
      header += '<th class="col-md-3">Всего</th>';
      header += '<th class="col-md-3">Правильно</th>';
      header += '<th class="col-md-3">Неправильно</th>';
	  header += '<th class="col-md-3">Пропущено</th>';
      header += '</tr>';
      header += '</thead>';
	  header +=	'<tbody>';
					   
	  header +='<td>83</td>';
	  header +='<td>'+ok+'</td>';
	  header +='<td>'+NonOk+'</td>';
	  header +='<td>'+absence+'</td>';
	  header +='</tr>';
      header +='</tbody>';
      header +='</table>';
		        				
	  
	  $("#verbs").remove();
	  $("#check-button").remove();
	  $(".row").after(header);
	  
   
   
   }

   
//=======================================================================================================
 //This function give out array with English service words

   function Contain(num, index)
   {
   
       var name = 'name';
	   var indefinit = 'indefinit';
	   
	   name += num.index;
	   indefinit += num.index;
   
       var body = [
	               '<tr id ="',name,'" value = "',index,'">',
                       '<td><input type="text" style align = "center" size ="10" id = "',indefinit,'"/></td>',
				       '<td>',num.russian,'</td>',
                   '</tr>'
                  ];	   
   
        return body.join('');
   }
   
//====================================================================================================
//This function make table of verbs   
   
   
   function OutArray(arr)
   {
     
     var arr;
	 var num;
	 var out = 0;
	 
	 if (!OnCopy)
	 {
	    OnCopy = true;
		copy = clone(arr);
	 }
	 
	 for( var verbs in copy)
	 {
	     num = 1 + Math.floor(Math.random() * (83 - 0));
		 
	     if (copy[num].status == '0' )
		 {
		     copy[num].status = '1';
			 copy[num].index = num;
			 return copy[num];
         }   
		 else 
         {
             for (var temp in copy)
			 {
			     num = 1 + Math.floor(Math.random() * (83 - 0));
				 
				 if (copy[num].status == '0' )
		         {
		             copy[num].status = '1';
					 copy[num].index = num;
			         return copy[num];
                 } 
			 }
         }		 
	 }
 }
 
 function writter()
 {

    var row = ['<form action ="#">',  
	             '<table class="table table-bordered" id = "verbs">',
                     '<thead>',
                        '<tr>',
                            '<th class="col-md-3">Служебное слово</th>',
							'<th class="col-md-3">Перевод</th>',
                        '</tr>',
                    '</thead>',
					'<tbody>'
			   ];
    row = row.join('');

    for (var i = 1; i < 84; i++)
	{
	
	
	    
	    row += Contain(OutArray(verbs), i);
	
	}
	
	row += '</tbody>';
    row += '</table>';
	row += '</form>';
		  
	row += '<div class = "pull-right" id = "check-button">';
    row += '<button class = "btn btn-primary" onclick ="MainCase(1)"; type="button">Check</button>';
    row += '</div>';
	
	$(".row").after(row);
 }
 

