const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function getTopCategories(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT CATEGORY, COUNT(COURSE_ID) AS TOTAL_COURSES
                   FROM COURSE
                   GROUP BY CATEGORY
                   ORDER BY COUNT(COURSE_ID) DESC`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getTopCourses(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT C.*, R.RATING
                   FROM COURSE C JOIN REVIEWS R ON C.COURSE_ID = R.COURSE_ID
                   ORDER BY R.RATING DESC`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getTopTeachers(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)
        let sql = `SELECT * FROM INSTRUCTOR ORDER BY RATINGS DESC`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getMaxCourse_ID(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX(COURSE_ID) FROM COURSE`

        let result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getCourseOfCategory(course_category){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM COURSE WHERE CATEGORY = :course_category`

        let result = await conn.execute(
            sql,
            [course_category]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getCourseOfSearch(req){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM COURSE
                   WHERE LOWER(COURSE_NAME) LIKE :req OR LOWER(CATEGORY) LIKE :req`

        let result = await conn.execute(
            sql,
            [req]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getCourseInfo(course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM COURSE WHERE COURSE_ID = :course_id`

        let result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getTopicsOfCourse(course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM TOPICS WHERE COURSE_ID = :course_id ORDER BY TOPIC_ID`

        let result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getContentsOfATopic(topic_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM CONTENTS WHERE TOPIC_ID = :topic_id`

        let result = await conn.execute(
            sql,
            [topic_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findCourseTeacherByID(course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.NAME
                   FROM COURSE C JOIN INSTRUCTS I on C.COURSE_ID = I.COURSE_ID
                   JOIN "USER" U on I.USER_ID = U.USER_ID
                   WHERE C.COURSE_ID = :course_id`

        let result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findReviewOfCourse(course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT REVIEW_BODY 
                   FROM REVIEWS R JOIN COURSE C ON R.COURSE_ID = C.COURSE_ID
                   WHERE C.COURSE_ID = :course_id`

        let result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findTopicByTopicID(topic_id, course_id){
    let conn;
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM TOPICS WHERE TOPIC_ID = :topic_id AND COURSE_ID = :course_id`

        let result = await conn.execute(
            sql,
            [topic_id, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getVideoFromContent_ID(content_id){
    let conn;
    try {
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM VIDEO WHERE CONTENT_ID = :content_id`

        let result = await conn.execute(
            sql,
            [content_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findExamFromContent_ID(content_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM QUESTION_ANSWER WHERE CONTENT_ID = :content_id`

        let result = await conn.execute(
            sql,
            [content_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function addNewCourse(course_id, course_name, course_description, total_marks, educational_level){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
                   VALUES (:couse_id, :course_name, :course_description, :total_marks, :educational_level)`
        const result = await conn.execute(
            sql,
            [course_id, course_name, course_description, total_marks, educational_level]
        )
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

async function addNewReview(review_body, course_id, rating, user_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO REVIEWS (USER_ID, COURSE_ID, REVIEW_BODY, RATING) VALUES (:user_id, :course_id, :review_body, :rating)`

        const result = await conn.execute(
            sql,
            [user_id, course_id, review_body, rating]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function addNewTeacherIntoCourse(user_id, course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (:user_id, :course_id)`

        const result = await conn.execute(
            sql,
            [user_id, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function insertCompletion(user_id, content_id, obtained_marks){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO COMPLETED_CONTENT (USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (:user_id, :content_id, :obtained_marks)`

        const result = await conn.execute(
            sql,
            [user_id, content_id, obtained_marks]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getMaxTopicID(){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX(TOPIC_ID) FROM TOPICS`

        const result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function insertNewTopic(topic_id, sl_no, topic_title, topic_description, course_id){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO TOPICS(TOPIC_ID, SL_NO, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
                   VALUES (:topic_id, :sl_no, :topic_title, topic_description, course_id)`

        let result = await conn.execute(
            sql,
            [topic_id, sl_no, topic_title, topic_description, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findMaxSL_no(topic_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX(SL_NO) FROM TOPICS`

        let result = conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getMaxQuestionID(content_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT MAX("Question_ID") FROM QUESTION_ANSWER`

        let result = conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
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

async function insertNewExamQuestion(question_no, sl_no, description, option_1, option_2, option_3, option_4, content_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO QUESTION_ANSWER ("Question_ID", SL_NO, DESCRIPTION, OPTION_1, OPTION_2, OPTION_3, OPTION_4, CONTENT_ID) 
                   VALUES (:question_id, :sl_no, :description, :option_1, :option_2, :option_3, :option_4, :content_id)`

        let result = await conn.execute(
            sql,
            [question_no, sl_no, description, option_1, option_2, option_3, option_4, content_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getTopCategories,
    getTopCourses,
    getTopTeachers,
    getMaxCourse_ID,
    getCourseOfCategory,
    getCourseOfSearch,
    getCourseInfo,
    getTopicsOfCourse,
    getContentsOfATopic,
    findCourseTeacherByID,
    findReviewOfCourse,
    findTopicByTopicID,
    getVideoFromContent_ID,
    findExamFromContent_ID,
    addNewCourse,
    addNewReview,
    addNewTeacherIntoCourse,
    insertCompletion,
    getMaxTopicID,
    insertNewTopic,
    findMaxSL_no,
    getMaxQuestionID,
    insertNewVideoContent,
    insertNewExamQuestion
}

