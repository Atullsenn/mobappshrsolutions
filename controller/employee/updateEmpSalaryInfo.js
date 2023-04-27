const db = require("../../db/dbConnection");

const updateEmpSalaryInfo = (req, res) => {
  const dta = [];
  const index = [];
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
    'SELECT employee_id FROM tbl_employee_salary_info WHERE employee_id = "' +
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

      if (data.length != 0) {
        db.query(
          'UPDATE tbl_employee_salary_info SET employee_id = "' +
            req.body.employee_id +
            '", payroll_number = "' +
            req.body.payroll_number +
            '", salary = "' +
            req.body.salary +
            '", frequency = "' +
            req.body.frequency +
            '", pension_eligible = "' +
            req.body.pension_eligible +
            '", opted_out = "' +
            req.body.opted_out +
            '", employee_contribution = "' +
            req.body.employee_contribution +
            '", employer_contribution = "' +
            req.body.employer_contribution +
            '", enrollment_date = "' +
            req.body.enrollment_date +
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
              res.status(200).send({
                success: true,
                message: "Salary Info Updated Successfully",
                // data: data,
              });
              return;
            }
          }
        );
      } else {
        db.query(
          `INSERT INTO tbl_employee_salary_info(employee_id,payroll_number,salary,frequency,pension_eligible,opted_out,employee_contribution,employer_contribution,enrollment_date) VALUES('${req.body.employee_id}', '${req.body.payroll_number}', '${req.body.salary}', '${req.body.frequency}', '${req.body.pension_eligible}', '${req.body.opted_out}', '${req.body.employee_contribution}', '${req.body.employer_contribution}', '${req.body.enrollment_date}')`,
          (error, dataa) => {
            if (error) {
              res.status(500).send({
                success: false,
                message: error,
              });
              return;
            } else {
              res.status(200).send({
                success: true,
                message: "Salary Info Inserted Successfully",
              });
              return;
            }
          }
        );
      }
    }
  );
};

module.exports = updateEmpSalaryInfo;
