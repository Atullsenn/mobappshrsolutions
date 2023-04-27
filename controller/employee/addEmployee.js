const db = require('../../db/dbConnection');

const addEmployee = (req,res)=>{

    if(!req.body.first_name || req.body.first_name == " " || req.body.first_name === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter First Name'
        })
        return;
    }

    if(!req.body.last_name || req.body.last_name == " " || req.body.last_name === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Last Name'
        })
        return;
    }

    if(!req.body.email || req.body.email == " " || req.body.email === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Email'
        })
        return;
    }

    if(!req.body.start_date || req.body.start_date == " " || req.body.start_date === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Start Date'
        })
        return;
    }

    if(!req.body.employee_type || req.body.employee_type == " " || req.body.employee_type === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Employee Type'
        })
        return;
    }

    if(!req.body.working_time_pattern || req.body.working_time_pattern == " " || req.body.working_time_pattern === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Working Time Pattern'
        })
        return;
    }

    if(!req.body.working_week || req.body.working_week == " " || req.body.working_week === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Working Week'
        })
        return;
    }

    if(!req.body.public_holidays || req.body.public_holidays  === null){
        res.status(400).send({
            success: false,
            message: "Please Enter Public Holidays"
        })
        return;
    }

   

    db.query(`INSERT INTO tbl_employee(first_name,last_name,email,start_date,employee_type,working_time_pattern,working_week,public_holidays,annual_leave_start_date) VALUES('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.start_date}', '${req.body.employee_type}', '${req.body.working_time_pattern}', '${req.body.working_week}', '${req.body.public_holidays}', '${req.body.annual_leave_start_date}')`,(err,data)=>{
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
                message: "Added Employee Successfully"
            })
            return;
        }
    })
}


module.exports = addEmployee;