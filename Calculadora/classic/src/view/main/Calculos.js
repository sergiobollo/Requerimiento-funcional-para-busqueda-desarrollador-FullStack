var operaciones = Ext.create("Ext.data.Store", {
  fields: ["op", "nombre"],
  data: [
    { op: "-", nombre: "Resta" },
    { op: "+", nombre: "Suma" },
    { op: "*", nombre: "Multiplicación" },
    { op: "/", nombre: "División" },
  ],
});

var store = Ext.create('Ext.data.Store', {
  model: "Calculadora.model.Historial"
});

Ext.define("Calculadora.view.main.Calculos", {
  extend: "Ext.form.Panel",
  title: "Calculos",
  xtype: "calculos",
  defaultType: "textfield",
  store: "historial",
  requires: [
    'Calculadora.store.Historial'
],
  items: [
    {
      xtype: "fieldset",
      title: "Seleccione valores a calcular",
      items: [
        {
          xtype: "numberfield",
          fieldLabel: "Primer valor",
          name: "numero1",
          required: true
        },
        {
          xtype: "numberfield",
          fieldLabel: "Segundo valor",
          name: "numero2",
          required: true
        },
        {
          xtype: "combobox",
          fieldLabel: "Operación",
          name: "operacion",
          store: operaciones,
          queryMode: "local",
          displayField: "nombre",
          valueField: "op",
          required: true
        },
        {
          xtype: 'displayfield',
          name: 'resultado',
          value: '',
          id: 'resultados',
          bold: true
      }
      ],
    },
  ],

  buttons: [
    {
      text: "Calcular",
      handler: function (btn) {
        var formObj = btn.up("calculos");
        var formData = formObj.getValues();
        var numero1 = parseInt(formData.numero1);
        var numero2 = parseInt(formData.numero2);
        var resultado;
        var operacion;
        
        switch (formData.operacion) {
          case "+":
            resultado = numero1 + numero2;
            operacion = 'Suma';
            break;
          case "-":
            resultado = numero1 - numero2;
            operacion = 'Resta';
            break;
          case "*":
            resultado = numero1 * numero2;
            operacion = 'Multiplicación';
            break;
          case "/":
            resultado = numero1 / numero2;
            operacion = 'División';
            break;
        }
        store.add({ 'numero1': numero1, 'numero2': numero2, 'operacion': operacion, 'resultado': resultado});
        store.sync();
        //Ext.Msg.alert("El resultado es: " + resultado);
        document.getElementById("resultados").innerHTML = '<b>Resultado = ' + resultado + '</b>';
        setTimeout(function(){location.reload()}, 3000);
      },
    },

  ],
  
  listeners: {
  }
});

