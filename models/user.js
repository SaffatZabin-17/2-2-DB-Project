const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function insertNewUser(user_id, name, email, password, image){
    let conn;
    try{
        conn = await oracleDB.getConnection(config);

        let sql = 'INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES(:user_id, :name, :email, :password, :image)'

        const result = await conn.execute(
            sql,
            [user_id, name, email, password, image]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getUserByID(user_id){
    let conn
    try{
        conn = await oracleDB.getConnection(config);

        const result = await conn.execute(
            'SELECT * FROM "USER" WHERE USER_ID = :user_id',
            [user_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getUserByUsername(username){
    let conn
    try{
        conn = await oracleDB.getConnection(config);

        const result = await conn.execute(
            'SELECT * FROM "USER" WHERE NAME = :username',
            [username]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getUserByID,
    insertNewUser,
    getUserByUsername
}