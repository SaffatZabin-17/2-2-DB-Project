const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function insertNewVideoContent(link, content_id){
    let conn

    try{
        conn = await oracleDB.getConnection(config)

        let sql = 'INSERT INTO VIDEO(CONTENT_ID, URL_LINK) VALUES(:content_id, :link)'

        let result = await conn.execute(
            sql,
            [link, content_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    insertNewVideoContent
}