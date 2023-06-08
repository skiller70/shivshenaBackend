const express = require("express")
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const mailer = require("../controller/mailer")
const loginMiddleware = require("../middleware/loginMiddleware")
const createAccount = require("../controller/createAccount")
const login = require("../controller/login")
const createMedia = require("../controller/createMedia")
const getMedia = require("../controller/getMedia")
const uploader = require("../middleware/createmediaMiddleware")
const deleteMedia = require("../controller/deleteMedia")
const updateMedia = require("../controller/updateMedia")
const getSingleMedia = require("../controller/getSingleMedia")
const getLeads = require("../controller/getLeads")
const donation = require("../controller/donation")
const getSuccessDonation = require("../controller/getSuccessDonation")
const getFailedDonation = require("../controller/getFailedDonation")
const contact = require("../controller/contact")
const uploadVideo = require("../controller/uploadVideo")
const videoUploader = require("../middleware/createvideoMiddleware")
const getVideos = require("../controller/getVideo")
const deleteVideo = require("../controller/deleteVideo")
const createPress = require("../controller/createPress")
const getPress = require("../controller/getPress")
const deletePress = require("../controller/deletePress")

//EXPRESS MIDDLEWARE
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
    cors({
        origin: [
            "https://main--remarkable-macaron-2714af.netlify.app",
            "http://localhost:3000",
        ],
        credentials: true,
        methods: ["GET", "POST", "DELETE", "PUT"],
        origin: true,
    })
);
//EXPRESS MIDDLEWARE


// MAIL ROUTE
router.route("/mail").post(mailer)
// MAIL ROUTE


// LOGIN ROUTE
router.route("/login").post(loginMiddleware, login)
// LOGIN ROUTE

// LOGIN ROUTE
router.route("/register").post(createAccount)
// LOGIN ROUTE


// GET MEDIA
router.route("/getmedia").get(getMedia)
// GET MEDIA


// GET SINGLE MEDIA
router.route("/getsinglemedia/:id").get(getSingleMedia)
// GET SINGLE MEDIA


// DELETE MEDIA
router.route("/deletemedia").post(deleteMedia)
// DELETE MEDIA


// CREATE MEDIA
router.route("/createmedia").post(uploader.single("media"), createMedia)
// CREATE MEDIA


// UPDATE MEDIA
router.route("/updatemedia").post(uploader.single("media"), updateMedia)
// UPDATE MEDIA


// GET LEADS
router.route("/getleads").get(getLeads)
// GET LEADS



// CONTACT US

router.route("/contactus").post(contact)
// CONTACT US

// CREATE PRESS
router.route("/createpresss").post(uploader.single("media"), createPress)
// CREATE PRESS

// GET PRESS
router.route("/getpress").get(getPress)
// GET PRESS


// DELETE PRESS
router.route("/deletepress").post(deletePress)
// DELETE PRESS


// CREATE VIDEO
router.route("/uploadvideo").post(videoUploader.single("video"), uploadVideo)
// CREATE VIDEO

// GET VIDEO
router.route("/getvideos").get(getVideos)
// GET VIDEO

// DELETE VIDEO
router.route("/deletevideo").post(deleteVideo)
// DELETE VIDEO

// DONATION 
router.route("/donation").post(donation)
// DONATION


// GET FAILED DONATION
router.route("/getfaileddonation").get(getFailedDonation)
// GET FAILED DONATION



// GET Success DONATION
router.route("/getsuccessdonation").get(getSuccessDonation)
// GET Success DONATION

module.exports = router;