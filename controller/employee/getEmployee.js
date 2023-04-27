const db  = require('../../db/dbConnection')

const getEmployee = (req,res)=>{

    db.query('SELECT id,profile,first_name,last_name,employee_type FROM tbl_employee',(error, data)=>{
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
                message: 'success',
                data: data
            })
        }
    })
}


module.exports = getEmployee;