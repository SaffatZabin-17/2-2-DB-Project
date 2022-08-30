const oracleDB = require('oracledb');
oracleDB.autoCommit = true;

const config = {
    user: 'SHIKHO',
    password: 'Shikho_2_2',
    connectionString: 'localhost:1521/orclpdb'
}

async function findByID(user_id){
    let conn;
    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.*, S.EDUCATIONAL_LEVEL, S.INSTITUTION_ID, I.SPECIALITY, I.RATINGS
                   FROM "USER" U FULL OUTER JOIN STUDENT S on U.USER_ID = S.USER_ID FULL OUTER JOIN INSTRUCTOR I ON U.USER_ID = I.USER_ID
                   WHERE U.USER_ID = :user_id`
        const result = await conn.execute(
            sql,
            [user_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function findByUsername(username){
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


//This is the function last_user_id_inserted in 18 GitHub
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

async function findByEmail(email){
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

async function addUser(user_id, name, email, password, image, type){
    let conn;
    try{
        conn = await oracleDB.getConnection(config);

        let sql = 'INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE, TYPE) VALUES(:user_id, :name, :email, :password, :image, :type)'

        const result = await conn.execute(
            sql,
            [user_id, name, email, password, image, type]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function addUserToStudent(user_id, educational_level){
    let conn;

    try{
        conn = await oracleDB.getConnection(config);

        let sql = `INSERT INTO STUDENT (USER_ID, EDUCATIONAL_LEVEL) VALUES (:user_id, :educational_level)`

        const result = await conn.execute(
            sql,
            [user_id, educational_level]
        )
        return result.rows;
    } catch (err){
        console.log(err)
    }
}

async function addUserToInstructor(user_id, speciality){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY) VALUES (:user_id, :speciality)`

        const result = await conn.execute(
            sql,
            [user_id, speciality]
        )
        return result.rows;
    } catch (err){
        console.log(err)
    }
}

