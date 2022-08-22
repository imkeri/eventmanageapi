const router = require("express").Router();
const  { insertData , viewAll ,viewById ,deletedata,updateData,countEventData} = require("../controller/evet.controller");


router.post("/insert",insertData);
router.get("/viewall",viewAll);
router.get('/viewbyid/:id',viewById);
router.delete('/delete/:id',deletedata);
router.put("/update/:id",updateData)
router.get('/count',countEventData)

module.exports = router;

