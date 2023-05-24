const multer = require("multer");
// const data = require("../../shivShena/public/")
// const upload = multer({dest:"../../shivShena/public/"})
const express = require("express")




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../shivShena/shivShena/public/") 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

const upload = multer({ storage: storage });


module.exports =  upload;