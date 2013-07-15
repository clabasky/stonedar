
Ext.define('Stone.view.ActivityPanel', {
    extend: 'Ext.Container',
    alias: "widget.activitypanel",
    config: {
        itemId: 'ActivityPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toptoolbar',
                title: 'Activity'
            }
        ],
        listeners: {
            painted:{
                   fn : function() {
                     //  Stone.app.getController('BrowseSeshController').seshDetailsVisible();
                   },
                   scope: this
            }
       }  
    }

});