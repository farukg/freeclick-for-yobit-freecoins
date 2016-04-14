var c_=0;
var ca_=500;
$("tr td .countdown.green").parent().parent().find('.clGetFreeCoins').each(function(this){
	c_=c_+ca_;
	setTimeout(f_(this),c_);
});
function f_(o){
	var c=$("#window_captcha");
	if(c.css('display')=='none'){
		o.click();
	var b=$(".messi-actions .btnbox button");
	if(b.css('display')!='none')
		b.click();
	}
}
