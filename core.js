var c_=0;
var ca_=500;
var s_=false;
var oC;
$("tr td .countdown.green").parent().parent().find('.clGetFreeCoins').each(function(this){
	s_=true;
	c_=c_+ca_;
	oC=setTimeout(sf_(this),c_);
});
function sf_(o){
	var c=$("#window_captcha");
	if(c.css('display')=='none'){
		o.click();
	}else{
		s_=false;
	}
	var b=$(".messi-actions .btnbox button");
	if(b.css('display')!='none'){
		b.click();
	}
}
function cf_(){
	if(c.css('display')=='block'){
		clearTimeout(oC);
	}
}