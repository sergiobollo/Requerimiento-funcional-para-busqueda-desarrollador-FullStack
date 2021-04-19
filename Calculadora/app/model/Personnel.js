Ext.define('Calculadora.model.Personnel', {
    extend: 'Calculadora.model.Base',

    fields: ['numero1', 'numero2', 'operacion', 'resultado'],
    proxy: {
        type: 'localstorage',
        id: 'personnel'
    }
});
