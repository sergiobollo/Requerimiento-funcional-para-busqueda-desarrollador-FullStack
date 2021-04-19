
Ext.define('Calculadora.view.main.Mainhistorial', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainhistorial',
    requires: [
        'Calculadora.store.Personnel'
    ],

    title: 'Historial',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Número de cálculo',  dataIndex: 'id', flex: 1},
        { text: 'Primer número',  dataIndex: 'numero1', flex: 1},
        { text: 'Segundo número', dataIndex: 'numero2', flex: 1},
        { text: 'Tipo de operación', dataIndex: 'operacion', flex: 1},
        { text: 'Resultado', dataIndex: 'resultado', flex: 1}
    ],

    columnLines: true,

    autoScroll: true,
 
    buttons: [
        {
          text: "Reset",
          handler: function (btn) {
            window.localStorage.clear();
            location.reload();
          }
        }],

    listeners: {

    }
});
