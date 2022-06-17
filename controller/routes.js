const express = require('express');
const router = express.Router();
const {weatherPost,weatherGetAllData,weatherGetCityData,DeleteCityData,DeleteAllCityData} = require('./controller.js')

// POST CITY WEATHER DATA TO DATABASE
router.post("/post/:city",weatherPost)
// GET ALL THE CITY`S WEATHER DATA IN DATABASE
router.get("/post",weatherGetAllData)
// GET INDIVIDUAL CITY WEATHER DATA FROM DATABASE
router.get("/post/:city",weatherGetCityData)
// DELETE INDIVIDUAL CITY WEATHER DATA IN DATABASE
router.delete("/post/:city",DeleteCityData)
// DELETE ALL CITY WEATHER DATA IN DATABASE
router.delete("/post",DeleteAllCityData)
module.exports = router