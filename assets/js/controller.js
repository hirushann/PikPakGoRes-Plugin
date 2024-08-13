	/*	Rez IWC Framework 1.0
 * 	Kasun C
 * 
 */

/* IEDeveloper option fix  - KasunC*/
if(!window.console){
	window.console = {"log":function(msg){},"debug":function(msg){}}
}
if(window.console && !window.console.log ){
	window.console['log'] = function(msg){};
}
if(window.console && !window.console.debug ){
	window.console['debug'] = function(msg){
		console.log("debug not Supported By the browser "+msg);
	};
}
if(window.console && !window.console.count ){
	window.console['count'] = function(msg){
		window.console.log("Count not Supported By the browser "+msg);
	};
}
	

function setGrouping(val){
	return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * 
 */
Array.prototype.clone = function() { return this.slice(0); }
var content_cdn_path = "";

/**
 * 
 * @param from
 * @param to
 * @param command
 * @param responce
 * @param data
 * @param actionUrl
 * @param wid
 * @returns {IWCParams}
 */
function IWCParams(from, to, command, responce, data, actionUrl, wid) {
	this.from = from;
	this.to = to;
	this.command = command;
	this.responce = responce;
	this.data = data;
	this.actionUrl = actionUrl;
	this.wid = wid;

}

function IWC(param) {
	if (window.parent == window) {
		doIWC(param);
	} else {
		try{
			window.parent.IWC(param);
		}catch(e){
			doIWC(param);
		}
	}
	return param;
}

function doIWC(p) {
	
	if (p.to == "BEC" && p.from == "RES_SELECTOR" ) {
		if (p.command == "SET_EX_RESNO") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC'  && widjects[z].place !='CONTINUE' ){
					widjects[z].setResNo(p.data);
				}
			}
		}
	}
	 
	if (p.to == "BEC" && p.from == "AGENT_SELECTOR" ) {
		if (p.command == "SET_AGENT") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC'  && widjects[z].place !='CONTINUE' ){
					widjects[z].setAgent(p.data);
				}
			}
		}
	}
	
	if (p.to == "BEC" && p.from == "RES_SELECTOR" ) {
		if (p.command == "HIDE_PACKAGE_OPTIONS") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC'  && widjects[z].place !='CONTINUE' ){
					widjects[z].hidePackageOptions(p.data);
				}
			}
		}
	}
	
	

	if (p.to == "BEC" && p.from == "SELLING_CURRENCY_SELECTOR" ) {
		if (p.command == "SET_SELLING_CURRENCY") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC'  && widjects[z].place !='CONTINUE' ){
					widjects[z].setSellingCurrency(p.data);
				}
			}
		}
	}

	if (p.to == "BEC" && p.from == "RESULTS" ) {
		if (p.command == "SEARCHAGAIN") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC' && widjects[z].place !='CONTINUE') {
					widjects[z].searchAgain();
				}
				if (widjects[z].type == 'ERROR' ){
					widjects[z].clear();
				}
			}
		}
	}
	 
	if (p.to == "WARNING") {
		if (p.command == "DISPLAY") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'WARNING') {
					widjects[z].display(p.data.title, p.data.message,p.data.itemcode,p.data.additionalvalues);
				}
			}
		}
		if (p.command == "CLEAR") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'WARNING') {
					widjects[z].clear();
				}
			}
		}
	}
	
	if (p.to == "MESSAGE") {
		if (p.command == "DISPLAY") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'MESSAGE') {
					widjects[z].display(p.data.title, p.data.message,p.data.reload);
				}
			}
		}
		if (p.command == "CLEAR") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'MESSAGE') {
					widjects[z].clear();
				}
			}
		}
	}
	
	if (p.to == "ERROR") {
		if (p.command == "DISPLAY") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'ERROR') {
					widjects[z].display(p.data.title, p.data.message,p.data.append);
				}
			}
		}
		if (p.command == "CLEAR") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'ERROR') {
					widjects[z].clear();
				}
			}
		}

	}
	if (p.from == "CART_SUMMERY") {
		if (p.command == "PAYMENT") {
			var url = content_cdn_path+"PaymentPage.do?method=addtocart&payment=true&transectionId="
					+ p.actionUrl;
			window.location = url;
		}
	}

	if (p.from == "BEC_HOTEL_WEB_AGAIN") {
		if (p.command == "SEARCH") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'RESULTS') {
					widjects[z].searchAgain(p.data);
					
				}
			}

		}
	}
	

	if (p.to == "UPSELLING") {
		
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'UPSELLING' ) {
					if (p.command == "LOAD") {
						widjects[z].load(p.data.product);
					}
					if (p.command == "RESULTS") {
						widjects[z].getResults(p.data.product);
					}
			}

		}
	}

	
	if (p.from == "ADD_PRODUCT") {
		if (p.command == "LOAD") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'BEC' && (widjects[z].place)
						&& widjects[z].place == 'CONTINUE') {
					widjects[z].show(p.data.product);
				}
			}

		}
	}
	if (p.from == "RESULT") {
		if (p.command == "ADDTOCART") {			
			var url =content_cdn_path+ "PaymentPage.do?method=addtocart&transectionId="
					+ p.actionUrl;
			//if (p.data.vacation)
			//	url =content_cdn_path+ "Search.do?method=getVacationContinue&transectionId="
			//			+ p.actionUrl;
			
			try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
			if (p.data.payment || p.data.cart) {
				if((p.data.remove) && (p.data.onlyoneitem)){
					if (p.data.cart) {
						 jQuery( "#confirmMsgDiv" ).dialog({
							 resizable: true,
							 height:180,
							 modal: true,title: 'Alert!',
							 buttons: {
								 "Yes": function() {
									 if(loaderType == "WEB"){
										 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","PROCESS","",{},'','0'));
									 }else if(loaderType == "CC"){
										 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
									 }
									 //
										url += fillQstrFromJson(frm, p.data);
										sendAjax(url, "POST", '', function(resp) {
											doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","HIDE","",{},'','0'));
											doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))
											var respObj = eval('('+resp+')');
											if ('OK' == respObj.status) {
												doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
												if(!p.data.remove){
													doIWC(new IWCParams('RESULTS','UPSELLING','LOAD','',{'product':p.data.product},'','jQuery{wid}'));
													//jQuery("html, body").animate({ scrollTop: 0 }, "slow");
												}
											} else if('WRN' == respObj.status) {
												
												if (p.data.vacation) {
													for ( var z = 0; z < widjects.length; z++) {
														if (widjects[z].type == 'RESULTS') {
														//	widjects[z].refresh(respObj.status);
														}
													}
													doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
												}else{
													respObj.additionalValues.product = p.data.product;
													respObj.additionalValues.remove = p.data.remove;
													doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
													doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
												}
											
											}else{
												if (p.data.vacation) {
													if('ERR' == respObj.status) {
														try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
														doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
														doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
													}
														
													for ( var z = 0; z < widjects.length; z++) {
														if (widjects[z].type == 'RESULTS') {
															widjects[z].refresh(respObj.status);
														}
													}
												}else{
													try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
													doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
													doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
												}
											}
											doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))
		
										}, true);
										try{
											var numItem = document.getElementById('numItem').innerHTML;											
											if(numItem==1){
												setTimeout(function(){ 
													PriceElement = document.getElementsByClassName('cart-price-container');												
													PriceElement[0].innerHTML='<div class="message message-warning"><p>NO ITEMS SELECTED</p></div>';
												}, 500);												
											}
										}catch(e){alert(e);}
										jQuery(this).dialog("close");
								 },
								 "No": function() {
								 	jQuery(this).dialog( "close" );
								 }
								 
							 }
						 });
					} else {
						jQuery( "#confirmMsgDiv" ).dialog({
							 resizable: true,
							 height:180,
							 modal: true,title: 'Warning!',
							 buttons: {
								 "Yes": function() {
									  
									window.location=p.data.weblink;
								 },
								 "No": function() {
								 	jQuery(this).dialog( "close" );
								 }
							 }
						 });
					}
				} else if (p.data.cart) {
					
					if(loaderType == "WEB"){
						 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","PROCESS","",{},'','0'));
					 }else if(loaderType == "CC"){
						 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
					 }
					url += fillQstrFromJson(frm, p.data);
					sendAjax(url, "POST", '', function(resp) {
						doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","HIDE","",{},'','0'));
						doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))
						var respObj = eval('('+resp+')');
						if ('OK' == respObj.status) {
							doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
							if(!p.data.remove){
								doIWC(new IWCParams('RESULTS','UPSELLING','LOAD','',{'product':p.data.product},'','jQuery{wid}'));
								//jQuery("html, body").animate({ scrollTop: 0 }, "slow");
							}
						} else if('WRN' == respObj.status) {
							
							if (p.data.vacation) {
								for ( var z = 0; z < widjects.length; z++) {
									if (widjects[z].type == 'RESULTS') {
										//widjects[z].refresh(respObj.status);
									}
								}
								doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
							}else{
								respObj.additionalValues.product = p.data.product;
								respObj.additionalValues.remove = p.data.remove;
								doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
								doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
							}

						}else{
							if (p.data.vacation) {
								if('ERR' == respObj.status) {
									try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
									doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
									doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
								}
									
								for ( var z = 0; z < widjects.length; z++) {
									if (widjects[z].type == 'RESULTS') {
										widjects[z].refresh(respObj.status);
									}
								}
							}else{
								try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
								doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
								doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
							}
						}
						doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))

					}, true);
				} else{
					
					if(loaderType == "WEB"){
						 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","PROCESS","",{},'','0'));
					}else if(loaderType == "CC"){
						 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
					}
					
					var frm = document.createElement('FORM');
					document.body.appendChild(frm);
					
					if(p.data.payment )
						url+="&payment=true";
					else
						url+="&payment=false";
					
					frm.action = url;
					frm.method = 'post';
					fillFormFromJson(frm, p.data)
					frm.submit();
					try{
					jQuery('.popup-container-upselling').hide();
					}catch(e){}
				}
			} else {
				
				if(loaderType == "WEB"){
					 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","PROCESS","",{},'','0'));
				}else if(loaderType == "CC"){
					 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
				}
				
				url += fillQstrFromJson(frm, p.data);
				sendAjax(url, "POST", '', function(resp) {
					doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","HIDE","",{},'','0'));
					doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))
					var respObj = eval('('+resp+')');
					if ('OK' == respObj.status) {
						doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
						if(!p.data.remove){
							doIWC(new IWCParams('RESULTS','UPSELLING','LOAD','',{'product':p.data.product},'','jQuery{wid}'));
							//jQuery("html, body").animate({ scrollTop: 0 }, "slow");
							try{upsellingCommonFAInit();}catch(e){}
						}
					} else if('WRN' == respObj.status) {
						
						if (p.data.vacation) {
							for ( var z = 0; z < widjects.length; z++) {
								if (widjects[z].type == 'RESULTS') {
									//widjects[z].refresh(respObj.status);
								}
							}
							respObj.additionalValues.product = p.data.product;
							respObj.additionalValues.remove = p.data.remove;
							doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
						}else{
							respObj.additionalValues.product = p.data.product;
							respObj.additionalValues.remove = p.data.remove;
							doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
							doIWC(new IWCParams('ADD_PRODUCT','WARNING','DISPLAY','',{'title':'','message':respObj.message,'itemcode':respObj.itemcode,'additionalvalues':respObj.additionalValues,'append':false},'','jQuery{wid}'));
						}
					
					}else{
						if (p.data.vacation) {
							if('ERR' == respObj.status) {
								try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
								doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
								doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
								setTimeout(hideAddContinueBar, 500);
							}
								
							for ( var z = 0; z < widjects.length; z++) {
								if (widjects[z].type == 'RESULTS') {
									widjects[z].refresh(respObj.status);
								}
							}
						}else{
							try{setProCookie("show_criteria_"+proTranId,"N");	/* Y/N */}catch(e){}
							doIWC(new IWCParams("RESULTS", "SUMMERY", "RELOAD", "", {}, '', '0'))
							doIWC(new IWCParams('ADD_PRODUCT','ERROR','DISPLAY','',{'title':'','message':respObj.message,'append':false},'','jQuery{wid}'));
							setTimeout(hideAddContinueBar, 500);
						}
					}
					doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","HIDE","",{},'','0'));
					doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'))

				}, true);

			}

		}
	}

	if (p.from == "BEC_MAIN_WEB") {
		if (p.command == "SEARCH") {
			initProcessing = true;	//stop resizing the iframe
			try{setProCookie("show_criteria_"+proTranId,"Y");	/* Y/N */}catch(e){}
			
			if(document.getElementById('bec_container_frame') != null){
				try{var bcVal=document.getElementById('bec_container_frame').contentWindow.bookingChannel.value;}catch(e){}
				if('undefined'!==typeof bcVal){
					if("CC"==bcVal){
						 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
					}//WEB - Processing page is displayed using scripts.js in each portal project.
				}else{
					if(isIE()){doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));}
				}
			}
			
			var url =content_cdn_path+ "Search.do?method=loadWithResults&transectionId="
						+ p.actionUrl;
			
			var frm = document.createElement('FORM');
			document.body.appendChild(frm);
			frm.action = url;
			frm.method = 'post';
			fillFormFromJson(frm, p.data)
			frm.submit();

		}
	}

	if (p.from == "RESULTS") {
		if (p.to == "HOTEL_PROMO") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'HOTEL_PROMO') {
						widjects[z].show(p.data);
					}
				}
			}
			
		}
		
		
		if (p.to == "CHANGE_FLIGHT") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'CHANGE_FLIGHT') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		
		if (p.to == "CHANGE_FLIGHTS") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'CHANGE_FLIGHTS') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		
		if (p.to == "MORE_INFO") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'MORE_INFO') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		/***/
		if (p.to == "VAC_MORE_INFO") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'VAC_MORE_INFO') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		/***/
		if(p.to=="MORE_INFO_FIXED"){
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'MORE_INFO_FIXED') {				
						widjects[z].show(p.data);
					}
				}
			}
		}
		
		if (p.to == "DEALS_CALENDAR") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'DEALS_CALENDAR') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		
		if (p.to == "CANCELLATION_POLICY") {
			if (p.command == "SHOW") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'CANCELLATION_POLICY') {
						widjects[z].show(p.data);
					}
				}
			}
		}
		
		if (p.to == "GOOGLE_MAP") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'GOOGLE_MAP') {
						widjects[z].init(p.data);
					}
				}
			}
		}
		
		if (p.to == "GOOGLE_MAP_ANCHOR") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'GOOGLE_MAP_ANCHOR') {
						widjects[z].init(p.data);
					}
				}
			}
		}

		if (p.to == "VAC_HEADER") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'VAC_HEADER') {
						widjects[z].init(p.data);
					}
				}
			}

		}

		if (p.to == "PAGING") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'PAGINTION') {
						widjects[z].render(p.data);
					}
				}
			}
		}
		if (p.to == "SUMMERY") {
			if (p.command == "RELOAD") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'CART_SUMMERY') {
						widjects[z].reload();
					}
				}
			}
		}
		if (p.to == "SORT") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if ( widjects[z].type == 'SORT') {
						widjects[z].init(p.data);
					}
				}
			}
		}
		
		if (p.to == "INFORMATION") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if ( widjects[z].type == 'INFORMATION') {
						widjects[z].init(p.data);
					}
				}
			}
		}
		
		if (p.to == "FILTER") {
			if (p.command == "INIT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'PRICE_FILTER'
							|| widjects[z].type == 'STAR_FILTER'
							|| widjects[z].type == 'NAME_FILTER'
							|| widjects[z].type == 'BOOKTYPE_FILTER'
							|| widjects[z].type == 'SUBERB_FILTER'
							|| widjects[z].type == 'NEARBYATTRACTION_FILTER'
							|| widjects[z].type == 'TIME_FILTER_Return'
							|| widjects[z].type == 'TIME_FILTER_Arrival'
							|| widjects[z].type == 'TIME_FILTER_Departure'
							|| widjects[z].type == 'AIRELINE_FILTER'
							|| widjects[z].type == 'SORT'
							|| widjects[z].type == 'CARTYPE_FILTER'
							|| widjects[z].type == 'CRT_INFO'
							|| widjects[z].type == 'SPECIAL_DEALS_FILTER'
							|| widjects[z].type == 'GUEST_REVIEW_RATING_FILTER'
							|| widjects[z].type == 'HOTELTYPE_FILTER'
							|| widjects[z].type == 'AMENITY_FILTER'
							|| widjects[z].type == 'MARKETINGAIR_FILTER'
							|| widjects[z].type == 'LAYOVER_FILTER'
							|| widjects[z].type == 'FLIGHT_LEG_FILTER'
							|| widjects[z].type == 'FLIGHT_TIMES_FILTER'
							|| widjects[z].type == 'FLIGHT_MATRIX_FILTER'
							|| widjects[z].type == 'PROGRAM_TYPE_FILTER') {
						widjects[z].init(p.data);
						
					}
				}
			}
		}

		if (p.to == "PRELOADER") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'PRELOADER') {
					if (p.command == "SHOW") {
						widjects[z].show();
					}
					if (p.command == "HIDE") {
						widjects[z].hide();
					}
				}
			}
		}
	}
	
