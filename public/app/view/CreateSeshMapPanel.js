
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
                xtype: 'map',
                mapOptions: {
                    //center: //new google.maps.LatLng(55.6468, 37.581),
                    styles: [
                        {
                          "stylers": [
                            { "visibility": "on" },
                            { "invert_lightness": true },
                            { "saturation": -100 },
                            { "gamma": 1.37 }
                          ]
                        }
                      ],
                    zoom: 12,
                    panControl: false,
                    scaleControl: false,
                    mapTypeControl: false,
                    zoomControl: false
                }
            }
        ]
    }
});