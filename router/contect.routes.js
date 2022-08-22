const router = require("express").Router();
const {
    contact_insert,
    viewAll,
    viewById,
    deletedata,
    countUserData
} = require("../controller/contect.controller");


router.post('/insertcontect',contact_insert);
router.get("/viewall",viewAll);
router.get("/viewbyid/:id",viewById)
router.delete('/delete/:id',deletedata)
router.get('/count',countUserData)

module.exports = router;



