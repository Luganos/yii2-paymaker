
       var OnCopy = false;
       var copy;
       var SwitchState = 0; 
	   var count;
       var verbs = {
	               1: { infinitive : 'ability',russian: 'n 1)способность, возможность делать что-либо;', status: '0'},
				   2: { infinitive : 'abroad',russian: 'adv 1)за границу, за границей;', status: '0'},
				   3: { infinitive : 'absence',russian: 'n 1)отсутствие, отлучка;<br> 2)недостаток;', status: '0'},
				   4: { infinitive : 'absent', russian: 'adj отсутствующий', status: '0'},
				   5: { infinitive : 'absolute',russian: 'adj 1)полный, абсолютный, безусловный;<br> 2)чистый;<br>3)полный;', status: '0'},
				   6: { infinitive : 'accept',russian: 'v 1)соглашаться;<br> 2)принимать;<br>3)допускать;', status: '0'},
				   7: { infinitive : 'accident',russian: 'n l)случайность;<br>2)авария;', status: '0'},
				   8: { infinitive : 'accord',russian: ' n l)одобрение, согласие;<br>v 1)соответствовать, гармонировать;', status: '0'},
				   9: { infinitive : 'account',russian: 'n l)отчет, сообщение, доклад;<br>v 2)рассматривать, считать;', status: '0'},
				   10: { infinitive : 'accuse',russian: 'v обвинять, винить', status: '0'},
				   11: { infinitive : 'accustom',russian: 'v приучать, привыкать', status: '0'},
				   12: { infinitive : 'ache',russian: 'n боль;<br>v 1)испытывать боль;<br>2)сострадать, переживать;', status: '0'},
				   13: { infinitive : 'acknowledge',russian: 'v 1)признавать, подтверждать;<br>2)узнавать, опознавать;', status: '0'},
				   14: { infinitive : 'acquire',russian: 'v приобретать, получать, обзаводиться;', status: '0'},
				   15: { infinitive : 'act',russian: 'n l)дело, действие;<br>v 1)действовать, делать;', status: '0'},
				   16: { infinitive : 'action',russian: 'n l)действие, поступок, дело, акция;', status: '0'},
				   17: { infinitive : 'active', russian: 'adj l)активный, деятельный, энергичный;<br>2)действующий, настоящий', status: '0'},
				   18: { infinitive : 'actual', russian: 'adj фактический, реальный, действующий;', status: '0'},
				   19: { infinitive : 'add',russian: 'v добавлять, прибавлять', status: '0'},
				   20: { infinitive : 'address',russian: '1. n 1)адрес;<br>2)речь;<br>2. v 1)адресовать, направлять по адресу;<br>2)обращаться;', status: '0'},
				   21: { infinitive : 'admirable',russian: 'adj восхитительный, превосходный', status: '0'},
				   22: { infinitive : 'admission',russian: 'n 1)вход, допуск, впуск, доступ; <br> 2)прием(в клуб, учебное заведение);', status: '0'},
				   23: { infinitive : 'admit',russian: 'v 1)впускать, допускать;<br>2)признавать, соглашаться;', status: '0'},
				   24: { infinitive : 'adopt',russian: 'v 1)усыновлять, удочерять; <br> 2)принимать, усваивать, заимствовать;', status: '0'},
				   25: { infinitive : 'advance',russian: '1. n 1)продвижение, наступление, прогресс; <br> 2)рост, повышение; <br>2. v 1)двигаться вперед, наступать; <br>2)содействовать;', status: '0'},
				   26: { infinitive : 'advantage',russian: 'n 1)преимущество; <br> 2)выгода, польза;', status: '0'},
				   27: { infinitive : 'adventure',russian: '1. n приключение, авантюра; <br> 2. v рисковать, осмеливаться;', status: '0'},
				   28: { infinitive : 'advice',russian: 'n 1)совет, консультация; <br> 2)сообщение, извещение;', status: '0'},
				   29: { infinitive : 'advise',russian: 'v 1)советовать(ся), консультировать(ся); <br> 2)извещать, уведомлять;', status: '0'},
				   30: { infinitive : 'affair',russian: 'n 1)дело, вопрос; <br> 2)дела, занятия', status: '0'},
				   31: { infinitive : 'afford',russian: 'v 1)быть в состоянии(сделать что-либо); <br> 2)продавать, предоставлять;', status: '0'},
				   32: { infinitive : 'afraid',russian: 'adj испуганный, боящийся', status: '0'},
				   33: { infinitive : 'after',russian: '1. prep 1)после, за, позади; <br>2. cоnj после того как; <br>3. adj задний', status: '0'},
				   34: { infinitive : 'afternoon',russian: 'n время после полудня', status: '0'},
				   35: { infinitive : 'again',russian: 'adv снова, опять', status: '0'},
				   36: { infinitive : 'against',russian: 'prep против', status: '0'},
				   37: { infinitive : 'age', russian: '1. n 1)возраст, старость; <br> 2)век, период, эпоха;<br> 2. v стареть, стариться;', status: '0'},
				   38: { infinitive : 'agency',russian: 'n агенство, организация;', status: '0'},
				   39: { infinitive : 'agent',russian: 'n 1)агент, представитель;<br>2)фактор, вещество;', status: '0'},
				   40: { infinitive : 'ago',russian: 'adv тому назад', status: '0'},
				   41: { infinitive : 'agree',russian: 'v (with, to) соглашаться (c, нa);', status: '0'},
				   42: { infinitive : 'agreement',russian: 'n 1)согласие; <br>2)соглашение, договор;', status: '0'},
				   43: { infinitive : 'agriculture',russian: 'n сельское хозяйство, земледелие;', status: '0'},
				   44: { infinitive : 'ahead',russian: '1. adv вперед, впереди; <br>2. adj будущий, грядущий;', status: '0'},
				   45: { infinitive : 'aid',russian: '1. n помощь, поддержка; <br>2. v помогать, оказывать поддержку;', status: '0'},
				   46: { infinitive : 'aim',russian: '1. n 1)цель, намерение; <br> 2)прицел, мишень; <br>2. v стремиться, нацеливаться, целиться, метить;', status: '0'},
				   47: { infinitive : 'air',russian: '1. n 1)воздух, атмосфера; <br> 2)воздушное пространство; <br>2. v 1)проветривать, вентилировать; <br> 2)сушить, просушивать;', status: '0'},
				   48: { infinitive : 'alarm',russian: '1. n 1)тревога, сигнал тревоги; <br> 2. v тревожить, вспугнуть, напугать;', status: '0'},
				   49: { infinitive : 'alike',russian: '1. adj похожий, подобный, одинаковый; <br>2. adv точно так же, одинаково;', status: '0'},
				   50: { infinitive : 'alive',russian: 'adj живой, в живых, бодрый, активный;', status: '0'},
				   51: { infinitive : 'all',russian: '1. adj вся, все, весь, полный; <br>2. adv совершенно, полностью, совсем, всецело;', status: '0'},
				   52: { infinitive : 'allow',russian: 'v позволять, разрешать, допускать, предоставлять;', status: '0'},
				   53: { infinitive : 'almost',russian: 'adv почти, едва не;', status: '0'},
				   54: { infinitive : 'alone',russian: 'adj одинокий, одиночный; <br>adv одиноко, в одиночестве;', status: '0'},
				   55: { infinitive : 'along',russian: 'prep вдоль, по, вместе', status: '0'},
				   56: { infinitive : 'aloud',russian: 'adv вслух, громко, во весь голос;' , status: '0'},
				   57: { infinitive : 'already',russian: 'adv уже, ранее;', status: '0'},
				   58: { infinitive : 'also',russian: 'adv также, тоже;', status: '0'},
				   59: { infinitive : 'although',russian: 'conj хотя, несмотря на то что;', status: '0'},
                   /*since 16.11.15*/ 
				   60: { infinitive : 'altogether',russian: 'adv 1)вполне, всецело; <br>2)вообще, в целом;', status: '0'},
				   61: { infinitive : 'amount',russian: '1. n количество, величина, сумма, результат; <br>2. v равняться, достигать, составлять;', status: '0'},
				   62: { infinitive : 'amuse',russian: 'v забавлять, отвлекать, развлекать;', status: '0'},
				   63: { infinitive : 'ancient',russian: 'adj древний, старинный, античный;', status: '0'},
				   64: { infinitive : 'anger',russian: '1. n гнев, раздражение; <br>2. v (рас)сердить, вызывать гнев, раздражение;', status: '0'},
				   65: { infinitive : 'angle',russian: '1. n 1)угол; <br>2)точка зрения; <br>2. v 1)искажать(рассказ, события);2)удить рыбу, выуживать(секреты);', status: '0'},
				   66: { infinitive : 'angry',russian: 'adj сердитый, раздраженный, разгневанный;', status: '0'},
				   67: { infinitive : 'animal',russian: 'n животное, зверь;', status: '0'},
				   68: { infinitive : 'anniversary',russian: '1. n годовщина, юбилей; <br>2. adj ежегодный, годичный;', status: '0'},
				   69: { infinitive : 'another',russian: 'det 1)иной, другой; <br>2)еще, еще один;', status: '0'},
				   70: { infinitive : 'answer', russian: '1. n ответ; <br>2. v отвечать, откликаться, реагировать;', status: '0'},
				   71: { infinitive : 'anxious',russian: 'adj озабоченный, встревоженный;', status: '0'},
				   72: { infinitive : 'any',russian: 'pron какой-нибудь, всякий, любой;', status: '0'},
				   /*since 17.11.15*/
				   73: { infinitive : 'anybody',russian: 'pron любой, кто-нибудь;', status: '0'},
				   74: { infinitive : 'anyhow',russian: 'adv кое-как, как-нибудь;', status: '0'},
				   75: { infinitive : 'anyone',russian: 'pron кто угодно, всякий;', status: '0'},
				   76: { infinitive : 'anything',russian: 'pron что-нибудь;', status: '0'},
				   77: { infinitive : 'anywhere',russian: 'adv где-нибудь, куда-нибудь;', status: '0'},
				   78: { infinitive : 'apart',russian: 'adv обособленно, отдельно, порознь, врозь;', status: '0'},
				   79: { infinitive : 'appear',russian: 'v 1)появляться, показываться; <br>2)выглядеть;<br>3)издаваться;', status: '0'},
                   80: { infinitive : 'appetite',russian: 'n аппетит;', status: '0'},
				   81: { infinitive : 'apple',russian: 'n яблоко;', status: '0'},
				   82: { infinitive : 'appoint',russian: 'v 1)назначать, определять; <br>2)назначать(на должность, пост);', status: '0'},
				   83: { infinitive : 'approach',russian: '1. n 1)приближение;<br>2)подход, подьезд; <br>2. v приближаться, подходить;', status: '0'},
				   84: { infinitive : 'approve',russian: 'v одобрять, санкционировать, утверждать;', status: '0'},
				   /*since 18.11.15*/
				   85: { infinitive : 'arch',russian: 'n арка, свод, дуга;', status: '0'},
	               86: { infinitive : 'area',russian: 'n площадь, участок, пространство;', status: '0'},
	               87: { infinitive : 'argue',russian: 'v обсуждать, доказывать, аргументировать;', status: '0'},
			       88: { infinitive : 'arise',russian: 'v подниматься;', status: '0'},   
		   	       89: { infinitive : 'arm',russian: 'n рука, передняя лапа;', status: '0'},
		   	       90: { infinitive : 'arms',russian: 'n оружие;', status: '0'},
		   	       91: { infinitive : 'army',russian: 'n армия, войска;', status: '0'},
		 	       92: { infinitive : 'around',russian: 'adv вокруг, кругом;', status: '0'}, 
			       93: { infinitive : 'arrange',russian: 'v устраивать, приготавливать, организовывать;', status: '0'}, 
			       94: { infinitive : 'arrest',russian: '1. n 1)арест, задержание;<br>2)задержка, замедление; <br>2. v арестовывать, задерживать;', status: '0'},
			       95: { infinitive : 'arrival',russian: 'n прибытие, проезд;', status: '0'},
               	   96: { infinitive : 'arrive',russian: 'v 1)прибывать, приезжать; <br>2)достигать(чего-либо);', status: '0'},
		           /*since 19.11.15*/
				   97: { infinitive : 'arrow',russian: 'n стрела;', status: '0'},
		           98: { infinitive : 'art',russian: 'n искуство;', status: '0'},
		           99: { infinitive : 'article',russian: 'n 1)статья; <br>2)раздел, пункт, параграф;; <br>3)артикль;', status: '0'},
		           100: { infinitive : 'artificial',russian: 'n искуственный, ненатуральный, притворный;', status: '0'},
		           101: { infinitive : 'artist',russian: 'n 1)художник; <br>2)артист;', status: '0'},
		           102: { infinitive : 'as',russian: '1. adv 1)как; <br>2)так же...как;<br> 2. conj 1)так как;<br>2)в то время, как;<br> 3. pron который, какой, что ', status: '0'},
		           103: { infinitive : 'ashamed',russian: 'adj пристыженный;', status: '0'},
		           104: { infinitive : 'ask',russian: 'v 1)спрашивать; <br>2)просить, требовать;', status: '0'},
		           105: { infinitive : 'asleep',russian: 'adj спящий, сонный;', status: '0'},
		           106: { infinitive : 'assistant',russian: 'n помощник, ассистент, подручный;', status: '0'},
		           107: { infinitive : 'association',russian: 'n 1)соединение, связь; <br>2)общество, ассоциация;', status: '0'},
		           108: { infinitive : 'astonish',russian: 'v изумлять, поражать, удивлять;', status: '0'},
		           109: { infinitive : 'at',russian: 'prep в, у, на, при;', status: '0'},
		           110: { infinitive : 'attach',russian: 'v 1)прикреплять, присоединять; <br>2)задерживать;', status: '0'},
		           /*since 20.11.15*/
				   111: { infinitive : 'attack',russian: '1. n 1)атака, наступление; <br>2)припадок, приступ(болезни); <br>2. v 1)атаковать, штурмовать; <br>2)критиковать;', status: '0'},
				   112: { infinitive : 'attempt',russian: '1. n 1)попытка; <br>2)покушение; <br>2. v 1)пытаться, стараться; <br>2)покушаться;', status: '0'},
				   113: { infinitive : 'attend',russian: 'v 1)посещать, присутствовать; <br>2)ухаживать, заботиться;', status: '0'},	
				   114: { infinitive : 'attention',russian: 'n 1)внимание, внимательность; <br>2)забота, уход;', status: '0'},
				   115: { infinitive : 'attract',russian: 'v 1)притягивать, привлекать; <br>2)прельщать, пленять;', status: '0'},
				   116: { infinitive : 'aunt',russian: 'n тетя, тетка;', status: '0'},
				   117: { infinitive : 'author',russian: 'n автор, сочинитель;;', status: '0'},
				   118: { infinitive : 'autumn',russian: 'n осень;', status: '0'},
				   119: { infinitive : 'average',russian: '1. adj средний; <br>2. n  среднее число;', status: '0'},
		           120: { infinitive : 'avoid',russian: 'v  избегать, уклоняться;', status: '0'},
				   121: { infinitive : 'awake',russian: '1. v (awoke, awaken) 1)проснуться; <br>2)будить; <br>2. adj проснувшийся', status: '0'},
				   122: { infinitive : 'away',russian: 'adv 1)вон, прочь, от; <br>2)далеко, на удалении;', status: '0'},
		           /*since 21.11.15*/
		           123: { infinitive : 'awful',russian: 'adj ужасный, страшный;', status: '0'},
		           124: { infinitive : 'awkward',russian: 'adj 1)неуклюжий, неловкий; <br>2)неудобный, затруднительный;', status: '0'},
		           125: { infinitive : 'axe',russian: 'n топор;', status: '0'},
				   126: { infinitive : 'back',russian: '1. n 1)спина; <br>2)спинка; <br>2. adv назад, обратно; <br>3. v  поддерживать, подкреплять;', status: '0'},
				   127: { infinitive : 'backward',russian: '1. adv 1)назад, в обратном направлении; <br>2)наоборот; <br>2. adj 1)отсталый; <br>2)запоздалый;', status: '0'},
				   128: { infinitive : 'bad',russian: 'adj 1)плохой, скверный; <br>2)испорченный;', status: '0'},
				   129: { infinitive : 'bag',russian: '1. n сумка, портфель, мешок;<br>2. v упаковывать, класть в мешок;', status: '0'},
				   130: { infinitive : 'bake',russian: 'v 1)(ис)печь(ся), запекать, выпекать;', status: '0'},
				   131: { infinitive : 'balance',russian: 'n 1)весы; <br>2)равновесие; <br>3)баланс;', status: '0'},
				   132: { infinitive : 'ball',russian: 'n 1)мяч; <br>2)шар;', status: '0'},
				   133: { infinitive : 'band',russian: '1. n лента, тесьма, завязка; <br>2. v завязывать, связывать, соединять;', status: '0'},
				   134: { infinitive : 'bank',russian: 'n банк;', status: '0'},
				   135: { infinitive : 'bar',russian: '1. n 1)брусок, засов, прут; <br>2)планка; <br>2. v 1)запирать на засов; <br>2)преграждать(путь);', status: '0'},
				   136: { infinitive : 'bare',russian: '1. adj 1)голый, обнаженный; <br>2)пустой, бедный; <br>2. v 1)обнажать; <br>2)опустошать;', status: '0'},
		           /*since 22.11.15*/ 
		           137: { infinitive : 'bargain',russian: '1. n 1)соглашение, сделка; <br>2)выгодная покупка; <br>2. v торговаться, договариваться;', status: '0'},
				   138: { infinitive : 'base',russian: '1. n 1)основа, основание, базис; <br>2)база; <br>2. v обосновывать, базировать, строить;', status: '0'},
				   139: { infinitive : 'basic',russian: 'adj основной, фундаментальный, главный;', status: '0'},
				   140: { infinitive : 'basis',russian: 'n основание, основа, базис, фундамент;', status: '0'},
		           141: { infinitive : 'basket',russian: 'n корзина;', status: '0'},
		           142: { infinitive : 'bath',russian: 'n 1)ванна, баня, купальнф; <br>2)купание(в ванне, бане);', status: '0'},
		           143: { infinitive : 'bathe',russian: 'v 1)купаться, мыть, промывать;', status: '0'},
		           144: { infinitive : 'battle',russian: '1. n 1)битва, сражение, бой; <br>2)борьба, поединок, схватка; <br>2. v бороться, сражаться;', status: '0'},
				   145: { infinitive : 'bay',russian: 'n 1)бухта, залив; <br>2)изгиб;', status: '0'},
				   146: { infinitive : 'beach',russian: 'n 1)песок, галька; <br>2)пляж, берег;', status: '0'},
				   147: { infinitive : 'beam',russian: '1. n 1)луч; <br>2)балка, брус, стропило; <br>2. v лучиться, излучать, сиять;', status: '0'},
		           148: { infinitive : 'bear',russian: 'v (bore; born) 1)родить; <br>2)нести;', status: '0'},
		           149: { infinitive : 'beard',russian: 'n борода, усы;', status: '0'},
		           150: { infinitive : 'beast',russian: 'n 1)зверь, животное, скотина;', status: '0'},
		           /*since 23.11.15*/
		           151: { infinitive : 'beat',russian: '1. n 1)удар; <br>2)биение(сердца); <br>2. v бить;', status: '0'}, 
		 		   152: { infinitive : 'beautiful',russian: 'красивый, прекрасный, великолепный;', status: '0'},
				   153: { infinitive : 'because',russian: 'conj потому что, из-за;', status: '0'},
				   154: { infinitive : 'become',russian: 'v (became; become) становиться;', status: '0'},
				   155: { infinitive : 'bed',russian: '1. n 1)постель, кровать, койка; <br>2)дно(реки, моря); <br>2. v класть в постель;', status: '0'},
				   156: { infinitive : 'beef',russian: 'n говядина, туша;', status: '0'},
				   157: { infinitive : 'before',russian: 'adv. v раньше, прежде до;', status: '0'},
				   158: { infinitive : 'beg',russian: 'v 1)(по)просить, умолять;<br>2)нищенствовать, попрошайничать', status: '0'},
				   159: { infinitive : 'begin',russian: 'v начинать;', status: '0'},
				   160: { infinitive : 'behave',russian: 'v вести себя, поступать;', status: '0'},	
				   161: { infinitive : 'behaviour',russian: 'n поведение, манеры;', status: '0'},
				   162: { infinitive : 'belief',russian: 'n 1)вера, доверие; <br>2)убеждение, мнение;', status: '0'},
				   163: { infinitive : 'believe',russian: 'v верить, доверять;', status: '0'},	
				   164: { infinitive : 'bell',russian: 'n колокол, звонок;', status: '0'},
				   165: { infinitive : 'belong',russian: 'v 1)принадлежать(to); относиться к(with);', status: '0'},	
		           /*since 24.11.15*/ 
                   166: { infinitive : 'below',russian: 'prep, adv ниже, внизу, вниз;', status: '0'}, 
		 		   167: { infinitive : 'belt',russian: '1. n 1)пояс, ремень; <br>2)лента конвеера; <br>2. v опоясывать, подпоясывать;', status: '0'},
				   168: { infinitive : 'bench',russian: 'n 1)скамья, скамейка; <br>2)терраса, уступ, карниз;', status: '0'},
				   169: { infinitive : 'bend',russian: '1. n 1)сгиб, изгиб; <br>2)поворот(дороги, реки); <br>2. v гнуться, сгибаться', status: '0'},
				   170: { infinitive : 'beneath',russian: '1. prep ниже, под; <br>2. adv внизу, ниже', status: '0'},
				   171: { infinitive : 'berry',russian: 'n ягода;', status: '0'},
				   172: { infinitive : 'beside',russian: 'prep рядом, около;', status: '0'},
				   173: { infinitive : 'best',russian: 'adj превосходная степень от good', status: '0'},
				   174: { infinitive : 'better',russian: 'adj лучший, лучше чем;', status: '0'},
				   175: { infinitive : 'between',russian: 'prep между;', status: '0'},	
				   176: { infinitive : 'beyond',russian: '1. prep 1)за, по ту сторону; <br>2)за пределами; <br>2. adv далеко, вдали;', status: '0'},
				   177: { infinitive : 'big',russian: 'adj большой, крупный, высокий;', status: '0'},
				   178: { infinitive : 'bill',russian: 'n 1)счет; <br>2)законопроект;', status: '0'},	
				   179: { infinitive : 'bind',russian: 'v связывать;', status: '0'},
				   180: { infinitive : 'bird',russian: 'n птица;', status: '0'},	  				   
		           /*since 25.11.15*/ 
				   181: { infinitive : 'birth',russian: 'n 1)рождение, появление на свет; <br>2)роды;', status: '0'}, 
		 		   182: { infinitive : 'bit',russian: 'n 1)кусочек, частица;', status: '0'},
				   183: { infinitive : 'bite',russian: 'v кусать; <br>2. n укус', status: '0'},
				   184: { infinitive : 'black',russian: 'n 1)черный; <br>2)темный, мрачный;', status: '0'},
				   185: { infinitive : 'blade',russian: 'n 1)лезвие, клинок; <br>2)лопасть;', status: '0'},
				   186: { infinitive : 'blame',russian: '1. n порицание, упрек, осуждение; <br>2. v порицать, критиковать;', status: '0'},
				   187: { infinitive : 'blanket',russian: 'n 1)одеяло;<br>2)попона;', status: '0'},
				   188: { infinitive : 'bless',russian: 'v благославлять, славословить;', status: '0'},
				   189: { infinitive : 'blind',russian: '1. adj слепой, ослепленный;<br>2)тупиковый;<br>v 1)ослеплять;<br>2)пускать пыль в глаза;', status: '0'},
				   190: { infinitive : 'block',russian: '1. v блокировать, загораживать;<br>2. n 1)колода, чурбан;<br>2)препятствие, блокада;', status: '0'},	
				   191: { infinitive : 'blood',russian: 'n кровь;', status: '0'},
				   192: { infinitive : 'blouse',russian: 'n блуза, кофточка;', status: '0'},
				   193: { infinitive : 'blow',russian: 'n дуновение, порыв ветра; <br>v дуть;', status: '0'},	
				   194: { infinitive : 'blue',russian: 'adj синий, голубой, лазурный;', status: '0'},
				   195: { infinitive : 'board',russian: 'n 1)доска, планка; <br>2)борт(судна, морского или воздушного);', status: '0'},
		            /*since 26.11.15*/
                   196: { infinitive : 'boast',russian: '1. n хвастовство, гордыня; <br>2. v хвастать, кичиться, гордиться;', status: '0'}, 
		 		   197: { infinitive : 'boat',russian: 'n лодка, корабль;', status: '0'},
				   198: { infinitive : 'body',russian: 'n тело', status: '0'},
				   199: { infinitive : 'boil',russian: 'n кипение; <br>v (вс)кипятить, (с)варить, вариться;', status: '0'},
				   200: { infinitive : 'bold',russian: 'adj 1)смелый, дерзкий, отважный; <br>2)размашистый, четкий(почерк);', status: '0'},
				   201: { infinitive : 'bone',russian: 'n 1)кость; <br>2)костяк, скелет;', status: '0'},
				   202: { infinitive : 'book',russian: 'n книга;<br>v заносить в книгу, регистрировать;', status: '0'},
				   203: { infinitive : 'boot',russian: 'n 1)ботинок, сапог; <br>2)начальная загрузка(программы в компьютере);', status: '0'},
				   204: { infinitive : 'border',russian: 'n граница', status: '0'},
				   205: { infinitive : 'born',russian: 'adj родившийся, рожденный;', status: '0'},	
				   206: { infinitive : 'borrow',russian: 'v брать взаймы, занимать, заимствовать;', status: '0'},
				   207: { infinitive : 'both',russian: 'pron оба, вместе, один и другой;', status: '0'},
				   208: { infinitive : 'bottle',russian: 'n бутылка,бутыль, флакон;', status: '0'},	
				   209: { infinitive : 'bottom',russian: 'n дно, днище, низ;', status: '0'},
				   210: { infinitive : 'bow',russian: '1.n поклон, кивок, наклон; <br>2. v сгибаться, гнуться, горбиться;', status: '0'}, 					
		            /*since 27.11.15*/
				   211: { infinitive : 'bowl',russian: 'n чаша, ваза, кубок;', status: '0'}, 
		 		   212: { infinitive : 'box',russian: '1. n ящик, коробка, сундук; <br>v укладывать в коробку, упаковывать;', status: '0'},
				   213: { infinitive : 'boy',russian: 'n мальчик, парень', status: '0'},
				   214: { infinitive : 'brain',russian: 'n мозг;', status: '0'},
				   215: { infinitive : 'branch',russian: 'n 1)ветвь, ветка; <br>2)филиал, отделение; <br>3)отрасль;', status: '0'},
				   216: { infinitive : 'brass',russian: 'n латунь;', status: '0'},
				   217: { infinitive : 'brave',russian: 'adj храбрый, смелый, мужественный;', status: '0'},
				   218: { infinitive : 'bread',russian: 'n хлеб;', status: '0'},
				   219: { infinitive : 'break',russian: '1. n 1)бросок, рывок; <br>2)разбивание, перелом, трещина; <br>v ломаться;', status: '0'},
				   220: { infinitive : 'breakfast',russian: 'n завтрак; <br>v позавтракать;', status: '0'},	
				   221: { infinitive : 'breast',russian: 'n 1)грудь, молочная железа; <br>2)сердце, душа, совесть;', status: '0'},
				   222: { infinitive : 'breath',russian: 'n 1)вдох; <br>2)дыхание, вздох;', status: '0'},
				   223: { infinitive : 'breathe',russian: 'v дышать, вздохнуть;', status: '0'},	
				   224: { infinitive : 'breed',russian: 'n 1)порода; <br>2)поколение, потомство; <br>v 1)выводить, разводить; <br>2)вынашивать(детенышей);', status: '0'},
				   225: { infinitive : 'brick',russian: '1. n 1)кирпич; <br>2)кусок(мыла), брусок(масла), буханка(хлеба); <br>2. v класть кирпичи;', status: '0'}, 
		           /*since 28.11.15*/
				   226: { infinitive : 'bridge',russian: '1. n мост; <br>v строить, перекидывать мост;', status: '0'}, 
		 		   227: { infinitive : 'bright',russian: 'adj  яркий, светлый, блестящий;', status: '0'},
				   228: { infinitive : 'bring',russian: 'v приносить', status: '0'},
				   229: { infinitive : 'broad',russian: 'adj широкий, обширнвй, просторный;', status: '0'},
				   230: { infinitive : 'broadcast',russian: 'n радиовещание, радио, телепередача;', status: '0'},
				   231: { infinitive : 'brother',russian: 'n брат;', status: '0'},
				   232: { infinitive : 'brown',russian: 'adj коричневый, бурый;', status: '0'},
				   233: { infinitive : 'brush',russian: '1. n щетка, кисть; <br>v чистить щеткой, удалять, очищать;', status: '0'},
				   234: { infinitive : 'build',russian: '1. n телосложение, внешний вид; <br>v строить;', status: '0'},
				   235: { infinitive : 'building',russian: 'n здание, сооружение;', status: '0'},	
				   236: { infinitive : 'bullet',russian: 'n пуля, ядро;', status: '0'},
				   237: { infinitive : 'bundle',russian: 'n пакет, сверток;', status: '0'},
				   238: { infinitive : 'burn',russian: 'n 1)ожег; <br>2)курение; <br>2. v гореть, жечь;', status: '0'},	
				   239: { infinitive : 'burst',russian: 'n 1)взрыв; <br>2)вспышка; <br>2. v 1)взрывать(ся); <br>2)лопаться;', status: '0'},
				   240: { infinitive : 'bury',russian: 'v (по)хоронить, (с)прятать, укрывать;', status: '0'}, 
		           /*since 29.11.15*/
				   241: { infinitive : 'bus',russian: 'n автобус;', status: '0'}, 
		 		   242: { infinitive : 'bush',russian: 'n  куст, кустарник;', status: '0'},
				   243: { infinitive : 'business',russian: 'n бизнес, комерческая деятельность', status: '0'},
				   244: { infinitive : 'busy',russian: 'adj занятой, деятельный;', status: '0'},
				   245: { infinitive : 'but',russian: '1. conj но, однако, тем не менее; <br>2. prep за исключением;', status: '0'},
				   246: { infinitive : 'butter',russian: 'n сливочное масло;', status: '0'},
				   247: { infinitive : 'button',russian: '1. n пуговица, кнопка; <br>2. v застегивать пуговицу;', status: '0'},
				   248: { infinitive : 'by',russian: '1. n 1)у, около, вдоль, по; <br>2)посредством, путем; <br>2)сквозь, через;', status: '0'},
				   249: { infinitive : 'bye-bye',russian: 'n сон, время спать;', status: '0'},
				   250: { infinitive : 'cabbage',russian: 'n (кочанная) капуста;', status: '0'},	
				   251: { infinitive : 'calculate',russian: 'v 1)вычислять, калькулировать; <br>2)считать, рассчитывать;', status: '0'},
				   252: { infinitive : 'call',russian: '1. n вызов, оклик, звонок; <br> 2. v (по)звать, окликать, просить;', status: '0'},
				   253: { infinitive : 'calm',russian: 'n 1)тихий, спокойный; <br>2. v успокаиваться, стихать;', status: '0'},	
				   254: { infinitive : 'camera',russian: 'n фотоаппарат, киноаппарат, телекамкра;', status: '0'},
				   255: { infinitive : 'camp',russian: 'n 1)лагерь, блок(стран); <br>2.v располагаться лагерем;', status: '0'}, 
				   /*since 30.11.15*/
				   256: { infinitive : 'can',russian: 'v мочь, уметь;', status: '0'}, 
		 		   257: { infinitive : 'cap',russian: 'n (головной убор) шапка, кепка, каска, шлем;', status: '0'},
				   258: { infinitive : 'capital',russian: 'n 1)столица; <br>2)прописная, заглавная буква;', status: '0'},
				   259: { infinitive : 'car',russian: 'n автомобиль;', status: '0'},
				   260: { infinitive : 'card',russian: 'n 1)карта(игральная), кость(в домино); <br>2)карточка;', status: '0'},
				   261: { infinitive : 'care',russian: '1. n 1)забота, уход(медицинский); <br>2)тщательность, внимание, осторожность; <br>2. v заботиться, беспокоиться;', status: '0'},
				   262: { infinitive : 'carriage',russian: 'n экипаж, повозка, коляска;', status: '0'},
				   263: { infinitive : 'carry',russian: 'v 1)носить, нести, возить; <br>2)доставлять, нести(в себе);', status: '0'},
				   264: { infinitive : 'case',russian: 'n случай, факт, обстоятельство, история;', status: '0'},
				   265: { infinitive : 'cash',russian: 'n деньги, наличне;', status: '0'},	
				   266: { infinitive : 'cat',russian: 'n кот, кошка;', status: '0'},
				   267: { infinitive : 'catch',russian: '1. n поимка, захват; <br> 2. v ловить;', status: '0'},
				   268: { infinitive : 'cause',russian: '1. n причина, повод, основание; <br>2. v причинять, служить причиной;', status: '0'},	
				   269: { infinitive : 'caution',russian: 'n 1)внимательность, осторожность; <br>2)предостережение;', status: '0'},
				   270: { infinitive : 'cave',russian: 'n 1)пещера; <br>2)яма, погреб, подвал;', status: '0'}, 
				   
				   
				   
				   
				   
				   
				   
				   
		
		
		
		
		
		
		
		
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
		      //writter();
		      send();
		 break;
		 case 1:
		     AssessAnswer(GetAnswers(), verbs);
		 break;
		 
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
	
	
  
    for (var i = 1; i < 51; i++)//51
    {  
        n = $('#name' + i).attr('value');		
		receive[i] = [];
		receive[i]['index'] = n;
		receive[i]['infinitive'] = $('#indefinit' + i).val();
	}
	 return receive;
  }
  
