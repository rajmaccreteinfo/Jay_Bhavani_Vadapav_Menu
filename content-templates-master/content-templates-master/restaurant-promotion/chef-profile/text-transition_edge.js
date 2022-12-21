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
                rect: ['62', '29','1802','426','auto', 'auto'],
                c: [
                {
                    id: 'paragraph',
                    type: 'text',
                    rect: ['1px', '174px','1801px','252px','auto', 'auto'],
                    text: "Todd interprets cuisine in a contemporary and refined way with ingredients being the key elements. He only uses the freshest and most seasonal items.",
                    align: "left",
                    font: ['Oswald, sans-serif', 68, "rgba(99,99,99,1.00)", "100", "none", "normal"]
                },
                {
                    id: 'toddjohnson',
                    type: 'text',
                    rect: ['669px', '0px','auto','auto','auto', 'auto'],
                    text: "TODD JOHNSON",
                    align: "left",
                    font: ['Oswald, sans-serif', 120, "rgba(193,22,69,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'chefprofile',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "CHEF PROFILE",
                    align: "left",
                    font: ['Oswald, sans-serif', 120, "rgba(181,189,0,1.00)", "normal", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '243px'],
                ["style", "opacity", '0'],
                ["style", "left", '59px']
            ],
            "${_paragraph}": [
                ["style", "line-height", '72px'],
                ["style", "font-size", '68px'],
                ["style", "top", '174px'],
                ["color", "color", 'rgba(99,99,99,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '1px'],
                ["style", "width", '1801px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '486px'],
                ["style", "width", '1920px']
            ],
            "${_toddjohnson}": [
                ["color", "color", 'rgba(193,22,69,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '669px'],
                ["style", "font-size", '120px']
            ],
            "${_chefprofile}": [
                ["color", "color", 'rgba(181,189,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '120px']
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
                { id: "eid10", tween: [ "style", "${_Group}", "top", '29px', { fromValue: '243px'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid8", tween: [ "style", "${_Group}", "left", '62px', { fromValue: '59px'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid12", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-53213568");
