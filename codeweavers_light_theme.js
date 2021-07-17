// ==UserScript==
// @name         Codeweavers Light Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Zhenbo 'endle' Li
// @match        https://*.codeweavers.com/*
// @icon         https://www.google.com/s2/favicons?domain=codeweavers.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Script loaded");
  //  const background_class = ["
    const background_color = "#CDCDCD";
    const font_color = "black";

    $('body').css("color", font_color);
    $('body').css("background-color", background_color);
    $( "div.container-fluid" ).css( "background-color", background_color );
    $( " #sidebar-nav " ).css( "background-color", background_color );

    const class_background_images = ["bg-hex", "steelwall"];

    for (let c of class_background_images) {
        let bg_obj = $( "div." + c ); //.css( "background-image", "" );
        console.log(bg_obj);
        bg_obj.css( "background-image", "none" );
    }
    console.log(class_background_images);
    //$( "div.bg-hex" ).css( "background-image", "" );
    // Your code here...
})();