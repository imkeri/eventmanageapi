const router = require("express").Router();
const {insertData,
    updateData,
    deletedata,
    viewById,
    viewAll,
    countTicketData
} = require("../controller/ticket.controller");


router.post('/insert',insertData);
router.put('/update/:id',updateData);
router.delete('/delete/:id',deletedata);
router.get('/viewbyid/:email',viewById);
router.get('/viewall',viewAll);
router.get('/count',countTicketData)
module.exports = router;
