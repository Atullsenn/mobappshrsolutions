const db = require("../../db/dbConnection");

const updateEmpSensitiveInfo = (req, res) => {
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

  db.query(
    'SELECT id FROM tbl_employee WHERE id = "' + req.body.employee_id + '"',
    (error, data) => {
      if (error) {
        res.status(500).send({
          success: false,
          message: error,
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
          'SELECT employee_id FROM tbl_employee_sensitive_info WHERE employee_id = "' +
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
                `INSERT INTO tbl_employee_sensitive_info(employee_id,tax_code,ni_number,passport_number,passport_country_of_issue,passport_date_of_expiry,licence_number,licence_country_of_issue,licence_class,licence_date_of_expiry,visa_number,visa_expiry_date,
              dbs_check,follow_up_to_date,right_to_work_status,share_code,date_issued,date_cheked,expiry_date)
              VALUES('${req.body.employee_id}','${req.body.tax_code}', '${req.body.ni_number}', '${req.body.passport_number}',
              '${req.body.passport_country_of_issue}', '${req.body.passport_date_of_expiry}', '${req.body.licence_number}',
              '${req.body.licence_country_of_issue}', '${req.body.licence_class}', '${req.body.licence_date_of_expiry}', '${req.body.visa_number}',
              '${req.body.visa_expiry_date}', '${req.body.dbs_check}', '${req.body.follow_up_to_date}', '${req.body.right_to_work_status}',
              '${req.body.share_code}', '${req.body.date_issued}', '${req.body.date_cheked}', '${req.body.expiry_date}')`,
                (error, data) => {
                  if (error) {
                    res.status(500).send({
                      success: false,
                      message: error,
                    });
                    return;
                  } else {
                    res.status(200).send({
                      success: true,
                      message: "Data Inserted Successfully",
                    });
                    return;
                  }
                }
              );
            } else {
              db.query(
                'UPDATE tbl_employee_sensitive_info SET employee_id = "' +
                  req.body.employee_id +
                  '", tax_code = "' +
                  req.body.tax_code +
                  '", ni_number = "' +
                  req.body.ni_number +
                  '", passport_number = "' +
                  req.body.passport_number +
                  '", passport_country_of_issue = "' +
                  req.body.passport_country_of_issue +
                  '", passport_date_of_expiry = "' +
                  req.body.passport_date_of_expiry +
                  '", licence_number = "' +
                  req.body.licence_number +
                  '", licence_country_of_issue = "' +
                  req.body.licence_country_of_issue +
                  '", licence_class = "' +
                  req.body.licence_class +
                  '", licence_date_of_expiry = "' +
                  req.body.licence_date_of_expiry +
                  '", visa_number = "' +
                  req.body.visa_number +
                  '", visa_expiry_date = "' +
                  req.body.visa_expiry_date +
                  '", dbs_check = "' +
                  req.body.dbs_check +
                  '", follow_up_to_date= "' +
                  req.body.follow_up_to_date +
                  '", right_to_work_status = "' +
                  req.body.right_to_work_status +
                  '", share_code = "' +
                  req.body.share_code +
                  '", date_issued = "' +
                  req.body.date_issued +
                  '", date_cheked = "' +
                  req.body.date_cheked +
                  '", expiry_date = "' +
                  req.body.expiry_date +
                  '" WHERE employee_id = "' +
                  req.body.employee_id +
                  '"',
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
                      message: "Data Updated Successfully",
                    });
                    return;
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

module.exports = updateEmpSensitiveInfo;
