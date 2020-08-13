var app = new Vue({ 
  el: '#app',
  data: {
    message: 'Utilizando el código universal debes traducir la secuencia dada a una de aminoácidos. Cuando tengas la secuencia de aminoácidos, podrás descubrir a qué animal o planta corresponde.',
    animal: "Bucando animal...",
    images: {
      view: 'adn.jpg',
      proteinas: 'proteinas.png',
      oso: 'oso-de-anteojos.jpeg',
      frailejon: 'frailejon.jpg',
      condor: 'condor.jpeg',
      chiguiro: 'chiguiro.jpg',
      rana: 'rana-de-cristal.jpg',
      orquidea: 'orquidea.jpg',
      what: 'travolta1.gif'
    },
    inputs:{
      A:'',
      B:'',
      C:'',
      D:'',
      E:'',
    }
  },
  methods: {
    select: function (event){
      secuencia = this.inputs.A + this.inputs.B + this.inputs.C +
        this .inputs.D + this.inputs.E
      secuencia = secuencia.toLowerCase()
      console.log(secuencia)
      if (secuencia == "phevalgluglycys") {
        this.images.view = this.images.chiguiro
        this.animal = "CHIGUIRO"
      } else if (secuencia == "phevalglulysser") {
        this.images.view = this.images.condor
        this.animal = "CONDOR"
      } else if (secuencia == "phevalgluglyile" || secuencia == "phevalgluglylle") {
        this.images.view = this.images.oso
        this.animal = "OSO DE ANTEOJOS"
      } else if (secuencia == "phevalglulyscys") {
        this.images.view = this.images.rana
        this.animal = "RANA DE CRISTAL"
      } else if (secuencia == "phevalgluasnile" || secuencia == "phevalgluasnlle") {
        this.images.view = this.images.frailejon
        this.animal = "FRAILEJON"
      } else if (secuencia == "phevalgluasnlys") {
        this.images.view = this.images.orquidea
        this.animal = "ORQUIDEA"
      } else{
        this.images.view = this.images.what
        this.animal = "Revisa tu secuencia, no hemos encontrado un animal o planta"
      }
      // this.inputs.A = 'hello'
      // this.images.view = this.images.oso
    }
  }
});
