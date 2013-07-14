Ext.define('Stone.view.Navigation', {
				extend: 'Ext.List',
				xtype: 'navigation',
				requires : ['Ext.data.Store'],
				config: {
								cls : 'nav-list',
								itemTpl : '{title}',
								data : [{
												title : 'Activity'
								},{
												title : 'Browse Sessions'
								},{
												title : 'Create a Session'
								}]
				}
});