/**
 * como bonus track vemos  que los objetos pueden ser configurados para que las propiedades no se puedan escribir
 * 
 */

o = Object.create(Object.prototype, 
    {
    // foo es un habitual "propiedad de valor"
    foo: { writable:true, configurable:true, value: "hello" },
    // bar es una propiedad getter-and-setter (de acceso)
    bar: {
      configurable: false,
      get: function() { return 10 },
      set: function(value) { console.log("Setting `o.bar` to", value) }
  }});

  obj = {}

delete  o.bar