const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function insertForumQuestion(forum_qid, topic, question_description, question_time){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO FORUM_QUESTION (FORUM_QID, TOPIC, QUESTION_DESCRIPTION, QUESTION_DATE) VALUES (:forum_qid, :topic, :question_description, :question_time)
                   INSERT INTO ASKS (USER_ID, FORUM_QUESTION_ID) VALUES (:user_id, :forum_qid)`

        let result = await conn.execute(
            sql,
            [forum_qid, topic, question_description, question_time]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function insertForumAnswer(forum_answer_id, description, answer_date, forum_qid){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO FORUM_ANSWER (FORUM_ANSWER_ID, DESCRIPTION, ANSWER_DATE, FORUM_QUESTION_ID) VALUES (:forum_answer_id, :description, :answer_date, :forum_qid)
                   INSERT INTO PUBLISHES (FORUM_ANSWER_ID, USER_ID) VALUES (:forum_answer_id, :user_id)`

        let result = await conn.execute(
            sql,
            [forum_answer_id, description, answer_date, forum_qid]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getForumQuestions(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.*, FQ.*
                   FROM "USER" U JOIN ASKS A2 on U.USER_ID = A2.USER_ID JOIN FORUM_QUESTION FQ on A2.FORUM_QUESTION_ID = FQ.FORUM_QID
                   ORDER BY FQ.QUESTION_DATE`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getAnswerOfAQuestion(question_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.*, FA.*
                   FROM "USER" U JOIN PUBLISHES P on U.USER_ID = P.USER_ID JOIN FORUM_ANSWER FA on P.FORUM_ANSWER_ID = FA.FORUM_ANSWER_ID
                   WHERE FA.FORUM_QUESTION_ID = :question_id`

        let result = await conn.execute(
            sql,
            [question_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getMaxQuestionID(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX(FORUM_QID) FROM FORUM_QUESTION`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getMaxAnswerID(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX(FORUM_ANSWER_ID) FROM FORUM_ANSWER`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    insertForumQuestion,
    insertForumAnswer,
    getForumQuestions,
    getAnswerOfAQuestion,
    getMaxAnswerID,
    getMaxQuestionID
}



