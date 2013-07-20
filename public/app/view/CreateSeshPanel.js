
Ext.define('Stone.view.CreateSeshPanel', {
    extend: 'Ext.Container',
    alias: "widget.createseshpanel",
    config: {
        draggable: false,
        itemId: 'CreateSeshPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toptoolbar',
                title: 'Create a Session'
            },
            {
                xtype: 'createseshmappanel'
            }
        ]
    }

});