const db = require('../../db/dbConnection');


const updateEmployeePersonalInfo = (req,res)=>{
    if(!req.body.id || req.body.id == "" || req.body.id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide Employee Id"
        })
        return;
    }

    db.query('SELECT id FROM tbl_employee WHERE id = "'+req.body.id+'"',(err,data)=>{
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
                message: "Employee Id Does Not Exist"
            })
            return;
        }

        else{

            db.query('UPDATE tbl_employee SET title = "'+req.body.title+'", first_name = "'+req.body.first_name+'", middle_name = "'+req.body.middle_name+'", last_name = "'+req.body.last_name+'", date_of_birth = "'+req.body.date_of_birth+'", gender = "'+req.body.gender+'", country = "'+req.body.country+'", city = "'+req.body.city+'", state = "'+req.body.state+'", address1 = "'+req.body.address1+'", address2 = "'+req.body.address2+'", address3 = "'+req.body.address3+'", zipcode = "'+req.body.zipcode+'" WHERE id = "'+req.body.id+'"',(err,data)=>{
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
                        message: "Personal Info Updated Successfully"
                    })
                    return;
                }
            })

        }
    })

}

module.exports = updateEmployeePersonalInfo;