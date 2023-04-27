const db = require('../../db/dbConnection');



const createRota = (req,res)=>{

    if(!req.body.rota_name || req.body.rota_name == "" || req.body.rota_name === null ){
        res.status(400).send({
            success: false,
            message: 'Please Enter Rota Name'
        })
        return;
    }

    if(!req.body.rota_duration || req.body.rota_duration == "" || req.body.rota_duration ===  null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Rota Duration'
        })
        return;
    }

    if(!req.body.start_date || req.body.start_date == "" || req.body.start_date === null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Start Date'
        })
        return;
    }

    db.query('SELECT rota_name FROM tbl_rotas WHERE rota_name = "'+req.body.rota_name+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }

        if(data.length !== 0){
            res.status(201).send({
                success: false,
                message: 'Please Choose Other Rota Name'
            })
            return;
        }

        else{

            db.query(`INSERT INTO tbl_rotas(rota_name,rota_duration,start_date)VALUES('${req.body.rota_name}', '${req.body.rota_duration}', '${req.body.start_date}')`,(error,dataa)=>{
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
                        message: "Rota Created Successfully"
                    })
                    return;
                }
            })

        }
    })
}

module.exports = createRota;