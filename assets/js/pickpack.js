jQuery(document).ready(function ($) {
    var subUrl = "https://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/";
    window.subUrl = subUrl;


    var locationDataURL = 'https://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/ComponentSupport.do?method=locationData';
    var schemaName="pikpakgo";
    var cookieExpMin = 40;
    var dateFormatKey = 'dd M yy';
    var cache = {};
    var search_type = searchTypeSelector();
    var selected_data = null;
    var jsonDataList = '';

   $.ajax({
      url: subUrl + "ComponentSupportAction.do?method=getGEOLocation",
      method: "post",
      dataType: "text",
      data: {
         method: "getGEOLocation",
         transectionId: $("#transectionId").val(),
      },
      success: function (data) {
         var locationList = $.parseJSON(data).localizeJson;
         // var locationList = eval(data);
         if (locationList.length > 0) {
            $("#ipAddress").val(locationList[0].ipAddress);
            $("#clientCountryCode").val(locationList[0].clientCountryCode);
         }
      },
   });

   becConfigLoad();
   becFilterLoad("H");

   var currentModule = "ALL";
   function becConfigLoad() {
      var becConfig = $.cookie("becConfig");
      if (becConfig != null && becConfig != "" && becConfig != undefined) {
         loadConfig(JSON.parse($.cookie("becConfig")));
      } else {
         $.ajax({
            url: subUrl + "ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
            dataType: "text",
            cache: true,
            data: {
               callBack: "loadConfig",
               cacheEnable: "Y",
               bookingChannel: "WEB",
            },
            success: function (data) {
               eval(data);
            },
            done: function (data) {
               eval(data);
            },
            error: function (data) {
               console.log(
                  data.status + ":" + data.statusText,
                  data.responseText
               );
            },
         });
      }
   }

    var os = $('#H_nights')[0].options;
    os.length = 0;
    for(var i=1;i<31;i++){
        os[os.length] = new Option(i,i);
    }

   function loadConfig(jsonString) {
      console.log("loadConfig running");
      var showPrefAirline = "Y";
      var showAirClass = "Y";
      var showPrefNonStop = "Y";
      var showPromCode = "Y";
      var showPrefCurrency = "Y";
      var showStarRating = "Y";
      var showHotelType = "Y";
      var showInventryType = "Y";
      var showPriceLevel = "Y";
      var showCarType = "Y";
      var showActivityType = "Y";
      var showPackageType = "Y";
      var showHotelName = "Y";
      var showResCountry = "Y";
      var showDestCountry = "Y";
      var showDefCity = "Y";
      var showflex = "Y";
      var becConfigList = jsonString;
      if (becConfigList != "") {
         for (var x = 0; x < becConfigList.length; x++) {
            showPrefAirline = becConfigList[x].prefAirline;
            showAirClass = becConfigList[x].airClass;
            showPrefNonStop = becConfigList[x].prefNonStop;
            showPromCode = becConfigList[x].promCode;
            showPrefCurrency = becConfigList[x].prefCur;
            showStarRating = becConfigList[x].starRating;
            showHotelType = becConfigList[x].hotelType;
            showInventryType = becConfigList[x].invType;
            showPriceLevel = becConfigList[x].priceLvl;
            showCarType = becConfigList[x].carType;
            showActivityType = becConfigList[x].actType;
            showPackageType = becConfigList[x].pkgType;
            showHotelName = becConfigList[x].hotelName;
            showResCountry = becConfigList[x].resCountry;
            showDestCountry = becConfigList[x].destCountry;
            showDefCity = becConfigList[x].defaultCity;
            showflex = becConfigList[x].showflex;
         }
      }
      if (showPrefAirline == "N") {
         $("#pref_airline_F").hide();
         $("#pref_airline_V").hide();
      }
      if (showAirClass == "N") {
         $("#air_class_F").hide();
         $("#air_class_V").hide();
      }
      if (showPrefNonStop == "N") {
         $("#pref_nonstop_F").hide();
      }
      if (showPromCode == "N") {
         $("#promotionCodeDiv_F").hide();
         $("#promotionCodeDiv_H").hide();
         $("#promotionCodeDiv_C").hide();
         $("#promotionCodeDiv_A").hide();
         $("#promotionCodeDiv_V").hide();
      }
      if (showPrefCurrency == "N") {
         $("#pref_cur_F").hide();
         $("#pref_cur_H").hide();
         $("#car_curr_div").hide();
         $("#t_curr_div").hide();
         $("#ac_curr_lbl_div").hide();
         $("#pref_cur_V").hide();
         $("#air_curr_div").hide();
      }
      if (showStarRating == "N") {
         $("#star_rating_div_H").hide();
         $("#star_rating_div_V").hide();
      }
      if (showHotelType == "N") {
         $("#hotel_type_H").hide();
         $("#hotel_type_V").hide();
      }
      if (showHotelName == "N") {
         $("#hotel_name_H").hide();
      }

      if (showInventryType == "N") {
         $("#inv_type_H").hide();
      }
      if (showPriceLevel == "N") {
         $("#prc_lvl_H").hide();
      }
      if (showCarType == "N") {
         $("#car_type_C").hide();
      }
      if (showActivityType == "N") {
         $("#act_type_A").hide();
      }
      if (showPackageType == "N") {
         $("#pkg_type_P").hide();
      }
      if (showflex == "N") {
         $("#flax_container_div").hide();
      }
      if (showResCountry == "N") {
         try {
            $("#t_res_country_div").hide();
            $("#h_res_country_div").hide();
            $("#v_res_country_div").hide();
            $("#fp_res_country_div").hide();
            $("#f_res_country_div").hide();
            $("#c_res_country_div").hide();
            $("#a_res_country_div").hide();

            $("#V_Country").attr("validate", "");
            $("#C_Country").attr("validate", "");
            $("#tr_Country").attr("validate", "");
            $("#AC_Country").attr("validate", "");
            $("#P_Country").attr("validate", "");
            $("#F_Country").attr("validate", "");
            $("#H_Country").attr("validate", "");
         } catch (e) {}
      }
      if (showDestCountry == "N") {
         try {
            $(".destination_country_AS").hide();
            $(".destination_country_HS").hide();
            $(".destination_country_A").hide();
            $(".destination_country_H").hide();
         } catch (e) {}
      }

      if (showDefCity != "Y" && showDefCity != "N") {
         try {
            var codes = showDefCity.split(",");
            //$('#H_Loc').val(codes[0]);
            $("#H_Loc").val("");
            $("#hid_H_Loc").val(codes[1]);
            $("#activity_Loc").val(codes[0]);
            $("#hid_AC_Loc").val(codes[1]);
            console.log(codes);
         } catch (e) {}
      }

      if ($.cookie("becConfig") == null) {
         var becConfig = [
            {
               prefAirline: showPrefAirline,
               airClass: showAirClass,
               prefNonStop: showPrefNonStop,
               promCode: showPromCode,
               prefCur: showPrefCurrency,
               starRating: showStarRating,
               hotelType: showHotelType,
               invType: showInventryType,
               priceLvl: showPriceLevel,
               carType: showCarType,
               actType: showActivityType,
               pkgType: showPackageType,
               hotelName: showHotelName,
               resCountry: showResCountry,
               destCountry: showDestCountry,
               showflex: showflex,
               defaultCity: showDefCity,
            },
         ];

         var date = new Date();
         date.setTime(date.getTime() + cookieExpMin * 60 * 1000);
         $.cookie("becConfig", JSON.stringify(becConfig), { expires: date });
      }
   }

   function becFilterLoad(curMod) {
      try {
         currentModule = curMod;
         // put specific functions into the selection. Common functions outside the if
         if (currentModule == "H") {
            loadHotelNameViaEar();
         } else if (currentModule == "F") {
         } else if (currentModule == "C") {
            loadCarTypeViaEar();
         } else if (currentModule == "T") {
         } else if (currentModule == "A") {
            loadProgramTypeViaEar();
         } else if (currentModule == "V") {
         } else if (currentModule == "FP") {
         }
      } catch (e) {}

      try {
         loadPrefCurViaEar();
      } catch (e) {}
   }

   var hotelNameList;
   function loadHotelNameViaEar() {
      $(document).ready(function () {
         $("#H_name").autocomplete({
            minLength: 2,
            source: function (request, response) {
               $.ajax({
                  url:
                     subURL +
                     "ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
                  dataType: "script",
                  xhr: function () {
                     if ($.browser.msie && $.browser.msie) {
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
                     otherParams: $("#hid_H_Loc").val().split("|")[0],
                     bookingChannel: "WEB",
                  },
                  success: function () {
                     response(hotelNameList);
                  },
               });
            },
         });

         $("#H_name").bind("autocompleteselect", function (event, ui) {
            $("#H_ridecode").val(ui.item.rideId);
         });
      });
   }
   function loadCarTypeViaEar() {
      $(document).ready(function () {
         if ($.cookie("becCarType") != null) {
            loadCarType(JSON.parse($.cookie("becCarType")));
         } else {
            $.ajax({
               url:
                  subURL +
                  "ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
               dataType: "script",
               xhr: function () {
                  if ($.browser.msie && $.browser.msie) {
                     return new ActiveXObject("Microsoft.XMLHTTP");
                  } else {
                     return new XMLHttpRequest();
                  }
               },
               data: {
                  callBack: "loadCarType",
                  cacheEnable: "N",
                  dataField: "carType",
                  bookingChannel: "WEB",
               },
               success: function () {},
            });
         }
      });
   }

   function loadProgramTypeViaEar() {
        try {
            $(document).ready(function () {
                if ($.cookie("becProgramType") != null) {
                loadProgramType(JSON.parse($.cookie("becProgramType")));
                } else {
                $.ajax({
                    url: subURL + "ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
                    dataType: "script",
                    xhr: function () {
                        if ($.browser.msie && $.browser.msie) {
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        } else {
                            return new XMLHttpRequest();
                        }
                    },
                    data: {
                        callBack: "loadProgramType",
                        cacheEnable: "N",
                        dataField: "activityTypeId",
                        bookingChannel: "WEB",
                    },
                    success: function () {},
                });
                }
            });
        } catch (e) {
            alert(e);
        }
    }

    window.loadPrefCur = function loadPrefCur(jsonString){
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

    window.search = function search(ex){
	
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
        }
    }

    window.setadultcount = function setadultcount(e){
            var tempcount = 0;
            for(i=0;i<$("#norooms_"+e).val();i++){
                tempcount += parseInt($("#R"+(i+1)+"occAdults_"+e).val());
            }
            return tempcount;
        }
    

    function defaultDataWithRegionAndCountry(ex){
	    console.log('defaultDataWithRegionAndCountry is running')

        var statusOfHideResidanceCountry = "";
        var defaultRegionAndCountryCodes ="";
        
        try{	
            $.ajax({
                  url : subUrl+'ComponentSupportAction.do',
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
                            $("#"+en+"_Country").val(defaultRegionAndCountryCodes);
                        }					   
                    }
                    $("#pkgType").val(ex);
                    console.log(ex);
                    eval("LoadData_"+ex+"()");
                    submitData();
                  }
              });
        }catch(e){alert(e);}			  						  						  
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

    function Processing(){
        $('#rez-preloader',parent.document).fadeIn();
    }

    var internalBEC = false;
    function doWJTSearch(form){
        //alert(123)
        var data = convertJson(form,'BEC_HOTEL_WEB_AGAIN'==form["place"].value);
        var actionURL ="";
        //alert($('#transectionId').val());
        IWC(new IWCParams(form["place"].value,"RESULT","SEARCH","",data,$('#transectionId').val(),0)); 
        
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

    function reLoadSelectList(selectorName,preferredList,firstLabel,firstVal,showFirstVal,cacheName){
	
        try{
        if(firstVal!=null && firstVal!=''){
            if(showFirstVal){
                $("#"+selectorName).empty().append($('<option selected=\'selected\'></option>').val(firstLabel).html(firstVal));
            }else{
                $("#"+selectorName).empty().append($('<option selected=\'selected\' style=\'display:none\'></option>').val(firstLabel).html(firstVal));
            }
        }
        for (var x = 0; x < preferredList.length; x++) {
            $("#"+selectorName).append($('<option></option>').val(preferredList[x].value).html(preferredList[x].label));
        }
    
        if($.cookie(cacheName)==null){
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
            $.cookie(cacheName, JSON.stringify(cacheJson),{ expires: date });
        }
        }catch(e){
            alert(e);
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
            
            $('#checkInDate').val(vac_departure.value);
            $('#checkOutDate').val(vac_arrival.value);
            $('#checkInTime').val(Air_DepTime.value); 
            $('#checkOutTime').val(Air_RetTime.value);
            $('#cityCode').val(hid_H_Loc_V.value);
            $('#cityName').val(hid_H_Loc_V.value.split('|')[1]);
            $('#countryCode').val(V_RetLocHid.value.split('|')[5] );
            $('#countryName').val(V_RetLocHid.value.split('|')[5]);
            $('#stateCode').val(stateCode);
            $('#startingLocationName').val(V_DepFromHid.value.split('|')[0]);
            $('#startingLocationCode').val(V_DepFromHid.value);
            $('#startingCountryCode').val(V_DepFromHid.value.split('|')[5]);
            $('#endingCountryCode').val("0");
            $('#endingLocationName').val(V_RetLocHid.value.split('|')[0]);
            $('#endingLocationCode').val(V_RetLocHid.value);
            $('#numberOfNights').val(vnights);
            $('#numberOfRooms').val($('#norooms_V').val());
            $('#numberOfAdults').val(setadultcount('V'));
            $('#numberOfChilds').val(setchildcount('V'));
            $('#numberOfInfants').val(setinfantcount('V'));
            $('#numberOfSeniors').val("0");
            $('#airLine').val(Air_line_V.value);
            $('#userPassword').val("0");
            $('#forwardURL').val("0");
            $('#vacationPkg').val("Y");
            $('#cacheKey').val("0");
            $('#sessionName').val("0");
            $('#isbackOfficePartnerLink').val("0");
            $('#enabledPublicDCLogin').val("0");
            $('#enableConsumerRegion').val("0");
            $('#bookType').val("0");
            $('#consumerCountryId').val(V_Country.value);
            $('#consumerRegionId').val(V_Country.value);
            $('#languageCode').val("0");
            $('#consumerCurrencyCode').val(V_consumerCurrencyCode.value );
            $('#guestList').val(setSelRoomOcc('V'));
            $('#vacationpkg').val("Y");
            $('#seatClass').val(seatClass);
            $('#tripType').val(trip_type_v.value);
            $('#discountCouponNo').val(discountCoupon_No_V.value);
             
            $('#hotelStarId').val(star_rating_V.value);
            $('#hotelTypeId').val(hType_v.value);
            $('#isFlexSearch').val((isFlexSearch_V.checked?'Y':'N'));
            
            if(V_DepFromHid.value.split('|')[0]!=V_DepFrom.value){
                $('#V_DepFromHid').val('');
                return validate('form');
            }else if(V_RetLocHid.value.split('|')[0]!=V_RetLoc.value ){
                $('#V_RetLocHid').val('');
                return validate('form');
            }
            document.forms["ResPkgSearchForm"].action= subUrl+"Search.do?method=loadWithResults"//$('#actionPath').val();
            console.log(setSelRoomOcc('V'))
        }
    }
    
    function LoadData_H(){
        with(document.form1){
            console.log('LoadData_H');
            var stateCode = "";
            if(hid_H_Loc.value.split('|')[2]=="-" || hid_H_Loc.value.split('|')[2]==""){
                stateCode = ("0");
            }else{
                stateCode = (hid_H_Loc.value.split('|')[2]);
            }

            $('#checkInDate').val(ho_departure.value);
            $('#checkOutDate').val(ho_arrival.value);
            $('#cityCode').val(hid_H_Loc.value);
            $('#cityName').val(hid_H_Loc.value.split('|')[1]);
            $('#countryCode').val(hid_H_Loc.value.split('|')[3] );
            $('#countryName').val(hid_H_Loc.value.split('|')[5]);
            $('#stateCode').val(stateCode);
            $('#numberOfNights').val(H_nights.value );
            $('#numberOfRooms').val($('#norooms_H').val());
            $('#numberOfAdults').val(setadultcount('H'));
            $('#numberOfChilds').val(setchildcount('H'));
            $('#numberOfInfants').val(setinfantcount('H'));
            $('#numberOfSeniors').val("0");

            try{$('#destinationCountry').val(destinationcountry?destinationcountry.value:"");}catch(e){}
            $('#forwardURL').val("0");
            $('#cacheKey').val("0");
            //$('#sellingCurrency').val("USD");
            $('#sessionName').val("0");
            //$('#retrieveExistingBookings').val(retrieveExistingBookings.value);
            $('#isbackOfficePartnerLink').val("0");
            $('#enabledPublicDCLogin').val("0");
            $('#enableConsumerRegion').val("0");
            $('#bookType').val("0");
            $('#consumerCountryId').val(H_Country.value);
            $('#consumerRegionId').val(H_Country.value);
            $('#languageCode').val("en");
            $('#consumerCurrencyCode').val(H_consumerCurrencyCode.value );
            $('#guestList').val(setSelRoomOcc('H'));
            $('#vacationpkg').val("N");
            $('#tripType').val("R");
            
            $('#starRating').val(star_rating_H.value);
            $('#hotelType').val(hType_h.value);
            $('#hotelName').val(H_name.value);$('#selectedHotelRideCode').val(H_ridecode.value); 
            
            $('#sortHotelBy').val('hotelRank,minimumRate');
            $('#hotelStarId').val(star_rating_H.value);
            $('#starRating_Hotels').val(star_rating_H.value);
            $('#hotelTypeId').val(hType_h.value);	// there are two hType_v objects, second one is the correct
            $('#hotelName').val(H_name.value);$('#selectedHotelRideCode').val(H_ridecode.value);
            $('#priceLevelFrom').val(priceLevelFrom_H.value);
            $('#priceLevelTo').val(priceLevelTo_H.value);
            $('#availableHotels').val((availableHotels_H.checked?'on':'off'));
            $('#onRequestHotels').val((onRequestHotels_H.checked?'on':'off'));
            $('#discountCouponNo').val(discountCoupon_No_H.value);
            $('#multiLangCityName').val($('#cityName').val());
            var selectedOption = document.querySelector("input[type='radio'][name=hotelSearchType]:checked").value;
            $('#hotelSearchType').val(selectedOption);
            
            if(hid_H_Loc.value.split('|')[1] != H_Loc.value){
                $('#hid_H_Loc').val('');
                return validate('formH');
            }

            document.forms["ResPkgSearchForm"].action= subUrl+"Search.do?method=loadWithResults"//$('#actionPath').val();
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
            
            var stateCode = "";
            if(hid_air_Loc1_a.value.split('|')[4]=="-" || hid_air_Loc1_a.value.split('|')[4]==""){
                stateCode = ("0");
            }else{
                stateCode = (hid_air_Loc1_a.value.split('|')[4]);
            }
            
            $('#nonStopStatus').val(nonstop_flight.checked?'Nonstop':'off');
            
            if(document.forms["form1"].elements["Air_TripType3"].checked){
                 var checkindate ="";
                 checkindate = air_departure.value + (air_departure_2.value!="" ? ' | '+air_departure_2.value : "") + (air_departure_3.value!="" ? ' | '+air_departure_3.value : "") + (air_departure_4.value!="" ? ' | '+air_departure_4.value : "") + (air_departure_5.value!="" ? ' | '+air_departure_5.value : "");
                 $('#checkInDate').val(checkindate);
                 $('#checkOutDate').val("");
            }
            else{
                $('#checkInDate').val(air_departure.value);
                $('#checkOutDate').val(air_arrival.value);
            }
            
            $('#checkInTime').val(Air_DepTime_a.value);
            $('#checkOutTime').val(Air_RetTime_a.value);
            $('#cityCode').val(hid_air_Loc1_a.value.split('|')[2]+"|"+hid_air_Loc1_a.value.split('|')[0]);
            $('#cityName').val(hid_air_Loc1_a.value.split('|')[0]);
            $('#countryCode').val(hid_air_Loc1_a.value.split('|')[5] );
            $('#countryName').val(hid_air_Loc1_a.value.split('|')[5]);
            $('#stateCode').val(stateCode);
            $('#startingLocationName').val(hid_air_Loc_a.value.split('|')[0]);
            $('#startingLocationCode').val(hid_air_Loc_a.value);
            $('#startingCountryCode').val(hid_air_Loc_a.value.split('|')[5]);
            $('#endingCountryCode').val("0");
            $('#endingLocationName').val(hid_air_Loc1_a.value.split('|')[0]);
            $('#endingLocationCode').val(hid_air_Loc1_a.value);
            
            /** multi destination fields*/
            $('#startingFligtLocationTwoName').val(hid_air_Loc_dep_m_2.value.split('|')[0]);
            $('#startingFligtLocationTwoCode').val(hid_air_Loc_dep_m_2.value);
            $('#endingFligtLocationTwoName').val(hid_air_Loc_to_m_2.value.split('|')[0]);
            $('#endingFligtLocationTwoCode').val(hid_air_Loc_to_m_2.value);
            $('#flightCheckInDateTwo').val(air_departure_2.value);
            $('#flightCheckInTimeTwo').val(Air_DepTime_a_2.value);
            
            $('#startingFligtLocationThreeName').val(hid_air_Loc_dep_m_3.value.split('|')[0]);
            $('#startingFligtLocationThreeCode').val(hid_air_Loc_dep_m_3.value);
            $('#endingFligtLocationThreeName').val(hid_air_Loc_to_m_3.value.split('|')[0]);
            $('#endingFligtLocationThreeCode').val(hid_air_Loc_to_m_3.value);
            $('#flightCheckInDateThree').val(air_departure_3.value);
            $('#flightCheckInTimeThree').val(Air_DepTime_a_3.value);
            
            $('#startingFligtLocationFourName').val(hid_air_Loc_dep_m_4.value.split('|')[0]);
            $('#startingFligtLocationFourCode').val(hid_air_Loc_dep_m_4.value);
            $('#endingFligtLocationFourName').val(hid_air_Loc_to_m_4.value.split('|')[0]);
            $('#endingFligtLocationFourCode').val(hid_air_Loc_to_m_4.value);
            $('#flightCheckInDateFour').val(air_departure_4.value);
            $('#flightCheckInTimeFour').val(Air_DepTime_a_4.value);
            
            $('#startingFligtLocationFiveName').val(hid_air_Loc_dep_m_5.value.split('|')[0]);
            $('#startingFligtLocationFiveCode').val(hid_air_Loc_dep_m_5.value);
            $('#endingFligtLocationFiveName').val(hid_air_Loc_to_m_5.value.split('|')[0]);
            $('#endingFligtLocationFiveCode').val(hid_air_Loc_to_m_5.value);
            $('#flightCheckInDateFive').val(air_departure_5.value);
            $('#flightCheckInTimeFive').val(Air_DepTime_a_5.value);
            
            $('#numberOfNights').val(F_nights.value );
            $('#numberOfNights').val(air_nights.value);
            $('#numberOfAdults').val(R1occAdults_F.value);
            $('#numberOfChilds').val(R1occChildren_F.value);
            $('#numberOfInfants').val(R1occInfant_F.value);
            $('#numberOfSeniors').val(0);
            $('#airLine').val(Air_line.value);
            $('#portal').val("0");
            $('#userCode').val("0");
            $('#userName').val("0");
            $('#userPassword').val("0");
            $('#forwardURL').val("0");
            
            $('#vacationPkg').val("N");
            
            $('#isbackOfficePartnerLink').val("0");
            $('#enabledPublicDCLogin').val("0");
            $('#enableConsumerRegion').val("0");
            $('#actionTyp').val("0");
            $('#bookType').val("0");
            $('#consumerCountryId').val(F_Country.value);
            $('#consumerRegionId').val(F_Country.value);
            $('#languageCode').val("en");
            $('#consumerCurrencyCode').val(F_consumerCurrencyCode.value );
            $('#vacationpkg').val("N");
            $('#seatClass').val(seatClass);
            $('#guestList').val(setSelRoomOcc('F'));
            $('#tripType').val(trip_type.value);
            $('#discountCouponNo').val(discountCoupon_No_F.value);
            $('#isFlexSearch').val((isFlexSearch_F.checked?'Y':'N'));
            
            
            if(hid_air_Loc_a.value.split('|')[0]!=air_Loc_a.value){
                $('#hid_air_Loc_a').val('');
                return validate('formF');
            }
            else if(hid_air_Loc1_a.value.split('|')[0]!=air_Loc1_a.value ){
                $('#hid_air_Loc1_a').val('');
                return validate('formF');
            }
            
            document.forms["ResPkgSearchForm"].action= subUrl+"Search.do?method=loadWithResults"//$('#actionPath').val();
    
        }
    }
    
    
    
    function LoadData_T(){
        
        with(document.form1){
            
            if(hotel_location_drop[0].checked){ // Hotel / Location drop selected
                
                $('#cityCode').val(hid_pickUpCity_H_Loc.value.split('|')[0]);
                $('#cityName').val(hid_pickUpCity_H_Loc.value.split('|')[1]);
                $('#countryCode').val(hid_pickUpCity_H_Loc.value.split('|')[3]);
                $('#countryName').val(hid_pickUpCity_H_Loc.value.split('|')[5]);
                $('#checkInDate').val(tr_arrival.value);
                $('#checkOutDate').val(tr_arrival.value);
                $('#transferTime').val(tr_arrivalTime.value);
                $('#pickUpCode').val(pickUpLocationType.value); 
                $('#dropOffCode').val("H"); // drop off to Hotel
                $('#dropOffCityName').val(dropOffCity_H_Loc.value);
                $('#dropOffCityCode').val(hid_dropOffCity_H_Loc.value.split('|')[0]);
                /*if(hid_pickUpCity_H_Loc.value.split('|')[1]!=pickUpCity_H_Loc.value){
                    $('#hid_pickUpCity_H_Loc').val('');
                    return validate('formT');
                }*/
                
            }else{ // Airport / Station drop selected
                $('#cityCode').val(hid_pickUpCity_A_Loc.value.split('|')[0]);
                $('#cityName').val(hid_pickUpCity_A_Loc.value.split('|')[1]);
                $('#countryCode').val(hid_pickUpCity_A_Loc.value.split('|')[3]);
                $('#countryName').val(hid_pickUpCity_A_Loc.value.split('|')[5]);
                $('#checkInDate').val(tr_departure.value);
                $('#checkOutDate').val(tr_departure.value);
                $('#transferTime').val(tr_depTime.value);
    
                $('#pickUpCode').val(dropOffLocationType.value); // pickup from Hotel
                $('#dropOffCode').val("A"); // drop off to A-Airport/ S-Station/ P-Port
                $('#dropOffCityName').val(dropOffCity_A_Loc.value);
                $('#dropOffCityCode').val(hid_dropOffCity_A_Loc.value.split('|')[0]);
                if(hid_pickUpCity_A_Loc.value.split('|')[1]!=pickUpCity_A_Loc.value){
                    $('#hid_pickUpCity_A_Loc').val('');
                    return validate('formT');
                }
            }
            
            $('#numberOfNights').val(tr_nights.value );
            $('#numberOfRooms').val($('#norooms_T').val());
            $('#numberOfAdults').val(parseInt($('#tr_cmbNoOfAdults').val()));
            $('#numberOfChilds').val(parseInt($('#tr_cmbNoOfChildren').val()));
            $('#numberOfInfants').val("0");
            $('#numberOfSeniors').val("0");
            $('#vacationPkg').val("N");
            
            $('#sessionName').val("0");
            $('#isbackOfficePartnerLink').val("0");
            $('#enabledPublicDCLogin').val("0");
            $('#enableConsumerRegion').val("0");
            $('#actionTyp').val("0");
            $('#bookType').val("0");
            $('#consumerCountryId').val($('#tr_Country').val());
            $('#consumerRegionId').val($('#tr_Country').val());
            $('#languageCode').val("en");
            $('#consumerCurrencyCode').val(tr_consumerCurrencyCode.value );
            $('#vacationpkg').val("N");
            document.forms["ResPkgSearchForm"].action= subUrl+"Search.do?method=loadWithResults"//$('#actionPath').val();
        }
    }
    
    function LoadData_A(){
        try {
        with(document.form1){
            
        
            
            $('#checkInDate').val(ac_departure.value);
            $('#checkOutDate').val(ac_arrival.value);
            $('#cityCode').val(hid_AC_Loc.value);
            $('#cityName').val(hid_AC_Loc.value.split('|')[1]);
            $('#countryCode').val(hid_AC_Loc.value.split('|')[3]);
            $('#countryName').val(hid_AC_Loc.value.split('|')[5]);
            $('#numberOfNights').val(AC_nights.value );
            $('#numberOfRooms').val($('#norooms_A').val());
            $('#numberOfAdults').val(setadultcount('A'));
            $('#numberOfChilds').val(setchildcount('A'));
            $('#numberOfInfants').val(setinfantcount('A'));
            $('#childAges').val(setActivityChildAges());
            $('#numberOfSeniors').val("0");
            $('#vacationPkg').val("N");
            $('#guestList').val(setSelRoomOcc('A'));
            $('#sessionName').val("0");
            $('#isbackOfficePartnerLink').val("0");
            $('#enabledPublicDCLogin').val("0");
            $('#enableConsumerRegion').val("0");
            $('#actionTyp').val("0");
            $('#bookType').val("0");
            $('#consumerCountryId').val(AC_Country.value);
            $('#consumerRegionId').val(AC_Country.value);
            $('#languageCode').val("en");
            $('#consumerCurrencyCode').val(AC_consumerCurrencyCode.value );
            $('#vacationpkg').val("N");
            try{$('#destinationCountry').val(destinationcountry_A?destinationcountry_A.value:"");}catch(e){}
            $('#discountCouponNo').val(discountCoupon_No_A.value);
            $('#activityTypeId').val(activityTypeId_a.value );
            
            if(hid_AC_Loc.value.split('|')[1]!=activity_Loc.value){
                $('#hid_AC_Loc').val('');
                return validate('formC');
                    
                    }
        
        document.forms["ResPkgSearchForm"].action= subUrl+"Search.do?method=loadWithResults"//$('#actionPath').val();
        
        }
        }catch (e) {
        }
    }

    window.callbackCities = function callbackCities(jsonString) {
        console.log('callbackCities called')
        jsonDataList = jsonString;
    }

    $(document).on('keydown.autocomplete', '#H_Loc', function() {

        $( this ).autocomplete({
            minLength: 2,
            source: function(request, response) {
                $.ajax({
                    url: locationDataURL,
                    dataType: "script",
                    xhr: function () {
                        if ($.browser.msie && $.browser.msie){
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        } else {
                            return new XMLHttpRequest();
                        }
                    },
                    data: {
                        partnerType:$('#partnerType').val(),
                        productType:$('#engLoaded').val(),
                        partnerId:$('#partnerId').val(),
                        term: request.term,
                        search_type: search_type,
                        bookingEngine: "Y",
                        search_country: getDestinationCountry(),
                        callBack: "callbackCities"
                    },
                    success: function(t) {
                        var returnData = $.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                            var text = createLabel(item, 'city');
                            if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                                return {
                                    label: text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)(" +
                                        request.term +
                                        ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                        ), "$1"),
                                    value: item.cna,
                                    searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid,
                                    selectedcountry:item.cnm
                                }
                            }
                        }); 
                        //addCacheData(request.term, returnData);
                        response(returnData);
    
                    }, error: function(jqXHR, textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                      } 
                });
            }
        });
    });

    $(document).bind( "autocompleteselect", "#H_Loc", function(event, ui) {
        $("#hid_H_Loc").val(ui.item.searchvalue);
        console.log(ui.item.searchvalue)
        selectDestinationCountry(ui.item.selectedcountry);
    });

    function selectDestinationCountry(country){
        if($('.destination_country_H').css('display') == 'none' || $('.destination_country_HS').css('display') == 'none' )
            return;
        try{
        for(i=0; i<document.getElementById("destinationcountry").options.length-1; i++){
            if(document.getElementById("destinationcountry").options[i].text==country){
                document.getElementById("destinationcountry").selectedIndex = i;
            }
        }
        }catch(e){
        }
    }

    /**
     * Sort by a given field of a json object in an ascending or descending order
     * performing a specified operation on values.
     * 
     * @param field - string - name of the field the sort is performed.
     * @param reverse - boolean - specify the sorted order is ascending or descending.
     * @param primer - function - operation to be performed to the sorting value.
     */
    function sort_by(field, reverse, primer){
    //	console.log("Call")
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
    };

    /**
     * Create label to display in the lookup list
     * @param item
     * @return
     */
    function createLabel(item, type){
        var label = '';
        
        if(type == 'city'){
            if (item.sna != ''){
                label = item.cnm + ",  " + item.sna + ",  " + item.cna;
            } else {
                label = item.cnm + ",  " + item.cna;
            }
        } else if(type == 'location'){
            label = item.cna + " - " + item.cnm;
        } else {
            label = item.cna + " - " + item.apcd + " - " + item.apnm + " - " + item.cnm;
        }
        return label;
    }

    /**
 * This defines the type of list to load according to the search engine type.
 * 
 * @param engine
 * @return
 */
