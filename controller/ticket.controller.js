const userModel = require("../models/Ragistration.model");
const authModel = require("../models/ticket.model");
exports.insertData = async (req, res) => {
    try {

        const insertData = new authModel({
            userId: req.body.userId,
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            event: req.body.event,
            ticket: req.body.ticket

        });

        const saveData = await insertData.save();
        console.log("saevData....", saveData);

        res.status(201).json(
            {
                message: "booking successfull...",
                status: 201,
                data: saveData
            }
        )

    } catch (error) {
        console.log("Error:::", error);
        res.status(500).json(
            {
                message: "Something Went Wrong",
                status: 500
            }
        )
    }
};

exports.updateData = async (req, res) => {


    try {
        console.log(req.body);
        const id = req.params.id
        const updateData = await authModel.findByIdAndUpdate({ _id: id },
            {
                $set: {
                    name: req.body.name,
                    mobile: req.body.mobile,
                    email: req.body.email,
                    event: req.body.event,
                    ticket: req.body.ticket
                }
            }).then(() => {
                res.status(200).json({
                    message: "updated..",
                    status: 200
                })
            })

    } catch (error) {
        console.log("erroe:::", error);
        res.status(500).json(
            {
                message: "something went wrong",
                status: 500
            }
        )
    }
}
exports.viewById = async (req, res) => {
    try {

        email = req.params.email;
        const result = await authModel.find({ email:email});
    
        // const user_id = result.userId;
        // // console.log("number:", number);

        // const useraData = await userModel.findOne({ _id: user_id });
        // console.log("userData::",useraData);

        // const response = {
        //     useraData,
        //      result
        // }
       console.log(".....",result)
        res.status(201).json({
            message: "data viewed successfully.....",
            status: 200,
            data: result
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong",
            status: 500,

        })
    }
}
exports.deletedata = async (req, res) => {
    try {

        const savedata = await authModel.findByIdAndDelete({ _id: req.params.id })

        console.log(savedata)

        res.status(200).json(
            {
                message: "data deleted....",
                status: 200
            }
        )
    } catch (error) {
        console.log("erroe:::", error);
        res.status(500).json(
            {
                message: "something went wrong",
                status: 500
            }
        )
    }
}
// view all
exports.viewAll = async(req,res)=>{
    try {
        const viewAll =await authModel.find();
        res.status(200).json({
           massege:"successfully get all data",
           status:200,
           data:viewAll

        })   
     } catch (error) {
        console.log(error)
        res.status(500).json({
            massege:"something went wrong..",
            status:500
        })
    }
}

exports.countTicketData = async(req,res)=>{
    try {
        const data = await authModel.find().count();
        res.status(201).json({
            message:"successfully...!!",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong....!!!",
            error:error
        })
    }
}
