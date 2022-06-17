const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    city:{type:String},
    city_weather: {type:Object}
})

const data = mongoose.model("datas",dataSchema)
module.exports = data