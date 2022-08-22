const ragistration_model = require('../models/Ragistration.model')
const bcrypt = require('bcryptjs')

exports.ragistration_insert = async(req,res) =>{
    try {
       const password = req.body.password;
       const confirm_password = req.body.confirm_password;
       const email = req.body.email;
       const data = await ragistration_model.find({email})
        if(!data[0]){
            if(password === confirm_password)
            {
             
             const ragistration_insert = new ragistration_model({
                 f_name:req.body.f_name,
                 l_name:req.body.l_name,
                 mobile_number:req.body.mobile_number,
                 email:req.body.email,
                 password:bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
             })
               
              const saveData = await ragistration_insert.save();
              console.log(saveData)   
             
              res.status(201).json({
                 message:"ragistration successfully",
                 status:201,
                 data:saveData
              })
            }
            else
            {
             res.status(401).json({
                 message:"please,enter valid password...!",
                 status:401
             })
            }
        }
        else
        {
            res.status(422).json({
                message:"already exist...!",
                status:422
            })
        }
      

    } catch (error) {

        console.log(error);
        res.status(500).json({
            message:"something went wrong",
            status:500
        })
        
    }
}


exports.login = async(req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
    const useremail= await ragistration_model.findOne({email:email})


    console.log(useremail)
    if(useremail){
        const token = await useremail.generateauthtoken()
        res.cookie("jwt",token,{
            expires:new Date(Date.now() + 3000000*3),
            httpOnly:true
        })
        bcrypt.compare(password,useremail.password,(err,useremail)=>{
            if (err) throw err
            if(useremail){
                return res.status(200).json({message:"login successfully",token:token,email:email});
                
            }
            else{
                return res.status(401).json({message:"invalid password and user name"});
            }
        })
    }
    else{
        res.status(404).json({
            message:"invalid password and user name",
            status:404
        })
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong",
            status:500
        })
    }
}
exports.viewByemail = async (req, res) => {
    try {

        email = req.params.email;
        const result = await ragistration_model.find({ email:email});
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