/*Processing page*/	
	if (p.from == "PROCESSING") {
		if (p.to == "PROCESSING_PAGE") {
			for ( var z = 0; z < widjects.length; z++) {
				if (widjects[z].type == 'PROCESSING_PAGE') {
					if (p.command == "SHOW") {
						widjects[z].show();
					}
					if (p.command == "HIDE") {
						widjects[z].hide();
					}
					if (p.command == "INIT") {
						widjects[z].init();
					}
					if (p.command == "PROCESS") {
						widjects[z].process();
					}
					if (p.command == "FLEX") {
						widjects[z].flex_search(p.data.checkInDate,p.data.checkOutDate);
					}
				}
			}
		}
	}

	if (p.from == "PAGING") {
		if (p.to == "RESULTS") {
			if (p.command == "PAGE") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'RESULTS') {
						widjects[z].renderPage(p.data.pageNo);
					}
				}
			}
		}
	}

	if (p.from == "FILTER") {
		if (p.to == "RESULTS") {
			if (p.command == "FILTER") {
				for ( var z = 0; z < widjects.length; z++) {
					
					//setProCookie("show_criteria_"+proTranId,"N");	
					if(p.data.by=='RESET' && (widjects[z].type == 'PRICE_FILTER'
							|| widjects[z].type == 'STAR_FILTER'
							|| widjects[z].type == 'NAME_FILTER'
							|| widjects[z].type == 'BOOKTYPE_FILTER'
							|| widjects[z].type == 'SUBERB_FILTER'
							|| widjects[z].type == 'NEARBYATTRACTION_FILTER'
							|| widjects[z].type == 'TIME_FILTER_Return'
							|| widjects[z].type == 'TIME_FILTER_Arrival'
							|| widjects[z].type == 'TIME_FILTER_Departure'
							|| widjects[z].type == 'AIRELINE_FILTER'
							|| widjects[z].type == 'SPECIAL_DEALS_FILTER'
							|| widjects[z].type == 'GUEST_REVIEW_RATING_FILTER'
							|| widjects[z].type == 'LAYOVER_FILTER'
							|| widjects[z].type == 'FLIGHT_LEG_FILTER'
							|| widjects[z].type == 'FLIGHT_TIMES_FILTER'
							|| widjects[z].type == 'FLIGHT_MATRIX_FILTER' || (widjects[z].type == 'SORT' &&  (widjects[z].reset!=undefined)))){
						widjects[z].reset(p.data);
					}
					//setProCookie("show_criteria_"+proTranId,"Y");
					if (widjects[z].type == 'RESULTS'){
						//setProCookie("show_criteria_"+proTranId,"N");
						widjects[z].filter(p.data);
						//setProCookie("show_criteria_"+proTranId,"Y");
					}
					
				}
			}
		}
	}

	if (p.from == "SORT") {
		if (p.to == "RESULTS") {
			if (p.command == "SORT") {
				for ( var z = 0; z < widjects.length; z++) {
					if (widjects[z].type == 'RESULTS') {
						widjects[z].sort(p.data);
					}
				}
			}
		}
	}
	
	if(p.to == "Booking Engine"){
		if (p.command == "GmapSearchAgain") {
			for ( var z = 0; z < widjects.length; z++) {
			if (widjects[z].type == 'BEC' && widjects[z].place != 'CONTINUE') {
				widjects[z].searchGmapAgain(p.data.location);
			}}
		}
	}
	
	if (p.from == "PRE_RESERVATION") {
		if (p.command == "LOAD") {
			var url = content_cdn_path+"PreReservation.do?method=load&transectionId="
					+ p.actionUrl;
			window.location = url;
		}
		
		if (p.command == "SHOW") {			
			for ( var z = 0; z < widjects.length; z++) {				
				if (widjects[z].type == 'PRE_RESERVATION') {
					widjects[z].show(p.data);
				}
			}
		}
	}
	
	if (p.from == "PAYMENT" || p.from == "CONFIRMATION") {
		if (p.command == "SHOW") {			
			for ( var z = 0; z < widjects.length; z++) {				
				if (widjects[z].type == 'FARE_RULE') {
					widjects[z].show(p.data);
				}
			}
		}
	}

}

