const multer = require("multer");
// const data = require("../../shivShena/public/")
// const upload = multer({dest:"../../shivShena/public/"})
const express = require("express")




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../shivsenaWork/shivsenaWithBackend/public/") 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.mp4',"mkv",) //Appending .jpg
  }
})

const videoUpload = multer({ storage: storage });


module.exports =  videoUpload;