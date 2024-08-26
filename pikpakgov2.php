<?php
/*
Plugin Name: Reservations for PikPakGo - V2
Plugin URI: http://example.com/custom-elements-plugin
Description: A plugin that integrated a reservation system for PikPakGo by shortcode.
Version: 1.2
Author: Hirushan Perera
License: GPL2
*/

function pickpack_enqueue()
{
    wp_enqueue_script('jquery-ui-core');
    wp_enqueue_script('jquery-ui-autocomplete');
    wp_enqueue_script('jquery-datepicker', 'https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js', array('jquery'), '1.12.3', true);
    wp_enqueue_script('pickpack-controller', plugin_dir_url(__FILE__) . '/assets/js/controller.js', array('jquery'), '1.1.0', true);
    wp_enqueue_script('pickpack-sid', plugin_dir_url(__FILE__) . '/assets/js/sidjs-0.1.js', array('jquery'), '1.1.0', true);

    wp_enqueue_script('pickpack-js', plugin_dir_url(__FILE__) . '/assets/js/pickpack.js', array('jquery', 'pickpack-controller', 'pickpack-sid', 'jquery-ui-autocomplete', 'jquery-cookie', 'jquery-datepicker'), '1.1.0', true);
    wp_enqueue_script("jquery-cookie", plugin_dir_url(__FILE__) . '/assets/js/jquery.cookie.js', array('jquery'), '1.0', true);
    wp_enqueue_script("jquery-ui", 'https://code.jquery.com/ui/1.14.0/jquery-ui.js', array('jquery'), '1.0', true);
    wp_enqueue_script("jquery-validator", plugin_dir_url(__FILE__) . '/assets/js/jquery.validator.js', array('jquery'), '0.3.5', true);

    wp_enqueue_style('jquery-autocomplete-css', 'https://cdn.jsdelivr.net/npm/jquery-autocomplete@1.2.8/jquery.autocomplete.min.css');
    wp_enqueue_style('pickpack-jquery-ui-css', plugin_dir_url(__FILE__) . '/assets/css/jquery-ui.min.css');
    wp_enqueue_style('plugin-style', plugin_dir_url(__FILE__) . '/assets/css/plugin-style.css');
    wp_register_style('google', 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap', array(), null, 'all');
    wp_enqueue_style('google');
}
add_action('wp_enqueue_scripts', 'pickpack_enqueue');

function pickpack_frontend_form(){
 
?>
  <div class="reservations-plugin-container">
    <form name="form1" method="post" action="" id="form1">
      <input type="hidden" name="pkgType" value="H" />
      <div id="bec_wrapper_div" style="display:nones;" class="bec-main-wrapper">
        <!-- <div id="tabs"> -->
      <a href="#" class="mobile-menu">Plan Trip Type <i class="fa fa-bars fa-2"></i> </a>

      <div class="main_holder" id="hotelDisplay" style="display:block; ">
      <div class="bec_container_div cf" >
      <ul class="row10">
        <div class="first-row-container">
            <div class="residence-country-block">
              <div class="option-main-label-2 option-main-label row3" id="h_search_type_lbl_div">
                <h1>Type of search</h1>
              </div>
              <div class="row7" id="h_search_type_div">
                <div class="form-input-container">
                  <label class="option-sub-label radio-inputs">
                    <input type="radio" class="radio-input" id="hotelSearchRadioBox" name="hotelSearchType" value="hotelonly" onclick='displayRooms()'>
                    <span class="radio-tile">
                      <span class="radio-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"/></svg>
                      </span>
                      <span class="radio-label">Hotels</span>
                    </span>
                  </label>
                </div>
                <div class="form-input-container">
                  <label class="option-sub-label radio-inputs">
                    <input type="radio" class="radio-input" id="vacationSearchRadioBox" name="hotelSearchType" checked='yes' value="vacationhome" onclick='displayRooms()'>
                    <span class="radio-tile">
                      <span class="radio-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
                      </span>
                      <span class="radio-label">Vacation Home</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="residence-country-block" id="h_res_country_div">
              <div class="option-main-label-2 option-main-label row3" id="h_country_lbl_div">
                <h1>Country of Residence ?</h1>
              </div>
              <div class="row7" id="h_country_div">
                <select name="H_Country" id="H_Country" onChange=""  class="user-residence-select-hotel" validate="formH" require="Please Enter Country of Residence">
                  <option value='' selected="selected" >-Select a Country-</option>
                  <option value='0~AF'>Afghanistan</option>
                  <option value='0~AL'>Albania</option>
                  <option value='0~DZ'>Algeria</option>
                  <option value='0~AS'>American Samoa</option>
                  <option value='0~AD'>Andorra</option>
                  <option value='0~AO'>Angola</option>
                  <option value='0~AI'>Anguilla</option>
                  <option value='0~AQ'>Antarctica</option>
                  <option value='0~AG'>Antigua And Barbuda</option>
                  <option value='0~AR'>Argentina</option>
                  <option value='0~AM'>Armenia</option>
                  <option value='0~AW'>Aruba</option>
                  <option value='0~AU'>Australia</option>
                  <option value='0~AT'>Austria</option>
                  <option value='0~AZ'>Azerbaijan</option>
                  <option value='0~BS'>Bahamas</option>
                  <option value='0~BH'>Bahrain</option>
                  <option value='0~BD'>Bangladesh</option>
                  <option value='0~BB'>Barbados</option>
                  <option value='0~BY'>Belarus</option>
                  <option value='0~BE'>Belgium</option>
                  <option value='0~BZ'>Belize</option>
                  <option value='0~BJ'>Benin</option>
                  <option value='0~BM'>Bermuda</option>
                  <option value='0~BT'>Bhutan</option>
                  <option value='0~BO'>Bolivia</option>
                  <option value='0~BA'>Bosnia and Herzegovina</option>
                  <option value='0~BW'>Botswana</option>
                  <option value='0~BV'>Bouvet Island</option>
                  <option value='0~BR'>Brazil</option>
                  <option value='0~IO'>British Indian Ocean Territory</option>
                  <option value='0~BN'>Brunei</option>
                  <option value='0~BG'>Bulgaria</option>
                  <option value='0~BF'>Burkina Faso</option>
                  <option value='0~BI'>Burundi</option>
                  <option value='0~KH'>Cambodia</option>
                  <option value='0~CM'>Cameroon</option>
                  <option value='0~CA'>Canada</option>
                  <option value='0~CV'>Cape Verde</option>
                  <option value='0~KY'>Cayman Islands</option>
                  <option value='0~CF'>Central African Republic</option>
                  <option value='0~TD'>Chad</option>
                  <option value='0~CL'>Chile</option>
                  <option value='0~CN'>China</option>
                  <option value='0~CX'>Christmas Island</option>
                  <option value='0~CC'>Cocos (Keeling) Islands</option>
                  <option value='0~CO'>Colombia</option>
                  <option value='0~KM'>Comoros</option>
                  <option value='0~CG'>Congo</option>
                  <option value='0~CD'>Congo Democractic Republic</option>
                  <option value='0~CK'>Cook Islands</option>
                  <option value='0~CR'>Costa Rica</option>
                  <option value='0~CI'>Cote DIvoire (Ivory Coast)</option>
                  <option value='0~HR'>Croatia (Hrvatska)</option>
                  <option value='0~CU'>Cuba</option>
                  <option value='0~CR'>Curacao</option>
                  <option value='0~CY'>Cyprus</option>
                  <option value='0~CZ'>Czech Republic</option>
                  <option value='0~DK'>Denmark</option>
                  <option value='0~DJ'>Djibouti</option>
                  <option value='0~DM'>Dominica</option>
                  <option value='0~DO'>Dominican Republic</option>
                  <option value='0~TP'>East Timor</option>
                  <option value='0~EC'>Ecuador</option>
                  <option value='0~EG'>Egypt</option>
                  <option value='0~SV'>El Salvador</option>
                  <option value='0~GQ'>Equatorial Guinea</option>
                  <option value='0~ER'>Eritrea</option>
                  <option value='0~EE'>Estonia</option>
                  <option value='0~ET'>Ethiopia</option>
                  <option value='0~FK'>Falkland Islands (Islas Malvinas)</option>
                  <option value='0~FO'>Faroe Islands</option>
                  <option value='0~FJ'>Fiji</option>
                  <option value='0~FI'>Finland</option>
                  <option value='0~FR'>France</option>
                  <option value='0~GF'>French Guiana</option>
                  <option value='0~PF'>French Polynesia</option>
                  <option value='0~TF'>French Southern Territories</option>
                  <option value='0~GA'>Gabon</option>
                  <option value='0~GM'>Gambia</option>
                  <option value='0~GE'>Georgia</option>
                  <option value='4~DE'>Germany</option>
                  <option value='0~GH'>Ghana</option>
                  <option value='0~GI'>Gibraltar</option>
                  <option value='0~GR'>Greece</option>
                  <option value='0~GL'>Greenland</option>
                  <option value='0~GD'>Grenada</option>
                  <option value='0~GP'>Guadeloupe</option>
                  <option value='0~GU'>Guam</option>
                  <option value='0~GT'>Guatemala</option>
                  <option value='0~GN'>Guinea</option>
                  <option value='0~GW'>Guinea-Bissau</option>
                  <option value='0~GY'>Guyana</option>
                  <option value='0~HT'>Haiti</option>
                  <option value='0~HM'>Heard and McDonald Islands</option>
                  <option value='0~HN'>Honduras</option>
                  <option value='0~HK'>Hong Kong</option>
                  <option value='0~HU'>Hungary</option>
                  <option value='0~IS'>Iceland</option>
                  <option value='0~IN'>India</option>
                  <option value='0~ID'>Indonesia</option>
                  <option value='0~IR'>Iran</option>
                  <option value='0~IQ'>Iraq</option>
                  <option value='0~IE'>Ireland</option>
                  <option value='0~IL'>Israel</option>
                  <option value='2~IT'>Italy</option>
                  <option value='0~JM'>Jamaica</option>
                  <option value='0~JP'>Japan</option>
                  <option value='0~JO'>Jordan</option>
                  <option value='0~KZ'>Kazakhstan</option>
                  <option value='0~KE'>Kenya</option>
                  <option value='0~KI'>Kiribati</option>
                  <option value='0~KR'>Korea</option>
                  <option value='1~KW'>Kuwait</option>
                  <option value='0~KG'>Kyrgyzstan</option>
                  <option value='0~LA'>Laos</option>
                  <option value='0~LV'>Latvia</option>
                  <option value='0~LB'>Lebanon</option>
                  <option value='0~LS'>Lesotho</option>
                  <option value='0~LR'>Liberia</option>
                  <option value='0~LY'>Libya</option>
                  <option value='0~LI'>Liechtenstein</option>
                  <option value='0~LT'>Lithuania</option>
                  <option value='0~LU'>Luxembourg</option>
                  <option value='0~MO'>Macau</option>
                  <option value='0~MK'>Macedonia</option>
                  <option value='0~MG'>Madagascar</option>
                  <option value='0~MW'>Malawi</option>
                  <option value='0~MY'>Malaysia</option>
                  <option value='0~MV'>Maldives</option>
                  <option value='0~ML'>Mali</option>
                  <option value='0~MT'>Malta</option>
                  <option value='0~MH'>Marshall Islands</option>
                  <option value='0~MQ'>Martinique</option>
                  <option value='0~MR'>Mauritania</option>
                  <option value='0~MU'>Mauritius</option>
                  <option value='0~YT'>Mayotte</option>
                  <option value='0~MX'>Mexico</option>
                  <option value='0~FM'>Micronesia</option>
                  <option value='0~MD'>Moldova</option>
                  <option value='0~MC'>Monaco</option>
                  <option value='0~MN'>Mongolia</option>
                  <option value='0~ME'>Montenegro</option>
                  <option value='0~MS'>Montserrat</option>
                  <option value='0~MA'>Morocco</option>
                  <option value='0~MZ'>Mozambique</option>
                  <option value='0~MM'>Myanmar</option>
                  <option value='0~NA'>Namibia</option>
                  <option value='0~NR'>Nauru</option>
                  <option value='0~NP'>Nepal</option>
                  <option value='0~NL'>Netherlands</option>
                  <option value='0~AN'>Netherlands Antilles</option>
                  <option value='0~NC'>New Caledonia</option>
                  <option value='0~NZ'>New Zealand</option>
                  <option value='0~NI'>Nicaragua</option>
                  <option value='0~NE'>Niger</option>
                  <option value='0~NG'>Nigeria</option>
                  <option value='0~NU'>Niue</option>
                  <option value='0~NF'>Norfolk Island</option>
                  <option value='0~NY'>North Cyprus</option>
                  <option value='0~KP'>North Korea</option>
                  <option value='0~MP'>Northern Mariana Islands</option>
                  <option value='0~NO'>NorthernIreland</option>
                  <option value='0~NO'>Norway</option>
                  <option value='1~OM'>Oman</option>
                  <option value='0~PK'>Pakistan</option>
                  <option value='0~PW'>Palau</option>
                  <option value='0~PA'>Panama</option>
                  <option value='0~PG'>Papua new Guinea</option>
                  <option value='0~PY'>Paraguay</option>
                  <option value='0~PE'>Peru</option>
                  <option value='0~PH'>Philippines</option>
                  <option value='0~PN'>Pitcairn Island</option>
                  <option value='0~PL'>Poland</option>
                  <option value='0~PT'>Portugal</option>
                  <option value='0~PR'>Puerto Rico</option>
                  <option value='1~QA'>Qatar</option>
                  <option value='0~RE'>Reunion</option>
                  <option value='0~RO'>Romania</option>
                  <option value='0~RU'>Russia</option>
                  <option value='0~RW'>Rwanda</option>
                  <option value='0~SH'>Saint Helena</option>
                  <option value='0~KN'>Saint Kitts And Nevis</option>
                  <option value='0~LC'>Saint Lucia</option>
                  <option value='0~PM'>Saint Pierre and Miquelon</option>
                  <option value='0~VC'>Saint Vincent And The Grenadines</option>
                  <option value='0~WS'>Samoa</option>
                  <option value='0~SM'>San Marino</option>
                  <option value='0~MF'>San Martin</option>
                  <option value='0~ST'>Sao Tome and Principe</option>
                  <option value='0~SA'>Saudi Arabia</option>
                  <option value='0~SN'>Senegal</option>
                  <option value='0~RS'>Serbia</option>
                  <option value='0~SC'>Seychelles</option>
                  <option value='0~SL'>Sierra Leone</option>
                  <option value='0~SG'>Singapore</option>
                  <option value='0~SK'>Slovakia</option>
                  <option value='0~SI'>Slovenia</option>
                  <option value='0~SB'>Solomon Islands</option>
                  <option value='0~SO'>Somalia</option>
                  <option value='0~ZA'>South Africa</option>
                  <option value='0~AG'>South Korea</option>
                  <option value='3~ES'>Spain</option>
                  <option value='0~LK'>Sri Lanka</option>
                  <option value='0~SD'>Sudan</option>
                  <option value='0~SR'>Suriname</option>
                  <option value='0~SJ'>Svalbard And Jan Mayen Islands</option>
                  <option value='0~SZ'>Swaziland</option>
                  <option value='0~SE'>Sweden</option>
                  <option value='0~CH'>Switzerland</option>
                  <option value='0~SY'>Syria</option>
                  <option value='0~TW'>Taiwan</option>
                  <option value='0~TJ'>Tajikistan</option>
                  <option value='0~TZ'>Tanzania</option>
                  <option value='0~TH'>Thailand</option>
                  <option value='0~TG'>Togo</option>
                  <option value='0~TK'>Tokelau</option>
                  <option value='0~TO'>Tonga</option>
                  <option value='0~TT'>Trinidad And Tobago</option>
                  <option value='0~TN'>Tunisia</option>
                  <option value='0~TR'>Turkey</option>
                  <option value='0~TM'>Turkmenistan</option>
                  <option value='0~TC'>Turks And Caicos Islands</option>
                  <option value='0~TV'>Tuvalu</option>
                  <option value='0~UG'>Uganda</option>
                  <option value='0~UA'>Ukraine</option>
                  <option value='1~AE'>United Arab Emirates</option>
                  <option value='5~UK'>United Kingdom</option>
                  <option value='0~UY'>Uruguay</option>
                  <option value='0~UM'>US Minor Outlying Islands</option>
                  <option value='0~US'>USA</option>
                  <option value='0~UZ'>Uzbekistan</option>
                  <option value='0~VU'>Vanuatu</option>
                  <option value='0~VA'>Vatican City State (Holy See)</option>
                  <option value='0~VE'>Venezuela</option>
                  <option value='0~VN'>Vietnam</option>
                  <option value='0~VG'>Virgin Islands (British)</option>
                  <option value='0~VI'>Virgin Islands (US)</option>
                  <option value='0~WF'>Wallis And Futuna Islands</option>
                  <option value='0~YE'>Yemen</option>
                  <option value='0~YU'>Yugoslavia</option>
                  <option value='0~ZM'>Zambia</option>
                  <option value='0~ZW'>Zimbabwe</option>
                </select>
              </div>
            </div>

            <div class="hotel-destination">
              <div class="option-main-label row3">
                <h1>Where Are You Going ?</h1>
              </div>
              <div class="row7 form-text-input-container">
                <label for="H_Loc" class="label-text-input">Location</label>
                <input name="H_Loc" id="H_Loc" type="text" value="" placeholder="City or Location" size="20" validate="formH" require="Please Enter  Location" class="user-country-select-hotel italic text-input"/>
                <input type="hidden" name="hid_H_Loc" id="hid_H_Loc" value="" validate="" require="Please Enter  Location"/>
              </div>
            </div>
        </div>

        <ul class="hotel-date-time-block">
          <li class="option-main-label option-main-label-2 row3">
            <h1>When Are You Going ?</h1>
          </li>
          <li class="width-fix-hotels">
            <ul class="hotel-date-times">
              <li>
                <div>
                  <label class="option-sub-label">Check -In</label>
                </div>
                <div>
                  <input class="user-date-select" type="text" id="ho_departure_temp" name="departure_temp" readonly validate="formH" require="Please Select Depart Date"/>
                  <input class="user-date-select" type="hidden" id="ho_departure" name="departure" readonly validate="formH" require="Please Select Depart Date"/>
                </div>
              </li>
              <li class="width-night-width-fix">
                <div>
                  <label class="option-sub-label">Night(s)</label>
                </div>
                <div>
                  <select name="H_nights" id="H_nights" class="hotel-day-select">
                    <option value="0">0</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <label class="option-sub-label">Check Out</label>
                </div>
                <div>
                <input class="user-date-select" type="text" name="arrival_temp" id="ho_arrival_temp" readonly validate="formH" require="Please Select Arrival Date"/>
                  <input class="user-date-select" type="hidden" name="arrival" id="ho_arrival" readonly validate="formH" require="Please Select Arrival Date"/>
                </div>
              </li>
              <li id="room_display_unit" class="width-night-width-fix" style='display:none'>
                <div>
                  <label class="option-sub-label">Rooms</label>
                </div>
                <div>
                  <select id="norooms_H" name="norooms_H" class="hotel-day-select" onChange="roomocc(this.id,this.value);resizeContainer();">
                    <option value="1" selected="selected">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <li>
          <div class="polka-dots"></div>
          <div class="option-main-label">
            <h1>How Many People ?</h1>
          </div>
          <div id="roomComboH" class="hotel-passengers" style="display:block;"></div>
        </li>
        <li class="morefilters" style="display:none;">
          <div class="polka-dots"></div>
          <ul>
            <li class="hotel-morefilters" id="star_rating_div_H">
              <div class=" textleft marginfix">
                <label class="option-sub-label display-block">Star Rating</label>
                <select id="star_rating_H" name="greeknumber" class="user-options-select row10">
                  <option value="ALL">Select All</option>
                  <option value="1EST">1 Star</option>
                  <option value="2EST">2 Star</option>
                  <option value="3EST">3 Star</option>
                  <option value="4EST">4 Star</option>
                  <option value="5EST">5 Star</option>
                  <option value="6EST">6 Star</option>
                  <option value="7EST">7 Star</option>
                </select>
              </div>
            </li>
            <li class="hotel-morefilters" id="hotel_type_H" style='display:none'>
              <div class="textleft marginfix " id ="hType_h_main">
                <label class="option-sub-label display-block">Hotel  Type</label>
                <select id="hType_h" name="hType_h" class="user-options-select row10">
                  <option value="ALL">Select All</option>
                  <option value="13">Apartment</option>
                  <option value="12">Beach</option>
                  <option value="61">Beach Hotel</option>
                  <option value="50">chandika</option>
                  <option value="14">City Stopver</option>
                  <option value="11">Eco tour</option>
                  <option value="16">Family</option>
                  <option value="17">Historical and Culture</option>
                  <option value="65">Holiday Resort</option>
                  <option value="10">Honey Moon</option>
                  <option value="29">Honeymoon Hotel</option>
                  <option value="60">kasuniHT</option>
                  <option value="66">LN</option>
                  <option value="1">Luxury</option>
                  <option value="5">Moderate</option>
                  <option value="18">Safari</option>
                  <option value="9">SPA and Wellness</option>
                  <option value="64">SuperStar</option>
                  <option value="20">test hotel type </option>
                  <option value="21">testhoteltype -10 </option>
                  <option value="62">Test Hotel Type - Rajinda</option>
                  <option value="39">TestHT</option>
                  <option value="59">test kasuni</option>
                  <option value="22">testSGU</option>
                  <option value="4">test star</option>
                  <option value="2">Test T Hotel Type 1</option>
                  <option value="3">Test T Hotel Type 2</option>
                  <option value="19">Testtype</option>
                  <option value="42">Travelers Hotels</option>
                  <option value="15">Weekend Special</option>
                </select>
              </div>
            </li>
            <li class="hotel-morefilters" id="hotel_name_H" >
              <div class="marginfix textleft form-text-input-container">
                <label class="option-sub-label display-block label-text-input" id="hotel-vacation_name_H_id">Vacation Home Name</label>
                <input name="H_name" id="H_name" type="text" class="user-options-select row10 text-input" onClick="return validate('formHN');" validate="formHN" require="Select hotel name from the dropdown for internal hotels only or type freeform name for both internal and/or third party inventory."/>
                <input type="hidden" id="H_ridecode"  name="H_ridecode" />
              </div>
            </li>          
            <li class="hotel-morefilters" id="pref_cur_H" >
              <div class="marginfix textleft">
                <div id="h_curr_lbl_div">
                  <label class="option-sub-label display-block"> Preferred Currency</label>
                  <select  name="H_consumerCurrencyCode" id="H_consumerCurrencyCode" class="user-options-select row10">
                    <option selected="selected" value="" style="display:none">Select Currency</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="LKR">LKR</option>
                    <option value="MYR">MYR</option>
                    <option value="AUD">AUD</option>
                    <option value="CAN">CAN</option>
                    <option value="CHF">CHF</option>
                    <option value="INR">INR</option>
                    <option value="JOD">JOD</option>
                    <option value="AED">AED</option>
                    <option value="QAR">QAR</option>
                    <option value="SAR">SAR</option>
                    <option value="PHP">PHP</option>
                    <option value="DKK">DKK</option>
                    <option value="NOK">NOK</option>
                    <option value="SEK">SEK</option>
                    <option value="EGP">EGP</option>
                    <option value="BHD">BHD</option>
                    <option value="OMR">OMR</option>
                    <option value="PKR">PKR</option>
                    <option value="IQD">IQD</option>
                    <option value="KWD">KWD</option>
                  </select>
                </div>
              </div>
            </li>         
            <li id="promotionCodeDiv_H" class="hotel-morefilters">
              <div class="textleft marginfix discountcoupon">
                <label class="option-sub-label display-block">Promotion Code</label>
                <input type="text" class="user-options-select row10" id="discountCoupon_No_H" name="discountCoupon_No_H">
                </input>
              </div>
            </li>
            <li class="hotel-morefilters width100" id="inv_type_H" >
              <div class="inventory-types">
                <label class="option-sub-label display-block" id="vacation-home-label-id">Vacation Home Availability</label>
                <ul>
                  <li class="fleft">
                    <input id="availableHotels_H"  name="availableHotels_H" checked="checked"   value="on" type="checkbox">
                  </li>
                  <li class="fleft">
                    <label class="option-sub-label ">Available</label>
                  </li>
                  <li class="fleft">
                    <input id="onRequestHotels_H" name="onRequestHotels_H" checked="checked" value="on" type="checkbox">
                  </li>
                  <li class="fleft">
                    <label class="option-sub-label">On-Request</label>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hotel-morefilters width100" id="prc_lvl_H" >
              <div class="hotel-price-level">
                <label class="option-sub-label display-block">Price Range</label>
                <ul>
                  <li class="fleft ">
                    <label class="option-sub-label">From</label>
                  </li>
                  <li class="fleft ">
                    <input name="priceLevelFrom_H" id="priceLevelFrom_H" value="" size="4" autocomplete="off" type="text"  class="user-options-select">
                  </li>
                  <li class="fleft ">
                    <label class="option-sub-label">To</label>
                  </li>
                  <li class="fleft ">
                    <input class="user-options-select"  name="priceLevelTo_H" id="priceLevelTo_H" value="" size="4" autocomplete="off" type="text"  >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="hide_filter"><a href="#" class="show_filter">Show Additional Search Options<span id='arrow_down' class='arrow_down'>&nbsp;&nbsp;&nbsp;</span></a></div>
        </li>
        <li class="cf"> <a onClick="return validate('formH');"   href="JavaScript:search('H');" class="search-button">
          <div id="search_btns_h">Search</div>
          </a> </li>
      </ul>
    </div>
      </div>
      <input type="hidden" id="ipAddress" name="ipAddress" />
      <input type="hidden" id="clientCountryCode" name="clientCountryCode" />
      </div>
    </form>

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
  </div>
<?php
}
add_shortcode('pickpack-form', 'pickpack_frontend_form');