function RezWidget(id, name, type) {
	this.id = id;
	this.name = name;
	this.type = type;
	this.ajax = function(url, method, data, success, async) {
		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera,
									// Safari
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function(data) {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				success(xmlhttp.responseText, this);
			}

		}
		xmlhttp.wjt = this;
		xmlhttp.open(method, url, async);
		xmlhttp.send(data);
	}
}
var sendAjax = function(url, method, data, success, async) {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(data) {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			success(xmlhttp.responseText);
		}

	}
	xmlhttp.open(method, url, async);
	xmlhttp.send(data);
}

var widjects = [];

function fillFormFromJson(form, json) {
	for (p in json) {
		var x = document.createElement('INPUT');
		x.name = p;
		x.type = 'hidden';
		x.value = json[p];
		form.appendChild(x);
	}
}
function fillQstrFromJson(form, json) {
	var q = "";
	for (p in json) {
		q += "&" + p + "=";
		q += escape(json[p]);

	}
	return q;
}


function changeVacationItem(product,transectionId){
	if("F"==product){
		IWC(new IWCParams("RESULTS","CHANGE_FLIGHT","SHOW","",{},transectionId,0));
	}else{
		doIWC(new IWCParams('RESULTS','UPSELLING','RESULTS','',{'product':product},'','jQuery{wid}'));
	}
}
function changeFlight(product,transectionId){
	if("F"==product){
		IWC(new IWCParams("RESULTS","CHANGE_FLIGHTS","SHOW","",{},transectionId,0));
	}
}

