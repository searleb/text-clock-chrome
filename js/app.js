function textClock () {
	// get time
	var newDate = new Date(),
		day = newDate.getDay(),
		hours = newDate.getHours(),
		minutes = newDate.getMinutes().toString(),
		seconds = newDate.getSeconds().toString();

	if (minutes < 10) { minutes = 0 + minutes };
	if (seconds < 10) { seconds = 0 + seconds };
	if (day == 5){
		$('#tgif').html('TGIF');
	}	
	var minsSecs = minutes + seconds;
	if (minsSecs > 3230){
		hours ++;
	};
	// console.log('day', day, 'hours', hours, 'minutes', minutes, "sec", seconds);
	// console.log('minsec',minsSecs);

	switch (hours){
		case (1):
			updateHour('#one');
			break;
		case (2):
			updateHour('#two');
			break;
		case (3):
			updateHour('#three');
			break;
		case (4):
			updateHour('#four');
			break;
		case (5):
			updateHour('#five-hr');
			break;
		case (6):
			updateHour('#six');
			break;
		case (7):
			updateHour('#seven');
			break;
		case (8):
			updateHour('#eight');
			break;
		case (9):
			updateHour('#nine');
			break;
		case (10):
			updateHour('#ten-hr');
			break;
		case (11):
			updateHour('#eleven');
			break;
		case (12):
			updateHour('#twelve');
			break;
		case (13):
			updateHour('#one');
			break;
		case (14):
			updateHour('#two');
			break;
		case (15):
			updateHour('#three');
			break;
		case (16):
			updateHour('#four');
			break;
		case (17):
			updateHour('#five-hr');
			break;
		case (18):
			updateHour('#six');
			break;
		case (19):
			updateHour('#seven');
			break;
		case (20):
			updateHour('#eight');
			break;
		case (21):
			updateHour('#nine');
			break;
		case (22):
			updateHour('#ten-hr');
			break;
		case (23):
			updateHour('#eleven');
			break;
		case (24):
			updateHour('#midnight');
			break;
		case (0):
			updateHour('#midnight');
			break;
		default:
			updateHour();
			break;
	}
	
	if ( (minsSecs >= 5730 && minsSecs < 6000) || (minsSecs >= 0 && minsSecs < 230) ) {
		if(!hours == 0)
		updateDesc('#oclock');
	} else if (minsSecs >= 230 && minsSecs < 730) {
		updateDesc('#five, #past');
	} else if (minsSecs >= 730 && minsSecs < 1230) {
		updateDesc('#ten, #past');
	} else if (minsSecs >= 1230 && minsSecs < 1730) {
		updateDesc('#quarter, #past');
	} else if (minsSecs >= 1730 && minsSecs < 2230) {
		updateDesc('#twenty, #past');
	} else if (minsSecs >= 2230 && minsSecs < 2730) {
		updateDesc('#twenty, #five, #past');
	} else if (minsSecs >= 2730 && minsSecs < 3230) {
		updateDesc('#half, #past');
	} else if (minsSecs >= 3230 && minsSecs < 3730) {
		updateDesc('#twenty, #five, #to');
	} else if (minsSecs >= 3730 && minsSecs < 4230) {
		updateDesc('#twenty, #to');
	} else if (minsSecs >= 4230 && minsSecs < 4730) {
		updateDesc('#quarter, #to');
	} else if (minsSecs >= 4730 && minsSecs < 5230) {
		updateDesc('#ten, #to');
	} else if (minsSecs >= 5230 && minsSecs < 5730) {
		updateDesc('#five, #to');
	} else {
		updateDesc();
	}

};

function updateDesc(classes) {
	$('.desc').removeClass('active');
	$(classes).addClass('active');
}

function updateHour(classes) {
	$('.hr').removeClass('active');
	$(classes).addClass('active');	
}

setInterval(function(){
	textClock();
},5000);

textClock();


