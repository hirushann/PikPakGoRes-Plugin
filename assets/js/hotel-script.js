

jQuery(document).ready(function(){

/*jQuery('select#H_consumerCurrencyCode').selectmenu();
jQuery('select#H_Country').selectmenu();
jQuery('select#norooms_H').selectmenu();
jQuery('select#destinationcountry').selectmenu();
jQuery('select#star_rating_H').selectmenu();
jQuery('select#hType_h').selectmenu();*/

 
var os = jQuery('#H_nights')[0].options;
os.length = 0;
for(var i=1;i<31;i++){
	os[os.length] = new Option(i,i);
}
if(jQuery("#destinationcountry")[0]){
var destinationCountry =parent.defaultCountry;

var loc = window.location+"";
	  jQuery.ajax({
		 url : loc.split("/")[0] + "//" + loc.split("/")[2] + "/content/" + jQuery('#serviePortal').val()+ "/destinationCountry.txt",
   xhr: function () {

       if (jQuery.browser.msie && jQuery.browser.msie){
           return new ActiveXObject("Microsoft.XMLHTTP");
       } else {
           return new XMLHttpRequest();
       }
   },
   success : function(data){
  	 
  	 var destinationCountryList = data.split('\n');
  	 jQuery("#destinationcountry").empty().append(jQuery('<option class=\"notranslate\"></option>').val('').html("-Select a Country-"));
  	 jQuery.each(destinationCountryList,function(index,value){
  	
  		 if(value.split(',')[0]==destinationCountry){
  			jQuery("#destinationcountry").append(jQuery('<option selected=\'selected\' class=\"notranslate\" ></option>').val(value.split(',')[0].trim()).html(value.split(',')[1].trim()));
  		 }else{
  			jQuery("#destinationcountry").append(jQuery('<option class=\"notranslate\"></option>').val(value.split(',')[0]).html(value.split(',')[1]));
  		 }
  	 });

   }
   
});
}
});

var DatePicked = function() {
		 
		 		var departure = jQuery("#ho_departure_temp");
                var arrival = jQuery("#ho_arrival_temp");
				var nights = jQuery("#H_nights");
				var triggeringElement = jQuery(this);
				var minArrivalDate = new Date();
								
				var departureDate= departure.datepicker("getDate") ;
				
				
				if (departureDate != null) {						
					departureDate.setDate(departureDate.getDate() + 1);
					arrival.datepicker('option', 'minDate',departureDate);
				} else {                        
					minArrivalDate.setDate(minArrivalDate.getDate() +2);					
					var month = minArrivalDate.getMonth() + 1;
					var todDate = month + '/' + minArrivalDate.getDate() + '/' + minArrivalDate.getFullYear();
					arrival.val(todDate);
						 
				    var myDate = new Date();
					var month = myDate.getMonth() + 1;
					var todDates = month + '/' + myDate.getDate()+ '/' + myDate.getFullYear();
					departure.val(todDates);
									
				}

				var arrivalDate = arrival.datepicker("getDate");
		
		   
				if (departureDate != null && arrivalDate != null && triggeringElement.attr("id") != "H_nights") {
					
					var oneDay = 1000*60*60*24;
                    var arDateVal = Date.UTC(arrivalDate.getFullYear(),arrivalDate.getMonth(),arrivalDate.getDate(),0,0,0);
                    var depDateVal = Date.UTC(departureDate.getFullYear(),departureDate.getMonth(),departureDate.getDate(),0,0,0);
                    var difference = Math.ceil(((arDateVal - depDateVal) / oneDay)+1);
                    nights.val(difference);                       				   
				 		
					if (difference>30) {
						jQuery( "#dialogs" ).dialog({ resizable: false,modal: true });
						nights.val("1");
						var newArrivalDate = new Date();
                     	arrival.datepicker("setDate", newArrivalDate);
						
					}				 
		 			jQuery("#ho_departure").val(getOriginalDateFormat(departure.datepicker("getDate")));
			        jQuery("#ho_arrival").val(getOriginalDateFormat(arrival.datepicker("getDate")));
					
               	} else if (departureDate != null && arrivalDate != null &&  triggeringElement.attr("id") == "H_nights") {
                       var nightsEntered = parseInt(nights.val());
					
                       
					if (nightsEntered <= 30 ) {
			
						departureDate.setDate(departureDate.getDate() +nightsEntered - 1);
						arrival.datepicker("setDate", departureDate);
					} else {                    
						jQuery( "#dialogs" ).dialog({ resizable: false,modal: true });
						nights.val("1");
                 		}
					jQuery("#ho_departure").val(getOriginalDateFormat(departure.datepicker("getDate")));
			        jQuery("#ho_arrival").val(getOriginalDateFormat(arrival.datepicker("getDate")));				
               }
        }
 
	 jQuery(function() {
					jQuery("#ho_arrival_temp").datepicker({
						dateFormat: dateFormatKey,	
						defaultDate: +3,
						onSelect: DatePicked,
						showAnim:'slide',
						buttonText: 'Show Calendar',
						minDate: '3d'
					});
					
					jQuery("#H_nights").change(DatePicked);
						DatePicked();
					});
 
 jQuery(function () {
				jQuery("#ho_departure_temp").datepicker({
				dateFormat: dateFormatKey,
				defaultDate: +2,
				onSelect: DatePicked,
				showAnim:'slide',
				buttonText: 'Show Calendar',
				minDate: '2d'
				});
             });
 
			jQuery("#ho_departure_temp").val(getDateFormat(jQuery("#ho_departure_temp").datepicker("getDate")));
 			jQuery("#ho_departure").val(getOriginalDateFormat(jQuery("#ho_departure_temp").datepicker("getDate")));
	        jQuery("#ho_arrival_temp").val(getDateFormat(jQuery("#ho_arrival_temp").datepicker("getDate")));
	        jQuery("#ho_arrival").val(getOriginalDateFormat(jQuery("#ho_arrival_temp").datepicker("getDate")));		
			
	becConfigLoad();
	becFilterLoad('H');

    setTimeout("fillHotelNames()",100 );

    setEngType("H");

    jQuery(document).ready(function() {
        jQuery('#R1occChildren_H').change(function() {
              if(jQuery(this).val() == 0) {
                jQuery('.child_age_wrapper').css('display', 'none');
              }
            });
        });