try{
jQuery.fn.extractObject = function() {
	  var accum = {};
	  function add(accum, namev, value) {
		  try{
		    if (namev.length == 1)
		      accum[namev[0]] = value;
		    else {
		      if (accum[namev[0]] == null)
		        accum[namev[0]] = {};
		      add(accum[namev[0]], namev.slice(1), value);
		    }
		  }catch(e){}
	  }; 
	  this.find('input[type!=radio], textarea, select,input[type=radio]:checked').each(function() {
		  try{
			  	var val =  jQuery(this).val();
			  	if(jQuery(this).attr('type')=='checkbox'){
			  		if (!jQuery(this).attr('checked')){
			  			val = '';
			  		}
			  	}
			  	add(accum, jQuery(this).attr('name').split('.'),val);
		  }catch(e){}
	  });
	  return accum;
	} ;
}catch(e){}
	// ...


function getQuiryString(json){
	var qstr = "";
	for(p in json) {
		qstr+= "localizeJsonArray" != p ? "&"+p+"="+(json[p]) : "&"+p+"=";
	}
	qstr =qstr.replace('&','');
	return qstr;
} 

function unescapejson(json){
	var rj = {};
	for(p in json) {
		rj[p] =unescape( json[p] );
	}
	return rj;
}

var dbg = false;


