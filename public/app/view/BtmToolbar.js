
Ext.define('Stone.view.BtmToolbar', {
    extend: 'Ext.Panel',
    alias: "widget.btmtoolbar",
    config: {
        itemId: 'BtmToolbar',
        docked: 'bottom',
	height: 50,
	style: 'background-color: blue;' +
		'transform: rotate(30deg);',
        items :[
	    {
		xtyle: 'container',
		//height: 50,
		//style: 'background-color: transparent;',
		/*layout: {
		    type: 'hbox',
		    pack: 'center'
		},*/
		items: [
		   /* {
			xtype: 'container',
			height: 50,
			
			style: 'background-color:red;'+
			'-webkit-border-radius: 500em; -moz-border-radius: 500em;'+
			'position: absolute' +
			'top: 200px' +
			'left: 20px'
		    },
		    {
			xtype: 'container'
		    }*/
		]
	    }
	    /*
	    {
		align : 'left',
		name : 'nav_btn',
		iconCls : 'list',
		ui : 'plain'
	    }
	    */
	    ]
                        
                        
    }

});