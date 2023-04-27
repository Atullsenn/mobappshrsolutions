const db = require('../../db/dbConnection');


const getTeam = (req,res)=>{
    db.query('SELECT COUNT(employee_id) AS totalMember, team_name FROM tbl_team WHERE team_name = "'+req.body.team_name+'"',(err,data)=>{
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
                data: data
            })
            return;
        }

    })
}


module.exports = getTeam;