function RezLookup(){
	
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


var sessionClock = false;
function validateSession(){
	try{
		if(!getUrlVars()["transectionId"])
			return;
		if(window.parent != window){
			try{
				window.parent.document.body.style
				return ;
			}catch(e){
				
			}
		}
		
			jQuery.get(content_cdn_path+'Welcome.do?method=checksession&transectionId='+getUrlVars()["transectionId"], function(data) {
		 	if("N"==data){
		 		reloadParent();
		 		window.location = window.location;
		 	}
		});
	
	}catch(e){
		alert(e);
	}
}
try{
jQuery(document).ready(function(){
	try{
		//window.parent.postMessage('url@@'+window.location.href.toString(), '*');
	}catch(e){
		
	}
	 
	if(!sessionClock){
		setInterval("validateSession()", 1000*60*5);
		sessionClock = true;
	}
});
}catch(e){}


function initSpeedTool(){
	
var toolstr = 	  '<div id="moniteringtool" title="Rezgateway&trade; Speed Monitoring Tool V1.0.00" style="display: none;">'+
	  				'<iframe id="moniteringtoolif" style="width: 1020px" height="400px"  ></iframe>'+
	  			'</div>';
document.write(toolstr);
	  			 
}

try{
var isCtrl = false;
 
jQuery(document).keyup(function (e) {
	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
	if(e.which == 17) isCtrl=true;
	if(e.which == 77 && isCtrl == true) {
		 //loadTool();
		//run code for CTRL+S — ie, save!
	return false;
}
});
 
}catch(e){}


function loadTool(){
	if(window.parent != window || !getUrlVars()["transectionId"])
		return;
	
	jQuery("#moniteringtoolif")[0].src = "traceviewer.jsp?transectionId="+getUrlVars()["transectionId"]+"&init=true";
	jQuery('#moniteringtool').dialog({
		modal: false,
		width: 1100,
		resizable: false
	});
}

//When this is using in IE9 complete browser getting freeze
//Temporary comment this until identify exact issue.
//initSpeedTool();

try{
window.addEventListener('message', receiveMessage, false);
}catch(e){}
function receiveMessage(evt) {
	
   if('reload'==evt.data){
	   setTimeout('window.location.reload(true)',10);// = window.location;
   }
   if('getUrl'==evt.data){
	   window.parent.postMessage('url@@'+window.location.href.toString(), '*');
	}
   
}
function reloadParent(){
	if(window.parent)
		window.parent.postMessage('reload', '*');
}

function getPaginationString(currentPage,rpp,length,id,removeFromLastPage){
	var str = '<div class="paging_left fleft page_caption ">Currently Showing '+((currentPage-1)*rpp +1 )+'-'+((currentPage-1)*rpp + rpp )+' of '+length+'  </div>';                
		
	if(noofpgs > 1 ){
	
		if(currentPage >= 2){
	    	 str+= '<span  class="page_first" ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(1)+'},\'\',\'jQuery{wid}\'))" >'+" <<  </a> </span>" 
	     }         	
	    
	     if(currentPage-2>0)
	     	str+= '<span  class="page_two"  ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(currentPage-2)+'},\'\',\'jQuery{wid}\'))" >'+ ((currentPage-3)*rpp+1)+'-'+((currentPage-3)*rpp + rpp) + "</a> </span>";
	     if(currentPage-1>0)
	     	str+='<span  class="page_one"  ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(currentPage-1)+'},\'\',\'jQuery{wid}\'))" >'+ ((currentPage-2)*rpp+1)+'-'+((currentPage-2)*rpp + rpp) + "</a> </span>";
	     
	     str+= '<span  class="page_zero" >'+((currentPage-1)*rpp+1)+'-'+((currentPage-1)*rpp + rpp -((noofpgs ==  currentPage)?removeFromLastPage:0)) + " </span>";
	     
	     if(currentPage+1<=noofpgs)
	     	str+= '<span  class="page_one_up"  ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(currentPage+1)+'},\'\',\'jQuery{wid}\'))" >'+ ((currentPage)*rpp+1)+'-'+((currentPage)*rpp + rpp-((noofpgs ==  currentPage+1)?removeFromLastPage:0)) + "</a> </span> ";
	     
	     if(currentPage+2<=noofpgs)
	     	str+= '<span  class="page_two_up" ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(currentPage+2)+'},\'\',\'jQuery{wid}\'))" >'+ ((currentPage+1)*rpp+1)+'-'+((currentPage+1)*rpp + rpp-((noofpgs ==  currentPage+2)?removeFromLastPage:0)) + "</a> </span>";
	     
	     
	     
	     if(currentPage <= (noofpgs-2)){
	    	 str+='<span  class="page_last" ><a href="#RESULTS" onclick="doIWC(new IWCParams(\'PAGING\',\'RESULTS\',\'PAGE\',\'\', {\'pageNo\':'+(noofpgs)+'},\'\',\'jQuery{wid}\'))" >'+ " >> </a></span>" 
	     }         	
	       
	       str+=' ';
		document.getElementById('pagination_'+id).innerHTML= str;
		}else{
			document.getElementById('pagination_'+id).innerHTML= '<span  class="page_zero" >0</span>';
		}
	return str;
	}
