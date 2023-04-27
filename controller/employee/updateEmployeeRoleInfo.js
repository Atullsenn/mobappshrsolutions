const db = require("../../db/dbConnection");

const updateEmployeeRoleInfo = (req, res) => {
  if (!req.body.id || req.body.id == "" || req.body.id == null) {
    res.status(400).send({
      success: false,
      message: "Please Provide Employee Id",
    });
    return;
  }

  db.query(
    'SELECT id FROM tbl_employee WHERE id = "' + req.body.id + '"',
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
          'SELECT employee_id FROM tbl_employee_role_info WHERE employee_id = "' +
            req.body.employee_id +
            '"',
          (error, data) => {
            if (error) {
              res.status(500).send({
                success: false,
                message: error,
              });
              return;
            }

            if (data.length === 0) {
              db.query(
                `INSERT INTO tbl_employee_role_info(employee_id,job_title,contract_type,probation_required,probation_end_date,notice_during_probation_period,notice_period,reason_for_update,notes) VALUES('${req.body.employee_id}','${req.body.job_title}', '${req.body.contract_type}', '${req.body.probation_required}', '${req.body.probation_end_date}','${req.body.notice_during_probation_period}', '${req.body.notice_period}', '${req.body.reason_for_update}','${req.body.notes}')`,
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
                      message: "Data Inserted Successfully",
                    });
                    return;
                  }
                }
              );
            } else {
              db.query(
                'UPDATE tbl_employee_role_info SET employee_id = "' +
                  req.body.employee_id +
                  '", job_title = "' +
                  req.body.job_title +
                  '", contract_type = "' +
                  req.body.conract_type +
                  '", probation_required = "' +
                  req.body.probation_required +
                  '", probation_end_date = "' +
                  req.body.probation_end_date +
                  '", notice_during_probation_period = "' +
                  req.body.notice_during_probation_period +
                  '", notice_period = "' +
                  req.body.notice_period +
                  '", reason_for_update = "' +
                  req.body.reason_for_update +
                  '", notes = "' +
                  req.body.notes +
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

module.exports = updateEmployeeRoleInfo;
