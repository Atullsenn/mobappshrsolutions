const db = require('../../db/dbConnection');

const deleteAdminProfile = (req,res)=>{
    if(!req.body.id || req.body.id == "" || req.body.id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide Admin id"
        })
        return;
    }

    db.query('UPDATE tbl_admin SET profile = null WHERE id = "'+req.body.id+'"',(error,data)=>{
        if(error){
            res.status(500).send({
                success: false,
                message: error
            })
            return;
        }

        else{
             res.status(200).send({
                success : true,
                message: "Profile Deleted Successfully"
             })
             return;
        }
    })
}

module.exports = deleteAdminProfile;