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
                rect: ['88px', '141px','872px','851','auto', 'auto'],
                c: [
                {
                    id: 'noneofour',
                    type: 'text',
                    rect: ['0px', '583px','872px','268px','auto', 'auto'],
                    text: "None of our ingredients are <br>mass produced or trucked in.",
                    font: ['Oswald, sans-serif', 86, "rgba(99,99,99,1)", "100", "none", ""]
                },
                {
                    id: 'sourcedlocally',
                    type: 'text',
                    rect: ['0px', '150px','809px','425px','auto', 'auto'],
                    text: "SOURCED <br>LOCALLY",
                    align: "left",
                    font: ['Oswald, sans-serif', 190, "rgba(193,22,69,1)", "bold", "none", "normal"]
                },
                {
                    id: 'allourfood',
                    type: 'text',
                    rect: ['6px', '0px','766px','150px','auto', 'auto'],
                    clip: ['rect(0px -0.2607421875px 150px 0px)'],
                    text: "ALL OUR FOOD IS",
                    font: ['Oswald, sans-serif', 101, "rgba(181,189,0,1.00)", "700", "none", ""]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '141px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0'],
                ["style", "left", '88px'],
                ["style", "width", '872px']
            ],
            "${_Text}": [
                ["style", "line-height", '115px'],
                ["style", "top", '601px'],
                ["style", "width", '1100px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '100px']
            ],
            "${_noneofour}": [
                ["style", "line-height", '97px'],
                ["color", "color", 'rgba(99,99,99,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '0px'],
                ["style", "width", '872px'],
                ["style", "top", '583px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "height", '268px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "clip", [0,-0.380859375,268,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-size", '86px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1080px'],
                ["style", "width", '960px']
            ],
            "${_allourfood}": [
                ["color", "color", 'rgba(181,189,0,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '6px'],
                ["style", "font-size", '101px'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "height", '150px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "clip", [0,-0.2607421875,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '766px']
            ],
            "${_sourcedlocally}": [
                ["style", "line-height", '211px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '150px']
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
                { id: "eid14", tween: [ "style", "${_allourfood}", "clip", [0,777,150,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.2607421875,150,0]}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_noneofour}", "clip", [0,872.111328125,268,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.380859375,268,0]}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "transform", "${_noneofour}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid26", tween: [ "style", "${_allourfood}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid8", tween: [ "transform", "${_sourcedlocally}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid16", tween: [ "transform", "${_noneofour}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid10", tween: [ "transform", "${_sourcedlocally}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid36", tween: [ "transform", "${_Group}", "scaleY", '1', { fromValue: '0.6'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid20", tween: [ "transform", "${_allourfood}", "scaleX", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid34", tween: [ "transform", "${_Group}", "scaleX", '1', { fromValue: '0.6'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid22", tween: [ "transform", "${_allourfood}", "scaleY", '1', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid12", tween: [ "style", "${_sourcedlocally}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid38", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid24", tween: [ "style", "${_noneofour}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-40492534");
