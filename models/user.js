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
        conn.commit();
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

async function getMaxUserID(){
    let conn
    try{
        conn = await oracleDB.getConnection(config);

        let result = await conn.execute(
            'SELECT MAX(USER_ID) FROM "USER"',
            []
        )
        return result.rows
    } catch(err){
        console.log(err)
    }
}

async function getUserByEmail(email){
    let conn
    try{
        conn = await oracleDB.getConnection(config);

        let result = await conn.execute(
            'SELECT * FROM "USER" WHERE EMAIL = :email',
            [email]
        )
        return result.rows
    } catch(err){
        console.log(err)
    }
}

async function getEmailID(email){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let result = await conn.execute(
            'SELECT EMAIL FROM "USER" WHERE EMAIL = :email',
            [email]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getPasswordFromEmailID(email){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let result = await conn.execute(
            'SELECT PASSWORD FROM "USER" WHERE EMAIL = :email',
            [email]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getUserByID,
    insertNewUser,
    getUserByUsername,
    getMaxUserID,
    getUserByEmail,
    getEmailID,
    getPasswordFromEmailID
}