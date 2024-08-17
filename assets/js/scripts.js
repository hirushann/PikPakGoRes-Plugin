// JavaScript Document

var schemaName="pikpakgo"
//var subURL="http://demo.secure-reservation.com/"+schemaName+"Reservations/";
//var subURL="../../";
var subURL="http://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/";
var cookieExpMin = 40;
var dateFormatKey = 'dd M yy';

function onewayHide(){
	if(document.forms["form1"].elements["Air_TripType1"].checked){
	//	console.log('Loaging o 1 ');
		document.getElementById("retDateDisplay_date").style.display="none";
		document.getElementById("retDateDisplay_time").style.display="none";
		document.getElementById('trip_type').value="O";
		document.getElementById("flax_container_div").style.display="none";
		document.getElementById('multi_des_01').style.display="none";		// Multi Destination 1     
		document.getElementById('air_Loc_dep_m_2').value="TEST";
		document.getElementById('air_Loc_to_m_2').value="TEST";
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="TEST";
		document.getElementById('air_Loc_to_m_3').value="TEST";
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="TEST";
		document.getElementById('air_Loc_to_m_4').value="TEST";	
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="TEST";
		document.getElementById('air_Loc_to_m_5').value="TEST";		
	
	}else if(document.forms["form1"].elements["Air_TripType3"].checked){
		//console.log('Loaging o 2 ');

		var newCheckOutDate = new Date(jQuery('#air_departure').val());
				


		document.getElementById("retDateDisplay_date").style.display="none";
		document.getElementById("retDateDisplay_time").style.display="none";
		document.getElementById('trip_type').value="M";
		document.getElementById("flax_container_div").style.display="none";
		document.getElementById('multi_des_01').style.display="block";		// Multi Destination 1
		document.getElementById('air_Loc_dep_m_2').value="";
		document.getElementById('air_Loc_to_m_2').value="";
		document.getElementById('hid_air_Loc_dep_m_2').value="";
		document.getElementById('hid_air_Loc_to_m_2').value="";

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		var month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_2').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="";
		document.getElementById('air_Loc_to_m_3').value="";
		document.getElementById('hid_air_Loc_dep_m_3').value="";
		document.getElementById('hid_air_Loc_to_m_3').value="";
		
		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_3').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="";
		document.getElementById('air_Loc_to_m_4').value="";
		document.getElementById('hid_air_Loc_dep_m_4').value="";
		document.getElementById('hid_air_Loc_to_m_4').value="";	

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_4').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="";
		document.getElementById('air_Loc_to_m_5').value="";
		document.getElementById('hid_air_Loc_dep_m_5').value="";
		document.getElementById('hid_air_Loc_to_m_5').value="";		

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_5').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
	}else  if(document.forms["form1"].elements["Air_TripType2"] != undefined && document.forms["form1"].elements["Air_TripType2"].checked){
		//console.log('Loaging o 3 ');
		document.getElementById("retDateDisplay_date").style.display="inline-block";
		document.getElementById("retDateDisplay_time").style.display="inline-block";
		document.getElementById('trip_type').value="R";
		document.getElementById("flax_container_div").style.display="block";
		document.getElementById('multi_des_01').style.display="none";		// Multi Destination 1 
		document.getElementById('air_Loc_dep_m_2').value="TEST";
		document.getElementById('air_Loc_to_m_2').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_2').value="TEST";
		document.getElementById('hid_air_Loc_to_m_2').value="TEST";
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="TEST";
		document.getElementById('air_Loc_to_m_3').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_3').value="TEST";
		document.getElementById('hid_air_Loc_to_m_3').value="TEST";
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="TEST";
		document.getElementById('air_Loc_to_m_4').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_4').value="TEST";
		document.getElementById('hid_air_Loc_to_m_4').value="TEST";
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="TEST";
		document.getElementById('air_Loc_to_m_5').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_5').value="TEST";
		document.getElementById('hid_air_Loc_to_m_5').value="TEST";	
		
		//console.log('Loaging o 3 >' + document.getElementById('multi_des_03').style.display);
	}
	setTimeout('resizeContainer()',200);
	//alert(document.getElementById('trip_type').value)
	
}

function onewayHide_V(){
	if(document.forms["form1"].elements["Air_TripType1_V"].checked){
		document.getElementById("retDateDisplay_V").style.display="none";
		
		document.getElementById('trip_type_v').value="O";
	} else if(document.forms["form1"].elements["Air_TripType2_V"].checked){
		document.getElementById("retDateDisplay_V").style.display="block"
		document.getElementById('trip_type_v').value="R";
	}
}

function returnLocHide(){
	if(document.forms["form1"].elements["_ReturnCar"].checked){
		document.getElementById("retLocDisplay").style.display="none";
		document.getElementById("car_Loc1").style.display="none";
		document.getElementById("car_Loc1").setAttribute('validate', 'formcar');
		document.getElementById("car_Loc1").value = document.getElementById("car_Loc").value;	// return location same as pickup location
		document.getElementById("hid_car_Loc1").value = document.getElementById("hid_car_Loc").value;
		}else if(document.forms["form1"].elements["_ReturnCar"]){
		document.getElementById("retLocDisplay").style.display="block";
		document.getElementById("car_Loc1").style.display="block";
	}
}

function checkFlex(stat){
	if(stat=="Yes"){
		document.getElementById('Air_DepTime_a').style.display="none";
		document.getElementById('dep_flexx').style.display="block";
		document.getElementById('Air_RetTime_a').style.display="none";
		document.getElementById('ret_flexx').style.display="block";
		document.getElementById('dep_time_txt').innerHTML="Days";
		document.getElementById('ret_time_txt').innerHTML="Days";
		document.ResPkgSearchForm.isFlex.value="Y";
	}else{
		document.getElementById('Air_DepTime_a').style.display="block";
		document.getElementById('dep_flexx').style.display="none";
		document.getElementById('Air_RetTime_a').style.display="block";
		document.getElementById('ret_flexx').style.display="none";
		document.getElementById('ret_time_txt').innerHTML="Return Time";
		document.getElementById('dep_time_txt').innerHTML="Departing Time";
		document.ResPkgSearchForm.isFlex.value="N";
	}
}

function location_show(id){	
	jQuery("#pickUpCity_H_Loc").removeAttr('validate');
	jQuery("#pickUpCity_A_Loc").removeAttr('validate');
	
	 
	
	
	if (id=="hotel_location_drop"){
			
			
		document.getElementById("pickUpCity_A_Loc").setAttribute('validate', 'formTBK');
		document.getElementById("pickUpCity_H_Loc").setAttribute('validate', 'formT');
		document.getElementById("hid_pickUpCity_H_Loc").value='';
		document.getElementById("hid_pickUpCity_A_Loc").value='TEST';
		document.getElementById("pickUpCity_H_Loc").value='';
		document.getElementById("pickUpCity_A_Loc").value='TEST';
		//hid_pickUpCity_A_Loc
		//hid_pickUpCity_H_Loc
		
		document.getElementById('airport_drop').style.display="none";
		document.getElementById('hotel_drop').style.display="block";
		
		}else{	
		document.getElementById("pickUpCity_A_Loc").setAttribute('validate', 'formT');
		document.getElementById("pickUpCity_H_Loc").setAttribute('validate', 'formTBK');
  		
  		document.getElementById("hid_pickUpCity_A_Loc").value='';
		document.getElementById("hid_pickUpCity_H_Loc").value='TEST';
		
		document.getElementById("pickUpCity_A_Loc").value='';
		document.getElementById("pickUpCity_H_Loc").value='TEST';
		
		document.getElementById('hotel_drop').style.display="none";
		document.getElementById('airport_drop').style.display="block";
		
		}
	 
	
	
	}

function flightHide(){
	if(document.getElementById("Package_Type2").checked){	// Including Flight
		document.getElementById("Include_Flight").style.display="block";
		document.getElementById("Exclude_Flight").style.display="none";
		document.getElementById("package_Ex_des").setAttribute('validate', 'formpkg');

		// stop validation of hidden inputs in IE8.
		document.getElementById("package_Ex_des").value = 'TEST';
		document.getElementById("hid_package_Ex_des").value = 'TEST';
		document.getElementById("package_Loc_des").value = '';
		document.getElementById("package_Loc_ori").value = '';
		document.getElementById("hid_package_Loc_ori").value = '';
		document.getElementById("hid_package_Loc_des").value = '';
		
		document.getElementById("package_Loc_ori").setAttribute('validate', 'formP');
		document.getElementById("package_Loc_des").setAttribute('validate', 'formP');
		
		loadFpkgCountryAutocomplete();
		
	}else  if(document.getElementById("Package_Type1").checked){	// Excluding Flight
		document.getElementById("Include_Flight").style.display="none";
		document.getElementById("Exclude_Flight").style.display="block";
		document.getElementById("package_Ex_des").setAttribute('validate', 'formP');
		document.getElementById("package_Loc_des").setAttribute('validate', 'formpkg');
		document.getElementById("package_Loc_ori").setAttribute('validate', 'formpkg');

		// stop validation of hidden inputs in IE8.
		document.getElementById("package_Loc_des").value = 'TEST';
		document.getElementById("package_Loc_ori").value = 'TEST';
		document.getElementById("hid_package_Loc_ori").value = 'TEST';
		document.getElementById("hid_package_Loc_des").value = 'TEST';
		document.getElementById("package_Ex_des").value = '';
		document.getElementById("hid_package_Ex_des").value = '';
		
		loadFpkgCountryAutocomplete();
	}
	
}
//------------------------------------dhammika added---------------------------------

function setEngType(e){
	jQuery('#engLoaded').val(e);
	roomocc(e,jQuery("#norooms_"+e).val());
	fillForm(e);
	if(internalBEC){
		jQuery('#loading_window').hide();
		setTimeout('hideMask()',200);
	}
	setTimeout('resizeContainer()',10);
	//setTimeout('resizeContainer()',100);
	//changeCss( jQuery('#bookingChannel').val())
 	//alert(jQuery('#bookingChannel').val())
}


function opts(st,end,sel){
	var retStr="";
	for (var ixpe=st; ixpe<=end; ixpe++){
		if (!isNaN(sel)){
			if (sel==ixpe){
			retStr+="<option value=\""+ixpe+"\" selected=\"selected\">"+ixpe+"</option>\n";
			}else{
			retStr+="<option value=\""+ixpe+"\">"+ixpe+"</option>\n";
			}		
		}else{
			retStr+="<option value=\""+ixpe+"\">"+ixpe+"</option>\n";
		}
	}
	return retStr;
}


