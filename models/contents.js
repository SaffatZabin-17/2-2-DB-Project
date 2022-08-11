const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function getAllContents(){
    let conn

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT TITLE, DURATION FROM CONTENTS`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch(err){
        console.log(err)
    }
}

async function insertNewContent(content_id, sl_no, title, duration, topic_id){
    let conn

    try{
        conn = await oracleDB.getConnection(config)
        let sql = `INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID)
                   VALUES (:content_id, :sl_no, :title, :duration, :topic_id) `

        let result = await conn.execute(
            sql,
            [content_id, sl_no, title, duration, topic_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getAllContents,
    insertNewContent
}

