const db = require('../../db/dbConnection');

const getEmployeeNotes = (req,res)=>{
    db.query('SELECT * FROM tbl_employee_notes WHERE employee_id = "'+req.body.employee_id+'"',(err,data)=>{
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
          message: "Getting Data Successfully",
          data:data[0]
        });
        return;
  
      }
    })
    
  }
  
  module.exports = getEmployeeNotes;