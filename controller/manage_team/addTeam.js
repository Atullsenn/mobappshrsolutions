const db = require("../../db/dbConnection");


const addTeam = (req,res)=>{
    if(!req.body.team_name || req.body.team_name == " " || req.body.team_name === null){
        res.status(400).send({
            success: false,
            message: "Please Enter Team Name"
        })
        return;
    }


    if(!req.body.employee_id || req.body.employee_id == " " || req.body.employee_id === null){
        res.status(400).send({
            success: false,
            message: "Please Enter Employee Id"
        })
        return;
    }


    db.query('SELECT team_name FROM tbl_team WHERE team_name = "'+req.body.team_name+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }

        if(data.length !== 0){
            res.status(201).send({
                success: false,
                message: 'Please Choose Other Name'
            })
            return;
        }

        else{
           

            db.query(`INSERT INTO tbl_team(team_name) VALUES('${req.body.team_name}')`,(error,dataa)=>{
                if(error){
                    res.status(500).send({
                        success: false,
                        message: error
                    })
                    return;
                }
                else{
                    db.query('SELECT id FROM tbl_team WHERE team_name = "'+req.body.team_name+'"',(err,data)=>{
                        if(err){
                            res.status(500).send({
                                success: false,
                                message: err
                            })
                            return;
                        }
                        else{
                            data.forEach((item)=>{
                                db.query(`INSERT INTO tbl_team_employee(team_id,employee_id) VALUES('${data[0].id}', '${req.body.employee_id}')`,(err,data)=>{
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
                                            message: 'Team Added Successfully'
                                        })
                                        return;
                                    }
                                })
                            })
                        }
                    })
                }
            })
                
        }
    })

   
    
}


module.exports = addTeam;