function roomocc(e,val,bec){
	if(e.length>1){
		var pkgtype = e.split('_');
		e = pkgtype[1];
	}else{
		e = e;	
	}
	jQuery('#roomCombo'+e).empty();
	jQuery('#roomCombo'+e).append(roomoccstring(e,val,bec));
	
}

function displayRooms() {
	
	var hotelSearchRadioBox = document.getElementById("hotelSearchRadioBox");
	var vacationSearchRadioBox = document.getElementById("vacationSearchRadioBox");
	
	if (hotelSearchRadioBox.checked == true){
		jQuery("#room_display_unit").show();
		jQuery("#hType_h_main").hide();
		jQuery("#hotel_type_H").hide();
		jQuery("#hotel-vacation_name_H_id").html("Hotel Name");
		jQuery("#vacation-home-label-id").html("Hotel Availability");
		
	} else if (vacationSearchRadioBox.checked == true){
		jQuery("#norooms_H").val("1").change();
		jQuery("#room_display_unit").hide();
		jQuery("#hType_h_main").show();
		jQuery("#hotel_type_H").show();
		jQuery("#hotel-vacation_name_H_id").html("Vacation Home Name");
		jQuery("#vacation-home-label-id").html("Vacation Home Availability");
	} 
  }

function roomoccstring(e,val,bec){
	var occstring = '';
	for(i=0;i<val;i++){
		if(e=="V" || e=="F" ){
		//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt\"></div><div class=\"fleft rooms paddingt black_head\">Adult</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt black_head\">Infant</div><div class=\"fleft rooms\">Room "+(i+1)+"</div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occInfant_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div></div><div class=\"clearfix\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>";
		try{
		var lblRoom = "";
		if((e=="V")){
			lblRoom = "<div class=\"option-sub-label\"><br />Room "+(i+1)+"</div>";
		}

		occstring+="<div class=\"flight-passenger-container\">"
			+lblRoom
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">Adult <span class='italic'> (s) </i></label></div>"

			+"<div><select id=\"R"+(i+1)+"occAdults_"+e+"\" name=\"R"+(i+1)+"occAdults_"+e+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer("+bec+");setInfant(this,'R1occInfant_"+e+"');\">\n"+opts(1,9,1)+"</select></div>"
			+"</div>"
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">Children<span class='italic'></span></label></div>"
			+"<div><select id=\"R"+(i+1)+"occChildren_"+e+"\" name=\"R"+(i+1)+"occChildren_"+e+"\" class=\"flight-passenger-select\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select></div>"
			+"</div>"
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">Infant<span class='italic'> (0-23 months)</span></label></div>"
			+"<div><select id=\"R"+(i+1)+"occInfant_"+e+"\" name=\"R"+(i+1)+"occInfant_"+e+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(0,1,0)+"</select></div></div><ul class=\"flight-child-container\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>"
			+"</ul>";
		
		}catch(e){alert(e);}
		}else if(e=="H" || e=="T"){
		//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt\"></div><div class=\"fleft rooms paddingt black_head\">Adult(s)</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt\">&nbsp;</div><div class=\"fleft rooms\">Room "+(i+1)+"</div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\">&nbsp;</div></div><div class=\"clearfix\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>";
		occstring+="<div class=\"hotel-passenger-block\"><ul>" +
				"<li class=\"hotel-passenger-label-text hotel-room-count\" style=\'display:none\'>Room "+(i+1)+"</li>" +
				"<li><div><label class=\"hotel-passenger-label  label-bg-common\">Adult <span class='italic'> (s)</span> </label></div><div><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"hotel-passenger-select\" onChange=\"resizeContainer("+bec+");\">\n"+opts(1,9,1)+"</select></div></li>" +
				"<li><div><label class=\"hotel-passenger-label label-bg-common\">Children <span class='italic'> </span></label></div><div><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"hotel-passenger-select\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select></div></li>" +
				"</ul>" +
				"<ul class=\"hotel-age-field\"><li id=\""+e+"_room_"+(i+1)+"_ages\"></li>" +
				"</ul></div>"; 
		}
		
		
	}
	// for activity, adult count drop down id should be "R1occAdults_A". So can't use the value (i + 1) from the above loop as i will be greater than 0
		if(e=="A"){
	//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt black_head\">Adult</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt\">&nbsp;</div><div class=\"clearfix fleft rooms\"><select id=\"R1occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R1occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\">&nbsp;</div></div><div class=\"clearfix\" id=\""+e+"_room_"+(1)+"_ages\"></div>";
	occstring+="" +
			"<ul class=\"activity-passenger-count\">" +
				"<li>" +
					"<div>" +
						"<label class=\"activity-passenger-label label-bg-common\">Adult<span class='italic'>(18+)</span></label>" +
					"</div>" +
					"<div>" +
						"<select id=\"R1occAdults_"+e+"\" class=\"user-options-select\" onChange=\"resizeContainer("+bec+");\">\n"+opts(1,9,1)+"</select>" +
					"</div>" +
				"</li>" +				
				"<li>" +
					"<div>" +
						"<label class=\"activity-passenger-label label-bg-common\">Children<span class='italic'></span></label>" +
					"</div>" +
					"<div>" +
						"<select id=\"R1occChildren_"+e+"\" class=\"user-options-select\" onChange=\"showages('"+e+"',"+(1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select>" +
					"</div>" +
				"</li>" +
			"</ul>" +
			"<div id=\""+e+"_room_"+(1)+"_ages\"></div>"; 
	}
	return occstring;
}
function setInfant(obj,element){
	
	jQuery("#"+element).html(opts(0,jQuery(obj).val(),0));
	
}

function showages(pkgtype,roomno,val){
	jQuery("#"+pkgtype+"_room_"+roomno+"_ages").empty();
	jQuery("#"+pkgtype+"_room_"+roomno+"_ages").append(showagesstring(pkgtype,roomno,val));
}
	
function showagesstring(pkgtype,roomno,val){
	var ages_string = '';
	if(val > 0) ages_string="<li class=\"flight-child-label\"><span class=\"hotel-passenger-label-text\">Age(s) of children</span></li>";
	//var ages_string1 = '';
	//var ages_string2 = '';
	ages_string +="<li class='flight-child-age'>";
	for(x=0;x<val;x++){
		
		if(pkgtype == "F" || pkgtype == "V"){
		ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(2,11,1)+"</select></div>";
		}else{
		ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(1,11,1)+"</select></div>";
		}	
	}
	ages_string +="</li>";
	
	//for(x=0;x<val;x++){
	//ages_string2 += "<div class=\"fleft rooms\"><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"textfmin\" onChange=\"resizeContainer();\">\n"+opts(1,19,1)+"</select></div>";
	//ages_string2 += "";
	//}
	//ages_string = "<div class=\"clearfix\">"+ages_string1+"</div><div class=\"clearfix\">"+ages_string2+"</div>";
	//ages_string = ""+ages_string1+""+ages_string2+"</div>";
	return ages_string;
}


function setSelRoomOcc(e){
	var tempOcc = '';
	for(i=0;i<jQuery("#norooms_"+e).val();i++){
		tempOcc += jQuery("#R"+(i+1)+"occAdults_"+e).val()+"|"+jQuery("#R"+(i+1)+"occChildren_"+e).val()+"|";
		if(jQuery("#R"+(i+1)+"occChildren_"+e).val()>0){
			var temp = '';
			for(j=0;j<jQuery("#R"+(i+1)+"occChildren_"+e).val();j++){
				temp += jQuery("#"+e+"_R"+(i+1)+"childage_"+(j+1)).val();
				if((j+1)<jQuery("#R"+(i+1)+"occChildren_"+e).val()){ temp += ",";}
			}
			tempOcc = tempOcc + temp+"|%|%|";
		}else{
			tempOcc += "-|%|%|";
		}
		if(jQuery("#R"+(i+1)+"occInfant_"+e).val()>0){
			tempOcc += jQuery("#R"+(i+1)+"occInfant_"+e).val()+"@";
		}else{
			tempOcc += "-@";
		}
	}
	//console.log(tempOcc)
	return tempOcc;
}


function setSelRoomOccForFlight(){		
	
	var tempOcc = '';		
	tempOcc += jQuery('#numberOfAdults').val()+"|"+jQuery('#numberOfChilds').val()+"|";
	if(jQuery('#numberOfChilds').val()>0){
		var temp = '';
		for(j=0;j<jQuery('#numberOfChilds').val();j++){
			temp += "1";
			if((j+1)<jQuery('#numberOfChilds').val()){ temp += ",";}
		}
		tempOcc = tempOcc + temp+"|%|%|";
	}else{
		tempOcc += "-|%|%|";
	}
	if(jQuery('#numberOfInfants').val()>0){
		tempOcc += jQuery('#numberOfInfants').val()+"@";
	}else{
		tempOcc += "-@";
	}	
	return tempOcc;
}


function setinfantcount(e){
	var tempcount = 0;
	for(i=0;i<jQuery("#norooms_"+e).val();i++){
		tempcount += parseInt(jQuery("#R"+(i+1)+"occInfant_"+e).val());
	}
	return tempcount;
}

function setchildcount(e){
	var tempcount = 0;
	for(i=0;i<jQuery("#norooms_"+e).val();i++){
		tempcount += parseInt(jQuery("#R"+(i+1)+"occChildren_"+e).val());
	}
	return tempcount;
}

function setadultcount(e){
	var tempcount = 0;
	for(i=0;i<jQuery("#norooms_"+e).val();i++){
		tempcount += parseInt(jQuery("#R"+(i+1)+"occAdults_"+e).val());
	}
	return tempcount;
}

function search(ex){
	
	try{
		window.parent.initForm();
	}catch(e){
		//alert(e)
	}
	var v = false;
	try{
		v = window.parent.searchValidate(); //To validate partner type
	}catch(e){
		//alert(e)
	}
	if(!v){
		defaultDataWithRegionAndCountry(ex)
		//jQuery("#pkgType").val(ex);
		//eval("LoadData_"+ex+"()");
		//submitData();
	}
}

function Processing(){
	jQuery('#rez-preloader',parent.document).fadeIn();
}
var internalBEC = false;
function doWJTSearch(form){
	 //alert(123)
	var data = convertJson(form,'BEC_HOTEL_WEB_AGAIN'==form["place"].value);
	var actionURL ="";
	 //alert(jQuery('#transectionId').val());
	IWC(new IWCParams(form["place"].value,"RESULT","SEARCH","",data,jQuery('#transectionId').val(),0)); 
	
}

function submitData(){
	Processing();	
	if(internalBEC){
		doWJTSearch(document.forms["ResPkgSearchForm"]);
	}else{
		document.forms["ResPkgSearchForm"].target = "_parent";
		document.forms["ResPkgSearchForm"].submit();
	}
}
 

function LoadData_V(){
	with(document.form1){
		var seatClass = "";
		if ("Economy" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "Economy";
		} else if ("Business" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "Business";
		} else if ("First" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "First";
		}
		var stateCode = "";
		if(V_RetLocHid.value.split('|')[4]=="-" || V_RetLocHid.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (V_RetLocHid.value.split('|')[4]);
	    }
		
		var inDate = new Date(Date.parse(vac_departure.value));
		var outDate = new Date(Date.parse(vac_arrival.value));
		var vnights = (outDate - inDate)/(1000*60*60*24);
		
		jQuery('#checkInDate').val(vac_departure.value);
		jQuery('#checkOutDate').val(vac_arrival.value);
		jQuery('#checkInTime').val(Air_DepTime.value); 
		jQuery('#checkOutTime').val(Air_RetTime.value);
		jQuery('#cityCode').val(hid_H_Loc_V.value);
		jQuery('#cityName').val(hid_H_Loc_V.value.split('|')[1]);
		jQuery('#countryCode').val(V_RetLocHid.value.split('|')[5] );
		jQuery('#countryName').val(V_RetLocHid.value.split('|')[5]);
		jQuery('#stateCode').val(stateCode);
		jQuery('#startingLocationName').val(V_DepFromHid.value.split('|')[0]);
		jQuery('#startingLocationCode').val(V_DepFromHid.value);
		jQuery('#startingCountryCode').val(V_DepFromHid.value.split('|')[5]);
		jQuery('#endingCountryCode').val("0");
		jQuery('#endingLocationName').val(V_RetLocHid.value.split('|')[0]);
		jQuery('#endingLocationCode').val(V_RetLocHid.value);
		jQuery('#numberOfNights').val(vnights);
		jQuery('#numberOfRooms').val(jQuery('#norooms_V').val());
		jQuery('#numberOfAdults').val(setadultcount('V'));
		jQuery('#numberOfChilds').val(setchildcount('V'));
		jQuery('#numberOfInfants').val(setinfantcount('V'));
		jQuery('#numberOfSeniors').val("0");
		jQuery('#airLine').val(Air_line_V.value);
		jQuery('#userPassword').val("0");
		jQuery('#forwardURL').val("0");
		jQuery('#vacationPkg').val("Y");
		jQuery('#cacheKey').val("0");
		jQuery('#sessionName').val("0");
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(V_Country.value);
		jQuery('#consumerRegionId').val(V_Country.value);
		jQuery('#languageCode').val("0");
		jQuery('#consumerCurrencyCode').val(V_consumerCurrencyCode.value );
		jQuery('#guestList').val(setSelRoomOcc('V'));
		jQuery('#vacationpkg').val("Y");
		jQuery('#seatClass').val(seatClass);
		jQuery('#tripType').val(trip_type_v.value);
		jQuery('#discountCouponNo').val(discountCoupon_No_V.value);
		 
		jQuery('#hotelStarId').val(star_rating_V.value);
		jQuery('#hotelTypeId').val(hType_v.value);
		jQuery('#isFlexSearch').val((isFlexSearch_V.checked?'Y':'N'));
		
		if(V_DepFromHid.value.split('|')[0]!=V_DepFrom.value){
			jQuery('#V_DepFromHid').val('');
			return validate('form');
		}else if(V_RetLocHid.value.split('|')[0]!=V_RetLoc.value ){
			jQuery('#V_RetLocHid').val('');
			return validate('form');
		}

	
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();
	//Processing();
	 
	}
	
}

	
	

function LoadData_H(){
	//alert(1)
	with(document.form1){
		
		var stateCode = "";
		if(hid_H_Loc.value.split('|')[2]=="-" || hid_H_Loc.value.split('|')[2]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_H_Loc.value.split('|')[2]);
	    }
	    
		jQuery('#checkInDate').val(ho_departure.value);
		jQuery('#checkOutDate').val(ho_arrival.value);
		jQuery('#cityCode').val(hid_H_Loc.value);
		jQuery('#cityName').val(hid_H_Loc.value.split('|')[1]);
		jQuery('#countryCode').val(hid_H_Loc.value.split('|')[3] );
		jQuery('#countryName').val(hid_H_Loc.value.split('|')[5]);
		jQuery('#stateCode').val(stateCode);
		jQuery('#numberOfNights').val(H_nights.value );
		jQuery('#numberOfRooms').val(jQuery('#norooms_H').val());
		jQuery('#numberOfAdults').val(setadultcount('H'));
		jQuery('#numberOfChilds').val(setchildcount('H'));
		jQuery('#numberOfInfants').val(setinfantcount('H'));
		jQuery('#numberOfSeniors').val("0");
		try{jQuery('#destinationCountry').val(destinationcountry?destinationcountry.value:"");}catch(e){}
		jQuery('#forwardURL').val("0");
		jQuery('#cacheKey').val("0");
		//jQuery('#sellingCurrency').val("USD");
		jQuery('#sessionName').val("0");
		//jQuery('#retrieveExistingBookings').val(retrieveExistingBookings.value);
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(H_Country.value);
		jQuery('#consumerRegionId').val(H_Country.value);
		jQuery('#languageCode').val("en");
		jQuery('#consumerCurrencyCode').val(H_consumerCurrencyCode.value );
		jQuery('#guestList').val(setSelRoomOcc('H'));
		jQuery('#vacationpkg').val("N");
		jQuery('#tripType').val("R");
		
		jQuery('#starRating').val(star_rating_H.value);
		jQuery('#hotelType').val(hType_h.value);
		jQuery('#hotelName').val(H_name.value);jQuery('#selectedHotelRideCode').val(H_ridecode.value); 
		
		
		jQuery('#sortHotelBy').val('hotelRank,minimumRate');
		jQuery('#hotelStarId').val(star_rating_H.value);
		jQuery('#starRating_Hotels').val(star_rating_H.value);
		jQuery('#hotelTypeId').val(hType_h.value);	// there are two hType_v objects, second one is the correct
		jQuery('#hotelName').val(H_name.value);jQuery('#selectedHotelRideCode').val(H_ridecode.value);
		jQuery('#priceLevelFrom').val(priceLevelFrom_H.value);
		jQuery('#priceLevelTo').val(priceLevelTo_H.value);
		jQuery('#availableHotels').val((availableHotels_H.checked?'on':'off'));
		jQuery('#onRequestHotels').val((onRequestHotels_H.checked?'on':'off'));
		jQuery('#discountCouponNo').val(discountCoupon_No_H.value);
		jQuery('#multiLangCityName').val(jQuery('#cityName').val());
		var selectedOption = document.querySelector("input[type='radio'][name=hotelSearchType]:checked").value;

		jQuery('#hotelSearchType').val(selectedOption);
		if(hid_H_Loc.value.split('|')[1]!=H_Loc.value){
			jQuery('#hid_H_Loc').val('');
			return validate('formH');
		}
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
		

	}
}


