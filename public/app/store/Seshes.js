

Ext.define('Stone.store.Seshes', {
    extend: 'Ext.data.Store',

    requires: [
        'Stone.model.Sesh'
    ],

    config: {
        data: [
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            },
            {
                time: '12:00',
                uid: 7,
                invite: 'something',
                place: '47,50'
            }
        ],
        model: 'Stone.model.Sesh',
        storeId: 'Seshes'
    }
});