const oracleDB = require('oracledb');
const {models} = require("mongoose");
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function getAllTopics(){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql =  `SELECT TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION FROM TOPICS`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function insertNewTopic(topic_id, topic_title, topic_description, course_id){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO TOPICS(TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
                   VALUES (:topic_id, :topic_title, topic_description, course_id)`

        let result = await conn.execute(
            sql,
            [topic_id, topic_title, topic_description, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getTopicByID(topic_id){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT TOPIC_TITLE, TOPIC_DESCRIPTION FROM TOPICS WHERE TOPIC_ID = :topic_id`

        let result = await conn.execute(
            sql,
            [topic_id]
        )
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

async function getTopicByName(topic_name){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT TOPIC_TITLE, TOPIC_DESCRIPTION FROM TOPICS WHERE TOPIC_NAME = :topic_name`

        let result = await conn.execute(
            sql,
            [topic_name]
        )
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllTopics,
    insertNewTopic,
    getTopicByID,
    getTopicByName
}