function LoadData_F(){
	with(document.form1){
	
		var seatClass = "";
		if ("Economy" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass =("Economy");
		} else if ("Business" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass =("Business");
		} else if ("First" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass = ("First")	;
		}

		/*if(elements["Aira_FlightClass"][0].checked){
			seatClass =("Economy");
		}else if(elements["Aira_FlightClass"][1].checked){
			seatClass =("Business");
		}else if(elements["Aira_FlightClass"][2].checked){
			seatClass = ("FirstClass")	;
		}*/
		
		var stateCode = "";
		if(hid_air_Loc1_a.value.split('|')[4]=="-" || hid_air_Loc1_a.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_air_Loc1_a.value.split('|')[4]);
	    }
		
		
		jQuery('#nonStopStatus').val(nonstop_flight.checked?'Nonstop':'off');
		
		if(document.forms["form1"].elements["Air_TripType3"].checked){
			 var checkindate ="";
		     checkindate = air_departure.value + (air_departure_2.value!="" ? ' | '+air_departure_2.value : "") + (air_departure_3.value!="" ? ' | '+air_departure_3.value : "") + (air_departure_4.value!="" ? ' | '+air_departure_4.value : "") + (air_departure_5.value!="" ? ' | '+air_departure_5.value : "");
			 jQuery('#checkInDate').val(checkindate);
			 jQuery('#checkOutDate').val("");
		}
		else{
			jQuery('#checkInDate').val(air_departure.value);
			jQuery('#checkOutDate').val(air_arrival.value);
		}
		
		jQuery('#checkInTime').val(Air_DepTime_a.value);
		jQuery('#checkOutTime').val(Air_RetTime_a.value);
		jQuery('#cityCode').val(hid_air_Loc1_a.value.split('|')[2]+"|"+hid_air_Loc1_a.value.split('|')[0]);
		jQuery('#cityName').val(hid_air_Loc1_a.value.split('|')[0]);
		jQuery('#countryCode').val(hid_air_Loc1_a.value.split('|')[5] );
		jQuery('#countryName').val(hid_air_Loc1_a.value.split('|')[5]);
		jQuery('#stateCode').val(stateCode);
		jQuery('#startingLocationName').val(hid_air_Loc_a.value.split('|')[0]);
		jQuery('#startingLocationCode').val(hid_air_Loc_a.value);
		jQuery('#startingCountryCode').val(hid_air_Loc_a.value.split('|')[5]);
		jQuery('#endingCountryCode').val("0");
		jQuery('#endingLocationName').val(hid_air_Loc1_a.value.split('|')[0]);
		jQuery('#endingLocationCode').val(hid_air_Loc1_a.value);
		
		/** multi destination fields*/
		jQuery('#startingFligtLocationTwoName').val(hid_air_Loc_dep_m_2.value.split('|')[0]);
		jQuery('#startingFligtLocationTwoCode').val(hid_air_Loc_dep_m_2.value);
		jQuery('#endingFligtLocationTwoName').val(hid_air_Loc_to_m_2.value.split('|')[0]);
		jQuery('#endingFligtLocationTwoCode').val(hid_air_Loc_to_m_2.value);
		jQuery('#flightCheckInDateTwo').val(air_departure_2.value);
		jQuery('#flightCheckInTimeTwo').val(Air_DepTime_a_2.value);
		
		jQuery('#startingFligtLocationThreeName').val(hid_air_Loc_dep_m_3.value.split('|')[0]);
		jQuery('#startingFligtLocationThreeCode').val(hid_air_Loc_dep_m_3.value);
		jQuery('#endingFligtLocationThreeName').val(hid_air_Loc_to_m_3.value.split('|')[0]);
		jQuery('#endingFligtLocationThreeCode').val(hid_air_Loc_to_m_3.value);
		jQuery('#flightCheckInDateThree').val(air_departure_3.value);
		jQuery('#flightCheckInTimeThree').val(Air_DepTime_a_3.value);
		
		jQuery('#startingFligtLocationFourName').val(hid_air_Loc_dep_m_4.value.split('|')[0]);
		jQuery('#startingFligtLocationFourCode').val(hid_air_Loc_dep_m_4.value);
		jQuery('#endingFligtLocationFourName').val(hid_air_Loc_to_m_4.value.split('|')[0]);
		jQuery('#endingFligtLocationFourCode').val(hid_air_Loc_to_m_4.value);
		jQuery('#flightCheckInDateFour').val(air_departure_4.value);
		jQuery('#flightCheckInTimeFour').val(Air_DepTime_a_4.value);
		
		jQuery('#startingFligtLocationFiveName').val(hid_air_Loc_dep_m_5.value.split('|')[0]);
		jQuery('#startingFligtLocationFiveCode').val(hid_air_Loc_dep_m_5.value);
		jQuery('#endingFligtLocationFiveName').val(hid_air_Loc_to_m_5.value.split('|')[0]);
		jQuery('#endingFligtLocationFiveCode').val(hid_air_Loc_to_m_5.value);
		jQuery('#flightCheckInDateFive').val(air_departure_5.value);
		jQuery('#flightCheckInTimeFive').val(Air_DepTime_a_5.value);
		
		jQuery('#numberOfNights').val(F_nights.value );
		jQuery('#numberOfNights').val(air_nights.value);
		jQuery('#numberOfAdults').val(R1occAdults_F.value);
		jQuery('#numberOfChilds').val(R1occChildren_F.value);
		jQuery('#numberOfInfants').val(R1occInfant_F.value);
		jQuery('#numberOfSeniors').val(0);
		jQuery('#airLine').val(Air_line.value);
		jQuery('#portal').val("0");
		jQuery('#userCode').val("0");
		jQuery('#userName').val("0");
		jQuery('#userPassword').val("0");
		jQuery('#forwardURL').val("0");
		
		jQuery('#vacationPkg').val("N");
		
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#actionTyp').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(F_Country.value);
		jQuery('#consumerRegionId').val(F_Country.value);
		jQuery('#languageCode').val("en");
		jQuery('#consumerCurrencyCode').val(F_consumerCurrencyCode.value );
		jQuery('#vacationpkg').val("N");
		jQuery('#seatClass').val(seatClass);
		jQuery('#guestList').val(setSelRoomOcc('F'));
		jQuery('#tripType').val(trip_type.value);
		jQuery('#discountCouponNo').val(discountCoupon_No_F.value);
		jQuery('#isFlexSearch').val((isFlexSearch_F.checked?'Y':'N'));
		
		
		if(hid_air_Loc_a.value.split('|')[0]!=air_Loc_a.value){
			jQuery('#hid_air_Loc_a').val('');
			return validate('formF');
		}
		else if(hid_air_Loc1_a.value.split('|')[0]!=air_Loc1_a.value ){
			jQuery('#hid_air_Loc1_a').val('');
			return validate('formF');
		}
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);

	}
}