var framefenster = [];
jQuery(document).ready(function(){
  
	
 
});
var inc = 0;
initProcessing = false;	//global variable to stop resizing the iframe (when true)
var bcv=null;
function autoresize_frames() {
	if(!initProcessing){
	  // document.title = ((inc++) + ' TIMER ' +  framefenster.length  + ' - ')
	   if(framefenster.length == 0)
		   framefenster = document.getElementsByTagName("iFrame");
	 try{
	  for (var i = 0; i < framefenster.length; ++i) {
		  if(!("paygatewayFrame"==framefenster[i].id || "productdetailsframe"==framefenster[i].id   )){
		  if(framefenster[i].contentWindow.document.body){
	    	  
	        
	         if(jQuery(framefenster[i].contentWindow.document.body).css('min-height')=='100%'){
	        	 jQuery(framefenster[i].contentWindow.document.body).css('min-height','');
	         }
	        
	         if("WEB"==bcv || null==bcv || 'undefined'==bcv){
	        	 bcv=((typeof jQuery("#bec_container_frame").contents().find("#bookingChannel").val()!='undefined') ? (jQuery("#bec_container_frame").contents().find("#bookingChannel").val()) : (typeof document.getElementById('ResPkgSearchForm').bookingChannel.value!='undefined' ? document.getElementById('ResPkgSearchForm').bookingChannel.value : null));
        	 }
	         var addon_height = "CC"==bcv ? 20 : 620;
	         var framefenster_size = framefenster[i].contentWindow.document.body.offsetHeight + addon_height ;
	        
	        var is_ie9 = navigator.userAgent.indexOf("MSIE 9.0") > -1;
	        if(!window.opera && !(isIE() && "WEB"==bcv) && isIE()) {
	           framefenster_size =('contentDocument' in framefenster[i]?  framefenster[i].contentDocument :  framefenster[i].contentWindow.document).body.offsetHeight;
	        }
	        if(jQuery(framefenster[i].contentWindow.document.body).css('height')!='undefined' && jQuery(framefenster[i].contentWindow.document.body).css('height')!='' ){
	        	//framefenster_size = jQuery(framefenster[i].contentWindow.document.body).css('height').split('px')[0];
	        }
	        var isSafari = false;
	        var ua = navigator.userAgent.toLowerCase();
	        if (ua.indexOf('safari')!=-1){ 
	          if((ua.indexOf('chrome')  > -1) || ua.indexOf('chromium')  > -1){
	        	  isSafari = true;
	           //alert("1") // chrome
	        	//  isSafari = true;
	         //}else{
	        	 // alert("Safari")
	        	//  isSafari = true;
	          }
	         }
	        
	        if(framefenster[i].contentWindow.document.body.offsetHeight && framefenster[i].contentWindow.document.body.offsetHeight> framefenster_size){
	        	//alert(2)
	        	framefenster_size = framefenster[i].contentWindow.document.body.offsetHeight + 620 ;
	        }
	        framefenster[i].style.height = framefenster_size  + 'px';
	       // document.title = framefenster_size;
	        
	      }
	  }
	  }}catch(e){
		//  document.title = (e)
	  }
	  window.setTimeout( autoresize_frames  , 200); 
	}
}

