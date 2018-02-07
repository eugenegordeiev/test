/**
 * This ViewController is designed to handle all the action logic for MyApp.view.main.Index view.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // Handles button click and displays the item in the message box
    itemClick: function(me, record, item, index, e, eOpts) {
        Ext.Msg.alert('Activity ' + record.data.no, 'Date: ' + record.data.date + '<br/>User: ' + record.data.username);
    },

    // Applies each record to the template and provides additional flexiblity if needed
    renderRow: function (value, metaData, record) {
        var view = this.getView(),
            tpl = view.rowTpl;

        if (!tpl.isTemplate) {
            tpl = new Ext.XTemplate(tpl);
        }

        var data = Ext.Object.chain(record.data);
        return tpl.apply(data);
    }
});