function LoadData_T(){
	
	with(document.form1){
		
		if(hotel_location_drop[0].checked){ // Hotel / Location drop selected
			
			jQuery('#cityCode').val(hid_pickUpCity_H_Loc.value.split('|')[0]);
			jQuery('#cityName').val(hid_pickUpCity_H_Loc.value.split('|')[1]);
			jQuery('#countryCode').val(hid_pickUpCity_H_Loc.value.split('|')[3]);
			jQuery('#countryName').val(hid_pickUpCity_H_Loc.value.split('|')[5]);
			jQuery('#checkInDate').val(tr_arrival.value);
			jQuery('#checkOutDate').val(tr_arrival.value);
			jQuery('#transferTime').val(tr_arrivalTime.value);
			jQuery('#pickUpCode').val(pickUpLocationType.value); 
			jQuery('#dropOffCode').val("H"); // drop off to Hotel
			jQuery('#dropOffCityName').val(dropOffCity_H_Loc.value);
			jQuery('#dropOffCityCode').val(hid_dropOffCity_H_Loc.value.split('|')[0]);
			/*if(hid_pickUpCity_H_Loc.value.split('|')[1]!=pickUpCity_H_Loc.value){
				jQuery('#hid_pickUpCity_H_Loc').val('');
				return validate('formT');
			}*/
			
		}else{ // Airport / Station drop selected
			jQuery('#cityCode').val(hid_pickUpCity_A_Loc.value.split('|')[0]);
			jQuery('#cityName').val(hid_pickUpCity_A_Loc.value.split('|')[1]);
			jQuery('#countryCode').val(hid_pickUpCity_A_Loc.value.split('|')[3]);
			jQuery('#countryName').val(hid_pickUpCity_A_Loc.value.split('|')[5]);
			jQuery('#checkInDate').val(tr_departure.value);
			jQuery('#checkOutDate').val(tr_departure.value);
			jQuery('#transferTime').val(tr_depTime.value);

			jQuery('#pickUpCode').val(dropOffLocationType.value); // pickup from Hotel
			jQuery('#dropOffCode').val("A"); // drop off to A-Airport/ S-Station/ P-Port
			jQuery('#dropOffCityName').val(dropOffCity_A_Loc.value);
			jQuery('#dropOffCityCode').val(hid_dropOffCity_A_Loc.value.split('|')[0]);
			if(hid_pickUpCity_A_Loc.value.split('|')[1]!=pickUpCity_A_Loc.value){
				jQuery('#hid_pickUpCity_A_Loc').val('');
				return validate('formT');
			}
		}
		
		jQuery('#numberOfNights').val(tr_nights.value );
		jQuery('#numberOfRooms').val(jQuery('#norooms_T').val());
		jQuery('#numberOfAdults').val(parseInt(jQuery('#tr_cmbNoOfAdults').val()));
		jQuery('#numberOfChilds').val(parseInt(jQuery('#tr_cmbNoOfChildren').val()));
		jQuery('#numberOfInfants').val("0");
		jQuery('#numberOfSeniors').val("0");
		jQuery('#vacationPkg').val("N");
		
		jQuery('#sessionName').val("0");
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#actionTyp').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(jQuery('#tr_Country').val());
		jQuery('#consumerRegionId').val(jQuery('#tr_Country').val());
		jQuery('#languageCode').val("en");
		jQuery('#consumerCurrencyCode').val(tr_consumerCurrencyCode.value );
		jQuery('#vacationpkg').val("N");
		
		//alert(document.forms["ResPkgSearchForm"].pickUpCode.value);
	
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();	
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
}

function LoadData_A(){
	try {
	with(document.form1){
		
	
		
		jQuery('#checkInDate').val(ac_departure.value);
		jQuery('#checkOutDate').val(ac_arrival.value);
		jQuery('#cityCode').val(hid_AC_Loc.value);
		jQuery('#cityName').val(hid_AC_Loc.value.split('|')[1]);
		jQuery('#countryCode').val(hid_AC_Loc.value.split('|')[3]);
		jQuery('#countryName').val(hid_AC_Loc.value.split('|')[5]);
		jQuery('#numberOfNights').val(AC_nights.value );
		jQuery('#numberOfRooms').val(jQuery('#norooms_A').val());
		jQuery('#numberOfAdults').val(setadultcount('A'));
		jQuery('#numberOfChilds').val(setchildcount('A'));
		jQuery('#numberOfInfants').val(setinfantcount('A'));
		jQuery('#childAges').val(setActivityChildAges());
		jQuery('#numberOfSeniors').val("0");
		jQuery('#vacationPkg').val("N");
		jQuery('#guestList').val(setSelRoomOcc('A'));
		jQuery('#sessionName').val("0");
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#actionTyp').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(AC_Country.value);
		jQuery('#consumerRegionId').val(AC_Country.value);
		jQuery('#languageCode').val("en");
		jQuery('#consumerCurrencyCode').val(AC_consumerCurrencyCode.value );
		jQuery('#vacationpkg').val("N");
		try{jQuery('#destinationCountry').val(destinationcountry_A?destinationcountry_A.value:"");}catch(e){}
		jQuery('#discountCouponNo').val(discountCoupon_No_A.value);
		jQuery('#activityTypeId').val(activityTypeId_a.value );
		
		
		
		if(hid_AC_Loc.value.split('|')[1]!=activity_Loc.value){
			jQuery('#hid_AC_Loc').val('');
			return validate('formC');
				
				}
	
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();
	//Processing();
	//document.forms["ResPkgSearchForm"].submit();
	//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
	}catch (e) {
		// TODO: handle exception
	}
}
function validateP(){
	if(document.getElementById("Package_Type2").checked){
		if((hid_package_Loc_ori.value.split('|')[0]!=package_Loc_ori.value)||(hid_package_Loc_ori.value.split('|')[0]==undefined)){
			jQuery('#package_Loc_ori').val('');
			jQuery('#hid_package_Loc_ori').val('');
			return validate('formP');
		}
		if((hid_package_Loc_des.value.split('|')[0]!=package_Loc_des.value)||(hid_package_Loc_des.value.split('|')[0]==undefined)){
			jQuery('#package_Loc_des').val('');
			jQuery('#hid_package_Loc_des').val('');
			return validate('formP');
		}
	}if(document.getElementById("Package_Type1").checked){
		package_Ex_des
		hid_package_Ex_des
		if((hid_package_Ex_des.value.split('|')[1]!=package_Ex_des.value)||(hid_package_Ex_des.value.split('|')[1]==undefined)){
			jQuery('#package_Ex_des').val('');
			jQuery('#hid_package_Ex_des').val('');
			return validate('formP');
		}
	}
}


function LoadData_P(){
	with(document.form1){
		
		var stateCode = "";
		jQuery('#numberofdays').val(No_of_Days.value);
		
		if(document.getElementById("Package_Type2").checked){
			jQuery('#includingflight').val("Y");
			jQuery('#startingLocationName').val(hid_package_Loc_ori.value.split('|')[0]);
			jQuery('#startingLocationCode').val(hid_package_Loc_ori.value);
			jQuery('#endingLocationName').val(hid_package_Loc_des.value.split('|')[0]);
			jQuery('#endingLocationCode').val(hid_package_Loc_des.value);
		}
			
		if(document.getElementById("Package_Type1").checked){
			jQuery('#includingflight').val("N");
			jQuery('#cityCode').val(hid_package_Ex_des.value);
			jQuery('#cityName').val(hid_package_Ex_des.value.split('|')[1]);
		}
			
		jQuery('#selectedFixedPackageTypeCode').val(P_Type.value);
		jQuery('#selectedFixedPackageTypeName').val(P_Type.text);
		
		jQuery('#checkInDate').val(Travel_On.value);
		jQuery('#numberOfNights').val(No_of_Days.value);
		jQuery('#stateCode').val(stateCode);
		jQuery('#startingCountryCode').val(hid_package_Loc_ori.value.split('|')[5]);
		jQuery('#endingCountryCode').val("0");
		jQuery('#numberOfRooms').val(jQuery('#norooms_V').val());
		jQuery('#vacationPkg').val("N");
		jQuery('#consumerCountryId').val(P_Country.value);
		jQuery('#consumerRegionId').val(P_Country.value);
		jQuery('#languageCode').val("0");
		jQuery('#vacationpkg').val("N");
		//alert(jQuery('#checkInDate').val())
		//alert(jQuery('#numberOfNights').val())
		//alert(jQuery('#selectedFixedPackageTypeCode').val() )
		
		//alert("numberofdays"+jQuery('#numberofdays').val());
		//alert("endingLocationCode"+jQuery('#endingLocationCode').val());
		//alert("includingflight"+jQuery('#includingflight').val());
		
		
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();
	//Processing();
	//document.forms["ResPkgSearchForm"].submit();
	//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
}

function LoadData_C(){
	with(document.form1){
		
		
			
		
		var stateCode = "";
		if(hid_car_Loc1.value.split('|')[4]=="-" || hid_car_Loc1.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_car_Loc1.value.split('|')[4]);
	    }
		
		jQuery('#checkInDate').val(car_departure.value);
		jQuery('#checkOutDate').val(car_arrival.value);
		jQuery('#checkInTime').val(PickTime.value);
		jQuery('#checkOutTime').val(ReturnTime.value);
		//alert(car_departure.value + " ~~~~ " + car_arrival.value)
		//jQuery('#cityCode').val(hid_car_Loc1.value.split('|')[2]);
		//jQuery('#cityName').val(hid_car_Loc1.value.split('|')[0]);
		jQuery('#countryCode').val(hid_car_Loc1.value.split('|')[5] );
		jQuery('#countryName').val(hid_car_Loc1.value.split('|')[5]);
		jQuery('#stateCode').val(stateCode);
		jQuery('#startingLocationName').val(hid_car_Loc.value.split('|')[0]);
		jQuery('#startingLocationCode').val(hid_car_Loc.value);
		jQuery('#startingCountryCode').val("0");
		jQuery('#endingCountryCode').val("0");
		jQuery('#endingLocationName').val(hid_car_Loc1.value.split('|')[0]);
		jQuery('#endingLocationCode').val(hid_car_Loc1.value);
		jQuery('#carType').val(Car_Type.value);
		jQuery('#vacationPkg').val("N");
		jQuery('#isbackOfficePartnerLink').val("0");
		jQuery('#enabledPublicDCLogin').val("0");
		jQuery('#enableConsumerRegion').val("0");
		jQuery('#actionTyp').val("0");
		jQuery('#bookType').val("0");
		jQuery('#consumerCountryId').val(C_Country.value);
		jQuery('#consumerRegionId').val(C_Country.value);
		
		jQuery('#consumerCurrencyCode').val(C_consumerCurrencyCode.value );
		jQuery('#vacationpkg').val("N");
		jQuery('#tripType').val("R");
		jQuery('#discountCouponNo').val(discountCoupon_No_C.value);
		
		if(hid_car_Loc1.value.split('|')[0]!=car_Loc1.value){
			jQuery('#hid_car_Loc1').val('');
			return validate('formC');
		}
		else if(hid_car_Loc.value.split('|')[0]!=car_Loc.value ){
			jQuery('#hid_car_Loc').val('');
			return validate('formC');
				}
		 
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//jQuery('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = jQuery('#targetField').val();;
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
		//console.log(jQuery('#cityCode').val())

	}
	
	
}


function setActivityChildAges() {
	var childAges = "";
	var childCount = jQuery('#numberOfChilds').val();
	if (childCount > 0) {
		for (var a = 1; a <= childCount; a++) {
			childAges = childAges + jQuery('#A_R1childage_' + a).val() + ","; 
		}
	}
	return childAges;
}

function setRoomOccupancy(pkg,occ,bec){
	
	if("F"==pkg || "A"==pkg){
		var adults = 0 ;
		var children = 0 ;
		var infant = 0 ;
		var childages = "" ;
		var rooms = occ.split("@");

			for(i=0;i<(rooms.length)-1;i++){
				var roomOccu = rooms[i].split('|');
				for(j=0;j<(roomOccu.length)-5;j++){
					adults += parseInt(roomOccu[0]) ;
					children += parseInt(roomOccu[1]) ;
					infant += parseInt(roomOccu[5]) ;
					
					if( parseInt(roomOccu[1]) > 0 ){
						if("F"==pkg){
							var childagesarr = roomOccu[2].split(',');
							for(j=0;j<(childagesarr.length);j++){
								if(childagesarr[j]=="1"){
									if(isNaN(infant)){
										infant =0;
									}
									children--;
									infant++
									childages += childagesarr[j]+"," ;
								}else{
									childages += childagesarr[j]+"," ;
								}
							}
						}else{
							childages += roomOccu[2]+"," ;
							if(parseInt(infant) > 0){
								children++;
								infant--;
								childages += "2," ;
							}
						}
					}
					//console.log(roomOccu[5])
				}
			}
			var i = 0 ;
			jQuery('#R'+(i+1)+'occAdults_'+pkg).val(adults);
			jQuery('#R'+(i+1)+'occChildren_'+pkg).val(children);
			jQuery('#R'+(i+1)+'occInfant_'+pkg).val(infant);	
			
			if(children > 0 && infant > 0){
				showages(pkg,(1),(children+infant));
				var childagesarr = childages.split(',');
				for(j=0;j<(childagesarr.length);j++){
					if(childagesarr[j]=="1"){
						jQuery('#'+pkg+'_R'+(1)+'childage_'+(j+1)).hide();
					}
					jQuery('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
				}
			}else if(children > 0){
				showages(pkg,(1),children);
				var childagesarr = childages.split(',');
				for(j=0;j<(childagesarr.length);j++){
					jQuery('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
					//jQuery('#F_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
				}
			}
	}else{
		var rooms = occ.split("@");
		roomocc(pkg,(rooms.length-1),bec);
		jQuery('#norooms_'+pkg).val(rooms.length-1);
		for(i=0;i<(rooms.length)-1;i++){
			//console.log(rooms[i])
			var roomOccu = rooms[i].split('|');
			for(j=0;j<(roomOccu.length)-5;j++){
				if("H"==pkg || "C"==pkg){
					if(parseInt(roomOccu[5]) > 0 ){
						roomOccu[1] = parseInt(roomOccu[1])+1 ;
						roomOccu[2] = roomOccu[2]+",2";
					}
				}
				jQuery('#R'+(i+1)+'occChildren_'+pkg).val(roomOccu[1]);
				jQuery('#R'+(i+1)+'occAdults_'+pkg).val(roomOccu[0]);
				jQuery('#R'+(i+1)+'occInfant_'+pkg).val(roomOccu[5]);
				showages(pkg,(i+1),roomOccu[1]);
				//console.log(roomOccu[5])
			}
			var childages = roomOccu[2].split(",");
			for(k=0;k<childages.length;k++){
				jQuery('#'+pkg+'_R'+(i+1)+'childage_'+(k+1)).val(childages[k]);
				//console.log(childages[k])
			}
		}
	}
}

function initTabs(id){
	 jQuery("#tabs").tabs({selected:id});
	 
 }
function ShowHide(){
	jQuery(".moreinfo").toggle();
	setTimeout('resizeContainer()',200);
	
}

function showRibbon(arg){
	if(arg){
		 jQuery('#ribbon').show();		
	}else{
		 jQuery('#ribbon').hide();
	}
   
}

jQuery.extend({
	  getUrlVars: function(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	      hash = hashes[i].split('=');
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1];
	    }
	    return vars;
	  },
	  getUrlVar: function(name){
	    return jQuery.getUrlVars()[name];
	  }
	});

function fillForm(eng){
	var hasWjt = false;
	var wjtName = "";
	if( jQuery.getUrlVar('wjt')){
		wjtName =  jQuery.getUrlVar('wjt'); 
		hasWjt = true;
	}
		
	try{ 	
		if(window!=window.parent){
			if(hasWjt){
				eval('window.parent.'+wjtName+'.fillForm("'+eng+'");');
			}else{
				window.parent.fillForm(eng);
			}
		}
	}catch(e){  }

	if(!internalBEC){
		changeCss( jQuery('#bookingChannel').val());
		jQuery('#bec_wrapper_div').show('slow');
	}
}
function resizeContainer(bec){
	try{
		try{
		resizeParent(bec);
		}catch(e){  }
		if(bec_name && bec_name!='' && window.parent.document.getElementById(bec_name)){
			resizeParent(bec_name);
		}
		//setTimeout('resizeParent()',100);
		//window.parent.resizeBecFrame();
	}catch(e){  }
}
function hideHolidays(){ 
	 jQuery('#vLi').hide();
	 jQuery('#pLi').hide();
	 //jQuery('#fLi').css('left','0');
	 //jQuery('#hLi').css('left','67px');
	 //jQuery('#aLi').css('left','134px');
	 //jQuery('#cLi').css('left','201px');
	 //jQuery('#tLi').css('left','268px');
}
function getTabNumber(tab){
	if("V"==tab)
		return 0;
	if("F"==tab)
		return 1;
	if("H"==tab)
		return 2;
	if("A"==tab)
		return 3;
	if("C"==tab)
		return 4;
	if("T"==tab)
		return 5;	
}
function filterTabs(tabs){
	 
	initTabs(getTabNumber(tabs.charAt(0)));
	
	 jQuery('#vLi').hide();
	 jQuery('#fLi').hide();
	 jQuery('#hLi').hide();
	 jQuery('#aLi').hide();
	 jQuery('#cLi').hide();
	 jQuery('#tLi').hide();
	 var w = 0;
	 if(tabs.indexOf("V")>-1){
		jQuery('#vLi').show();
		// jQuery('#vLi').css('left',w);
		// w = w+70;
	 }
	 if(tabs.indexOf("F")>-1){
		jQuery('#fLi').show();
		//jQuery('#fLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("H")>-1){
		jQuery('#hLi').show();
		//jQuery('#hLi').css('left',w);
	 	//w = w+70;
	 }
	 if(tabs.indexOf("A")>-1){
		jQuery('#aLi').show();
		//jQuery('#aLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("C")>-1){
		jQuery('#cLi').show();
		//jQuery('#cLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("T")>-1){
		jQuery('#tLi').show();
		//jQuery('#tLi').css('left',w);
		//w = w+70;
	 }
	 
}

function changeCss(bc){
	var css = "";

	if("WEB"==bc){
		css = 'css/style.css';
	}else if("CC"==bc){
		css = 'css/style_CC.css';
	}
	Sid.css([css],'','head');
	setTimeout('hideMask()',200);

}

function showDest(){
	jQuery('.destination_country_AS').css('display', 'block');
	jQuery('.destination_country_HS').css('display', 'block');
	jQuery('.destination_country_A').css('display', 'block');
	jQuery('.destination_country_H').css('display', 'block');

}

function hideMask(){
	jQuery('#mm').hide(200);
	
}

function changeWidth(form){
	if("A"==form){
//		jQuery('#main_container').css({'width':'200px','background-color':'transparent','border':'none'});
//		jQuery('.left-col').css('padding-left','5px');
//		jQuery('.right-col').css('padding-left','5px');
//		jQuery('.ui-tabs-panel').css('padding-top','0');
//		jQuery('.ui-tabs').css('padding-top','0');
//		jQuery('.main').css({'margin-top':'0','padding-top':'0'});
		
	}else if("CC"==form){
		jQuery('#main_container').css('width','350px');
	}else{
		jQuery('#main_container').css('width','400px');
	}
}

/** With the lookups , 
 * Valications should be done with the hidden fields . 
 * But the validatior did not suppport the hidden field validation, 
 * Therfor clear the value of the lookups if the hiden contains empty.
 * ~Kasun C - 13/09/2011  
 * */  
function resetLookupValues(){
	try{
		if(jQuery('#hid_H_Loc').val()=='')
			jQuery('#H_Loc').val('');
	}catch(e){}

	try{
		if(jQuery('#hid_AC_Loc').val()=='')
			jQuery('#activity_Loc').val('');
	}catch(e){}

	try{
		if(jQuery('#hid_car_Loc').val()=='')
			jQuery('#car_Loc').val('');
		
		if(jQuery('#hid_car_Loc1').val()=='')
			jQuery('#car_Loc1').val('');
	}catch(e){}
	
	try{
		if(jQuery('#hid_air_Loc_a').val()=='')
			jQuery('#air_Loc_a').val('');
		
		if(jQuery('#hid_air_Loc1_a').val()=='')
			jQuery('#air_Loc1_a').val('');
	}catch(e){}
	 
	try{
		if(jQuery('#V_DepFromHid').val()=='')
			jQuery('#V_DepFrom').val('');
		
		if(jQuery('#V_RetLocHid').val()=='')
			jQuery('#V_RetLoc').val('');
	}catch(e){}
	
	try{
		if(jQuery('#hid_pickUpCity_H_Loc').val()=='')
			jQuery('#pickUpCity_H_Loc').val('');
		
		if(jQuery('#hid_pickUpCity_A_Loc').val()=='')
			jQuery('#pickUpCity_A_Loc').val('');
	}catch(e){}
}

function resizeParentSize(bec,size) {
	if(bec==null)
		bec = 'bec_container_frame';
	 
	var frame = window.parent.document.getElementById(bec);
	var bodyH = frame.contentWindow.document.body.offsetHeight;
	
	var newbodH = bodyH + 1;
	
	if(bodyH==0)
		setTimeout('resizeParent("'+bec+'")',200);
	if(bec =='bec_container_frame'){ 
		
	if(bodyH < 300){
		if(size > 3){	
			frame.style.height = (bodyH+10) +"px";		
		}else{
			frame.style.height = (bodyH+50) +"px";
		}
	 }else{
	 		frame.style.height = 506 + "px";
	 }	
	
	}
}

function resizeParent(bec) { 
	
	//if('CC'==jQuery('#bookingChannel').val()){
	if(bec==null)
		bec = 'bec_container_frame';
	//alert(bec)
	var frame = window.parent.document.getElementById(bec);
	var bodyH = frame.contentWindow.document.body.offsetHeight ;
	 if(bodyH==0 || bodyH==1)
		setTimeout('resizeParent("'+bec+'")',200);
	 if(bodyH<350)
		 bodyH = 330
	// alert(bodyH)
	if(bec =='bec_container_frame')
		frame.style.height = (bodyH + 10) +"px";
	else
		frame.style.height = (bodyH + 10) +"px";
// }

}
 
//-------------------------- Added by janith -- to load internal hotel names ------------------------
var hotel_list_url = "";

var localHotelList;
function callbackHotels(jsonString) {
	//console.log(jsonString);
	localHotelList = jsonString;
}
var ncache = {};
function fillHotelNames(){
	
   jQuery(document).ready(function(){	
	   
	   /* jQuery("#H_name").autocomplete({
	        minLength: 2,
	        source: function(request, response) {
	        	makehotelListUrl();
		        jQuery.ajax({
			  	  	url: hotel_list_url,
			  	  	dataType: "script",
			  	  	data: {
			  	  		term: request.term,
			  	  		callback:"callbackHotels"
			  	  	},
			  	  	success: function(data){
			  	  	data = localHotelList;
				  	  	response(jQuery.map(data.list.sort(sort_by_hotel('HotelName', false, function(a){return a})), function(item) {
				  	  		var text = createLabel_hotel(item);
			                    
			                if(matcher_hotel(request.term, item.HotelName)){
			                        return {
			                            label: text.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" +request.term +")(?![^<>]*>)(?![^&;]+;)", "gi"), "jQuery1"),
			                            value: item.HotelName,
			                            searchvalue: item.HotelName
			                        }
			                    }
			                }
				  	  	))
			  	  	}
	  	  		});
	        	
	        }
	    }); */
	   
	   /*jQuery("#H_name").autocomplete({
			minLength: 2,
			source: function( request, response ) {
				var term = request.term;
				if(""==jQuery("#hid_H_Loc").val()){
					validate('formH');
					return false;
				}
				var city = jQuery("#hid_H_Loc").val().split("|")[0];
				if ( term in ncache ) {
					response( ncache[ term + city] );
					return;
				}

				lastXhr = jQuery.getJSON( "../../../../../ComponentSupport.do?method=hotelNameLookup&transectionId=xxxxxx&city=" + city , request, function( data, status, xhr ) {
					ncache[ term  + city] = data;
					if ( xhr === lastXhr ) {
						response( data );
					}
				});
			}
		});
	    
	    //autocomplete finish
	    
	    
	    jQuery("#H_name").bind( "autocompleteselect",function(event, ui){
	    	jQuery("#H_ridecode").val(ui.item.rideId);
	    });
	    */
	   
   }); //ready finish
   
	
}



function sort_by_hotel(field, reverse, primer){
	   reverse = (reverse) ? -1 : 1;

	   return function(a,b){
	       a = a[field];
	       b = b[field];

	       if (typeof(primer) != 'undefined'){
	           a = primer(a);
	           b = primer(b);
	       }

	       if (a<b) return reverse * -1;
	       if (a>b) return reverse * 1;
	       return 0;

	   }
}

function matcher_hotel(regex, text){
    var filter = new RegExp(
        "(^)(" +
        regex +
        ")(?![^<>]*>)(?![^&;]+;)", "gi"
        ).test(text);
    return filter;
}

function createLabel_hotel(item){
	var label = '';
	if (item.HotelName != ''){
			label = item.HotelName;
	}
	return label;
}

function makehotelListUrl(){
	var serviceHost = jQuery('#serviceHost').val();
	var  serviePortal = jQuery('#serviePortal').val();
	
	var curUrl = window.location + "";
	var urlArr = curUrl.split("/");
	
	hotel_list_url = "http://" + serviceHost + "/content/" + serviePortal + "/hotel_List_s5.js";
	
}
//---------------------- End of  hotel name filter -----------------------------------------

jQuery(document).ready(function(){
	//resizeParent();
	
});


function gt(id,form){
	try{
		return document.getElementById(form).contentWindow.document.getElementById(id);
	}catch(e){
		//alert("id : "+ id + ",form :"+form+ " Error:" + e);
		//throw e;
	}
}
function gtFrame(frame){
	try{
		return document.getElementById(frame).contentWindow;
	}catch(e){
		//alert( " frame :"+frame+ " Error:" + e);
		//throw e;
	}
}

function convertJson(frm,isEscape){
	var elLength =  frm.elements.length;
	var data = {};
    for (i=0; i<elLength; i++){
    	try{
    		var name = frm.elements[i].name;
    		var value =    frm.elements[i].value
    		if(isEscape)
    			data[name] = escape(value);
    		else
    			data[name] = (value);
    	}catch(d){
    		alert(d)
    	}
    }
    return data;
}
function convertQ(frm){
	var elLength =  frm.elements.length;
	var data = "";
    for (i=0; i<elLength; i++){
    	try{
    		var name = frm.elements[i].name;
    		var value =   frm.elements[i].value
    		data+="&"+name+"="+escape(value);
    	}catch(d){}
    }
    return data;
}

jQuery( ".show_filter").unbind( "click" );
jQuery(".show_filter").click(function(){
var objDiv = jQuery(this).parentsUntil('main_holder').find(".bec_container_div")[0];
			if(jQuery(this).parentsUntil('main_holder').find(".morefilters").is(':visible')){
				jQuery(this).parentsUntil('main_holder').find(".show_filter").html("Show Additional Search Options &nbsp;<span id='arrow_down' class='arrow_down'>&nbsp;&nbsp;&nbsp;</span>");
				jQuery(this).parentsUntil('main_holder').find("#arrow_up").toggleClass('arrow_up arrow_down');			
				
				jQuery(this).parentsUntil('main_holder').find(".morefilters").hide('fast',function(){
					objDiv.scrollTop = 0;
				})	;
			} else {
				jQuery(this).parentsUntil('main_holder').find(".show_filter").html("Hide Additional Search Options &nbsp;<span id='arrow_up' class='arrow_up'>&nbsp;&nbsp;&nbsp;</span>");
				jQuery(this).parentsUntil('main_holder').find(".morefilters").show('fast',function(){
					objDiv.scrollTop = objDiv.scrollHeight
				});	 	
				jQuery(this).parentsUntil('main_holder').find("#arrow_down").toggleClass('arrow_down arrow_up');			
			 }
		setTimeout('resizeContainer()',300);
	});
	
function refilFpackageDates() {
	var d = new Date();
	var yr = d.getFullYear();
	var op = jQuery('#Travel_On')[0];
	op.options.length = 0;
	op.options[op.options.length] = new Option("Any", "-");	// Any option
	for(x = d.getMonth(); x < 12; x++) {	// remaining months of the current year
		op.options[op.options.length] = new Option(getMonthName(x) + " " + yr, (x + 1) + "-" +  yr);
	}
	for (x = 0; x < d.getMonth(); x++) {	// months of the next year
		op.options[op.options.length] = new Option(getMonthName(x) + " " +( yr + 1), (x + 1) + "-" +  (yr + 1));
	}
}

function getMonthName(m){
	switch (m){
	case 0: 
		return "January";
	case 1: 
		return "February";
	case 2: 
		return "March";
	case 3: 
		return "April";
	case 4: 
		return "May";
	case 5: 
		return "June";
	case 6: 
		return "July";
	case 7: 
		return "August";
	case 8: 
		return "September";
	case 9: 
		return "October";
	case 10: 
		return "November";
	case 11: 
		return "December";
			
	}
}



//----- Added by Gayan for All the BEC customize through one code. Use the following CORS ajax calling pattern for future implementations

var currentModule = 'ALL';
function becConfigLoad(){
	var becConfig = jQuery.cookie("becConfig");
	if(becConfig != null && becConfig !='' && becConfig != undefined) {
		loadConfig(JSON.parse(jQuery.cookie("becConfig")));
	}else{
	      jQuery.ajax({
	      url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	      dataType: "text",
	      cache: true,
	      data: {
	      	callBack: "loadConfig",
	      	cacheEnable: "Y",
	      	bookingChannel: "WEB"
	      },
	      success: function(data) {
		eval(data);
	      },
	       done: function(data) {
		eval(data);
	      }		     
	  });
      }
}

function becFilterLoad(curMod){
	try{
		currentModule=curMod;
		// put specific functions into the selection. Common functions outside the if
		if(currentModule=='H'){
//			loadHotelTypeViaEar();
//			loadStarRatingViaEar();
			loadHotelNameViaEar();
		}else if(currentModule=='F'){
		
		}else if(currentModule=='C'){
			loadCarTypeViaEar();
		}else if(currentModule=='T'){
			
		}else if(currentModule=='A'){
		    loadProgramTypeViaEar();
		}else if(currentModule=='V'){
//			loadHotelTypeViaEar();
//			loadStarRatingViaEar();
		}else if(currentModule=='FP'){
			
		}
	}catch(e){}
	
	try{loadPrefCurViaEar();}catch(e){}
}

function loadPrefCurViaEar(){
	jQuery(document).ready(function(){	
		var becPrefCurCookie = jQuery.cookie("becPrefCur")
		if(becPrefCurCookie != null && becPrefCurCookie !='' && becPrefCurCookie != undefined) {
			loadPrefCur(JSON.parse(jQuery.cookie("becPrefCur")));
		}else{			
			jQuery.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadPrefCur",
	            	   cacheEnable: "N",
	            	   dataField: "prefCurrency",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });
		}
		

	 });
}

