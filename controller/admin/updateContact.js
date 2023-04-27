const db = require('../../db/dbConnection');



const updateContactInformation = (req,res)=>{

    if(!req.body.id || req.body.id == " " || req.body.id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide User Id"
        })
        return;
    }

    db.query('SELECT id FROM tbl_admin WHERE id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }
        if(data.length === 0){
            res.status(400).send({
                success: false,
                message: "Id Does Not Exist"
            })
            return;
        }

        else{
            db.query('UPDATE tbl_admin SET email="'+req.body.email+'",personal_email = "'+req.body.personal_email+'", home_phone = "'+req.body.home_phone+'", work_phone = "'+req.body.work_phone+'", mobile_phone = "'+req.body.mobile_phone+'", work_extension = "'+req.body.work_extension+'" WHERE id = "'+req.body.id+'"',(err,data)=>{
                if(err){
                    res.status(500).send({
                        success: false,
                        message: err
                    })
                    return;
                }
        
                else{
                    res.status(200).send({
                        success: true,
                        message: 'Contact Udpated Successfully'
                    })
                    return;
                }
            })

        }
    })

    

}

module.exports = updateContactInformation;