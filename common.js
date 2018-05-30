function cvtStockID(stockID)
{
	console.log("cvtStockID:" + stockID);
	stockID = stockID.replace(".DJI", "111000");
	stockID = stockID.replace(".INX", "SPY");	
	stockID = stockID.replace(".IXIC", "111100");	
	
	//if (param['stockid'].indexOf(".hk")==false) param['stockid']+=".hk";
	if (stockID.search(/[^0-9\s]/) != -1) stockID +=".us";	
	stockID = stockID.replace(".us.us", ".us");
		
	console.log("cvtStockID end:" + stockID);
	return stockID;	
}


function getParam(topLocation)
{
	var s;
	var param = {};
	
	if (topLocation==0) s = window.location.search.substring(1).split('&');
		else s = window.top.location.href.substring(1).split('&');
	for (var i = 0; i < s.length; ++i) {
		var parts = s[i].split('=');
		console.log(parts[0]);
		console.log(parts[1]);
		param[parts[0]] = parts[1];
	}
	return param;
}


var dailySTCChart=	[
						// STC(18,5)
						"&subChart2=6&ref2para1=18&ref2para2=5&ref2para3=0&subChart3=7&ref3para1=18&ref3para2=5&ref3para3=0",
						// STC(18,9)
						"&subChart2=6&ref2para1=18&ref2para2=9&ref2para3=0&subChart3=7&ref3para1=18&ref3para2=9&ref3para3=0",
						// STC(20,5)
						"&subChart2=6&ref2para1=20&ref2para2=5&ref2para3=0&subChart3=7&ref3para1=20&ref3para2=5&ref3para3=0",						
					];	
					
var subChartsALL= [
	//KDJ, MACD, 隨機快步指數(Fast STC), 隨機慢步指數(Slow STC)					
//	"subChart1=3&ref1para1=12&ref1para2=26&ref1para3=9&subChart2=6&ref2para1=18&ref2para2=5&ref2para3=0&subChart3=7&ref3para1=18&ref3para2=5&ref3para3=0&subChart4=16&ref4para1=9&ref4para2=3&ref4para3=3&subChart5=5&ref5para1=10&ref5para2=0&ref5para3=0",
	"subChart1=3&ref1para1=12&ref1para2=26&ref1para3=9&subChart2=6&ref2para1=18&ref2para2=5&ref2para3=0&subChart3=7&ref3para1=18&ref3para2=5&ref3para3=0&subChart4=16&ref4para1=9&ref4para2=3&ref4para3=3&subChart5=5&ref5para1=10&ref5para2=0&ref5para3=0",

	//MACD, 隨機快步指數(Fast STC), 隨機慢步指數(Slow STC)
	"subChart1=3&ref1para1=12&ref1para2=26&ref1para3=9&subChart2=6&ref2para1=18&ref2para2=5&ref2para3=0&subChart3=7&ref3para1=18&ref3para2=5&ref3para3=0",

	//隨機快步指數(Fast STC), 隨機慢步指數(Slow STC)
	"subChart1=6&ref1para1=18&ref1para2=9&ref1para3=0&subChart2=7&ref2para1=18&ref2para2=9&ref2para3=0",
];

var subCharts=subChartsALL[0];


//RSI					
//var weeklyBoChart="http://charts.aastocks.com/servlet/Charts?t="+Date.now()+"&fontsize=12&15MinDelay=T&lang=1&titlestyle=1&vol=1&Indicator=9&indpara1=20&indpara2=2&indpara3=0&indpara4=0&indpara5=0&subChart1=5&ref1para1=10&ref1para2=0&ref1para3=0&subChart2=3&ref2para1=12&ref2para2=26&ref2para3=9&subChart3=6&ref3para1=18&ref3para2=9&ref3para3=0&subChart4=7&ref4para1=18&ref4para2=9&ref4para3=0&subChart5=2&ref5para1=9&ref5para2=0&ref5para3=0&scheme=3&com=100&chartwidth=1230&chartheight=1521&type=1&logoStyle=1&";
//RSI to KDJ
var weeklyBoChart="http://charts.aastocks.com/servlet/Charts?t="+Date.now()+"&fontsize=12&15MinDelay=T&lang=1&titlestyle=1&vol=1&Indicator=9&indpara1=20&indpara2=2&indpara3=0&indpara4=0&indpara5=0&subChart1=5&ref1para1=10&ref1para2=0&ref1para3=0&subChart2=3&ref2para1=12&ref2para2=26&ref2para3=9&subChart3=6&ref3para1=18&ref3para2=9&ref3para3=0&subChart4=7&ref4para1=18&ref4para2=9&ref4para3=0&subChart5=16&ref5para1=9&ref5para2=3&ref5para3=3&scheme=3&com=100&chartwidth=1230&chartheight=1521&type=1&logoStyle=1&";

//var STC18_9Chart="http://charts.aastocks.com/servlet/Charts?t="+Date.now()+"&fontsize=12&15MinDelay=T&lang=1&titlestyle=1&vol=1&Indicator=1&indpara1=2&indpara2=19&indpara3=0&indpara4=0&indpara5=0&subChart1=3&ref1para1=12&ref1para2=26&ref1para3=9&subChart2=6&ref2para1=18&ref2para2=9&ref2para3=0&subChart4=7&ref4para1=18&ref4para2=9&ref4para3=0&scheme=3&com=100&chartwidth=1230&chartheight=1261&type=1&logoStyle=1&";
//add KDJ
var STC18_9Chart="http://charts.aastocks.com/servlet/Charts?t="+Date.now()+"&fontsize=12&15MinDelay=T&lang=1&titlestyle=1&vol=1&Indicator=1&indpara1=2&indpara2=19&indpara3=0&indpara4=0&indpara5=0&subChart1=3&ref1para1=12&ref1para2=26&ref1para3=9&subChart2=6&ref2para1=18&ref2para2=9&ref2para3=0&subChart4=7&ref4para1=18&ref4para2=9&ref4para3=0&subChart5=16&ref5para1=9&ref5para2=3&ref5para3=3&scheme=3&com=100&chartwidth=1230&chartheight=1261&type=1&logoStyle=1&";
