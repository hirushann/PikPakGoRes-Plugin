var subUrl = 'http://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/';
jQuery(document).ready(function($) {
	$.ajax({
		url : subUrl+'ComponentSupportAction.do?method=getGEOLocation',
          method : 'post',	  
	      dataType: "text",
	      data : {
        	  method : "getGEOLocation",
        	  transectionId : $('#transectionId').val()	                            
          },
          success: function(data){
        	var locationList = eval(data);
		    if (locationList.length > 0) {
		    	$('#ipAddress').val(locationList[0].ipAddress);	
		    	$('#clientCountryCode').val(locationList[0].clientCountryCode);
		    }	            	  
          }
       });
});


jQuery(document).ready(function($) {
	affiliateTimer();
try{
	setTimeout(function(){ 
		 loadTab();
	},10);
	 $("#ribbon").removeClass('ui-corner-all').addClass('ui-corner-top');
}catch(e){
		alert(e);
} 

try{
	var w = getUrlVars()["wjt"];
	var wjtname = w.split("wj_")[1];
	bec_name = "bec_container_frame_"+ wjtname;
}catch(e){}
});


function createXMLHttpRequest() {
	try{ return new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
    try{ return new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
	try{ return new XMLHttpRequest(); }catch (e) {}
	return null;
}

function loadTab(){	
	var portal= jQuery('#portal').val();
	var appProdDefProdCookie = jQuery.cookie( portal+'_app_prod_def_prod' );	
	
	if(appProdDefProdCookie ==null || appProdDefProdCookie =='' || appProdDefProdCookie == undefined) {
		var product = "H";
		var reservationProduct = "H";
		
		jQuery(document).ready(function(){
			console.log("ready1 :: " + reservationProduct);
			jQuery.ajax({
	              url : 'http://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/ComponentSupportAction.do?method=getDefaultProduct',
	              method : 'post',
	              data : {
	            	  method : "getDefaultProduct",
	            	  transectionId : jQuery('#transectionId').val()	                            
	              },
	              dataType: "text",
	              success: function(data){
	            	var defaultProductList = eval(data);
					console.log("ready2 :: " + defaultProductList);
				    if (defaultProductList.length > 0) {
				    	product = defaultProductList[0].default_product;
				    	jQuery('#engLoaded').val(product);
				    	reservationProduct = defaultProductList[0].reservation_product;
				    	/**Setting defalut tab and loading reservation product here*/
				    	jQuery.cookie(portal+'_app_prod_def_prod',JSON.stringify(defaultProductList[0]));
				    	initTabs(defaultProduct(product))
				    	setTabs(reservationProduct);
				    	jQuery.cookie(portal+'_reservation_prod',reservationProduct);
				    }	            	  
	              }
	          });
		});		
	}else{
		appProdDefProdCookie = JSON.parse(appProdDefProdCookie);		
		var selectedProduct = 'H';
		try{
			var selectedProduct = window.location.toString().split('?')[1].split('product=')[1];
		}catch(e){}
		
		initTabs(selectedProduct != '' ? selectedProduct : defaultProduct(appProdDefProdCookie.default_product));
		setTabs(appProdDefProdCookie.reservation_product);
		jQuery.cookie(portal+'_reservation_prod',appProdDefProdCookie.reservation_product);
	}
}

function setTabs(products){
	
	if(products.indexOf('V')==-1){
		jQuery("#vLi").hide();		
	}
	if(products.indexOf('F')==-1){
		jQuery("#fLi").hide();
	}
	if(products.indexOf('H')==-1){
		jQuery("#hLi").hide();
	}
	if(products.indexOf('A')==-1){
		jQuery("#aLi").hide();
	}
	if(products.indexOf('C')==-1){
		jQuery("#cLi").hide();
	}
	if(products.indexOf('T')==-1){
		jQuery("#tLi").hide();
	} 
	if(products.indexOf('P')==-1){
		jQuery("#pLi").hide();
	}	
}
function defaultProduct(product){	
	var tab = 0;
	switch (product){
		case 'F': tab = 0; break;
		case 'H': tab = 1; break;
		case 'C': tab = 2; break;
		case 'T': tab = 3; break;
		case 'A': tab = 4; break;
		case 'V': tab = 5; break;
		case 'P': tab = 6; break;
	} 
	return tab;
}

function affiliateTimer(){
	try{
		//console.log(jQuery('#partnerType').val());
	if('AFF'==jQuery('#partnerType').val()){
		try{jQuery('.discountcoupon').hide();}catch(e){}
		try{jQuery('#promotionCodeDiv_F').hide();}catch(e){}
		
	}else{
		try{jQuery('.discountcoupon').show();}catch(e){}
		try{jQuery('#promotionCodeDiv_F').show();}catch(e){}
	}
	}catch(e){}
	setTimeout('affiliateTimer()',1000);
}


try{
 
    var screenH =0;
    if(navigator.appName=='Netscape'){
          screenH = window.innerHeight || document.body.offsetHeight;
    }else{
          screenH = document.documentElement.clientHeight;
    }
    var screenW = document.documentElement.clientWidth;
    //alert(screenW+"-"+screenH)
    document.getElementById('mm').style.height = screenH+"px";
    document.getElementById('mm').style.width = screenW+"px";
    
    }catch(e){
        alert(e);
}
var internalBEC = false;
try{
    if(!internalBEC){
        jQuery("#tabs").hide('bec_wrapper_div');
    }
    }catch(e){alert(e);}
    jQuery("#tabs").tabs(3).addClass('ui-tabs-vertical ui-helper-clearfix');
    jQuery("#tabs li").removeClass('ui-corner-top').addClass('ui-corner-left');
    try{
        var w = getUrlVars()["wjt"];
        var wjtname = w.split("wj_")[1];
        bec_name = "bec_container_frame_"+ wjtname;
    }catch(e){}

    jQuery(document).ready(function(){
        if (jQuery(window).width() < 610) {     
            jQuery(".mobile-hide-menu").on('click',function(){
                jQuery("#ribbon").hide(1000);
              });	
            }
        });

        function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
}
return "";
}
var lang = '';
function googleTranslateElementInit() {
	try{
	//alert('calling')
	var googlang=getCookie("googconfig");
	var googleorg=getCookie("googtrans");
	var googleorg = googleorg.split("/");
	
	lang = googleorg[2];
	
	//console.log("googleorg > "+ getCookie("googtrans"));
	
	if(googlang!=""||googlang!=null){
		var cookiearray = googlang.split("|");
		//console.log("cookiearray"+cookiearray);
		
		var langtype = cookiearray[0]
		var languges = cookiearray[1]
		
		//console.log("langtype"+langtype);
		//console.log("languges"+languges);
				if(langtype=="ALL"){
					//alert("ALL");
					  new google.translate.TranslateElement({
						  pageLanguage: 'en',
						  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
						  autoDisplay: false
						  
					  },
					  'google_translate_element'
						  
					  );
				}else{
					//alert("SPEC ="+languges);
					  new google.translate.TranslateElement({
						  pageLanguage: 'en',
						  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,						  
						  includedLanguages: languges,
						  //includedLanguages: 'fr',
						  autoDisplay: false
						  
					  },
					  'google_translate_element'
						  
					  );			
					
				}	   
  
	}
	}catch(e){
		//alert(e)
	}
	
	var element = document.getElementById("goodale_translate_script");
	element.parentNode.removeChild(element);
	
	//setlistnForLAnguageChange();
	
	
}


function listenForLanguageChange(){
	try{
	var googcook=getCookie("googtrans");
	//alert(googcook);
	if(googcook.length >0){		
			var googcook = googcook.split("/"); 
			
			if(lang!=googcook[2] && lang!=''){
				//console.log("lang:  "+lang+"/////"+"googcook[2]  "+googcook[2]);
				location.reload();
				lang = googcook[2];
				loadTranslatorScript();				
			}
	}
	
	}catch(e){
		//alert(e);
	}
	setTimeout('listenForLanguageChange()', 200);
}



function loadTranslatorScript() {
	//
	//alert("called");
	var element = document.getElementById("goodale_translate_script");
	if(element!=null){
		//console.log("Element Removed ");	
		element.parentNode.removeChild(element);
	}
	
	  var s = document.createElement('script');
	  s.id="goodale_translate_script"
	  s.type = "text/javascript";
	  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
	  document.body.appendChild(s);
				
	}

listenForLanguageChange();