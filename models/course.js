const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function getAllCourse(){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM COURSE`

        const result = await conn.execute(
            sql,
            []
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getCourseByID(course_id){
    let conn
    try{
        conn = await oracleDB.getConnection(config)
        let sql = `SELECT * FROM COURSE WHERE COURSE_ID = :course_id`
        const result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err);
    }
}

async function getCourseByEducationalLevel(educational_level){
    let conn

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM COURSE WHERE EDUCATIONAL_LEVEL = :educational_level`
        const result = await conn.execute(
            sql,
            [educational_level]
        )
        return result.rows
    } catch(err){
        console.log(err);
    }
}

async function insertNewCourse(course_id, course_name, course_description, total_marks, educational_level){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
                   VALUES (:course_id, :course_name, :course_description, :total_marks, :educational_level)`
        const result = await conn.execute(
            sql,
            [course_id, course_name, course_description, total_marks, educational_level]
        )
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

async function getInstructorFromCourseName(course_name){
    let conn
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.NAME, C.COURSE_NAME
                   FROM "USER" U, INSTRUCTS I, COURSE C
                   WHERE C.COURSE_NAME = :course_name AND U.USER_ID = I.USER_ID AND I.COURSE_ID = C.COURSE_ID`

        const result = await conn.execute(
            sql,
            [course_name]
        )
    } catch (err) {
        console.log(err)

    }
}

async function courseEnroll(user_id, course_id){
    let conn

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO ENROLLS(USER_ID, COURSE_ID) VALUES(:user_id, :course_id)`

        let result = await conn.execute(
            sql,
            [user_id, course_id]
        )
        return result.rows
    } catch (err) {
        console.log(err)
    }
}



module.exports ={
    getAllCourse,
    getCourseByEducationalLevel,
    getCourseByID,
    insertNewCourse,
    getInstructorFromCourseName,
    courseEnroll
}