function searchTypeSelector(engine){
    var bookingType = document.getElementsByName("engType1");
    var type = "citylist";
//    console.log(engine);
    for (var index = 0; index < bookingType.length; index++) {
        if($(bookingType[index]).is(':checked')){
            var value = $(bookingType[index]).val();
            switch(value){
                case 'H':
                    type = "citylist";
                    break;
                case 'A':
                    type = "citylist";
                    break;
                case 'V':
                    type = "airportlist";
                    break;
                case 'C':
                    type = "carlocationlist";
                    break;
                case 'F':
                    type = "airportlist";
                    break;
                case 'FH':
                    type = "airportlist";
                    break;
                case 'FC':
                    type = "airportlist";
                    break;
                case 'FHC':
                    type = "airportlist";
                    break;
                case 'FHA':
                    type = "airportlist";
                    break;
            }
        } else {
//        	console.log(engine);
        	switch(value){
            	case 'H':
                	type = "citylist";
                	break;
            	case 'A':
                	type = "citylist";
                	break;
            	case 'V':
                	type = "airportlist";
                	break;
            	case 'C':
                	type = "carlocationlist";
                	break;
            	case 'F':
                	type = "airportlist";
                	break;
            	case 'FH':
                	type = "airportlist";
                	break;
            	case 'FC':
                	type = "airportlist";
                	break;
            	case 'FHC':
                	type = "airportlist";
                	break;
            	case 'FHA':
                	type = "airportlist";
                	break;
        	}
        }
    }
	
    if(bookingType.length == 0 || bookingType == null || bookingType == "undefined"){
        switch(engine){
            case 'H':
                type = "citylist";
                break;
            case 'A':
                type = "citylist";
                break;
            case 'V':
                type = "airportlist";
                break;
            case 'C':
                type = "carlocationlist";
                break;
            case 'F':
                type = "airportlist";
                break;
            case 'T':
                type = "transferpointlist";
                break;                
            case 'HC':
                type = "citylist";
                break;
            case 'FH':
                type = "airportlist";
                break;
            case 'FC':
                type = "airportlist";
                break;
            case 'FHC':
                type = "airportlist";
                break;
            case 'FHA':
                type = "airportlist";
                break;
        }
    } else {
    	switch(engine){
        	case 'H':
            	type = "citylist";
            	break;
        	case 'A':
            	type = "citylist";
            	break;
        	case 'V':
            	type = "airportlist";
            	break;
        	case 'C':
            	type = "carlocationlist";
            	break;
        	case 'F':
            	type = "airportlist";
            	break;
        	case 'T':
            	type = "transferpointlist";
            	break;            	
        	case 'HC':
                type = "citylist";
                break;
        	case 'FH':
            	type = "airportlist";
            	break;
        	case 'FC':
            	type = "airportlist";
            	break;
        	case 'FHC':
            	type = "airportlist";
            	break;
        	case 'FHA':
            	type = "airportlist";
            	break;
    	}
    }
    return type;
};

