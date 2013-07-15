Ext.define('Stone.controller.CreateSeshController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
        },

        refs: {
	    createSeshPanel: 'createseshpanel'
        }
    },

    init: function(application) {
        
        this.control({
	    
	    
           /*
            '#SeshList' : {
                itemtap: this.showDetails
            },
            'button[itemId="BackToBrowseBtn"]' : {
                tap: this.backToBrowse
            }
            */
        });
	
    },
    
    createSeshMapVisible: function(){
	console.log('suspendy');
	this.getCreateSeshPanel().suspendEvents();
    }

});