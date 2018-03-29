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
