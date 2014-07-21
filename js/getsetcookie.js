

    function setCookie(c_name, value, exdays)  
    {  
        var exdate = new Date();  
        exdate.setDate( exdate.getDate() + exdays );  
        var c_value = escape( value ) + ( ( exdays == null ) ? "" : "; expires=" + exdate.toUTCString() );  
        document.cookie = c_name + "=" + c_value + "; path=/";  
    }  

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(){
	var pageCount = getCookie("pageview");
	pageCount++;
	setCookie('pageview',pageCount,1);
	
    if(pageCount==6){
    //alert ("Number of views: "+pageCount);
    sendPerfectAudience();}
    else if (pageCount>6){
        deleteCookie();//call send script tracking event
                        //still delete cookie, i don't see why not? unless we are tracking multiple times
    }

}


function deleteCookie(){
    document.cookie = "pageview=0" +
    "; path=/" +
    "; expires=Thu, 01-Jan-00 00:00:01 GMT";}


    function sendPerfectAudience(){

  //the act of calling this function is all that is needed
    

    }