async function isStudent(email){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT USER_ID FROM STUDENT WHERE USER_ID := (SELECT USER_ID FROM "USER" WHERE EMAIL = :email)`

        const result = await conn.execute(
            sql,
            [email]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function isTeacher(email){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT USER_ID FROM INSTRUCTOR WHERE USER_ID := (SELECT USER_ID FROM "USER" WHERE EMAIL = :email)`

        const result = await conn.execute(
            sql,
            [email]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function coursesTaken(user_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.NAME, C2.COURSE_ID, C2.COURSE_NAME, C2.COURSE_DESCRIPTION, C2.TOTAL_MARKS, C2.EDUCATIONAL_LEVEL, C2.CATEGORY, C2.IMAGE, AVG(R2.RATING)
                   FROM "USER" U JOIN STUDENT S2 on U.USER_ID = S2.USER_ID
                                 JOIN ENROLLS E on U.USER_ID = E.USER_ID
                                 JOIN COURSE C2 on E.COURSE_ID = C2.COURSE_ID
                                 JOIN REVIEWS R2 on C2.COURSE_ID = R2.COURSE_ID
                   WHERE U.USER_ID = :user_id
                   GROUP BY C2.COURSE_ID, U.NAME, C2.COURSE_NAME, C2.COURSE_DESCRIPTION, C2.TOTAL_MARKS, C2.EDUCATIONAL_LEVEL, C2.CATEGORY, C2.IMAGE`
        const result = await conn.execute(
            sql,
            [user_id]
        )
        console.log(result.rows);
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

async function getReviewsByStudent(course_id, user_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM REVIEWS WHERE USER_ID= :user_id AND COURSE_ID = :course_id`

        const result = await conn.execute(
            sql,
            [course_id, user_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function updateUserName(user_id, username){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `UPDATE "USER" SET NAME = :username WHERE USER_ID = :user_id`

        const result = await conn.execute(
            sql,
            [user_id, username]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function updateUserMail(user_id, email){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `UPDATE "USER" SET EMAIL = :email WHERE USER_ID = :user_id`

        const result = await conn.execute(
            sql,
            [user_id, email]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function updateUserPassword(user_id, password){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `UPDATE "USER" SET PASSWORD = :password WHERE USER_ID = :user_id`

        const result = await conn.execute(
            sql,
            [user_id, password]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function updateUserImage(user_id, image){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `UPDATE "USER" SET IMAGE = :image WHERE USER_ID = :user_id`

        const result = await conn.execute(
            sql,
            [user_id, image]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function courseCreatedByIndividualTeacher(user_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.USER_ID, U.NAME, U.IMAGE, I.RATINGS, I2.COURSE_ID, C2.COURSE_NAME, C2.COURSE_DESCRIPTION,C2.EDUCATIONAL_LEVEL, R.RATING
                   FROM "USER" U JOIN INSTRUCTOR I ON U.USER_ID = I.USER_ID
                                 JOIN INSTRUCTS I2 on U.USER_ID = I2.USER_ID
                                 JOIN COURSE C2 on I2.COURSE_ID = C2.COURSE_ID
                                 FULL OUTER JOIN REVIEWS R on C2.COURSE_ID = R.COURSE_ID
                   WHERE U.USER_ID = :user_id`

        const result = await conn.execute(
            sql,
            [user_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function searchTeacherByTeacherName(teacher_name){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.*
                   FROM "USER" U JOIN INSTRUCTOR I on U.USER_ID = I.USER_ID
                   WHERE U.NAME = :teacher_name`

        const result = await conn.execute(
            sql,
            [teacher_name]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getGradesByTopic(topic_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT T.TOPIC_ID, (SUM(CC.OBTAINED_MARKS)/SUM(C2.TOTAL_MARKS))*100 AS GRADES
                   FROM TOPICS T JOIN
                                (CONTENTS C2 JOIN COMPLETED_CONTENT CC on C2.CONTENT_ID = CC.CONTENT_ID) on T.TOPIC_ID = C2.TOPIC_ID
                   WHERE T.TOPIC_ID = :topic_id
                   group by T.TOPIC_ID`

        const result = await conn.execute(
            sql,
            [topic_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function getOverallGrades(course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT ((SELECT SUM(OBTAINED_MARKS)
                            FROM COMPLETED_CONTENT)/TOTAL_MARKS)*100 AS OVERALL_GRADES
                   FROM COURSE
                   WHERE COURSE_ID = :course_id`

        const result = await conn.execute(
            sql,
            [course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function enrollACourse(user_id, course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO ENROLLS (USER_ID, COURSE_ID) VALUES (:user_id, :course_id)`

        const result = await conn.execute(
            sql,
            [user_id, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function instructACourse(user_id, course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (:user_id, :course_id)`

        const result = await conn.execute(
            sql,
            [user_id, course_id]
        )

        return result.rows;
    } catch (err){
        console.log(err)
    }
}

async function coursesEnrolledIn(user_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT U.NAME, C2.COURSE_ID, C2.COURSE_NAME, C2.COURSE_DESCRIPTION, C2.TOTAL_MARKS, C2.EDUCATIONAL_LEVEL, C2.CATEGORY, C2.IMAGE, AVG(R2.RATING)
                   FROM "USER" U JOIN STUDENT S2 on U.USER_ID = S2.USER_ID
                                 JOIN ENROLLS E on U.USER_ID = E.USER_ID
                                 JOIN COURSE C2 on E.COURSE_ID = C2.COURSE_ID
                                 JOIN REVIEWS R2 on C2.COURSE_ID = R2.COURSE_ID
                   WHERE U.USER_ID = :user_id
                   GROUP BY C2.COURSE_ID, U.NAME, C2.COURSE_NAME, C2.COURSE_DESCRIPTION, C2.TOTAL_MARKS, C2.EDUCATIONAL_LEVEL, C2.CATEGORY, C2.IMAGE`

        const result = await conn.execute(
            sql,
            [user_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function isEnrolledIn(user_id, course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM ENROLLS WHERE USER_ID = :user_id AND COURSE_ID = :course_id`

        const result = await conn.execute(
            sql,
            [user_id, course_id]
        )
        return result.rows;
    } catch (err){
        console.log(err)
    }
}

async function isTeaching(user_id, course_id){
    let conn;

    try{
        conn = await oracleDB.getConnection(config)

        let sql = `SELECT * FROM INSTRUCTS WHERE USER_ID = :user_id AND COURSE_ID = :course_id`

        const result = await conn.execute(
            sql,
            [user_id, course_id]
        )
        return result.rows
    } catch (err){
        console.log(err)
    }
}

async function updateUser(user_id, userName, email, password, image){
    let conn;

    try{
        conn = await oracleDB.getConnection(config);

        let sql = `UPDATE "USER" SET 
                            NAME = :userName,
                            EMAIL = :email,
                            PASSWORD = :password,
                            IMAGE = :image
                   WHERE USER_ID = :user_id`

        let result = conn.execute(
            sql,
            [user_id, userName, email, password, image]
        )

        return result.rows;
    } catch (err){
        console.log(err)
    }
}

module.exports={
    findByID,
    findByUsername,
    getMaxUserID,
    findByEmail,
    getEmailID,
    getPasswordFromEmailID,
    addUser,
    isStudent,
    isTeacher,
    coursesTaken,
    getReviewsByStudent,
    updateUserName,
    updateUserPassword,
    updateUserMail,
    updateUserImage,
    courseCreatedByIndividualTeacher,
    searchTeacherByTeacherName,
    getGradesByTopic,
    getOverallGrades,
    enrollACourse,
    instructACourse,
    coursesEnrolledIn,
    isEnrolledIn,
    isTeaching,
    updateUser
}
