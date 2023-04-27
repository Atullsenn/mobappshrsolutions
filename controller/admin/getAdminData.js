const db = require('../../db/dbConnection');


const getAdminData = (req,res)=>{

    db.query('SELECT * FROM tbl_admin',(error, data)=>{
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
                message: 'Getting Data Successfully',
                data: data[0]
            })
        }
    })
}


module.exports = getAdminData;