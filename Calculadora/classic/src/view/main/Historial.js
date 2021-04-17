
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
        { text: 'Número de cálculo',  dataIndex: 'id', flex: 1},
        { text: 'Primer número',  dataIndex: 'numero1', flex: 1},
        { text: 'Segundo número', dataIndex: 'numero2', flex: 1},
        { text: 'Tipo de operación', dataIndex: 'operacion', flex: 1},
        { text: 'Resultado', dataIndex: 'resultado', flex: 1}
    ],

    columnLines: true,

    listeners: {
        select: 'onItemSelected'
    }
});
