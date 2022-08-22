const router = require("express").Router();
const {ragistration_insert,login,viewByemail} = require("../controller/ragistration.controller");


router.post('/insertragistration',ragistration_insert);
router.post('/login',login);
router.get('/viewbyemail/:email',viewByemail);


module.exports = router;