
Ext.define('Stone.view.CreateSeshMapPanel', {
    extend: 'Ext.Container',
    alias: "widget.createseshmappanel",
    config: {
        itemId: 'CreateSeshMapPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toptoolbar',
                title: 'Create a Session'
            },
            {
                xtype: 'map'
            }
        ]
    }
});