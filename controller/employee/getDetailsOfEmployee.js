const db = require('../../db/dbConnection');


const getEmployeeDetails = (req,res)=>{
    if(!req.body.id || req.body.id == " " || req.body.id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide Employee Id"
        })
        return;
    }

    db.query('SELECT id FROM tbl_employee WHERE id = "'+req.body.id+'"',(error,data)=>{
        if(error){
            res.status(500).send({
                success: false,
                message: error
            })
            return;
        }
        
        if(data.length === 0){
            res.status(400).send({
                success: false,
                message: "Employee Id Does Not Exist"
            })
            return;
        }

        else{

            db.query('SELECT * FROM tbl_employee WHERE id = "'+req.body.id+'"',(err,data)=>{
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
                        message: "Success",
                        data: data[0]
                    })
                }
            })

        }
    })


}


module.exports = getEmployeeDetails;