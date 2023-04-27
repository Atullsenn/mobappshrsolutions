const db = require('../../db/dbConnection');
const md5Hash = require('crypto-js')


const resetPassword = (req,res)=>{
    const encryptPassword = md5Hash.MD5(req.body.password)

    if(!req.body.id || req.body.id == " " || req.body.id === null){
        res.status(400).send({
            success: false,
            message: 'Please Provide User Id'
        })
        return;
    }
    if(!req.body.password || req.body.password == " " || req.body.password === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Password'
        })
        return;
    }

    db.query('UPDATE tbl_admin SET password =  "'+encryptPassword+'" WHERE id = "'+req.body.id+'"',(err,data)=>{
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
                message: 'Password Updated Successfully',
                data: data
            })
            return;
        }
    })




}


module.exports = resetPassword;