/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Oswald, sans-serif']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Oswald:400,300,700:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Group',
                type: 'group',
                rect: ['55', '179','857','750','auto', 'auto'],
                c: [
                {
                    id: 'soitsperfect',
                    type: 'text',
                    rect: ['0px', '0px','857px','750px','auto', 'auto'],
                    text: "<br>        <br><br>SO IT'S PERFECT <br>ON THE GO!<br>",
                    align: "left",
                    font: ['Oswald, sans-serif', 124, "rgba(193,22,69,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'freshhealthy',
                    type: 'text',
                    rect: ['0px', '0px','857px','750px','auto', 'auto'],
                    text: "<br>FRESH HEALTHY <br>FOOD FOR YOU,<br>",
                    align: "left",
                    font: ['Oswald, sans-serif', 124, "rgba(181,189,0,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'weprepare',
                    type: 'text',
                    rect: ['0px', '0px','857px','738px','auto', 'auto'],
                    text: "WE PREPARE ",
                    align: "left",
                    font: ['Oswald, sans-serif', 124, "rgba(193,22,69,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.6']
            ],
            "${_weprepare}": [
                ["style", "top", '0px'],
                ["style", "line-height", '148px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '738px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '124px']
            ],
            "${_freshhealthy}": [
                ["style", "line-height", '148px'],
                ["color", "color", 'rgba(181,189,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '124px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '750px'],
                ["transform", "scaleX", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '960px'],
                ["style", "height", '1080px'],
                ["style", "overflow", 'hidden']
            ],
            "${_soitsperfect}": [
                ["style", "line-height", '148px'],
                ["color", "color", 'rgba(193,22,69,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '124px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '750px'],
                ["transform", "scaleX", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "transform", "${_Group}", "scaleY", '1', { fromValue: '0.6'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid66", tween: [ "transform", "${_Group}", "scaleX", '1', { fromValue: '0.6'}], position: 0, duration: 500, easing: "easeOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-40492535");
