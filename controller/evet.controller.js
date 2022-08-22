const { request } = require("express");
const authModel = require("../models/auth.model");

// evets insert
exports.insertData = async (req,res) => {
    try {
        
        const insertData = new authModel({
            e_name: req.body.e_name,
            e_venue: req.body.e_venue,
            e_organizer: req.body.e_organizer,
            price:req.body.price,
            date : req.body.date,
            time:req.body.time,


        });

        const saveData = await insertData.save();
        console.log("saevData....",saveData);

        res.status(201).json(
            {
                message: "Data Inserted",
                status: 201,
                data: saveData
            }
        )

    } catch (error) {
        console.log("Error:::",error);
        res.status(500).json(
            {
                message: "Something Went Wrong",
                status: 500
            }
        )
    }
};

// viewall evets
exports.viewAll = async(req,res)=>{
    try {
        const result = await authModel.find();
        res.status(201).json({
            message:"data viewed successfully.....",
            status:200,
            data:result
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"something went wrong",
            status:500,

        })
    }
}

// view bt id

exports.viewById = async(req,res)=>{
    try {
    
        const result = await authModel.findById({_id:req.params.id});
        res.status(201).json({
            message:"data viewed successfully.....",
            status:200,
            data:result
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"something went wrong",
            status:500,

        })
    }
}
// update.....

exports.updateData = async (req, res) => {
    try {
        console.log(req.body);
        const id = req.params.id
        const updateData = await authModel.findByIdAndUpdate({ _id: id },
            {
                $set: {
                    e_name: req.body.e_name,
                    e_venue: req.body.e_venue,
                    e_organizer: req.body.e_organizer,
                    price:req.body.price,
                    date :req.body.date,
                    time:req.body.time
                }
            }).then(() => {
                res.status(200).json({
                    message: "updated..",
                    status: 200,
                    
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
// delete
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

// count

exports.countEventData = async(req,res)=>{
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




