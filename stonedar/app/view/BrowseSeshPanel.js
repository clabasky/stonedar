
Ext.define('Stone.view.BrowseSeshPanel', {
    extend: 'Ext.Container',
    alias: "widget.browseseshpanel",
    config: {
        itemId: 'BrowseSeshPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'card'
        },
        items: [
            
            {
                xtype: 'seshlistpanel'
            },
            {
                xtype: 'seshdetailspanel'
            }
        ]
    }

});