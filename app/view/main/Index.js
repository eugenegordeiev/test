/**
 * This is the main view component thats show dataView list of items
 * It loads the data from the MyApp.store.Main and places each record in a div provided by the template
 */
Ext.define('MyApp.view.main.Index', {
    extend: 'Ext.view.View',
    xtype: 'main-index',

    id: 'test',

    requires: [                                                                                                        
        'MyApp.view.main.MainController'
    ],   

    hideHeaders: true,
    controller: 'main',

    // Initialize the data store
    initComponent: function() {
        this.store = Ext.create('MyApp.store.Activities');
        this.callParent(); 
    },

    itemSelector: '.btn-selector',  
    bufferedRenderer: false,
    autoScroll: true,

    // Template for each record
    tpl:
        '<tpl for=".">' +
            '<div class="text-wrapper_{[xindex % 2 === 0 ? "left" : "right"]}">' +
                '<div class="activity">' +
                    '<div class="activity_no">Activity {no}</div>' +
                    '<div class="activity_date">Date: {date}</div>' +
                    '<div class="activity_user">User: {username}</div>' +
                    '<div class="activity_button"><button class="btn-selector" type="button">Open</button></div>' +
                '</div>' +
            '</div>' +
        '<div>' +
        '</tpl>',

    // Listener on button click
    listeners: {
        itemclick: 'itemClick'
    }
});
