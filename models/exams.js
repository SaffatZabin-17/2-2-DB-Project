const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function addNewExam(content_id, total_marks){
    let conn

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO EXAM(CONTENT_ID, TOTAL_MARKS) VALUES (:content_id, :total_marks)`

        let result = await conn.execute(
            sql,
            [content_id, total_marks]
        )
        return result.rows
    } catch(err){
        console.log(err)
    }
}

module.exports={
    addNewExam
}