
Ext.define('Stone.view.SeshDetailsPanel', {
    extend: 'Ext.Container',
    alias: "widget.seshdetailspanel",
    config: {
        itemId: 'SeshDetailsPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Browse',
                        itemId: 'BackToBrowseBtn'
                    }
                ]
            },
            {
                xtype: 'container',
                html: 'sesh details'
            }
        ],
        listeners: {
            painted:{
                   fn : function() {
                       Stone.app.getController('BrowseSeshController').seshDetailsVisible();
                   },
                   scope: this
            }
       }  
    }

});