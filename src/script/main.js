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