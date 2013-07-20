
Ext.define('Stone.view.SeshListPanel', {
    extend: 'Ext.Container',
    alias: "widget.seshlistpanel",
    config: {
        itemId: 'SeshListPanel',
        style: 'background-color: grey;',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                id: 'SeshList',
                itemTpl: [
                    '<div class="listItem">Start Time {time}',
                    '    	<br>',
                    '    meeting place: {place}',
                    '',
                    '',
                    '	<div class="arrowRight"></div>',
                    '</div>',
                    ''
                ],
                pressedCls: 'itemSelected',
                selectedCls: '',
                //selectedCls: 'itemSelected',
                store: 'Seshes',
                striped: true
            }
        ]
    },
    listeners: {
            painted:{
                   fn : function() {
                       Stone.app.getController('BrowseSeshController').seshListVisible();
                   },
                   scope: this
            }
       }  

});