   
       var OnCopy = false;
       var copy;
       var SwitchState = 0; 
       var verbs = {
	               1: { infinitive : 'awake', past: 'awoke', particle: 'awoke', russian: 'будить, проснуться', status: '0'},
				   2: { infinitive : 'be', past: 'was, were', particle: 'been', russian: 'быть', status: '0'},
				   3: { infinitive : 'bear', past: 'bore', particle: 'born', russian: 'родить ', status: '0'},
				   4: { infinitive : 'beat', past: 'beat', particle: 'beaten', russian: 'бить', status: '0'},
				   5: { infinitive : 'become', past: 'became', particle: 'become', russian: 'становиться', status: '0'},
				   6: { infinitive : 'befall', past: 'befell', particle: 'befallen', russian: 'случиться', status: '0'},
				   7: { infinitive : 'begin', past: 'began', particle: 'begun', russian: 'начинать', status: '0'},
				   8: { infinitive : 'bend', past: 'bent', particle: 'bent', russian: 'гнуться', status: '0'},
				   9: { infinitive : 'beseech', past: 'besought', particle: 'besought', russian: 'умолять, упрашивать ', status: '0'},
				   10: { infinitive : 'bid', past: 'bade', particle: 'bidden', russian: 'предлагать(цену), умолять, просить', status: '0'},
				   11: { infinitive : 'bind', past: 'bound', particle: 'bound', russian: 'связать', status: '0'},
				   12: { infinitive : 'bite', past: 'bit', particle: 'bitten', russian: 'кусать', status: '0'},
				   13: { infinitive : 'bleed', past: 'bled', particle: 'bled', russian: 'кровоточить', status: '0'},
				   14: { infinitive : 'blow', past: 'blew', particle: 'blown', russian: 'дуть', status: '0'},
				   15: { infinitive : 'break', past: 'broke', particle: 'broken', russian: 'сломать', status: '0'},
				   16: { infinitive : 'breed', past: 'bred', particle: 'bred', russian: 'выращивать', status: '0'},
				   17: { infinitive : 'bring', past: 'brought', particle: 'brought', russian: 'принести', status: '0'},
				   18: { infinitive : 'build', past: 'built', particle: 'built', russian: 'строить', status: '0'},
				   19: { infinitive : 'burn', past: 'burned', particle: 'burned', russian: 'жечь, гореть', status: '0'},
				   20: { infinitive : 'burst', past: 'burst', particle: 'burst', russian: 'разразиться, взорваться ', status: '0'},
				   21: { infinitive : 'buy', past: 'bought', particle: 'bought', russian: 'купить', status: '0'},
				   22: { infinitive : 'cast', past: 'cast', particle: 'cast', russian: 'бросить, швырнуть, вышвырнуть', status: '0'},
				   23: { infinitive : 'catch', past: 'caught', particle: 'caught', russian: 'ловить, поймать', status: '0'},
				   24: { infinitive : 'choose', past: 'chose', particle: 'chosen', russian: 'выбирать', status: '0'},
				   25: { infinitive : 'cleave', past: 'clove', particle: 'cloven', russian: 'рассечь', status: '0'},
				   26: { infinitive : 'cling', past: 'clung', particle: 'clung', russian: 'цепляться; льнуть', status: '0'},
				   27: { infinitive : 'clothe', past: 'clothed', particle: 'clothed', russian: 'одеть', status: '0'},
				   28: { infinitive : 'come', past: 'came', particle: 'come', russian: 'прийти', status: '0'},
				   29: { infinitive : 'cost', past: 'cost', particle: 'cost', russian: 'стоить', status: '0'},
				   30: { infinitive : 'creep', past: 'crept', particle: 'crept', russian: 'ползти', status: '0'},
				   31: { infinitive : 'cut', past: 'cut', particle: 'cut', russian: 'резать', status: '0'},
				   32: { infinitive : 'dare', past: 'dared', particle: 'dared', russian: 'сметь', status: '0'},
				   33: { infinitive : 'deal', past: 'dealt', particle: 'dealt', russian: 'иметь дело', status: '0'},
				   34: { infinitive : 'dig', past: 'dug', particle: 'dug', russian: 'копать', status: '0'},
				   35: { infinitive : 'do', past: 'did', particle: 'done', russian: 'делать, выполнять', status: '0'},
				   36: { infinitive : 'draw', past: 'drew', particle: 'drawn', russian: 'тащить, рисовать', status: '0'},
				   37: { infinitive : 'dream', past: 'dreamt', particle: 'dreamt', russian: 'мечтать, видеть сны', status: '0'},
				   38: { infinitive : 'drink', past: 'drank', particle: 'drunk', russian: 'пить, выпить', status: '0'},
				   39: { infinitive : 'drive', past: 'drove', particle: 'driven', russian: 'гнать, ехать', status: '0'},
				   40: { infinitive : 'dwell', past: 'dwelt', particle: 'dwelt', russian: 'обитать, задерживаться (на чем-либо)', status: '0'},
				   41: { infinitive : 'eat', past: 'ate', particle: 'eaten', russian: 'кушать, есть', status: '0'},
				   42: { infinitive : 'fall', past: 'fell', particle: 'fallen', russian: 'падать', status: '0'},
				   43: { infinitive : 'feed', past: 'fed', particle: 'fed', russian: 'кормить', status: '0'},
				   44: { infinitive : 'feel', past: 'felt', particle: 'felt', russian: 'чувствовать', status: '0'},
				   45: { infinitive : 'fight', past: 'fought', particle: 'fought', russian: 'сражаться', status: '0'},
				   46: { infinitive : 'find', past: 'found', particle: 'found', russian: 'находить', status: '0'},
				   47: { infinitive : 'flee', past: 'fled', particle: 'fled', russian: 'бежать, спасаться', status: '0'},
				   48: { infinitive : 'fling', past: 'flung', particle: 'flung', russian: 'бросить', status: '0'},
				   49: { infinitive : 'fly', past: 'flew', particle: 'flown', russian: 'летать', status: '0'},
				   50: { infinitive : 'forbid', past: 'forbade', particle: 'forbidden', russian: 'запретить', status: '0'},
				   51: { infinitive : 'forget', past: 'forgot', particle: 'forgotten', russian: 'забыть', status: '0'},
				   52: { infinitive : 'forgive', past: 'forgave', particle: 'forgiven', russian: 'простить', status: '0'},
				   53: { infinitive : 'freeze', past: 'froze', particle: 'frozen', russian: 'замерзнуть, замораживать', status: '0'},
				   54: { infinitive : 'get', past: 'got', particle: 'got', russian: 'получить, становиться', status: '0'},
				   55: { infinitive : 'gild', past: 'gilt', particle: 'gilt', russian: 'позолотить', status: '0'},
				   56: { infinitive : 'give', past: 'gave', particle: 'given', russian: 'давать', status: '0'},
				   57: { infinitive : 'go', past: 'went', particle: 'gone', russian: 'идти, ехать', status: '0'},
				   58: { infinitive : 'grind', past: 'ground', particle: 'ground', russian: 'точить, молоть', status: '0'},
				   59: { infinitive : 'grow', past: 'grew', particle: 'grown', russian: 'расти', status: '0'},
				   60: { infinitive : 'hang', past: 'hung', particle: 'hung', russian: 'висеть, повесить', status: '0'},
				   61: { infinitive : 'have', past: 'had', particle: 'had', russian: 'иметь', status: '0'},
				   62: { infinitive : 'hear', past: 'heard', particle: 'heard', russian: 'слышать', status: '0'},
				   63: { infinitive : 'hew', past: 'hewed', particle: 'hewed', russian: 'рубить, тесать', status: '0'},
				   64: { infinitive : 'hide', past: 'hid', particle: 'hidden', russian: 'прятать(ся)', status: '0'},
				   65: { infinitive : 'hit', past: 'hit', particle: 'hit', russian: 'ударять, поражать', status: '0'},
				   66: { infinitive : 'hold', past: 'held', particle: 'held', russian: 'держать', status: '0'},
				   67: { infinitive : 'hurt', past: 'hurt', particle: 'hurt', russian: 'ранить, причинить боль', status: '0'},
				   68: { infinitive : 'keep', past: 'kept', particle: 'kept', russian: 'хранить', status: '0'},
				   69: { infinitive : 'kneel', past: 'knelt', particle: 'knelt', russian: 'становиться на колени', status: '0'},
				   70: { infinitive : 'knit', past: 'knit', particle: 'knitted', russian: 'вязать', status: '0'},
				   71: { infinitive : 'know', past: 'knew', particle: 'known', russian: 'знать', status: '0'},
				   72: { infinitive : 'lay', past: 'laid', particle: 'laid', russian: 'положить', status: '0'},
				   73: { infinitive : 'lead', past: 'led', particle: 'led', russian: 'вести', status: '0'},
				   74: { infinitive : 'lean', past: 'leaned', particle: 'leaned', russian: 'опереться, прислониться', status: '0'},
				   75: { infinitive : 'leap', past: 'leapt', particle: 'leapt', russian: 'прыгать', status: '0'},
				   76: { infinitive : 'learn', past: 'learned', particle: 'learned', russian: 'изучать, учиться', status: '0'},
				   77: { infinitive : 'leave', past: 'left', particle: 'left', russian: 'оставить', status: '0'},
				   78: { infinitive : 'lend', past: 'lent', particle: 'lent', russian: 'одолжить', status: '0'},
				   79: { infinitive : 'let', past: 'let', particle: 'let', russian: 'позволять, предпологать', status: '0'},
				   80: { infinitive : 'lie', past: 'lay', particle: 'lain', russian: 'лежать', status: '0'},
				   81: { infinitive : 'light', past: 'lit', particle: 'lit', russian: 'освещать, зажигаться, загораться', status: '0'},
				   82: { infinitive : 'lose', past: 'lost', particle: 'lost', russian: 'терять', status: '0'},
				   83: { infinitive : 'make', past: 'made', particle: 'made', russian: 'делать, производить, создавать', status: '0'},
				   84: { infinitive : 'mean', past: 'meant', particle: 'meant', russian: 'подразумевать', status: '0'},
				   85: { infinitive : 'meet', past: 'met', particle: 'met', russian: 'встретить', status: '0'},
				   86: { infinitive : 'mishear', past: 'misheard', particle: 'misheard', russian: 'ослышаться', status: '0'},
				   87: { infinitive : 'mislead', past: 'misled', particle: 'misled', russian: 'ввести в заблуждение', status: '0'},
				   88: { infinitive : 'mistake', past: 'mistook', particle: 'mistaken', russian: 'ошибаться, неправильно понимать', status: '0'},
				   89: { infinitive : 'mow', past: 'mowed', particle: 'mown', russian: 'косить', status: '0'},
				   90: { infinitive : 'pay', past: 'paid', particle: 'paid', russian: 'платить', status: '0'},
				   91: { infinitive : 'put', past: 'put', particle: 'put', russian: 'класть', status: '0'},
				   92: { infinitive : 'read', past: 'read', particle: 'read', russian: 'читать', status: '0'},
				   93: { infinitive : 'rebuild', past: 'rebuilt', particle: 'rebuilt', russian: 'перестроить', status: '0'},
				   94: { infinitive : 'ride', past: 'rode', particle: 'ridden', russian: 'ездить верхом', status: '0'},
				   95: { infinitive : 'ring', past: 'rang', particle: 'rung', russian: 'звонить', status: '0'},
				   96: { infinitive : 'rise', past: 'rose', particle: 'risen', russian: 'подняться', status: '0'},
				   97: { infinitive : 'run', past: 'ran', particle: 'run', russian: 'бежать, течь', status: '0'},
				   98: { infinitive : 'saw', past: 'sawed', particle: 'sawn', russian: 'пилить', status: '0'},
				   99: { infinitive : 'say', past: 'said', particle: 'said', russian: 'сказать, заявить', status: '0'},
				   100: { infinitive : 'see', past: 'saw', particle: 'seen', russian: 'видеть', status: '0'},
				   101: { infinitive : 'seek', past: 'sought', particle: 'sought', russian: 'искать', status: '0'},
				   102: { infinitive : 'sell', past: 'sold', particle: 'sold', russian: 'продавать', status: '0'},
				   103: { infinitive : 'send', past: 'sent', particle: 'sent', russian: 'посылать', status: '0'},
				   104: { infinitive : 'set', past: 'set', particle: 'set', russian: 'сажать, ставить, устанавливать, садиться', status: '0'},
				   105: { infinitive : 'sew', past: 'sewed', particle: 'sewn', russian: 'шить', status: '0'},
				   106: { infinitive : 'shake', past: 'shook', particle: 'shaken', russian: 'трясти', status: '0'},
				   107: { infinitive : 'shave', past: 'shaved', particle: 'shaved', russian: 'брить(ся)', status: '0'},
				   108: { infinitive : 'shear', past: 'sheared', particle: 'shorn', russian: 'стричь', status: '0'},
				   109: { infinitive : 'shed', past: 'shed', particle: 'shed', russian: 'проливать(слезы), сбрасывать', status: '0'},
				   110: { infinitive : 'shine', past: 'shone', particle: 'shone', russian: 'светить, сиять', status: '0'},
				   111: { infinitive : 'shoe', past: 'shod', particle: 'shod', russian: 'обувать, подковывать', status: '0'},
				   112: { infinitive : 'shoot', past: 'shot', particle: 'shot', russian: 'стрелять, давать побеги', status: '0'},
				   113: { infinitive : 'show', past: 'showed', particle: 'shown', russian: 'показывать', status: '0'},
				   114: { infinitive : 'shrink', past: 'shrank', particle: 'shrunk', russian: 'сжиматься, отпрянуть ', status: '0'},
				   115: { infinitive : 'shut', past: 'shut', particle: 'shut', russian: 'закрывать', status: '0'},
				   116: { infinitive : 'sing', past: 'sang', particle: 'sung', russian: 'петь', status: '0'},
				   117: { infinitive : 'sink', past: 'sunk', particle: 'sunk', russian: 'тонуть, погружаться', status: '0'},
				   118: { infinitive : 'sit', past: 'sat', particle: 'sat', russian: 'сидеть', status: '0'},
				   119: { infinitive : 'sleep', past: 'slept', particle: 'slept', russian: 'спать', status: '0'},
				   120: { infinitive : 'slide', past: 'slid', particle: 'slid', russian: 'скользить', status: '0'},
				   121: { infinitive : 'smell', past: 'smelt', particle: 'smelt', russian: 'пахнуть, нюхать', status: '0'},
				   122: { infinitive : 'sow', past: 'sowed', particle: 'sowed', russian: '(по)сеять', status: '0'},
				   123: { infinitive : 'speak', past: 'spoke', particle: 'spoken', russian: 'говорить', status: '0'},
				   124: { infinitive : 'speed', past: 'sped', particle: 'sped', russian: 'ускорять, спешить', status: '0'},
				   125: { infinitive : 'spell', past: 'spelt', particle: 'spelt', russian: 'писать или читать по буквам', status: '0'},
				   126: { infinitive : 'spend', past: 'spent', particle: 'spent', russian: 'тратить', status: '0'},
				   127: { infinitive : 'spill', past: 'spilt', particle: 'spilt', russian: 'пролить', status: '0'},
				   128: { infinitive : 'spin', past: 'span', particle: 'spun', russian: 'прясть', status: '0'},
				   129: { infinitive : 'spit', past: 'spat', particle: 'spat', russian: 'плевать', status: '0'},
				   130: { infinitive : 'split', past: 'split', particle: 'split', russian: 'расщепить(ся)', status: '0'},
				   131: { infinitive : 'spoil', past: 'spoilt', particle: 'spoilt', russian: 'портить', status: '0'},
				   132: { infinitive : 'spread', past: 'spread', particle: 'spread', russian: 'распространиться', status: '0'},
				   133: { infinitive : 'spring', past: 'sprang', particle: 'sprung', russian: 'вскочить; возникнуть', status: '0'},
				   134: { infinitive : 'stand', past: 'stood', particle: 'stood', russian: 'стоять', status: '0'},
				   135: { infinitive : 'steal', past: 'stole', particle: 'stolen', russian: 'украсть', status: '0'},
				   136: { infinitive : 'stick', past: 'stuck', particle: 'stuck', russian: 'уколоть; приклеить', status: '0'},
				   137: { infinitive : 'sting', past: 'stung', particle: 'stung', russian: 'ужалить', status: '0'},
				   138: { infinitive : 'stink', past: 'stank', particle: 'stunk', russian: 'вонять', status: '0'},
				   139: { infinitive : 'stride', past: 'strode', particle: 'stridden', russian: 'шагать', status: '0'},
				   140: { infinitive : 'strike', past: 'struck', particle: 'struck', russian: 'ударить', status: '0'},
				   141: { infinitive : 'string', past: 'strung', particle: 'strung', russian: 'нанизать; натянуть', status: '0'},
				   142: { infinitive : 'strive', past: 'strove', particle: 'striven', russian: 'стараться', status: '0'},
				   143: { infinitive : 'swear', past: 'swore', particle: 'sworn', russian: '(по)клясться', status: '0'},
				   144: { infinitive : 'sweep', past: 'swept', particle: 'swept', russian: 'мести; промчаться', status: '0'},
				   145: { infinitive : 'swell', past: 'swelled', particle: 'swollen', russian: 'вздуться', status: '0'},
				   146: { infinitive : 'swim', past: 'swam', particle: 'swum', russian: 'плыть', status: '0'},
				   147: { infinitive : 'swing', past: 'swung', particle: 'swung', russian: 'качаться', status: '0'},
				   148: { infinitive : 'take', past: 'took', particle: 'taken', russian: 'взять, брать', status: '0'},
				   149: { infinitive : 'teach', past: 'taught', particle: 'taught', russian: 'учить', status: '0'},
				   150: { infinitive : 'tear', past: 'tore', particle: 'torn', russian: 'рвать', status: '0'},
				   151: { infinitive : 'tell', past: 'told', particle: 'told', russian: 'рассказать, сказать', status: '0'},
				   152: { infinitive : 'think', past: 'thought', particle: 'thought', russian: 'думать', status: '0'},
				   153: { infinitive : 'throw', past: 'threw', particle: 'thrown', russian: 'кидать, бросать', status: '0'},
				   154: { infinitive : 'thrust', past: 'thrust', particle: 'thrust', russian: 'толкнуть, сунуть', status: '0'},
				   155: { infinitive : 'tread', past: 'trod', particle: 'trodden', russian: 'ступать', status: '0'},
				   156: { infinitive : 'unbend', past: 'unbent', particle: 'unbent', russian: 'разогнуть(ся)', status: '0'},
				   157: { infinitive : 'understand', past: 'understood', particle: 'understood', russian: 'понимать, постигать', status: '0'},
				   158: { infinitive : 'undertake', past: 'undertook', particle: 'undertaken', russian: 'предпринять', status: '0'},
				   159: { infinitive : 'upset', past: 'upset', particle: 'upset', russian: 'опрокинуться', status: '0'},
				   160: { infinitive : 'wake', past: 'woke', particle: 'woken', russian: 'просыпаться, будить', status: '0'},
				   161: { infinitive : 'wear', past: 'wore', particle: 'worn', russian: 'носить(одежду)', status: '0'},
				   162: { infinitive : 'weave', past: 'wove', particle: 'woven', russian: 'ткать', status: '0'},
				   163: { infinitive : 'weep', past: 'wept', particle: 'wept', russian: 'плакать', status: '0'},
				   164: { infinitive : 'win', past: 'won', particle: 'won', russian: 'выиграть', status: '0'},
				   165: { infinitive : 'wind', past: 'wound', particle: 'wound', russian: 'заводить(механизм)', status: '0'},
				   166: { infinitive : 'withdraw', past: 'withdrew', particle: 'withdrawn', russian: 'взять назад, отозвать', status: '0'},
				   167: { infinitive : 'write', past: 'wrote', particle: 'written', russian: 'писать', status: '0'}
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
  
    for (var i = 1; i < 168; i++)
    {  
        n = $('#name' + i).attr('value');		
		receive[n] = [];
		receive[n]['index'] = i;
		receive[n]['infinitive'] = $('#indefinit' + i).val();
		receive[n]['past'] = $('#past' + i).val();
		receive[n]['particle'] = $('#particle' + i).val();
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
                                     '<th class="col-md-3">Infinitive</th>',
                                     '<th class="col-md-3">Past</th>',
                                     '<th class="col-md-3">Particle</th>',
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
	  
	  for (var n = 1; n < 168; n++)
	  {
	  
	      if ( (verbs[answer[n]['index']].infinitive == answer[n]['infinitive']) & (verbs[answer[n]['index']].past == answer[n]['past']) & (verbs[answer[n]['index']].particle == answer[n]['particle']))
		  {
		      row += '<tr>';
              row += '<td style = "color:#00ff00">'+answer[n]['infinitive']+'</td>';
			  row += '<td style = "color:#00ff00">'+answer[n]['past']+'</td>';
			  row += '<td style = "color:#00ff00">'+answer[n]['particle']+'</td>';
		      row += '<td bgColor = "#00ff00">'+verbs[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
			  ok++;
					 
		  }
		  else if ((answer[n]['infinitive'] == '') & (answer[n]['past'] == '') & (answer[n]['particle'] == ''))
		  {
		      row += '<tr>';
              row += '<td style = "color:#0000ff">'+verbs[answer[n]['index']].infinitive+'</td>';
			  row += '<td style = "color:#0000ff">'+verbs[answer[n]['index']].past+'</td>';
			  row += '<td style = "color:#0000ff">'+verbs[answer[n]['index']].particle+'</td>';
		      row += '<td bgColor = "#0000ff">'+verbs[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
		      absence++;
		  }
		  else
		  {
		      row += '<tr>';
			  
		      if (!(verbs[answer[n]['index']].infinitive == answer[n]['infinitive']))
			  {
			    
			      row += '<td style = "color:#ff0000"><span style = "text-decoration:line-through">'+answer[n]['infinitive']+'</span>&nbsp;';
				  row += '<span>'+verbs[answer[n]['index']].infinitive+'</span></td>';
				  
			  }
			  else
			  {
			  
			      row += '<td style = "color:#00ff00">'+verbs[answer[n]['index']].infinitive+'</td>';
			  }
			  
			  if (!(verbs[answer[n]['index']].past == answer[n]['past']))
		  
			  {
			      row += '<td style = "color:#ff0000"><span style = "text-decoration:line-through">'+answer[n]['past']+'</span>&nbsp;';
				  row += '<span>'+verbs[answer[n]['index']].past+'</span></td>';
			  
			  }
			  else
			  {
			  
			     row += '<td style = "color:#00ff00">'+verbs[answer[n]['index']].past+'</td>';
			  }
			  
			  if (!(verbs[answer[n]['index']].particle == answer[n]['particle']))
		      {
			  
			     row += '<td style = "color:#ff0000"><span style = "text-decoration:line-through">'+answer[n]['particle']+'</span>&nbsp;';
				 row += '<span>'+verbs[answer[n]['index']].particle+'</span></td>';
				 
			  }
			  else
			  {
			  
			  
			     row += '<td style = "color:#00ff00">'+verbs[answer[n]['index']].particle+'</td>';
			  }
			  
			  row +='<td bgColor = "#ff0000">'+verbs[answer[n]['index']].russian+'</td';
			 
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
					   
	  header +='<td>167</td>';
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
 //This function give out array with English verbs 

   function Contain(num, index)
   {
   
       var name = 'name';
	   var indefinit = 'indefinit';
	   var past = 'past';
	   var particle = 'particle';
	   
	   name += num.index;
	   indefinit += num.index;
	   past += num.index;
	   particle += num.index;
   
       var body = [
	               '<tr id ="',name,'" value = "',index,'">',
                       '<td><input type="text"  size ="10" id = "',indefinit,'"/></td>',
                       '<td><input type="text"  size ="10" id = "',past,'"/></td>',
                       '<td><input type="text"  size ="10" id = "',particle,'"/></td>',
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
	     num = 1 + Math.floor(Math.random() * (167 - 0));
		 
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
			     num = 1 + Math.floor(Math.random() * (167 - 0));
				 
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
                            '<th class="col-md-3">Infinitive</th>',
                            '<th class="col-md-3">Past</th>',
                            '<th class="col-md-3">Particle</th>',
							'<th class="col-md-3">Перевод</th>',
                        '</tr>',
                    '</thead>',
					'<tbody>'
			   ];
    row = row.join('');

    for (var i = 1; i < 168; i++)
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
 

