const contect_model = require('../models/contect.model')

exports.contact_insert = async(req,res) =>{
    try {
        const contact_insert = new contect_model({
            name:req.body.name,
            email:req.body.email,
            sub:req.body.sub,
            message:req.body.message

        })
         const saveData = await contact_insert.save();
         console.log(saveData)   

         res.status(201).json({
            message:"insert...",
            status:201,
            data:saveData
         })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            message:"something went wrong",
            status:500
        })
        
    }
}

exports.viewAll = async(req,res)=>{
    try {
        const viewAll =await contect_model.find();
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
// viewbtid

exports.viewById = async(req,res)=>{
    try {
    
        const result = await contect_model.findById({_id:req.params.id});
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
// delete

exports.deletedata = async (req, res) => {
    try {
        const savedata = await contect_model.findByIdAndDelete({ _id: req.params.id })
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

exports.countUserData = async(req,res)=>{
    try {
        const data = await contect_model.find().count();
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