function matcher(regex, text){
    var filter = new RegExp(
        "(^)(" +
        regex +
        ")(?![^<>]*>)(?![^&;]+;)", "gi"
        ).test(text);
    return filter;
};

    function getDestinationCountry(){
        try{
            var sel = $("#destinationcountry");
            if (sel != null || sel != "" || sel != "undefined") {
                var country = sel.options[sel.selectedIndex].innerHTML;
                if (country == null || country == "" || country == "undefined" || $.trim(country) == "-Select a Country-"){
                    return;
                } else {
                    return $.trim(country);
                }
            } else {
                return "";
            } 
        }catch(e){}
    }

    var DatePicked = function () {

        var departure = $("#ho_departure_temp");
        var arrival = $("#ho_arrival_temp");
        var nights = $("#H_nights");
        var triggeringElement = $(this);
        var minArrivalDate = new Date();
    
        var departureDate = departure.datepicker("getDate");
        if (departureDate != null) {
            departureDate.setDate(departureDate.getDate() + 1);
            arrival.datepicker();
        } else {
          minArrivalDate.setDate(minArrivalDate.getDate() + 2);
          var month = minArrivalDate.getMonth() + 1;
          var todDate = month + '/' + minArrivalDate.getDate() + '/' + minArrivalDate.getFullYear();
          arrival.val(todDate);
    
          var myDate = new Date();
          var month = myDate.getMonth() + 1;
          var todDates = month + '/' + myDate.getDate() + '/' + myDate.getFullYear();
          departure.val(todDates);
        }
    
        var arrivalDate = arrival.datepicker("getDate");
    
    
        if (departureDate != null && arrivalDate != null && triggeringElement.attr("id") != "H_nights") {
    
          var oneDay = 1000 * 60 * 60 * 24;
          var arDateVal = Date.UTC(arrivalDate.getFullYear(), arrivalDate.getMonth(), arrivalDate.getDate(), 0, 0, 0);
          var depDateVal = Date.UTC(departureDate.getFullYear(), departureDate.getMonth(), departureDate.getDate(), 0, 0, 0);
          var difference = Math.ceil(((arDateVal - depDateVal) / oneDay) + 1);
          nights.val(difference);
    
          if (difference > 30) {
            $("#dialogs").dialog({ resizable: false, modal: true });
            nights.val("1");
            var newArrivalDate = new Date();
            arrival.datepicker("setDate", newArrivalDate);
    
          }
          $("#ho_departure").val(getOriginalDateFormat(departure.datepicker("getDate")));
          $("#ho_arrival").val(getOriginalDateFormat(arrival.datepicker("getDate")));
    
        } else if (departureDate != null && arrivalDate != null && triggeringElement.attr("id") == "H_nights") {
          var nightsEntered = parseInt(nights.val());
    
    
          if (nightsEntered <= 30) {
    
            departureDate.setDate(departureDate.getDate() + nightsEntered - 1);
            arrival.datepicker("setDate", departureDate);
          } else {
            $("#dialogs").dialog({ resizable: false, modal: true });
            nights.val("1");
          }
          $("#ho_departure").val(getOriginalDateFormat(departure.datepicker("getDate")));
          $("#ho_arrival").val(getOriginalDateFormat(arrival.datepicker("getDate")));
        }
      }

      let initDep = $("#ho_departure_temp").datepicker({
        dateFormat: dateFormatKey,
        defaultDate: +2,
        onSelect: DatePicked,
        showAnim: 'slide',
        buttonText: 'Show Calendar',
        minDate: '2d'
      });

      let initArr = $("#ho_arrival_temp").datepicker({
        dateFormat: dateFormatKey,	
        defaultDate: +3,
        onSelect: DatePicked,
        showAnim:'slide',
        buttonText: 'Show Calendar',
        minDate: '3d'
    });

    $('#checkInDate').val(initDep.datepicker("getDate"));
    $('#checkOutDate').val(initArr.datepicker("getDate"));
    
    $("#H_nights").change(DatePicked);
    DatePicked();

        function getOriginalDateFormat(date){
            var r  = new Date(date);
            return $.datepicker.formatDate('mm/dd/yy', new Date(date));
        }

        window.displayRooms = function displayRooms() {
	
            var hotelSearchRadioBox = $("#hotelSearchRadioBox");
            var vacationSearchRadioBox = $("#vacationSearchRadioBox");
            
            if (hotelSearchRadioBox.checked == true){
                $("#room_display_unit").show();
                $("#hType_h_main").hide();
                $("#hotel_type_H").hide();
                $("#hotel-vacation_name_H_id").html("Hotel Name");
                $("#vacation-home-label-id").html("Hotel Availability");
                
            } else if (vacationSearchRadioBox.checked == true){
                $("#norooms_H").val("1").change();
                $("#room_display_unit").hide();
                $("#hType_h_main").show();
                $("#hotel_type_H").show();
                $("#hotel-vacation_name_H_id").html("Vacation Home Name");
                $("#vacation-home-label-id").html("Vacation Home Availability");
            } 
        }

        
        function setRoomOccupancy(pkg,occ,bec){
            console.log('setRoomOccupancy is running')
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
                    $('#R'+(i+1)+'occAdults_'+pkg).val(adults);
                    $('#R'+(i+1)+'occChildren_'+pkg).val(children);
                    $('#R'+(i+1)+'occInfant_'+pkg).val(infant);	
                    
                    if(children > 0 && infant > 0){
                        showages(pkg,(1),(children+infant));
                        var childagesarr = childages.split(',');
                        for(j=0;j<(childagesarr.length);j++){
                            if(childagesarr[j]=="1"){
                                $('#'+pkg+'_R'+(1)+'childage_'+(j+1)).hide();
                            }
                            $('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
                        }
                    }else if(children > 0){
                        showages(pkg,(1),children);
                        var childagesarr = childages.split(',');
                        for(j=0;j<(childagesarr.length);j++){
                            $('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
                            //jQuery('#F_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
                        }
                    }
            }else{
                var rooms = occ.split("@");
                roomocc(pkg,(rooms.length-1),bec);
                $('#norooms_'+pkg).val(rooms.length-1);
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
                        $('#R'+(i+1)+'occChildren_'+pkg).val(roomOccu[1]);
                        $('#R'+(i+1)+'occAdults_'+pkg).val(roomOccu[0]);
                        $('#R'+(i+1)+'occInfant_'+pkg).val(roomOccu[5]);
                        showages(pkg,(i+1),roomOccu[1]);
                        //console.log(roomOccu[5])
                    }
                    var childages = roomOccu[2].split(",");
                    for(k=0;k<childages.length;k++){
                        $('#'+pkg+'_R'+(i+1)+'childage_'+(k+1)).val(childages[k]);
                    }
                }
            }
        }

        function showages(pkgtype,roomno,val){
            $("#"+pkgtype+"_room_"+roomno+"_ages").empty();
            $("#"+pkgtype+"_room_"+roomno+"_ages").append(showagesstring(pkgtype,roomno,val));
        }

        function showagesstring(pkgtype,roomno,val){
            var ages_string = '';
            if(val > 0) ages_string="<li class=\"flight-child-label\"><span class=\"hotel-passenger-label-text\">Age(s) of children</span></li>";
            ages_string +="<li class='flight-child-age'>";
            for(x=0;x<val;x++){
                
                if(pkgtype == "F" || pkgtype == "V"){
                ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(2,11,1)+"</select></div>";
                }else{
                ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(1,11,1)+"</select></div>";
                }	
            }
            ages_string +="</li>";return ages_string;
        }

        function roomocc(e,val,bec){
            if(e.length>1){
                var pkgtype = e.split('_');
                e = pkgtype[1];
            }else{
                e = e;	
            }
            $('#roomCombo'+e).empty();
            $('#roomCombo'+e).append(roomoccstring(e,val,bec));
        }

        function displayRooms() {
	
            var hotelSearchRadioBox = document.getElementById("hotelSearchRadioBox");
            var vacationSearchRadioBox = document.getElementById("vacationSearchRadioBox");
            
            if (hotelSearchRadioBox.checked == true){
                $("#room_display_unit").show();
                $("#hType_h_main").hide();
                $("#hotel_type_H").hide();
                $("#hotel-vacation_name_H_id").html("Hotel Name");
                $("#vacation-home-label-id").html("Hotel Availability");
                
            } else if (vacationSearchRadioBox.checked == true){
                $("#norooms_H").val("1").change();
                $("#room_display_unit").hide();
                $("#hType_h_main").show();
                $("#hotel_type_H").show();
                $("#hotel-vacation_name_H_id").html("Vacation Home Name");
                $("#vacation-home-label-id").html("Vacation Home Availability");
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

        $.extend({
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
              return $.getUrlVars()[name];
            }
          });
      

        function setEngType(e){
            $('#engLoaded').val(e);
            roomocc(e,$("#norooms_"+e).val());
            fillForm(e);
            if(internalBEC){
                $('#loading_window').hide();
                setTimeout('hideMask()',200);
            }
            setTimeout('resizeContainer()',10);
            //setTimeout('resizeContainer()',100);
            //changeCss( $('#bookingChannel').val())
             //alert($('#bookingChannel').val())
        }

    	setEngType("H");

        function fillForm(eng){
            var hasWjt = false;
            var wjtName = "";
            if( $.getUrlVar('wjt')){
                wjtName =  $.getUrlVar('wjt'); 
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
                changeCss( $('#bookingChannel').val());
                $('#bec_wrapper_div').show('slow');
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

        window.resizeContainer = function resizeContainer(bec){
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

        window.hideMask = function hideMask(){
            $('#mm').hide(200);
            
        }

        function setinfantcount(e){
            var tempcount = 0;
            for(i=0;i<$("#norooms_"+e).val();i++){
                tempcount += parseInt($("#R"+(i+1)+"occInfant_"+e).val());
            }
            return tempcount;
        }
        
        function setchildcount(e){
            var tempcount = 0;
            for(i=0;i<$("#norooms_"+e).val();i++){
                tempcount += parseInt($("#R"+(i+1)+"occChildren_"+e).val());
            }
            return tempcount;
        }
        
        function setadultcount(e){
            var tempcount = 0;
            for(i=0;i<$("#norooms_"+e).val();i++){
                tempcount += parseInt($("#R"+(i+1)+"occAdults_"+e).val());
            }
            return tempcount;
        }

        function setSelRoomOcc(e){
            var tempOcc = '';
            for(i=0;i<$("#norooms_"+e).val();i++){
                tempOcc += $("#R"+(i+1)+"occAdults_"+e).val()+"|"+$("#R"+(i+1)+"occChildren_"+e).val()+"|";
                if($("#R"+(i+1)+"occChildren_"+e).val()>0){
                    var temp = '';
                    for(j=0;j<$("#R"+(i+1)+"occChildren_"+e).val();j++){
                        temp += $("#"+e+"_R"+(i+1)+"childage_"+(j+1)).val();
                        if((j+1)<$("#R"+(i+1)+"occChildren_"+e).val()){ temp += ",";}
                    }
                    tempOcc = tempOcc + temp+"|%|%|";
                }else{
                    tempOcc += "-|%|%|";
                }
                if($("#R"+(i+1)+"occInfant_"+e).val()>0){
                    tempOcc += $("#R"+(i+1)+"occInfant_"+e).val()+"@";
                }else{
                    tempOcc += "-@";
                }
            }
            //console.log(tempOcc)
            return tempOcc;
        }

        var inc = 0;
        var framefenster = [];
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
                    
                    
                    if($(framefenster[i].contentWindow.document.body).css('min-height')=='100%'){
                        $(framefenster[i].contentWindow.document.body).css('min-height','');
                    }
                    
                    if("WEB"==bcv || null==bcv || 'undefined'==bcv){
                        bcv=((typeof $("#bec_container_frame").contents().find("#bookingChannel").val()!='undefined') ? ($("#bec_container_frame").contents().find("#bookingChannel").val()) : (typeof document.getElementById('ResPkgSearchForm').bookingChannel.value!='undefined' ? document.getElementById('ResPkgSearchForm').bookingChannel.value : null));
                    }
                    var addon_height = "CC"==bcv ? 20 : 620;
                    var framefenster_size = framefenster[i].contentWindow.document.body.offsetHeight + addon_height ;
                    
                    var is_ie9 = navigator.userAgent.indexOf("MSIE 9.0") > -1;
                    if(!window.opera && !(isIE() && "WEB"==bcv) && isIE()) {
                    framefenster_size =('contentDocument' in framefenster[i]?  framefenster[i].contentDocument :  framefenster[i].contentWindow.document).body.offsetHeight;
                    }
                    if($(framefenster[i].contentWindow.document.body).css('height')!='undefined' && $(framefenster[i].contentWindow.document.body).css('height')!='' ){
                        //framefenster_size = $(framefenster[i].contentWindow.document.body).css('height').split('px')[0];
                    }
                    var isSafari = false;
                    var ua = navigator.userAgent.toLowerCase();
                    if (ua.indexOf('safari')!=-1){ 
                    if((ua.indexOf('chrome')  > -1) || ua.indexOf('chromium')  > -1){
                        isSafari = true;
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

        $( ".show_filter").unbind( "click" );
        $(".show_filter").click(function(){
        var objDiv = $(this).parentsUntil('main_holder').find(".bec_container_div")[0];
                    if($(this).parentsUntil('main_holder').find(".morefilters").is(':visible')){
                        $(this).parentsUntil('main_holder').find(".show_filter").html("Show Additional Search Options &nbsp;<span id='arrow_down' class='arrow_down'>&nbsp;&nbsp;&nbsp;</span>");
                        $(this).parentsUntil('main_holder').find("#arrow_up").toggleClass('arrow_up arrow_down');			
                        
                        $(this).parentsUntil('main_holder').find(".morefilters").hide('fast',function(){
                            objDiv.scrollTop = 0;
                        })	;
                    } else {
                        $(this).parentsUntil('main_holder').find(".show_filter").html("Hide Additional Search Options &nbsp;<span id='arrow_up' class='arrow_up'>&nbsp;&nbsp;&nbsp;</span>");
                        $(this).parentsUntil('main_holder').find(".morefilters").show('fast',function(){
                            objDiv.scrollTop = objDiv.scrollHeight
                        });	 	
                        $(this).parentsUntil('main_holder').find("#arrow_down").toggleClass('arrow_down arrow_up');			
                    }
                setTimeout('resizeContainer()',300);
            });
});
