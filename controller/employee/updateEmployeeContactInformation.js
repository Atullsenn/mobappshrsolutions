const db = require("../../db/dbConnection");

const updateEmployeeContact = (req, res) => {
  if (!req.body.id || req.body.id == "" || req.body.id === null) {
    res.status(400).send({
      success: false,
      message: "Please Provide Employee Id",
    });
    return;
  }

  if(!req.body.email || req.body.email == "" || req.body.email === null){
    res.status(400).send({
        success: false,
        message: "Please Provide Account Email"
    })
    return;
  }

  if(!req.body.personal_email){
    res.status(400).send({
        success: false,
        message: "Please Provide Personal Email"
    })
    return;
  }

  if(!req.body.home_phone){
    res.status(400).send({
        success: false,
        message: "Please Provide Home Phone"
    })
    return;
  }

  if(!req.body.work_phone){
    res.status(400).send({
        success: false,
        message: "Please Provide Work Phone"
    })
    return;
  }


  if(!req.body.mobile_phone){
    res.status(400).send({
        success: false,
        message: "Please Provide Mobile Phone"
    })
    return;
  }

  if(!req.body.work_extension){
    res.status(400).send({
        success: false,
        message: "Please Provide Work Extension"
    })
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
          'UPDATE tbl_employee SET email = "' +
            req.body.email +
            '", personal_email = "' +
            req.body.personal_email +
            '", home_phone = "' +
            req.body.home_phone +
            '", mobile_phone = "' +
            req.body.mobile_phone +
            '", work_phone = "' +
            req.body.work_phone +
            '", work_extension = "' +
            req.body.work_extension +
            '" WHERE id = "' +
            req.body.id +
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
                message: "Contact Updated Successfully",
              });
              return;
            }
          }
        );
      }
    }
  );
};

module.exports = updateEmployeeContact;
