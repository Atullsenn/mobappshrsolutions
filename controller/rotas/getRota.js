const db = require('../../db/dbConnection');


const getRota = (req,res)=>{
    db.query('SELECT * FROM tbl_rotas',(error,data)=>{
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
                data: data
            })
        }
    })
}

module.exports = getRota;