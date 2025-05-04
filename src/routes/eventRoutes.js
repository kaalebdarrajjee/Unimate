const express = require("express");
const router = express.Router();
const eventController = require('../controllers/eventController');
const {isAuthenticated} = require("../middleware/auth");
const {isPremium} = require("../middleware/auth")
const { uploadEventPhoto } = require('../controllers/eventController');
const upload = require('../middleware/multer'); // Import Multer middleware


router.post('/', isAuthenticated ,isPremium, upload.single('image'), eventController.createEvent);
router.get('/', isAuthenticated, eventController.getAllEvents);
router.get('/:id', isAuthenticated, eventController.getEventById);
router.put('/:id',isPremium ,eventController.updateEvent);
router.delete('/:id',isPremium,  eventController.deleteEvent);

module.exports = router;