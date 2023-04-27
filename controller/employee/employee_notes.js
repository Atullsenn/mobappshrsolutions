const e = require("express");
const db = require("../../db/dbConnection");

const employeeNotes = (req, res) => {
  if (
    !req.body.employee_id ||
    req.body.employee_id == "" ||
    req.body.employee_id === null
  ) {
    res.status(400).send({
      success: false,
      message: "Please Provide Employee Id",
    });
    return;
  }

  if (!req.body.notes || req.body.notes == "" || req.body.notes === null) {
    res.status(400).send({
      success: false,
      message: "Please Enter Notes",
    });
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
      db.query('SELECT employee_id FROM tbl_employee_notes WHERE employee_id = "'+req.body.employee_id+'"',(err,dataa)=>{
        if(err){
          res.status(500).send({
            success: false,
            message: err
          })
          return;
        }
        if(dataa.length !== 0){
          db.query(
            'UPDATE tbl_employee_notes SET employee_id = "' +
              req.body.employee_id +
              '", notes = "' +
              req.body.notes +
              '" WHERE employee_id = "'+req.body.employee_id+'"',
            (err, data) => {
              if (err) {
                res.status(500).send({
                  success: false,
                  message: err,
                });
                return;
              } else {
               
                res.status(200).send({
                  success: true,
                  message: "Notes Updated Successfully",
                });
                return;
              }
            }
          );

        }
        else{
          db.query(`INSERT INTO tbl_employee_notes(employee_id,notes) VALUES('${req.body.employee_id}', '${req.body.notes}')`,(error,data)=>{
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
                message: "Notes Inserted Successfully"
              })
              return;
            }
          })
        }
      })
    }
  })

  
};

module.exports = employeeNotes;



