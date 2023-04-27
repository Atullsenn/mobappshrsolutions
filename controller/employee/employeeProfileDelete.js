const db = require('../../db/dbConnection');


const DeleteEmployeeProfile = (req,res)=>{

    if(!req.body.id || req.body.id == "" || req.body.id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide Employee Id"
        })
        return;
    }

    db.query('UPDATE tbl_employee SET profile = null WHERE id = "'+req.body.id+'"',(error,data)=>{
        if(error){
            res.status(500).send({
                success: false,
                message: error
            })
            return;
        }

        else{
            res.status(200).send({
                success: true,
                message: "Profile Deleted Successfully"
            })
            return;
        }
    })
}


module.exports = DeleteEmployeeProfile;