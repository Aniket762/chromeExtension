chrome.webRequest.onBeforeRequest.addListner(
    function(detils) {return {cancel:true}},
    {urls : blockers},
    ["blocking"]
)

blockers = [
    "*://*.doubkeclick.net/*",
    "*://*.zedo.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.quantserve.com/*",
    "*://*.exponential.com/*",
    "*://*.adbrite.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.partner.googleservices.com/*",
    "*://*.adzerk.com/*",
    "*.//*.openx.com/*",
    "*.//*.broadstreetads.com/*",
    "*.//*.adcolt.com/*",
    "*.//*.adbutler.com/*",
    "*.//*.epom.com/*",
    "*.//*.revive-adserver.com/*",
    "*.//*.oiopublisher.com/*",

]

// you can add the list of ad servers from which you don't ads