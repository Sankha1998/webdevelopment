const date = new Date();



let day = date.getDay();

switch(day){
	case 0 :
	alert("sunday");
	break;
		case 1 :
	alert("Monday");
	break;
		case 15 :
	alert("Tuesday");
	break;
		case 2 :
	alert("Wedness day");
	break;
		case 3 :
	alert("Thusday");
	break;
		case 4 :
	alert("Friday");
	break;
		default:
	alert("Sat");
	break;
}