function loadHotelTypeViaEar(){
	 jQuery(document).ready(function(){	
		 if(jQuery.cookie("becHotelType")!=null){
			 loadHotelType(JSON.parse(jQuery.cookie("becHotelType")));
		}else{
			jQuery.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadHotelType",
	            	   cacheEnable: "N",
	            	   dataField: "hotelType",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });

		}
		
	 });
}


function loadStarRatingViaEar(){
	 jQuery(document).ready(function(){	
		 /*if(jQuery.cookie("becStarRating")!=null){
			 loadStarRating(JSON.parse(jQuery.cookie("becStarRating")));
		}else{*/
			jQuery.ajax({
	              url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	              dataType: "script",
	              xhr: function () {
	                  if (jQuery.browser.msie && jQuery.browser.msie){
	                      return new ActiveXObject("Microsoft.XMLHTTP");
	                  } else {
	                      return new XMLHttpRequest();
	                  }
	              },
	              data: {
	           	   callBack: "loadStarRating",
	           	   cacheEnable: "N",
	           	   dataField: "starRating",
	           	   bookingChannel: "WEB"
	              },
	              success: function() {
	              }
	          });
		//}
	

	 });
}


function loadCarTypeViaEar(){
	 jQuery(document).ready(function(){	
		 if(jQuery.cookie("becCarType")!=null){
			 loadCarType(JSON.parse(jQuery.cookie("becCarType")));
		}else{
			jQuery.ajax({
	             url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	             dataType: "script",
	             xhr: function () {
	                 if (jQuery.browser.msie && jQuery.browser.msie){
	                     return new ActiveXObject("Microsoft.XMLHTTP");
	                 } else {
	                     return new XMLHttpRequest();
	                 }
	             },
	             data: {
	          	   callBack: "loadCarType",
	          	   cacheEnable: "N",
	          	   dataField: "carType",
	          	   bookingChannel: "WEB"
	             },
	             success: function() {
	             }
	         });
		}
	 });
}

