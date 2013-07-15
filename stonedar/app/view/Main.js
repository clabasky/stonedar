Ext.define("Stone.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],
    
    config: {
        fullscreen: true,
         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: 10,
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            pressedCls: 'itemSelected',
            selectedCls: '',
            items: [/*{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Menu',
                    centered: false,
                    width: 200,
                    left: 0
                }
                
                
            }*/]
            
        },
        
        /**
         *  Change this to 'right' to dock the navigation list to the right.
         */
        listPosition: 'left',

        /**
         *  Example of how to re-order the groups.
         */
        groups: {
            'Sessions': 1,
            'Around Me': 2,
            'Notifications': 3
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: grey',
            xtype: 'container'
        },
        
        items: [{
            title: 'Activity',
        //    group: 'Around Me',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Activity',
                docked: 'top'
            },{
                xtype: 'panel',
                html: 'activity',

                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },
        {
            xtype: 'browseseshpanel',
            title: 'Browse Sessions',
        //    group: 'Sessions',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true
        },
        {
            xtype: 'createseshpanel',
            title: 'Create a Session',
            slideButton: true
        }]
    }
});
