<?php
/*
Plugin Name: Reservations for PikPakGo
Plugin URI: http://example.com/custom-elements-plugin
Description: A plugin that integrated a reservation system for PikPakGo by shortcode.
Version: 2.2.0
Author: Hirushan Perera
License: GPL2
*/

function enqueue_reservation_system_assets() {
  wp_enqueue_script( 'jquery' );
  // Enqueue CSS files
  wp_enqueue_style('jquery-ui-css', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css');
  wp_enqueue_style('jquery-autocomplete-css', 'https://cdn.jsdelivr.net/npm/jquery-autocomplete@1.2.8/jquery.autocomplete.min.css');
  // wp_enqueue_style('jquery-datepicker-css', 'https://cdn.jsdelivr.net/npm/jquery-datepicker@1.12.3/jquery-datepicker.min.js');
  wp_enqueue_style('main-style', plugin_dir_url(__FILE__) . 'assets/css/style.css');

  wp_enqueue_script('jquery-datepicker', 'https://cdn.jsdelivr.net/npm/jquery-datepicker@1.12.3/jquery-datepicker.min.js', array('jquery'), '1.12.3', true);
  wp_enqueue_script('jquery-easing', 'https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js', array('jquery'), '1.4.1', true);
  wp_enqueue_script('jquery-autcomplete-js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.min.js', array('jquery'), '1.2.8', true);
  wp_enqueue_script('autocomplete-script', plugin_dir_url(__FILE__) . 'assets/js/autocomplete.js', array('jquery', 'jquery-autcomplete-js'), '1.1.0', true);
  wp_enqueue_script('scripts-js', plugin_dir_url(__FILE__) . 'assets/js/scripts.js?v=1', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_reservation_system_assets');

// Shortcode function to output the reservation system form
function reservation_system_shortcode()
{ 
  ob_start();
  ?>
  <link href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/ui-lightness/jquery-ui-1.8.10.custom.css" rel="stylesheet" type="text/css" />
  <link href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/style.css" type="text/css" rel="stylesheet" media="screen" />
  <link type="text/css" href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/jquery-ui-1.8.16.custom.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" media="all" href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/whhg.css" />
  <link type="text/css" href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/font-awesome.css" rel="stylesheet" />
  <link type="text/css" href="<?php echo plugin_dir_url(__FILE__); ?>/assets/css/reset.css" rel="stylesheet" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-tabs@0.5.3/jquery.tabs.min.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/jquery-ui-custom.min.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/sidjs-0.1.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/scripts.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/jquery.validator.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/controller.js"></script>
  <script type="text/javascript" src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/jquery.cookie.js"></script>

  <script type="application/javascript">
    jQuery(document).ready(function($) {
      /* This service offers a REST API allowing to get a visitor IP address and to query location information from any IP address. 
      It outputs JSON-encoded IP geolocation data, and supports both JSON and JSONP. */

      //var subUrl= "../../";
      var subUrl = 'http://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/';
      $(document).ready(function() {
        $.ajax({
          url: subUrl + 'ComponentSupportAction.do?method=getGEOLocation',
          method: 'post',
          dataType: "text",
          data: {
            method: "getGEOLocation",
            transectionId: $('#transectionId').val()
          },
          success: function(data) {
            // console.log(data)
            var locationList = $.parseJSON(data).localizeJson;
            // var locationList = eval(data);
            if (locationList.length > 0) {
              $('#ipAddress').val(locationList[0].ipAddress);
              $('#clientCountryCode').val(locationList[0].clientCountryCode);
            }
          }
        });
      });


      $(document).ready(function() {

        function affiliateTimer() {
        try {
          //console.log($('#partnerType').val());
          if ('AFF' == $('#partnerType').val()) {
            try {
              $('.discountcoupon').hide();
            } catch (e) {}
            try {
              $('#promotionCodeDiv_F').hide();
            } catch (e) {}

          } else {
            try {
              $('.discountcoupon').show();
            } catch (e) {}
            try {
              $('#promotionCodeDiv_F').show();
            } catch (e) {}
          }
        } catch (e) {}
        // setTimeout('affiliateTimer()', 1000);
        }

        affiliateTimer();
        try {
          //$("#tabs").tabs()
          //loadTab();

          setTimeout(function() {
            loadTab();
          }, 10);
          // $("#tabs").tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
          // $("#tabs li").removeClass('ui-corner-top').addClass('ui-corner-left');
          $("#ribbon").removeClass('ui-corner-all').addClass('ui-corner-top');


        } catch (e) {
          alert(e);
        }

        try {
          var w = getUrlVars()["wjt"];
          var wjtname = w.split("wj_")[1];
          bec_name = "bec_container_frame_" + wjtname;
        } catch (e) {}
      });


      function createXMLHttpRequest() {
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
        try {
          return new XMLHttpRequest();
        } catch (e) {}
        return null;
      }

      function loadTab() {
        var portal = $('#portal').val();
        var appProdDefProdCookie = $.cookie(portal + '_app_prod_def_prod');

        if (appProdDefProdCookie == null || appProdDefProdCookie == '' || appProdDefProdCookie == undefined) {
          var product = "H";
          //var reservationProduct = "VFHACTP";
          var reservationProduct = "H";

          $(document).ready(function() {
            console.log("ready1 :: " + reservationProduct);
            $.ajax({
              url: 'http://web.elb.stg.pikpakgo.use1.aws.rezos.io/pikpakgoReservations/ComponentSupportAction.do?method=getDefaultProduct',
              method: 'post',
              data: {
                method: "getDefaultProduct",
                transectionId: $('#transectionId').val()
              },
              dataType: "text",
              success: function(data) {
                var defaultProductList = eval(data);
                console.log("ready2 :: " + defaultProductList);
                if (defaultProductList.length > 0) {
                  product = defaultProductList[0].default_product;
                  $('#engLoaded').val(product);
                  reservationProduct = defaultProductList[0].reservation_product;
                  /**Setting defalut tab and loading reservation product here*/
                  $.cookie(portal + '_app_prod_def_prod', JSON.stringify(defaultProductList[0]));
                  initTabs(defaultProduct(product))
                  setTabs(reservationProduct);
                  $.cookie(portal + '_reservation_prod', reservationProduct);
                }
              }
            });
          });
        } else {
          appProdDefProdCookie = JSON.parse(appProdDefProdCookie);
          var selectedProduct = 'H';
          try {
            var selectedProduct = window.location.toString().split('?')[1].split('product=')[1];
          } catch (e) {}

          initTabs(selectedProduct != '' ? selectedProduct : defaultProduct(appProdDefProdCookie.default_product));
          setTabs(appProdDefProdCookie.reservation_product);
          $.cookie(portal + '_reservation_prod', appProdDefProdCookie.reservation_product);
        }
      }

      function setTabs(products) {

        if (products.indexOf('V') == -1) {
          $("#vLi").hide();
        }
        if (products.indexOf('F') == -1) {
          $("#fLi").hide();
        }
        if (products.indexOf('H') == -1) {
          $("#hLi").hide();
        }
        if (products.indexOf('A') == -1) {
          $("#aLi").hide();
        }
        if (products.indexOf('C') == -1) {
          $("#cLi").hide();
        }
        if (products.indexOf('T') == -1) {
          $("#tLi").hide();
        }
        if (products.indexOf('P') == -1) {
          $("#pLi").hide();
        }
      }

      function defaultProduct(product) {
        var tab = 0;
        switch (product) {
          case 'F':
            tab = 0;
            break;
          case 'H':
            tab = 1;
            break;
          case 'C':
            tab = 2;
            break;
          case 'T':
            tab = 3;
            break;
          case 'A':
            tab = 4;
            break;
          case 'V':
            tab = 5;
            break;
          case 'P':
            tab = 6;
            break;
        }
        return tab;
      }

      
    });

    function affiliateTimer(){
	try{
		//console.log($('#partnerType').val());
	if('AFF'==$('#partnerType').val()){
		try{$('.discountcoupon').hide();}catch(e){}
		try{$('#promotionCodeDiv_F').hide();}catch(e){}
		
	}else{
		try{$('.discountcoupon').show();}catch(e){}
		try{$('#promotionCodeDiv_F').show();}catch(e){}
	}
	}catch(e){}
	setTimeout('affiliateTimer()',1000);
}
  </script>

  <div class="disablebg" id="disablebg"></div>
  <div class="loading_window" id="loading_window">
    <div class="loading_window_inner">
      <div class="loading_image desktop_show"> <img src='<?php echo plugin_dir_url(__FILE__); ?>/assets/images/loading_bar_desktop.gif' width="300" alt="loading bar" /> </div>
    </div>
  </div>

  <div id="mm" style="display: none; position: absolute;background-color: white;z-index: 1500;top: 0;left: 0;"></div>
  <script>
    try {

      var screenH = 0;
      if (navigator.appName == 'Netscape') {
        screenH = window.innerHeight || document.body.offsetHeight;
      } else {
        screenH = document.documentElement.clientHeight;
      }
      var screenW = document.documentElement.clientWidth;
      //alert(screenW+"-"+screenH)
      document.getElementById('mm').style.height = screenH + "px";
      document.getElementById('mm').style.width = screenW + "px";

    } catch (e) {
      alert(e);
    }
  </script>

  <div id="dialogs" style="display:none" title="Error">
     Sorry we cannot provide you with any travel options. Please change your travel duration for a period less than 31days 
  </div>

  <div id="dialogs2" style="display:none" title="Error">
     Sorry we cannot provide you with any travel options. Please change your travel duration for a period greater than 2days  
  </div>

  <div id="dialogs3" style="display:none" title="Error">
     Please select two different locations for arrival & departure 
  </div>
  <form name="ResPkgSearchForm" id="ResPkgSearchForm" method="post" action="" target="_parent">
    <input type="hidden" id="isFlexSearch" name="isFlexSearch"/>
    <input type="hidden" id="discountCouponNo" name="discountCouponNo" />
    <input type="hidden" id="place" name="place" />
    <input type="hidden" id="transectionId" name="transectionId" />
    <input type="hidden" id="engLoaded" name="engLoaded" value="" />
    <input type="hidden" id="checkInDate" name="checkInDate" />
    <input type="hidden" id="selectedHotelRideCode" name="selectedHotelRideCode" />
    <input type="hidden" id="checkOutDate" name="checkOutDate" />
    <input type="hidden" id="checkInTime" name="checkInTime" />
    <input type="hidden" id="checkOutTime" name="checkOutTime" />
    <input type="hidden" id="cityCode" name="cityCode" />
    <input type="hidden" id="cityName" name="cityName" />
    <input type="hidden" id="countryCode" name="countryCode" />
    <input type="hidden" id="countryName" name="countryName" />
    <input type="hidden" id="stateCode" name="stateCode" />
    <input type="hidden" id="startingLocationName" name="startingLocationName" />
    <input type="hidden" id="startingLocationCode" name="startingLocationCode" />
    <input type="hidden" id="startingCountryCode" name="startingCountryCode" />
    <input type="hidden" id="endingCountryCode" name="endingCountryCode" />
    <input type="hidden" id="endingLocationName" name="endingLocationName" />
    <input type="hidden" id="endingLocationCode" name="endingLocationCode" />
    <input type="hidden" id="startingFligtLocationTwoName" name="startingFligtLocationTwoName" />
    <input type="hidden" id="startingFligtLocationTwoCode" name="startingFligtLocationTwoCode" />
    <input type="hidden" id="endingFligtLocationTwoName" name="endingFligtLocationTwoName" />
    <input type="hidden" id="endingFligtLocationTwoCode" name="endingFligtLocationTwoCode" />
    <input type="hidden" id="flightCheckInDateTwo" name="flightCheckInDateTwo" />
    <input type="hidden" id="flightCheckInTimeTwo" name="flightCheckInTimeTwo" />
    <input type="hidden" id="startingFligtLocationThreeName" name="startingFligtLocationThreeName" />
    <input type="hidden" id="startingFligtLocationThreeCode" name="startingFligtLocationThreeCode" />
    <input type="hidden" id="endingFligtLocationThreeName" name="endingFligtLocationThreeName" />
    <input type="hidden" id="endingFligtLocationThreeCode" name="endingFligtLocationThreeCode" />
    <input type="hidden" id="flightCheckInDateThree" name="flightCheckInDateThree" />
    <input type="hidden" id="flightCheckInTimeThree" name="flightCheckInTimeThree" />
    <input type="hidden" id="startingFligtLocationFourName" name="startingFligtLocationFourName" />
    <input type="hidden" id="startingFligtLocationFourCode" name="startingFligtLocationFourCode" />
    <input type="hidden" id="endingFligtLocationFourName" name="endingFligtLocationFourName" />
    <input type="hidden" id="endingFligtLocationFourCode" name="endingFligtLocationFourCode" />
    <input type="hidden" id="flightCheckInDateFour" name="flightCheckInDateFour" />
    <input type="hidden" id="flightCheckInTimeFour" name="flightCheckInTimeFour" />
    <input type="hidden" id="startingFligtLocationFiveName" name="startingFligtLocationFiveName" />
    <input type="hidden" id="startingFligtLocationFiveCode" name="startingFligtLocationFiveCode" />
    <input type="hidden" id="endingFligtLocationFiveName" name="endingFligtLocationFiveName" />
    <input type="hidden" id="endingFligtLocationFiveCode" name="endingFligtLocationFiveCode" />
    <input type="hidden" id="flightCheckInDateFive" name="flightCheckInDateFive" />
    <input type="hidden" id="flightCheckInTimeFive" name="flightCheckInTimeFive" />
    <input type="hidden" id="numberOfNights" name="numberOfNights" />
    <input type="hidden" id="numberOfRooms" name="numberOfRooms" />
    <input type="hidden" id="numberOfAdults" name="numberOfAdults" />
    <input type="hidden" id="numberOfChilds" name="numberOfChilds" />
    <input type="hidden" id="childAges" name="childAges" />
    <input type="hidden" id="numberOfInfants" name="numberOfInfants" />
    <input type="hidden" id="numberOfSeniors" name="numberOfSeniors" />
    <input type="hidden" id="portalBEC" name="portalBEC"  value="Y"/>
    <input type="hidden" id="starRating" name="starRating" />
    <input type="hidden" id="hotelType" name="hotelType" />
    <input type="hidden" id="airLine" name="airLine" />
    <input type="hidden" id="carType" name="carType" />
    <input type="hidden" id="portal" name="portal"  value="pikpakgo" />
    <input type="hidden" id="userCode" name="userCode" />
    <input type="hidden" id="userName" name="userName" />
    <input type="hidden" id="userPassword" name="userPassword" />
    <input type="hidden" id="forwardURL" name="forwardURL" />
    <input type="hidden" id="userType" name="userType" />
    <input type="hidden" id="partnerName" name="partnerName" />
    <input type="hidden" id="partnerId" name="partnerId" />
    <input type="hidden" id="tourOperatorLevel" name="tourOperatorLevel" />
    <input type="hidden" id="tourOperatorName" name="tourOperatorName" />
    <input type="hidden" id="loggedSuperAgentId" name="loggedSuperAgentId" />
    <input type="hidden" id="partnerCode" name="partnerCode" />
    <input type="hidden" id="partnerType" name="partnerType" value="DC" />
    <input type="hidden" id="subAgentId" name="subAgentId" />
    <input type="hidden" id="webSite" name="webSite" value="MAIN" />
    <input type="hidden" id="bookingChannel" name="bookingChannel" value="WEB" />
    <input type="hidden" id="vacationPkg" name="vacationPkg" />
    <input type="hidden" id="cacheKey" name="cacheKey" />
    <input type="hidden" id="sellingCurrency" name="sellingCurrency" />
    <input type="hidden" id="sessionName" name="sessionName" />
    <input type="hidden" id="retrieveExistingBookings" name="retrieveExistingBookings" />
    <input type="hidden" id="existingReservationNo" name="existingReservationNo" />
    <input type="hidden" id="isbackOfficePartnerLink" name="isbackOfficePartnerLink" />
    <input type="hidden" id="enabledPublicDCLogin" name="enabledPublicDCLogin" />
    <input type="hidden" id="enableConsumerRegion" name="enableConsumerRegion" />
    <input type="hidden" id="actionTyp" name="actionTyp" />
    <input type="hidden" id="bookType" name="bookType" />
    <input type="hidden" id="consumerCountryId" name="consumerCountryId" />
    <input type="hidden" id="consumerRegionId" name="consumerRegionId" />
    <input type="hidden" id="languageCode" name="languageCode" />
    <input type="hidden" id="consumerCurrencyCode" name="consumerCurrencyCode" />
    <input type="hidden" id="guestList" name="guestList" />
    <input type="hidden" id="seatClass" name="seatClass" />
    <input type="hidden" id="tripType" name="tripType" />
    <input type="hidden" id="actionPath" name="actionPath" />
    <input type="hidden" id="pkgType" name="pkgType" />
    <input type="hidden" id="affCode" name="affCode" value="-"/>
    <input type="hidden" id="targetField" name="targetField" />
    <input type="hidden" id="partnerCategory" name="partnerCategory" />
    <input type="hidden" name="destinationCountry" id="destinationCountry" />
    <input type="hidden" name="activityTypeId" id="activityTypeId" />

    <input type="hidden" id="multiLangCityName" name="multiLangCityName" />

    <!-- Hotel filters -->
    <input type="hidden" id="hotelStarId" name="hotelStarId" />
    <input type="hidden" id="hotelTypeId" name="hotelTypeId" />
    <input type="hidden" id="hotelName" name="hotelName" />
    <input type="hidden" id="priceLevelFrom" name="priceLevelFrom" />
    <input type="hidden" id="priceLevelTo" name="priceLevelTo" />
    <input type="hidden" id="availableHotels" name="availableHotels" />
    <input type="hidden" id="onRequestHotels" name="onRequestHotels" />
    <input type="hidden" id="starRating_Hotels" name="starRating_Hotels" />
    <input type="hidden" id="sortHotelBy" name="sortHotelBy" />
    <input type="hidden" id="hotelSearchType" name="hotelSearchType" />
    <!-- For flights -->
    <input type="hidden" id="nonStopStatus" name="nonStopStatus" />
    <!-- For transfers -->
    <input type="hidden" id="pickUpCode" name="pickUpCode" />
    <input type="hidden" id="dropOffCode" name="dropOffCode" />
    <input type="hidden" id="dropOffCityName" name="dropOffCityName" />
    <input type="hidden" id="pickUpPointName" name="pickUpPointName" />
    <input type="hidden" id="departPointName" name="departPointName" />
    <input type="hidden" id="dropOffCityCode" name="dropOffCityCode" />
    <input type="hidden" id="pickUpPointCode" name="pickUpPointCode" />
    <input type="hidden" id="departPointCode" name="departPointCode" />
    <input type="hidden" id="transferTime" name="transferTime" />
    <input type="hidden" id="serviceHost" name="serviceHost" />
    <input type="hidden" id="serviePortal" name="serviePortal" />
    <!-- Fixed package spacific details -->
    <input type="hidden" id="numberofdays" name="numberofdays" />
    <input type="hidden" id="includingflight" name="includingflight" />
    <input type="hidden" id="selectedFixedPackageTypeCode" name="selectedFixedPackageTypeCode" />
    <input type="hidden" id="selectedFixedPackageTypeName" name="selectedFixedPackageTypeName" />
    <input type="hidden" id="ipAddress" name="ipAddress" />
    <input type="hidden" id="clientCountryCode" name="clientCountryCode" />
  </form>

  <form name="form1" method="post" action="" id="form1">
    <input type="hidden" name="pkgType" value="H" />
    <div id="bec_wrapper_div" style="display:none;" class="bec-main-wrapper">
      <div id="tabs">
        <a href="#" class="mobile-menu">Plan Trip Type <i class="fa fa-bars fa-2"></i> </a>
        <ul id="ribbon" class="icons">
          <li id="hLi" style="display: none;"><a class="hotels mobile-hide-menu" href="<?php echo plugin_dir_url(__FILE__); ?>/hotel.html"><span class="hotel-icon mobile-hide-menu">&nbsp;</span> Hotels </a></li>
        </ul>
        <?php file_get_contents(plugin_dir_url(__FILE__) . '/hotel.html') ?>
        <div id="flights" class="bec_container"></div>
        <div id="hotels" class="bec_container"></div>
        <div id="cars" class="bec_container"></div>
        <div id="transfers" class="bec_container"></div>
        <div id="activities" class="bec_container"></div>
        <div id="holidays" class="bec_container"></div>
        <div id="FixedPackages" class="bec_container"></div>
      </div>
    </div>
  </form>

  <div id="google_translate_element" style="display: none;"></div>

  <script>
    try {
      if (!internalBEC) {
        $("#tabs").hide('bec_wrapper_div');
      }
    } catch (e) {
      alert(e);
    }
    $("#tabs").tabs(3).addClass('ui-tabs-vertical ui-helper-clearfix');
    $("#tabs li").removeClass('ui-corner-top').addClass('ui-corner-left');
    try {
      var w = getUrlVars()["wjt"];
      var wjtname = w.split("wj_")[1];
      bec_name = "bec_container_frame_" + wjtname;
    } catch (e) {}
  </script>

  <script src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/jquery.easing.min.js"></script>
  <script src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/plugin.js"></script>
  <script src="<?php echo plugin_dir_url(__FILE__); ?>/assets/js/prefixfree.min.js"></script>
  
  <script>
    jQuery(document).ready(function($) {
      $(document).ready(function() {
        if ($(window).width() < 610) {
          $(".mobile-hide-menu").on('click', function() {
            $("#ribbon").hide(1000);
          });
        }
      });
    });
  </script>
  <script type="text/javascript">
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }
    var lang = '';

    function googleTranslateElementInit() {
      try {
        //alert('calling')
        var googlang = getCookie("googconfig");
        var googleorg = getCookie("googtrans");
        var googleorg = googleorg.split("/");

        lang = googleorg[2];

        //console.log("googleorg > "+ getCookie("googtrans"));

        if (googlang != "" || googlang != null) {
          var cookiearray = googlang.split("|");
          //console.log("cookiearray"+cookiearray);

          var langtype = cookiearray[0]
          var languges = cookiearray[1]

          //console.log("langtype"+langtype);
          //console.log("languges"+languges);
          if (langtype == "ALL") {
            //alert("ALL");
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false

              },
              'google_translate_element'

            );
          } else {
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
      } catch (e) {
        //alert(e)
      }

      var element = document.getElementById("goodale_translate_script");
      element.parentNode.removeChild(element);

      //setlistnForLAnguageChange();


    }


    function listenForLanguageChange() {
      try {
        var googcook = getCookie("googtrans");
        //alert(googcook);
        if (googcook.length > 0) {
          var googcook = googcook.split("/");

          if (lang != googcook[2] && lang != '') {
            //console.log("lang:  "+lang+"/////"+"googcook[2]  "+googcook[2]);
            location.reload();
            lang = googcook[2];
            loadTranslatorScript();
          }
        }

      } catch (e) {
        //alert(e);
      }
      setTimeout('listenForLanguageChange()', 200);
    }



    function loadTranslatorScript() {
      //
      //alert("called");
      var element = document.getElementById("goodale_translate_script");
      if (element != null) {
        //console.log("Element Removed ");	
        element.parentNode.removeChild(element);
      }

      var s = document.createElement('script');
      s.id = "goodale_translate_script"
      s.type = "text/javascript";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(s);

    }

    listenForLanguageChange();
  </script>
  <style>
    .goog-te-banner-frame {
      display: none;
    }

    body {
      top: 0px !important;
    }
  </style>
<?php
return ob_get_clean();
}
add_shortcode('reservation_system', 'reservation_system_shortcode');


