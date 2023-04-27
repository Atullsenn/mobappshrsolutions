const db = require('../../db/dbConnection');


const getEmployeeSalaryInfo = (req,res)=>{
    if(!req.body.employee_id || req.body.employee_id == "" || req.body.employee_id === null){
        res.status(400).send({
            success: false,
            message: "Please Provide Employee Id"
        })
        return;
    }

    db.query('SELECT employee_id FROM tbl_employee_salary_info WHERE employee_id = "'+req.body.employee_id+'"',(err,data)=>{
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

            db.query('SELECT * FROM tbl_employee_salary_info WHERE employee_id = "'+req.body.employee_id+'"',(error,data)=>{
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
                        message: "Getting Data Successfully",
                        data:data[0]
                    })
                    return;
                }
            })


        }
    })


}

module.exports = getEmployeeSalaryInfo;