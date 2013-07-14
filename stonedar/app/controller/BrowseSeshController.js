Ext.define('Stone.controller.BrowseSeshController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'browse': 'show',
            'details': 'showDetails'
        },

        refs: {
            browseSeshPanel: 'browseseshpanel',
            seshListPanel: 'seshlistpanel',
            seshDetailPanel: 'seshdetailspanel'
        }
    },

    init: function(application) {
        
        this.control({
           
            '#SeshList' : {
                itemtap: this.showDetails
            },
            'button[itemId="BackToBrowseBtn"]' : {
                tap: this.backToBrowse
            }
        });
	
    },
    
    show: function() {
       
    },
    
    showDetails: function(list, index, target, record, e, eOpts){
        var detailsPanel = this.getSeshDetailPanel();
        this.getBrowseSeshPanel().animateActiveItem(detailsPanel, {type: 'slide', direction: 'left'});
        console.log(record.getData());
    },
    
    backToBrowse: function(){
        var listPanel = this.getSeshListPanel();
        this.getBrowseSeshPanel().animateActiveItem(listPanel, {type: 'slide', direction: 'right'});
        this.getBrowseSeshPanel().down('toptoolbar').setHidden(false);
    },
    
    seshDetailsVisible: function(){
        this.getBrowseSeshPanel().down('toptoolbar').setHidden(true);
    },
    
    seshListVisible: function(){
        this.getBrowseSeshPanel().down('toptoolbar').setHidden(false);
    }

});