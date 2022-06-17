const datas = require("../models/db.js")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const api_key = process.env.API
const fetch = require('cross-fetch')

exports.weatherPost = async(req,res) => {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${req.params.city}&aqi=no`);
        let data = await response.json();
        const datass = new datas({
            city:req.params.city,
            city_weather:data
        });
        const xyz = await datas.insertMany(datass);
        console.log(`weather ${req.params.city} data posted`);
        res.send(`weather of ${req.params.city} data posted`);
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}

exports.weatherGetAllData = async(req,res)=>{
    try {
        const data = await datas.find()
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}

exports.weatherGetCityData = async(req,res)=>{
    try {
        const data = await datas.find({city:req.params.city})
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}

exports.DeleteCityData = async(req, res)=>{
    try {
        const data = await datas.findOneAndDelete({city: req.params.city});
        console.log(`data of ${req.params.city} is deleted`)
        res.send(`data of city ${req.params.city} is deleted`)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}

exports.DeleteAllCityData = async(req, res)=>{
    try {
        const data = await datas.deleteMany();
        console.log("all the data is deleted")
        res.send("all the data is deleted")
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}