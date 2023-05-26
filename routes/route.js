const express = require("express")
const router = express.Router()
const cors = require("cors");
const bodyParser = require("body-parser");
const mailer = require("../controller/mailer")
const loginMiddleware = require ("../middleware/loginMiddleware")
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
router.route("/login").post(loginMiddleware,login)
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
router.route("/createmedia").post(uploader.single("media"),createMedia)
// CREATE MEDIA

// UPDATE MEDIA
router.route("/updatemedia").post(uploader.single("media"),updateMedia)
// UPDATE MEDIA

// GET LEADS
router.route("/getleads").get(getLeads)
// GET LEADS

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