var hotelNameList;
function loadHotelNameViaEar(){
	
	 jQuery(document).ready(function(){	
		 jQuery( "#H_name" ).autocomplete({
		        minLength: 2,
		        source: function(request, response) {
						            
		            jQuery.ajax({
		            	url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
		                dataType: "script",
		                xhr: function () {
		                    if (jQuery.browser.msie && jQuery.browser.msie){
		                        return new ActiveXObject("Microsoft.XMLHTTP");
		                    } else {
		                        return new XMLHttpRequest();
		                    }
		                },
		                data: {
		                	term: request.term,
		                	callBack: "loadHotelName",
			              	cacheEnable: "N",
			              	dataField: "hotelName",
			              	otherParams: jQuery("#hid_H_Loc").val().split("|")[0],
			              	bookingChannel: "WEB"
		                },
		                success: function() {                	
		                	response(hotelNameList);
		                }
		            });
		        }
		    });
		    
		    jQuery("#H_name").bind( "autocompleteselect",function(event, ui){
		    	jQuery("#H_ridecode").val(ui.item.rideId);
		    });
	 });
	 
	 
	 
}
function loadProgramTypeViaEar(){
	try{
	jQuery(document).ready(function(){	
		 if(jQuery.cookie("becProgramType")!=null){
			 loadProgramType(JSON.parse(jQuery.cookie("becProgramType")));
		}else{
			jQuery.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadProgramType",
	            	   cacheEnable: "N",
	            	   dataField: "activityTypeId",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });

		}
		
	 });
	}catch(e){alert(e);}
}

