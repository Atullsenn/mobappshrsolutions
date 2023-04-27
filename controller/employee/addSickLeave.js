const db = require('../../db/dbConnection');


const addSickLeave = (req,res)=>{

    if(!req.body.employee_id || req.body.employee_id == "" || req.body.employee_id === null){
        res.status(400).send({
            success: false,
            message: 'Please Provide Employee id'
        })
        return;
    }

    if(!req.body.absence_type || req.body.absence_type == " " || req.body.absence_type === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Absence Type'
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

    if(!req.body.end_date || req.body.end_date == " " || req.body.end_date === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter End Date'
        })
        return;
    }

    if(!req.body.ongoing_absence || req.body.ongoing_absence == " " || req.body.ongoing_absence === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Ongoing Absence'
        })
        return;
    }

    if(!req.body.notes || req.body.notes == " " ||  req.body.notes === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Notes'
        })
        return;
    }

    db.query('SELECT id FROM tbl_employee WHERE id = "'+req.body.employee_id+'"',(error,data)=>{
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

            db.query(`INSERT INTO tbl_sick_leave(employee_id,absence_type,start_date,end_date,ongoing_absence,notes) VALUES('${req.body.employee_id}','${req.body.absence_type}','${req.body.start_date}', '${req.body.end_date}','${req.body.Ongoing_absence}', '${req.body.notes}')`,(err,data)=>{
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
                        message: 'Leave Added Successfully'
                    })
                    return;
                }
            })

        }
    })
    
   
}


module.exports = addSickLeave;