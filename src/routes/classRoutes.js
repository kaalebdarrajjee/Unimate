const express = require("express");
const router = express.Router();
const classController = require('../controllers/classController');
const isAuthenticated = require("../middleware/auth");
const upload = require('../middleware/multer'); // Import Multer middleware


router.post('/',isAuthenticated,  classController.createClass);
router.get('/', isAuthenticated, classController.getAllClasses);
router.get('/:id', isAuthenticated, classController.getClassById);
router.put('/:id',isAuthenticated ,classController.updateClass);
router.delete('/:id',isAuthenticated,  classController.deleteClass);

module.exports = router;