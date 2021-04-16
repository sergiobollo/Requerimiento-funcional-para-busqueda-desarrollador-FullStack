/**
 * This view is an example list of people.
 */
Ext.define('Calculadora.view.main.Historial', {
    extend: 'Ext.grid.Panel',
    xtype: 'historial',

    requires: [
        'Calculadora.store.Historial'
    ],

    title: 'Historial',

    store: {
        type: 'historial'
    },

    columns: [
        { text: 'Numero1',  dataIndex: 'numero1' },
        { text: 'Numero2', dataIndex: 'numero2', flex: 1 },
        { text: 'Operacion', dataIndex: 'operacion', flex: 1 },
        { text: 'Resultado', dataIndex: 'resultado', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
