const express = require('express');
const db = require('./db/dbConnection');
const cors = require('cors');
const md5Hash = require('crypto-js')
const port = 5000;
const app = express();
const path = require('path');
app.use(express.json());
app.use(cors())
// app.set('view engine', 'ejs');
const multer = require('multer');
app.use(express.static('public'));


const fs = require('fs')

const DIR = './public/employeeProfile'

if(!fs.existsSync(DIR)){
  fs.mkdirSync(DIR)
}

// const DIR2 = './public/pdf'

// if(!fs.existsSync(DIR2)){
//   fs.mkdirSync(DIR2)
// }




//image uploader
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/employeeProfile");
    // cb(null, "./image")
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
});


const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/adminProfile");
    // cb(null, "./image")
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const adminProfileUpload = multer({
  storage: storage2,
  limits: { fileSize: 1024 * 1024 * 10 },
});




//image uploader



//import controller
const addEmployee = require('./controller/employee/addEmployee');
const getAllEmployee = require('./controller/employee/getEmployee');
const addTeam = require('./controller/manage_team/addTeam');
const getEmployeeDetails = require('./controller/employee/getDetailsOfEmployee');
const getTeam = require('./controller/manage_team/getTeam');
const addSickLeave = require('./controller/employee/addSickLeave');
const addAnnualLeave = require('./controller/employee/addAnnualLeave');
const addLatenessLeave = require('./controller/employee/addLatenessLeave');
const forgotPassword = require('./controller/forgot_password/forgot_password');
const resetPassword = require('./controller/forgot_password/reset_password');
const updateContactInformation = require('./controller/admin/updateContact');
const updatePersonalInformation = require('./controller/admin/updatePersonalInformation');
const getAdminData = require('./controller/admin/getAdminData');
const createRota = require('./controller/rotas/createRota');
const getRota = require('./controller/rotas/getRota');
// const getOldRota = require('./controller/rotas/gettingOldRota');
const updateEmployeeProfile =  require('./controller/employee/updateEmployeeProfile');
const updateEmployeeContact = require('./controller/employee/updateEmployeeContactInformation');
const updateEmployeePersonalInfo = require('./controller/employee/updateEmployeePersonalInfo');
const updateEmployeeRoleInfo = require('./controller/employee/updateEmployeeRoleInfo');
const updateEmpSalaryInfo = require('./controller/employee/updateEmpSalaryInfo');
const updateEmpBankDetails = require('./controller/employee/updateEmpbankDetails');
const updateEmployeeNotes = require('./controller/employee/employee_notes');
const getEmployeeNotes = require('./controller/employee/getEmployeeNotes');
const updateEmpSensitiveInfo = require('./controller/employee/updateEmpSensitiveInfo');
const updateAdminProfile = require('./controller/admin/updateAdminProfile');
const deleteAdminProfile = require('./controller/admin/adminProfileDelete');
const deleteEmployeeProfile = require('./controller/employee/employeeProfileDelete');
const getEmployeeSalaryInfo = require('./controller/employee/getEmployeeSalaryInfo');
const getEmployeeBankDetails = require('./controller/employee/getBankDetails');
const getEmployeeSensitiveInfo = require('./controller/employee/getEmployeeSensitiveInfo');







//route

app.post('/api/addEmployee', addEmployee);
app.get('/api/getAllEmployee', getAllEmployee);
app.post('/api/addTeam', addTeam);
app.post('/api/getEmployeeDetails', getEmployeeDetails);
app.get('/api/getTeam', getTeam);
app.post('/api/addSickLeave', addSickLeave);
app.post('/api/addAnnualLeave', addAnnualLeave);
app.post('/api/addLatenessLeave', addLatenessLeave);
app.post('/api/forgotPassword', forgotPassword);
app.post('/api/resetPassword', resetPassword);
app.post('/api/updateContactInformation',updateContactInformation);
app.post('/api/updatePersonalInformation', updatePersonalInformation);
app.get('/api/getAdminData', getAdminData);
app.post('/api/createRota', createRota);
app.get('/api/getRota', getRota);
// app.post('/api/getOldRota', getOldRota);
app.post('/api/updateEmployeeProfile',upload.single('profile'), updateEmployeeProfile);
app.post('/api/updateEmployeeContact', updateEmployeeContact);
app.post('/api/updateEmployeePersonalInfo', updateEmployeePersonalInfo);
app.post('/api/updateEmployeeRoleInfo', updateEmployeeRoleInfo);
app.post('/api/updateEmpSalaryInfo', updateEmpSalaryInfo);
app.post('/api/updateEmpBankDetails', updateEmpBankDetails);
app.post('/api/updateEmployeeNotes', updateEmployeeNotes);
app.post('/api/updateEmpSensitiveInfo', updateEmpSensitiveInfo);
app.post('/api/updateAdminProfile', adminProfileUpload.single('profile'), updateAdminProfile);
app.post('/api/deleteAdminProfile', deleteAdminProfile);
app.post('/api/deleteEmployeeProfile', deleteEmployeeProfile);
app.post('/api/getEmployeeSalaryInfo', getEmployeeSalaryInfo);
app.post('/api/getEmployeeNotes', getEmployeeNotes);
app.post('/api/getEmployeeBankDetails', getEmployeeBankDetails);
app.post('/api/getEmployeeSensitiveInfo', getEmployeeSensitiveInfo);




app.post('/api/adminLogin',(req,res)=>{

    if (req.body.email == "" || req.body.email == null) {
        return res.status(400).send({
          success: "false",
          msg: "email  is empty!",
        });
      }
      if (req.body.password == "" || req.body.password == null) {
        return res.status(400).send({
          success: "false",
          msg: "password is empty!",
        });
      }

    const encryptPassword = md5Hash.MD5(req.body.password)
    

    db.query('SELECT * FROM tbl_admin WHERE email = "'+req.body.email+'" AND password = "'+encryptPassword+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: 'false',
                message: err
            })
            return;
        }

        if(!data.length){
            return res.status(401).send({
                success: 'false',
                message: 'Email Or Password Incorrect Please Check'
            })
            
        }

        else{
            res.status(200).send({   
                success: 'true',
                message: 'Login Successfully',
                data: data[0]
            })
            return;
        }
    })

})



app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})