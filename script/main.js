(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/***
 *           __    __       ___       __   __               
 *          |  |  |  |     /   \     |  | |  |              
 *          |  |__|  |    /  ^  \    |  | |  |              
 *          |   __   |   /  /_\  \   |  | |  |              
 *          |  |  |  |  /  _____  \  |  | |  `----.         
 *          |__|  |__| /__/     \__\ |__| |_______|         
 *         _______. __  .______     .__   __.      ___      
 *        /       ||  | |   _  \    |  \ |  |     /   \     
 *       |   (----`|  | |  |_)  |   |   \|  |    /  ^  \    
 *        \   \    |  | |      /    |  . `  |   /  /_\  \   
 *    .----)   |   |  | |  |\  \----|  |\   |  /  _____  \  
 *    |_______/    |__| | _| `._____|__| \__| /__/     \__\ 
 *                                                          
 */

(function( $ ) {

    var _d = {
        "timeline": {
            "headline":"Gemilang Project",
            "type":"default",
            "text":"<p>Welcome to our project timeline</p>",
            "date": [
                {
                    "startDate":"2015,5,27",
                    "endDate":"2015,5,28",
                    "headline":"Project Kickoff",
                    "text":"<ul><li>Desk Research</li><li>Document Review</li><li>Billing Started</li></ul>"
                },
                {
                    "startDate":"2015,5,28",
                    "endDate":"2015,6,1",
                    "headline":"User Research"
                },
                {
                    "startDate":"2015,6,3",
                    "endDate":"2015,6,9",
                    "headline":"Design Strategy"
                },
                {
                    "startDate":"2015,6,10",
                    "endDate":"2015,6,10",
                    "headline":"Present findings to board",
                    "text":"<ul><li>Users Persona</li><li>Competitor Analysis</li><li>Suggested Information Architecture</li><li>Suggested UX Strategy</li></ul>"
                },
                {
                    "startDate":"2015,6,11",
                    "endDate":"2015,6,15",
                    "headline":"Implementing Information Architecture"
                },
                {
                    "startDate":"2015,6,11",
                    "endDate":"2015,6,15",
                    "headline":"Wireframing"
                },
                {
                    "startDate":"2015,6,16",
                    "endDate":"2015,6,16",
                    "headline":"Validation Testing"
                },
                {
                    "startDate":"2015,6,17",
                    "endDate":"2015,6,17",
                    "headline":"Present progress to board",
                    "text":"<ul><li>Wireframe</li><li>Site Map</li><li>User Flow</li></ul>"
                },
                {
                    "startDate":"2015,6,18",
                    "endDate":"2015,6,18",
                    "headline":"Progress revisions & amendements"
                },
                {
                    "startDate":"2015,6,18",
                    "endDate":"2015,6,22",
                    "headline":"UI Library"
                },
                {
                    "startDate":"2015,6,23",
                    "endDate":"2015,6,23",
                    "headline":"Validation Testing"
                },
                {
                    "startDate":"2015,6,24",
                    "endDate":"2015,6,24",
                    "headline":"Present progress to board",
                    "text":"<ul><li>UI Library Documentation</li></ul>"
                },
                {
                    "startDate":"2015,6,25",
                    "endDate":"2015,6,25",
                    "headline":"Progress revisions & amendements"
                },
                {
                    "startDate":"2015,6,26",
                    "endDate":"2015,6,29",
                    "headline":"Interaction Design & Animation"
                },
                {
                    "startDate":"2015,6,30",
                    "endDate":"2015,6,30",
                    "headline":"Validation Testing"
                },
                {
                    "startDate":"2015,7,1",
                    "endDate":"2015,7,1",
                    "headline":"Present progress to board",
                    "text":"<ul><li>Early Design Prototype</li></ul>"
                },
                {
                    "startDate":"2015,7,2",
                    "endDate":"2015,7,2",
                    "headline":"Progress revisions & amendements"
                },
                {
                    "startDate":"2015,7,3",
                    "endDate":"2015,7,7",
                    "headline":"Prototyping"
                },
                {
                    "startDate":"2015,7,8",
                    "endDate":"2015,7,8",
                    "headline":"Final Presentation",
                    "text":"<ul><li>Full Design Prototype</li></ul>"
                }
            ]
        }
    };
    
    $(document).ready(function() {
        createStoryJS({
            type:       'timeline',
            width:      '800',
            height:     '480',
            source:     _d,
            embed_id:   'the-timeline',
            css:        '../style/main.css',
            start_zoom_adjust: '1'
        });
    });

})(jQuery);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKioqXG4gKiAgICAgICAgICAgX18gICAgX18gICAgICAgX19fICAgICAgIF9fICAgX18gICAgICAgICAgICAgICBcbiAqICAgICAgICAgIHwgIHwgIHwgIHwgICAgIC8gICBcXCAgICAgfCAgfCB8ICB8ICAgICAgICAgICAgICBcbiAqICAgICAgICAgIHwgIHxfX3wgIHwgICAgLyAgXiAgXFwgICAgfCAgfCB8ICB8ICAgICAgICAgICAgICBcbiAqICAgICAgICAgIHwgICBfXyAgIHwgICAvICAvX1xcICBcXCAgIHwgIHwgfCAgfCAgICAgICAgICAgICAgXG4gKiAgICAgICAgICB8ICB8ICB8ICB8ICAvICBfX19fXyAgXFwgIHwgIHwgfCAgYC0tLS0uICAgICAgICAgXG4gKiAgICAgICAgICB8X198ICB8X198IC9fXy8gICAgIFxcX19cXCB8X198IHxfX19fX19ffCAgICAgICAgIFxuICogICAgICAgICBfX19fX19fLiBfXyAgLl9fX19fXyAgICAgLl9fICAgX18uICAgICAgX19fICAgICAgXG4gKiAgICAgICAgLyAgICAgICB8fCAgfCB8ICAgXyAgXFwgICAgfCAgXFwgfCAgfCAgICAgLyAgIFxcICAgICBcbiAqICAgICAgIHwgICAoLS0tLWB8ICB8IHwgIHxfKSAgfCAgIHwgICBcXHwgIHwgICAgLyAgXiAgXFwgICAgXG4gKiAgICAgICAgXFwgICBcXCAgICB8ICB8IHwgICAgICAvICAgIHwgIC4gYCAgfCAgIC8gIC9fXFwgIFxcICAgXG4gKiAgICAuLS0tLSkgICB8ICAgfCAgfCB8ICB8XFwgIFxcLS0tLXwgIHxcXCAgIHwgIC8gIF9fX19fICBcXCAgXG4gKiAgICB8X19fX19fXy8gICAgfF9ffCB8IF98IGAuX19fX198X198IFxcX198IC9fXy8gICAgIFxcX19cXCBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICovXG5cbihmdW5jdGlvbiggJCApIHtcblxuICAgIHZhciBfZCA9IHtcbiAgICAgICAgXCJ0aW1lbGluZVwiOiB7XG4gICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJHZW1pbGFuZyBQcm9qZWN0XCIsXG4gICAgICAgICAgICBcInR5cGVcIjpcImRlZmF1bHRcIixcbiAgICAgICAgICAgIFwidGV4dFwiOlwiPHA+V2VsY29tZSB0byBvdXIgcHJvamVjdCB0aW1lbGluZTwvcD5cIixcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOlwiMjAxNSw1LDI3XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOlwiMjAxNSw1LDI4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGxpbmVcIjpcIlByb2plY3QgS2lja29mZlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIjx1bD48bGk+RGVzayBSZXNlYXJjaDwvbGk+PGxpPkRvY3VtZW50IFJldmlldzwvbGk+PGxpPkJpbGxpbmcgU3RhcnRlZDwvbGk+PC91bD5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOlwiMjAxNSw1LDI4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOlwiMjAxNSw2LDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiVXNlciBSZXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNiw5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGxpbmVcIjpcIkRlc2lnbiBTdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiUHJlc2VudCBmaW5kaW5ncyB0byBib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIjx1bD48bGk+VXNlcnMgUGVyc29uYTwvbGk+PGxpPkNvbXBldGl0b3IgQW5hbHlzaXM8L2xpPjxsaT5TdWdnZXN0ZWQgSW5mb3JtYXRpb24gQXJjaGl0ZWN0dXJlPC9saT48bGk+U3VnZ2VzdGVkIFVYIFN0cmF0ZWd5PC9saT48L3VsPlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMTVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiSW1wbGVtZW50aW5nIEluZm9ybWF0aW9uIEFyY2hpdGVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMTVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiV2lyZWZyYW1pbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOlwiMjAxNSw2LDE2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOlwiMjAxNSw2LDE2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGxpbmVcIjpcIlZhbGlkYXRpb24gVGVzdGluZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMTdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMTdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiUHJlc2VudCBwcm9ncmVzcyB0byBib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIjx1bD48bGk+V2lyZWZyYW1lPC9saT48bGk+U2l0ZSBNYXA8L2xpPjxsaT5Vc2VyIEZsb3c8L2xpPjwvdWw+XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjpcIjIwMTUsNiwxOFwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNiwxOFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJQcm9ncmVzcyByZXZpc2lvbnMgJiBhbWVuZGVtZW50c1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMThcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiVUkgTGlicmFyeVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMjNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMjNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiVmFsaWRhdGlvbiBUZXN0aW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjpcIjIwMTUsNiwyNFwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNiwyNFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJQcmVzZW50IHByb2dyZXNzIHRvIGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiPHVsPjxsaT5VSSBMaWJyYXJ5IERvY3VtZW50YXRpb248L2xpPjwvdWw+XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjpcIjIwMTUsNiwyNVwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNiwyNVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJQcm9ncmVzcyByZXZpc2lvbnMgJiBhbWVuZGVtZW50c1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDYsMjZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDYsMjlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiSW50ZXJhY3Rpb24gRGVzaWduICYgQW5pbWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjpcIjIwMTUsNiwzMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNiwzMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJWYWxpZGF0aW9uIFRlc3RpbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOlwiMjAxNSw3LDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDcsMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJQcmVzZW50IHByb2dyZXNzIHRvIGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiPHVsPjxsaT5FYXJseSBEZXNpZ24gUHJvdG90eXBlPC9saT48L3VsPlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6XCIyMDE1LDcsMlwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjpcIjIwMTUsNywyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGxpbmVcIjpcIlByb2dyZXNzIHJldmlzaW9ucyAmIGFtZW5kZW1lbnRzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjpcIjIwMTUsNywzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOlwiMjAxNSw3LDdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkbGluZVwiOlwiUHJvdG90eXBpbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOlwiMjAxNSw3LDhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6XCIyMDE1LDcsOFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCI6XCJGaW5hbCBQcmVzZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCI8dWw+PGxpPkZ1bGwgRGVzaWduIFByb3RvdHlwZTwvbGk+PC91bD5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNyZWF0ZVN0b3J5SlMoe1xuICAgICAgICAgICAgdHlwZTogICAgICAgJ3RpbWVsaW5lJyxcbiAgICAgICAgICAgIHdpZHRoOiAgICAgICc4MDAnLFxuICAgICAgICAgICAgaGVpZ2h0OiAgICAgJzQ4MCcsXG4gICAgICAgICAgICBzb3VyY2U6ICAgICBfZCxcbiAgICAgICAgICAgIGVtYmVkX2lkOiAgICd0aGUtdGltZWxpbmUnLFxuICAgICAgICAgICAgY3NzOiAgICAgICAgJy4uL3N0eWxlL21haW4uY3NzJyxcbiAgICAgICAgICAgIHN0YXJ0X3pvb21fYWRqdXN0OiAnMSdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7Il19