//Call Back Functions


function loadConfig(jsonString) {
	var showPrefAirline='Y';
	var showAirClass='Y';
	var showPrefNonStop='Y';
	var showPromCode='Y';
	var showPrefCurrency='Y';
	var showStarRating='Y';
	var showHotelType='Y';
	var showInventryType='Y';
	var showPriceLevel='Y';
	var showCarType='Y';
	var showActivityType='Y';
	var showPackageType='Y';
	var showHotelName='Y';
	var showResCountry='Y';
	var showDestCountry='Y';
	var showDefCity='Y';
	var showflex='Y';
	var becConfigList = jsonString;
	if(becConfigList !=''){
		for (var x = 0; x < becConfigList.length; x++) {
			showPrefAirline=becConfigList[x].prefAirline;			
			showAirClass=becConfigList[x].airClass;
			showPrefNonStop=becConfigList[x].prefNonStop;
			showPromCode=becConfigList[x].promCode;
			showPrefCurrency=becConfigList[x].prefCur;
			showStarRating=becConfigList[x].starRating;
			showHotelType=becConfigList[x].hotelType;
			showInventryType=becConfigList[x].invType;
			showPriceLevel=becConfigList[x].priceLvl;
			showCarType=becConfigList[x].carType;
			showActivityType=becConfigList[x].actType;
			showPackageType=becConfigList[x].pkgType;
			showHotelName=becConfigList[x].hotelName;
			showResCountry=becConfigList[x].resCountry;	
			showDestCountry=becConfigList[x].destCountry;
			showDefCity=becConfigList[x].defaultCity;
			showflex=becConfigList[x].showflex;
		}
	}
	if(showPrefAirline=='N'){
		jQuery('#pref_airline_F').css('display', 'none');
		jQuery('#pref_airline_V').css('display', 'none');
	}
	if(showAirClass=='N'){
		jQuery('#air_class_F').css('display', 'none');
		jQuery('#air_class_V').css('display', 'none');
	}
	if(showPrefNonStop=='N'){
		jQuery('#pref_nonstop_F').css('display', 'none');
	}
	if(showPromCode=='N'){
		jQuery('#promotionCodeDiv_F').css('display', 'none');
		jQuery('#promotionCodeDiv_H').css('display', 'none');
		jQuery('#promotionCodeDiv_C').css('display', 'none');
		jQuery('#promotionCodeDiv_A').css('display', 'none');
		jQuery('#promotionCodeDiv_V').css('display', 'none');
		
	}
	if(showPrefCurrency=='N'){
		jQuery('#pref_cur_F').css('display', 'none');
		jQuery('#pref_cur_H').css('display', 'none');
		jQuery('#car_curr_div').css('display', 'none');
		jQuery('#t_curr_div').css('display', 'none');
		jQuery('#ac_curr_lbl_div').css('display', 'none');
		jQuery('#pref_cur_V').css('display', 'none');
		jQuery('#air_curr_div').css('display', 'none');
	}
	if(showStarRating=='N'){
		jQuery('#star_rating_div_H').css('display', 'none');
		jQuery('#star_rating_div_V').css('display', 'none');
	}
	if(showHotelType=='N'){
		jQuery('#hotel_type_H').css('display', 'none');
		jQuery('#hotel_type_V').css('display', 'none');
	}
	if(showHotelName=='N'){
		jQuery('#hotel_name_H').css('display', 'none');
	}
	
	if(showInventryType=='N'){
		jQuery('#inv_type_H').css('display', 'none');
	}
	if(showPriceLevel=='N'){
		jQuery('#prc_lvl_H').css('display', 'none');
	}
	if(showCarType=='N'){
		jQuery('#car_type_C').css('display', 'none');
	}
	if(showActivityType=='N'){
		jQuery('#act_type_A').css('display', 'none');
	}
	if(showPackageType=='N'){
		jQuery('#pkg_type_P').css('display', 'none');
	}
	if(showflex=='N'){
		jQuery('#flax_container_div').css('display', 'none');
	}
	if(showResCountry=='N'){
		try{
			jQuery('#t_res_country_div').css('display', 'none');
			jQuery('#h_res_country_div').css('display', 'none');
			jQuery('#v_res_country_div').css('display', 'none');
			jQuery('#fp_res_country_div').css('display', 'none');
			jQuery('#f_res_country_div').css('display', 'none');
			jQuery('#c_res_country_div').css('display', 'none');
			jQuery('#a_res_country_div').css('display', 'none');
			
			jQuery('#V_Country').attr('validate', '');
			jQuery('#C_Country').attr('validate', '');
			jQuery('#tr_Country').attr('validate', '');
			jQuery('#AC_Country').attr('validate', '');
			jQuery('#P_Country').attr('validate', '');
			jQuery('#F_Country').attr('validate', '');
			jQuery('#H_Country').attr('validate', '');
		}catch(e){}
	}
	if(showDestCountry=='N'){
		try{
			jQuery('.destination_country_AS').css('display', 'none');
			jQuery('.destination_country_HS').css('display', 'none');
			jQuery('.destination_country_A').css('display', 'none');
			jQuery('.destination_country_H').css('display', 'none');
		}catch(e){}
	}
	
	if(showDefCity!='Y' && showDefCity!='N'){
		
		try{
			var codes=showDefCity.split(",");
			//jQuery('#H_Loc').val(codes[0]);
			jQuery('#H_Loc').val('');
			jQuery('#hid_H_Loc').val(codes[1]);
			jQuery('#activity_Loc').val(codes[0]);
			jQuery('#hid_AC_Loc').val(codes[1]);
		}catch(e){}
	}
	
	if(jQuery.cookie("becConfig")==null){		
		var becConfig = [
		                 	{"prefAirline":showPrefAirline,
	    	                "airClass":showAirClass,
	    	                "prefNonStop":showPrefNonStop,
	    	                "promCode":showPromCode,
	    	                "prefCur":showPrefCurrency,
	    	                "starRating":showStarRating,
	    	                "hotelType":showHotelType,
	    	                "invType":showInventryType,
	    	                "priceLvl":showPriceLevel,
	    	                "carType":showCarType,
	    	                "actType":showActivityType,
	    	                "pkgType":showPackageType,
	    	                "hotelName":showHotelName,
	    	                "resCountry":showResCountry,
	    	                "destCountry":showDestCountry,
	    	                "showflex":showflex,
	    	                "defaultCity":showDefCity}
	    	];	
		
		var date = new Date();		
		date.setTime(date.getTime() + (cookieExpMin * 60 * 1000));
		jQuery.cookie("becConfig", JSON.stringify(becConfig),{ expires: date });
		
	}
	
	if(document.forms["form1"].elements["Air_TripType2"] != undefined && document.forms["form1"].elements["Air_TripType2"].checked){
		//document.getElementById("flax_container_div").style.display="block";
	}
	
}

