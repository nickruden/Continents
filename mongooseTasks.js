var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Continent = mongoose.model('Continent', { name: String })

var conti = new Continent({ name: 'Африка' })
conti.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Пыщь')
    }
})