//=======================================================================================================
//This function doing assess answers

   function AssessAnswer(answer, extra)
   {
      var answer;
	  var extra;
	  
	  var header = ['<form action ="#">',  
	                     '<table class="table table-bordered" id = "verbs">',
                              '<thead>',
                                 '<tr>',
                                     '<th class="col-md-3">English</th>',
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
	  
	  for (var n = 1; n < 51; n++)//51
	  {
	    
	      if (extra[answer[n]['index']].english == answer[n]['infinitive'])
		  {
		      row += '<tr>';
              row += '<td style = "color:#00FF7F">'+answer[n]['infinitive']+'</td>';
		      row += '<td bgColor = "#00FF7F">'+extra[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
			  ok++;
					 
		  }
		  else if (answer[n]['infinitive'] == '')
		  {
		      row += '<tr>';
              row += '<td style = "color:#6495ED">'+extra[answer[n]['index']].english+'</td>';
		      row += '<td bgColor = "#6495ED">'+extra[answer[n]['index']].russian+'</td>';
			  row += '</tr>';
		      absence++;
		  }
		  else
		  {
		      row += '<tr>';
			  
		      if (!(extra[answer[n]['index']].english == answer[n]['infinitive']))
			  {
			    
			      row += '<td style = "color:#FF6347"><span style = "text-decoration:line-through">'+answer[n]['infinitive']+'</span>&nbsp;';
				  row += '<span>'+extra[answer[n]['index']].english+'</span></td>';
				  
			  }
			  else
			  {
			  
			      row += '<td style = "color:#00FF7F">'+extra[answer[n]['index']].english+'</td>';
			  }
			  
			  row +='<td bgColor = "#FF6347">'+extra[answer[n]['index']].russian+'</td';
			 
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
					   
	  header +='<td>50</td>';
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
   
       var id = 'name';
	   var indefinit = 'indefinit';
	   
	   id += index;
	   indefinit += index;
	   
   
       var body = [
	               '<tr id ="',id,'" value = "',num.index,'">',
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
	 
	 if (!OnCopy)
	 {
	    OnCopy = true;
		copy = clone(arr);
	 }
	 
	 for( var verbs in copy)
	 {
	     num = parseInt(Math.random() * (count - 1 + 1) + 1);//1 + Math.floor(Math.random() * (180 - 0));
		 
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
			     num = parseInt(Math.random() * (count - 1 + 1) + 1);//145//1 + Math.floor(Math.random() * (180 - 0));
				 
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
                            '<th class="col-md-3">English</th>',
							'<th class="col-md-3">Перевод</th>',
                        '</tr>',
                    '</thead>',
					'<tbody>'
			   ];
    row = row.join('');
      
    for (var i = 1; i < 51; i++)//51
	{
	
	
	    
	    row += Contain(OutArray(verbs), i);
	
	}
	
	row += '</tbody>';
    row += '</table>';
	row += '</form>';
		  
	row += '<div class = "pull-right" id = "check-button">';
    row += '<button class = "btn btn-primary" onclick ="MainCase(1)"; type="button">Check</button>';
    row += '</div>';
    row += '<div class = "pull-left" id = "test-button">';
    row += '<button class = "btn btn-primary" onclick ="send()"; type="button">Check</button>';
    row += '</div>';
			        
	$(".row").after(row);
 }

 

 function send()
 {
   var csrfToken;
   var out;
   
   csrfToken = $('meta[name="csrf-token"]').attr("content");
   
    $.ajax({
         url:'/index.php/vocabulary/vocabulary', 
		 type:"POST",
		 data: {'_csrf': csrfToken},
		 contentType: "application/json; charset=utf-8",
		 dataType:"JSON",
		 timeout:3000,
		 success: function(data)
		          {
		             if (data != undefined)
					 {
					 
					    count = 0;


                        for (var key in data) 
	                    {
                             count++;
	                    }
						
                        if (count > 50)
	                    {
		                    count = 50;
                         }
						 
                         verbs = data;
                         writter();
						 
				     }
					 else
					 {
					    verbs =  false;
						
					 
					 }
		          }
		});
		
		
	
  }
 

