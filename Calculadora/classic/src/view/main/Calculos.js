var operaciones = Ext.create("Ext.data.Store", {
  fields: ["op", "nombre"],
  data: [
    { op: "-", nombre: "Resta" },
    { op: "+", nombre: "Suma" },
    { op: "*", nombre: "Multiplicación" },
    { op: "/", nombre: "División" },
  ],
});

Ext.define("Calculadora.view.main.Calculos", {
  extend: "Ext.form.Panel",
  title: "Calculos",
  xtype: "calculos",
  defaultType: "textfield",
  url: 'add_caclculos',
  items: [
    {
      xtype: "fieldset",
      title: "Seleccione valores a calcular",
      items: [
        {
          xtype: "numberfield",
          fieldLabel: "Número 1",
          name: "numero1",
          placeHolder: "Ingrese el primer número",
          required: true,
        },
        {
          xtype: "numberfield",
          fieldLabel: "Número 2",
          name: "numero2",
          placeHolder: "Ingrese el segundo número",
          required: true,
        },
        {
          xtype: "combobox",
          fieldLabel: "Operación",
          name: "operacion",
          store: operaciones,
          queryMode: "local",
          displayField: "nombre",
          valueField: "op",
        },
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

        switch (formData.operacion) {
          case "+":
            resultado = numero1 + numero2;
            break;
          case "-":
            resultado = numero1 - numero2;
            break;
          case "*":
            resultado = numero1 * numero2;
            break;
          case "/":
            resultado = numero1 / numero2;
            break;
        }
        Ext.Msg.alert("El resultado es: " + resultado);
      },
    },
  ],

  listeners: {},
});