window.setTimeout( autoresize_frames , 100);


function createXMLHttpRequest(){
	try{ return new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
    try{ return new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
	try{ return new XMLHttpRequest(); }catch (e) {}
	return null;
}


function reAdjustRates(){
	
	if(loaderType == "WEB"){
		 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","PROCESS","",{},'','0'));
	}else if(loaderType == "CC"){
		 doIWC(new IWCParams("RESULTS", "PRELOADER", "SHOW", "", {}, '', '0'));
	}
	
	
	var changeCard = jQuery('#credit_card_type').val();
	var method="POST";
	var xhr=createXMLHttpRequest();
	var sendUrl="PaymentPage.do?method=reAdjustRates&paymentType="+jQuery('#payment_method_1').val()+   "&paymentMethod=" + ( jQuery('input[name = "paymode"]:checked').val()!= undefined ? jQuery('input[name = "paymode"]:checked').val() : jQuery('#paymode').val() ) +"&cardType=" +jQuery('#credit_card_type').val()+"&OnlinePaymentMethod=" +jQuery('input[name="onlinepaymode"]:checked').val()+"&transectionId="+getUrlVars()["transectionId"];
	xhr.open(method, sendUrl, true);
    xhr.onreadystatechange = function(){
    try{
    	if (xhr.readyState != 4){ 
    		
    	}else{
    		 if (xhr.status == 200){	
    			 
    			 doIWC(new IWCParams("RESULTS", "PRELOADER", "HIDE", "", {}, '', '0'));
    			 doIWC(new IWCParams("PROCESSING","PROCESSING_PAGE","HIDE","",{},'','0'));
	    		var myJSONtext = xhr.responseText;		    	
		    	
		    	var myObject = eval('(' + myJSONtext + ')');
		    	try{jQuery("#paymentdetails_subtotal").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_B4_TAX_PG):myObject.TOTAL_B4_TAX_PG);}catch(e){};
		    	
		    	try{	
		    		jQuery("#totchargeamt").html((thousandGrouping=="Y")?setGrouping(myObject.BOOKING_VALUE):myObject.BOOKING_VALUE);
		    		jQuery("#totchargeamt-basket").html((thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE):myObject.PAYABLE_VALUE);	
		    		jQuery("#tottaxamountdivid").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_TAX_VALUE):myObject.TOTAL_TAX_VALUE);
		    		jQuery("#totaltaxpgcurrid").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_TAX_VALUE_PG):myObject.TOTAL_TAX_VALUE_PG);
		    		jQuery("#totalchargeamtpgcurrid").html((thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_PG):myObject.PAYABLE_VALUE_PG);
		    		jQuery("#totchgpgamt_cc").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG);	 
		    		jQuery("#totchgpgamt_fc").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG);	  
		    		jQuery("#totalpaynowamountpgcurrid").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG);	    		
		    		jQuery("#totalamountprocessnow").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW):myObject.TOTAL_PAY_NOW);			    		
		    		jQuery("#crdAmountDisplayOff").val(myObject.TOTAL_PAY_NOW);
		    		jQuery("#totpayNowamt").html((thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_PG):myObject.PAYABLE_VALUE_PG);    					    		
		    		jQuery("#subtotal").html((thousandGrouping=="Y")?setGrouping(myObject.TOTAL_B4_TAX):myObject.TOTAL_B4_TAX);		    		
		    		jQuery("#totalamountbyairlinepgcurrid").html((thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_AIRLINE_PG):myObject.PAYABLE_VALUE_AIRLINE_PG);
		    		jQuery("#totalamountchargebyairline").html((thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_AIRLINE):myObject.PAYABLE_VALUE_AIRLINE); 	
		    	}catch(e){}		    	
		    	try{
		    		jQuery("#crdAmountDisplayOff_sell").val(0);
		    	}catch(e){
		    		
		    	}
	    		try{//pgcurrid
		    		document.getElementById("total_package_cost").innerHTML=myObject.PAYABLE_VALUE;	
		    		document.getElementById("final_booked_value").innerHTML=myObject.PAYABLE_VALUE;
		    		
		    		document.getElementById("package_other_chargers").innerHTML=myObject.TOTAL_TAX_VALUE;
		    		document.getElementById("totaltaxpgcurrid").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.TOTAL_TAX_VALUE_PG):myObject.TOTAL_TAX_VALUE_PG;
		    		document.getElementById("totalchargeamtpgcurrid").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_PG):myObject.PAYABLE_VALUE_PG;
		    		document.getElementById("totchgpgamt_cc").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG;	   
		    		document.getElementById("totchgpgamt_fc").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG;	  
		    		document.getElementById("totpayNowamt").innerHTML=myObject.PAYABLE_VALUE_PG;
		    		document.getElementById("totalpaynowamountpgcurrid").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.TOTAL_PAY_NOW_PG):myObject.TOTAL_PAY_NOW_PG;
		    		document.getElementById("totalamountbyairlinepgcurrid").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_AIRLINE_PG):myObject.PAYABLE_VALUE_AIRLINE_PG; 
		    		document.getElementById("totalamountchargebyairline").innerHTML=(thousandGrouping=="Y")?setGrouping(myObject.PAYABLE_VALUE_AIRLINE):myObject.PAYABLE_VALUE_AIRLINE; 
		    		
		    	}catch(e){}   
		    	try{document.getElementById("payNwpaymentsection").innerHTML=myObject.TOTAL_PAY_NOW;}catch(e){}
		    	try{document.getElementById("totalbalance_addnewservice").innerHTML=myObject.TOTAL_PAY_NOW;}catch(e){}
		    	try{
		    		if (jQuery("#idtotalpkgcost")){
		    			var totalpkgcost = jQuery("#hidTotalWithOtherCharges").val();
		    			var totaltacandotrchrg = jQuery("#hidOtherCharges").val();
		    			totalpkgcost = Number(totalpkgcost) - Number(totaltacandotrchrg);
		    			totalpkgcost = Number(totalpkgcost) + Number(myObject.TOTAL_TAX_VALUE);
		    			jQuery("#idtotalpkgcost").html((thousandGrouping=="Y")?setGrouping(totalpkgcost):totalpkgcost);
		    			jQuery("#hidTotalWithOtherCharges").val(totalpkgcost);
		    			jQuery("#hidOtherCharges").val(myObject.TOTAL_TAX_VALUE);
		    		}
		    	}catch(e){
		    		
		    	}
		    	
		    	if (changeCard=='Y'){
		    		document.forms[0].cardTypeOpsId.value='VI';
		    	}
		    	//this will close the preloader after values changed
		    	if(changeCard=='N' && document.getElementById("preloaderimgid")!=null){
	     			document.getElementById("preloaderimgid").style.display="none";
	    		 }
		    	
		    	try {
		    		if(myObject.PROMOTION_ID != null){
		    			jQuery("#ccofferbanner").html(myObject.PROMOTION_TEXT);
		    			jQuery("#cardPromotionId").val(myObject.PROMOTION_ID);
		    			jQuery("#validationLength").val(myObject.VALIDATION_LENGTH);
		    		}else{
		    			jQuery('.cc-offer-banner').remove();
		    		}
		    		
				} catch (e) {}
    	}    		 
    }
	}catch(e){}
	};				
    xhr.send(null);
}
function showOffLineRef(v){
	
}
function  callAjaxForRateAjustment(){
	reAdjustRates();

}
function hideAddContinueBar(){
	try{
		jQuery('.popup-container-upselling').hide();
	}catch(e){}
}
/* Function to check whether the browser is Internet Explorer*/
function isIE() {
  var ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie; 
}