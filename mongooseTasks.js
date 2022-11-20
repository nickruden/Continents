var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.boom = function(){
    console.log(this.get("name") + " проплыло над землёй")
}

var Continent = mongoose.model('Continent', schema)

var conti = new Continent({ name: 'Облачко' })
conti.save(function (err) {
    conti.boom()
})

