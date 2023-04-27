const db = require("../../db/dbConnection");

const updateEmpBankDetails = (req, res) => {
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

  if(!req.body.name_on_account || req.body.name_on_account == "" || req.body.name_on_account === null){
    res.status(400).send({
      success: false,
      message: "Please Provide Name On Account"
    })
    return;
  }

  if(!req.body.name_of_bank || req.body.name_of_bank == "" || req.body.name_of_bank === null){
    res.status(400).send({
      success: false,
      message: "Please Provide Bank Name"
    })
    return;
  }

  if(!req.body.bank_branch || req.body.bank_branch == "" || req.body.bank_branch === null){
    res.status(400).send({
      success: false,
      message: "Please Provide Branch Name"
    })
    return;
  }

  if(!req.body.account_number || req.body.account_number == "" || req.body.account_number === null){
    res.status(400).send({
      success: false,
      message: "Please Provide Account Number"
    })
    return;
  }

  if(!req.body.sort_code  || req.body.sort_code == "" || req.body.sort_code === null){
    res.status(400).send({
      success: false,
      message: "Please Provide Sort Code"
    })
    return;
  }

  db.query(
    'SELECT id FROM tbl_employee WHERE id = "' + req.body.employee_id + '"',
    (err, data) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: err,
        });
        return;
      }

      if (data.length === 0) {
        res.status(400).send({
          success: false,
          message: "Employee Id Does Not Exist",
        });
        return;
      } else {
        db.query(
          'SELECT employee_id FROM tbl_employee_bank_details WHERE employee_id = "' +
            req.body.employee_id +
            '"',
          (err, data) => {
            if (err) {
              res.status(500).send({
                success: false,
                message: err,
              });
              return;
            }
            if (data.length === 0) {
              db.query(
                `INSERT INTO tbl_employee_bank_details(employee_id,name_on_account,name_of_bank,bank_branch,account_number,sort_code) VALUES('${req.body.employee_id}','${req.body.name_on_account}','${req.body.name_of_bank}','${req.body.bank_branch}', '${req.body.account_number}', '${req.body.sort_code}')`,
                (error, data) => {
                  if (error) {
                    res.status(500).send({
                      success: false,
                      message: error,
                    });
                    return;
                  } else {

                    db.query('SELECT * FROM tbl_employee_bank_details WHERE employee_id = "'+req.body.employee_id+'"',(err,data)=>{
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
                          message: "Bank Details Inserted Successfully",
                          data:data[0]
                        });
                        return;


                      }
                    })

                    
                    // res.status(200).send({
                    //   success: true,
                    //   message: "Bank Details Inserted Successfully",
                    // });
                    // return;
                  }
                }
              );
            } else {
              db.query(
                'UPDATE tbl_employee_bank_details SET employee_id = "' +
                  req.body.employee_id +
                  '", name_on_account = "' +
                  req.body.name_on_account +
                  '", name_of_bank = "' +
                  req.body.name_of_bank +
                  '", bank_branch = "' +
                  req.body.bank_branch +
                  '", account_number = "' +
                  req.body.account_number +
                  '", sort_code = "' +
                  req.body.sort_code +
                  '" WHERE employee_id = "' +
                  req.body.employee_id +
                  '"',
                (error, data) => {
                  if (error) {
                    res.status(500).send({
                      success: false,
                      message: error,
                    });
                    return;
                  } else {
                    db.query('SELECT * FROM tbl_employee_bank_details WHERE employee_id = "'+req.body.employee_id+'"',(err,data)=>{
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
                          message: "Bank Details Updated Successfully",
                          data:data[0]
                        });
                        return;


                      }
                    })
                    // res.status(200).send({
                    //   success: true,
                    //   message: "Bank Details Updated Successfully",
                    // });
                    // return;
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

module.exports = updateEmpBankDetails;
