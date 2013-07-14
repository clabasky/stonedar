
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
                xtype: 'toptoolbar',
                title: 'Browse Sessions'
            },
            {
                xtype: 'seshlistpanel'
            },
            {
                xtype: 'seshdetailspanel'
            }
        ]
    }

});