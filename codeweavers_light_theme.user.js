// ==UserScript==
// @name         Codeweavers Light Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Zhenbo 'endle' Li
// @match        https://*.codeweavers.com/*
// @icon         https://www.google.com/s2/favicons?domain=codeweavers.com
// @grant        none
// ==/UserScript==

function editBackground() {
     console.log("Script loaded");
  //  const background_class = ["
    const background_color = "#CDCDCD";
    const font_color = "black";

    $('body').css("color", font_color);
    $('div.row').css("color", font_color);
    $(" #footer").find("a").css("color", font_color);
//    $(' col-md-3 ').css("text-decoration-color", font_color);
//    $(' col-md-3 ').css("text-decoration", font_color);
    //console.log(  );

    $('body').css("background-color", background_color);
    $( "div.container-fluid" ).css( "background-color", background_color );
    $( "div.black" ).css( "background-color", background_color );
    $( "div.card-body" ).css( "background-color", background_color );
    $( "div.card-footer" ).css( "background-color", background_color );
    $( "div.modal-content" ).css( "background-color", background_color );
    $( " #sidebar-nav " ).css( "background-color", background_color );


    $( "div.logo-symbol-bottom" ).css( "background-color", background_color );

    const class_background_images = ["bg-hex", "steelwall", "logo-symbol-bottom", "bg-triangles"];

    for (let c of class_background_images) {
        let bg_obj = $( "div." + c );
        console.log(bg_obj);
        if (bg_obj.length == 0) {
            console.log("Skip due to not found " + c);
            continue;
        }
        bg_obj.css( "background-image", "none" );
    }

    //$( "div.bg-hex" ).css( "background-image", "" );
}

function loadJQuery() {
    return;
    // // @require      https://code.jquery.com/jquery-3.6.0.min.js
    // If load jQuery with @require, there will be two jQuery scripts loaded
    // In the page https://www.codeweavers.com/beta/crossover/enter, the button 'Import Previous' would be disfunctional

    (async() => {
        console.log("waiting for jQuery");

    while(!window.hasOwnProperty("jQuery")) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("jQuery is loaded.");
    })();

}

(function() {
    'use strict';

    loadJQuery();
    editBackground();
    console.log(class_background_images);
})();
