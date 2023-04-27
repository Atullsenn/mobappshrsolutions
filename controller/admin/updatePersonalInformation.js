const db = require('../../db/dbConnection');


const updatePersonalInformation = (req,res)=>{

    if(!req.body.id || req.body.id == " " || req.body.id === null){
        res.status(400).send({
            success: false,
            message: 'Please Provide User Id'
        })
        return;
    }

    db.query('SELECT id FROM tbl_admin WHERE id = "'+req.body.id+'"',(error,data)=>{
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
                message: "Id Does Not Exist"
            })
            return;
        }

        else{
            db.query('UPDATE tbl_admin SET title = "'+req.body.title+'", first_name = "'+req.body.first_name+'", middle_name = "'+req.body.middle_name+'", last_name = "'+req.body.last_name+'", address1 = "'+req.body.address1+'", address2= "'+req.body.address2+'", address3 = "'+req.body.address3+'", country="'+req.body.country+'", city="'+req.body.city+'", postcode="'+req.body.postcode+'", gender = "'+req.body.gender+'", date_of_birth = "'+req.body.date_of_birth+'"',(error, data)=>{
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
                        message: 'Success'
                    })
                    return;
                }
            })

        }
    })


}

module.exports = updatePersonalInformation;