function loadPrefCur(jsonString){
	var prefCurList = jsonString;
	if(prefCurList !=''){
		if(currentModule=='H'){
			reLoadSelectList('H_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='F'){
			reLoadSelectList('F_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='C'){
			reLoadSelectList('C_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='T'){
			reLoadSelectList('tr_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='A'){
			reLoadSelectList('AC_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='V'){
			reLoadSelectList('V_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else if(currentModule=='FP'){
			reLoadSelectList('FP_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}else{
			reLoadSelectList('H_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('F_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('C_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('tr_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('AC_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('V_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
			reLoadSelectList('FP_consumerCurrencyCode',prefCurList,'','Select Currency',false,"becPrefCur");
		}
		
	}
}

function loadHotelName(jsonString){
	hotelNameList=jsonString;
}

function loadHotelType(jsonString){
	var hotelTypeList = jsonString;
	if(hotelTypeList !=''){		
		if(currentModule=='H'){
			reLoadSelectList('hType_h',hotelTypeList,'ALL','Select All',true,"becHotelType");
		}else if(currentModule=='V'){
			reLoadSelectList('hType_v',hotelTypeList,'ALL','Select All',true,"becHotelType");
		}
	}
}

function loadStarRating(jsonString){
	var starRatingList = jsonString;
	if(starRatingList !=''){	
		if(currentModule=='H'){
			reLoadSelectList('star_rating_H',starRatingList,'ALL','Select All',true,"becStarRating");
		}else if(currentModule=='V'){
			reLoadSelectList('star_rating_V',starRatingList,'ALL','Select All',true,"becStarRating");
		}
	}
}

function loadCarType(jsonString){
	var carTypeList = jsonString;
	if(carTypeList !=''){		
		if(currentModule=='C'){
			reLoadSelectList('Car_Type',carTypeList,'ALL','Select All',true,"becCarType");
		}
	}
}

function loadProgramType(jsonString){
	try{
	var programTypeList = jsonString;
	if(programTypeList !=''){		
			reLoadSelectList('activityTypeId_a',programTypeList,'ALL','Select All',true,"becProgramType");
	}}catch(e){
		alert(e);
	}
}

jQuery(".hotel-passenger-label-text").hide();

function reLoadSelectList(selectorName,preferredList,firstLabel,firstVal,showFirstVal,cacheName){
	
	try{
	if(firstVal!=null && firstVal!=''){
		if(showFirstVal){
			jQuery("#"+selectorName).empty().append(jQuery('<option selected=\'selected\'></option>').val(firstLabel).html(firstVal));
		}else{
			jQuery("#"+selectorName).empty().append(jQuery('<option selected=\'selected\' style=\'display:none\'></option>').val(firstLabel).html(firstVal));
		}
	}
	for (var x = 0; x < preferredList.length; x++) {
		jQuery("#"+selectorName).append(jQuery('<option></option>').val(preferredList[x].value).html(preferredList[x].label));
	}

	if(jQuery.cookie(cacheName)==null){
		var cacheJson = [];
		for(var i in preferredList) {

		    var item = preferredList[i];

		    cacheJson.push({ 
		        "value" : item.value,
		        "label"  : item.label
		    });
		}
		var date = new Date();		
		date.setTime(date.getTime() + (cookieExpMin * 60 * 1000));
		jQuery.cookie(cacheName, JSON.stringify(cacheJson),{ expires: date });
	}
	}catch(e){
		alert(e);
	}
}

function createXMLHttpRequest() {
	try{ return new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
    try{ return new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
	try{ return new XMLHttpRequest(); }catch (e) {}
	return null;
}

function defaultDataWithRegionAndCountry(ex){
	var statusOfHideResidanceCountry = "";
	var defaultRegionAndCountryCodes ="";
	
	jQuery(document).ready(function(){
	try{	
	jQuery.ajax({
              url : subURL+'ComponentSupportAction.do',
              method : 'GET',
              data : {
            	  method : "getDefaultRegionAndCountryCodes",
            	  bookingChannel : "WEB"
              },
              dataType: "text",
              success: function(data){
            	var defaultCountryList = eval(data);
			    if (defaultCountryList != undefined && defaultCountryList.length > 0) {
			    	statusOfHideResidanceCountry = defaultCountryList[0].statusOfHideResidanceCountry;	
			    	defaultRegionAndCountryCodes = defaultCountryList[0].defaultRegionAndCountryCodes;	    
			    	if(statusOfHideResidanceCountry == 'Y'){
					var en = ex;
				    	if(ex=='T')en='tr';
					    jQuery("#"+en+"_Country").val(defaultRegionAndCountryCodes);
				    }					   
			    }
			    jQuery("#pkgType").val(ex);
				eval("LoadData_"+ex+"()");
				submitData();
              }
          });
	}catch(e){alert(e);}
	});				  						  						  
}



function  validatePriceFilter(){
	jQuery(document).ready(function() {
	    jQuery('#priceLevelFrom_H, #priceLevelTo_H').keydown(function (e) {
	        // Allow: backspace, delete, tab, escape, enter and .
	        if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	             // Allow: Ctrl+A
	            (e.keyCode == 65 && e.ctrlKey === true) || 
	             // Allow: home, end, left, right, down, up
	            (e.keyCode >= 35 && e.keyCode <= 40)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	    });
	});
}
validatePriceFilter();

function getDateFormat(date){
	return jQuery.datepicker.formatDate('dd M yy', new Date(date));
}

function getOriginalDateFormat(date){
	var r  = new Date(date);
	return jQuery.datepicker.formatDate('mm/dd/yy', new Date(date));
	
}
