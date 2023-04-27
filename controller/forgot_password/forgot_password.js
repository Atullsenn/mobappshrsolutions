const db = require('../../db/dbConnection');


const forgotPassword = (req,res)=>{

    if(!req.body.email || req.body.email == " " || req.body.email === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Email'
        })
        return;
    }


    db.query('SELECT email FROM tbl_admin WHERE email = "'+req.body.email+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }

        if(data.length === 0){
            res.status(201).send({
                success: false,
                message: 'Please Enter Valid Email'
            })
            return;
        }

        else{

            res.status(200).send({
                success: true,
                message: 'sucess'
            })
            return;
            
        }
    })
}


module.exports = forgotPassword;
