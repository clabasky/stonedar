Ext.define('Stone.controller.CreateSeshController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
        },

        refs: {
	    createSeshPanel: 'createseshpanel',
	    createSeshMap: 'createseshmappanel > map'
        }
    },

    init: function(application) {
        
        this.control({
	    
	    createSeshMap : {
		maprender : this.initializeMap
	    }
           
        });
	
    },
    
    initializeMap: function(){
	var mapPanel = Stone.app.getController('CreateSeshController').getCreateSeshMap();
	var map = mapPanel.getMap();
    }
    
    

});