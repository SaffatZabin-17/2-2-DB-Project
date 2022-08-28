const userModels = require('../models/user-info');

const infoModels = require('../models/category-course-info');

const forumModels = require('../models/Discussion_Forum');



/* to show teacher search req */
let searched_teacers = [];
/* */

exports.getHome = async(req, res, next) => {

    const user_id = req.params.ID;
    console.log(user_id);

    const category_repo = await infoModels.getTopCategories();
    console.log(category_repo);

    const course_repo = await infoModels.getTopCourses();
    console.log(course_repo);

    const teacher_repo = await infoModels.getTopTeachers();
    console.log(teacher_repo);

    const user_repo = await userModels.findByID(user_id);
    console.log(user_repo);

    if (category_repo!==undefined) {
        return res.render('home/index', {
            pageTitle: 'Home',
            path: '/',
            isStudent: 'false',
            logged_in: 'true',
            categories: category_repo,
            courses: course_repo,
            teachers: teacher_repo,
            userInfo: user_repo[0]
        })
    }

    res.render('/', {
        pageTitle: 'Home',
        path: '/',
        isStudent: 'true',
        logged_in: 'true',
        categories: [],
        courses: [],
        teachers: [],
        userInfo: user_repo[0]
    })

}


exports.getAbout = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

   /* const testimonial_repo = await infoModels.getTestimonials_about_learnE();
    console.log(testimonial_repo);*/

    if (testimonial_repo.success && user_repo.success) {
        return res.render('home/about-view.ejs', {
            pageTitle: 'About',
            path: '/about',
            isStudent: 'false',
            logged_in: 'true',
            testimonials: testimonial_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}

exports.getCourses = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    const category_repo = await infoModels.getTopCategories();
    console.log(category_repo);

    if (category_repo.success && user_repo.success) {
        return res.render('home/courses-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'false',
            logged_in: 'true',
            categories: category_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}

exports.getForumRequest = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    const question_repo = await forumModels.getForumQuestions();

    if (question_repo!==undefined) {
        return res.render('blog.ejs', {
            pageTitle: 'Discussion Forum',
            path: '/forum',
            isStudent: 'false',
            logged_in: 'true',
            questions: question_repo,
            userInfo: user_repo[0]
        })
    }

    const url = '/instructor/user/' + userId + '/';
    res.redirect(url)

}

exports.getForumResponse = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    const question_repo = await forumModels.getForumQuestions();

    const question = req.body.question;
    console.log(question)

    const topic = req.body.topic;
    console.log(topic);

    const QID = await forumModels.getMaxQuestionID();

    const question_ID = QID[0] + 1;
    console.log(question_ID);

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let hours = date_ob.getHours();

    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let FinalDate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    const insertQuestion = await forumModels.insertForumQuestion(userId, question_ID, topic, question, FinalDate);
    console.log(insertQuestion);

    const url = '/instructor/user/' + userId + '/forum';
    res.redirect(url)

}

exports.getForumDetails = async(req, res, next) => {

    const userId = req.params.ID;

    const question_ID = req.params.QID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    const question_repo = await forumModels.getQuestionByQID(question_ID);
    console.log(question_repo)

    const answer_repo = await forumModels.getAnswerByQID(question_ID);
    console.log(answer_repo)

    const question_vote_count = await forumModels.getQuestionVoteCount(question_ID);
    console.log(question_vote_count)

    const answer_vote_count = await forumModels.getAnswerVoteCount(question_ID);
    console.log(answer_vote_count)

    if (question_repo!==undefined) {
        return res.render('blog-details.ejs', {
            pageTitle: 'Discussion Forum',
            path: '/forum',
            isStudent: 'false',
            logged_in: 'true',
            questions: question_repo,
            userInfo: user_repo[0],
            answers: answer_repo,
            questionVoteCount: question_vote_count,
            answerVoteCount: answer_vote_count
        })
    }

    const url = '/instructor/user/' + userId + '/';
    res.redirect(url)
}

exports.getForumAnswers = async(req, res, next) => {
    const userId = req.params.ID;

    const question_ID = req.params.QID;

    const answerID = await forumModels.getMaxAnswerID();

    const answer_id = answerID[0] + 1;

    const answerBody = req.body.answer;
    console.log(answerBody);

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let hours = date_ob.getHours();

    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let FinalDate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    const insertAnswer = await forumModels.insertForumAnswer(answer_id, answerBody, question_ID, userId, FinalDate);
    console.log(insertAnswer);

    const url = '/instructor/user/' + userId + '/' + 'forum/' + QID;
    res.redirect(url)
}

exports.getTeachers = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    const teacher_repo = await infoModels.getTopTeachers();
    console.log(teacher_repo);

    if (teacher_repo.success && user_repo.success) {
        return res.render('home/teacher-view.ejs', {
            pageTitle: 'Teachers',
            path: '/teachers',
            isStudent: 'false',
            logged_in: 'true',
            teachers: teacher_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}


/* */

exports.postSearch = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    let start = req.params.START;


    let searchReq = req.body.search_bar_req;
    console.log(searchReq);

    searchReq = searchReq.toLowerCase();

    let req_search = '%' + searchReq + '%';
    console.log(req_search)

    const search_repo = await infoModels.getCourseOfSearch(req_search);
    console.log(search_repo);

    if (search_repo!==undefined) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'false',
            logged_in: 'true',
            req: searchReq,
            userInfo: user_repo[0],
            courses: search_repo,
            fromCategory: 'false',
            fromSearch: 'true',
            start: start
        })
    }


    let url = '/instructor/user/' + userId + '/';
    res.redirect(url);
}


exports.get_Category_view = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userModels.findByID(userId);
    console.log('here : ', user_repo);

    const reqCategory = req.params.CATEGORY;
    console.log('here : ', reqCategory);

    let start = req.params.START;
    console.log(start);

    const search_repo = await infoModels.getCourseOfCategory(reqCategory);
    console.log(search_repo);

    if (user_repo.success && search_repo.success) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            req: reqCategory,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'true',
            fromSearch: 'false',
            start: start
        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}

exports.getProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);
    const coursesTaken = await userModels.courseCreatedByIndividualTeacher(userId);
    console.log(coursesTaken);


    if (user_repo !== undefined) {
        return res.render('profile.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo[0],
            myCoursesReq: 'true',
            courses: coursesTaken

        })
    }
}


exports.PostEditProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    let user_repo = await userModels.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userModels.coursesCreatedByIndividualTeacher(userId);

    const name = req.body.name;
    console.log("new name :", name)
    const email = req.body.email;
    console.log("new email :", email)
    const pass = req.body.pass;
    console.log("new password :", pass)
    const re_pass = req.body.re_pass;
    if (req.files) console.log("some file was uploaded ");
    else console.log("no file found");
    var file = req.files.uploaded_image;
    var img_name = file.name;
    console.log(img_name);
    file.mv('public/img/' + file.name);

    const updateUser = await userModels.updateUser(userId, name, email, pass, img_name);
    // console.log(updateUser.data.success);
    user_repo = await userModels.findById(userId);

    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo.data[0],
            myCoursesReq: 'true',
            courses: coursesTaken.data,

        })
    }
}
exports.createNewModule = async(req, res, next) => {
    console.log("CREATING A NEW MODULE");
    const userId = req.params.ID;
    const user_repo = await userModels.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : ', courseId);
    const course_repo = await infoModels.findCourseById(courseId);
    //firgure out a new module ID
    const lastInsertedModule = await infoModels.getLastInsertedModuleID();
    console.log("new Module Id :", lastInsertedModule);
    let newModule_ID = lastInsertedModule.data[0].Module_ID + 1;
    console.log("new Module Id :", newModule_ID);
    //create a new module
    //insert into module table
    const newModule = await infoModels.addNewModule(newModule_ID, userId);




    //find out the serial it needs to be added
    const serial = await infoModels.findSerialOfLastInsertedModuleOfCourse(courseId);

    let serialNext;
    if (serial.data.length == 0) serialNext = 1;

    else { serialNext = serial.data[0].Serial + 1; }
    console.log("serial to be added : ", serialNext)
    //insert into course modules
    const ModuleAddedToCourse = await infoModels.addModuleToCourse(courseId, newModule_ID, serialNext);
    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + newModule_ID + '/';
    console.log(url);
    res.redirect(url);
}
exports.editProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userModels.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userModels.coursesCreatedByIndividualTeacher(userId);


    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'true',
            userInfo: user_repo.data[0],
            myCoursesReq: 'false',
            courses: coursesTaken.data,

        })

    }
}


exports.get_course_view = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userModels.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : ', courseId);
    const course_repo = await infoModels.findCourseById(courseId);
    console.log('here : ', course_repo);
    const courseTeacher_repo = await infoModels.findCourseTeacherById(courseId);
    console.log('here : ', courseTeacher_repo);
    const content_repo = await infoModels.getContentsOfCourse(courseId);
    console.log(content_repo);
    const review_repo = await infoModels.findReviewsOfCourse(courseId);
    console.log("REVIEWS :", review_repo);
    const TopCourse_repo = await infoModels.getTopCourses();
    console.log(TopCourse_repo);
    var isOwned;
    const owned = await infoModels.isOwned(courseId, userId);
    if (owned.data.length == 0) isOwned = false;
    else
        isOwned = true;

    if (user_repo.success && course_repo.success && content_repo.success) {
        return res.render('course/course-view.ejs', {
            pageTitle: 'Course',
            path: '/course',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            teachers: courseTeacher_repo.data,
            reviews: review_repo.data,
            topCourses: TopCourse_repo.data,
            contents: content_repo.data,
            weekView: 'false',
            owned: isOwned

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}


exports.get_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userModels.findById(userId);
    console.log(user_repo);

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            create_button: 'false', ////
            weekView: 'false'
        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);


}


exports.post_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const id_repo = await infoModels.last_course_id_inserted();
    console.log(id_repo)
    const new_id = id_repo.data[0].id + 1;
    console.log(new_id)

    const title = req.body.course_name;
    const description = req.body.description;
    const level = req.body.level;
    const category = req.body.catagory;
    const price = req.body.price;
    console.log(title, description, level, category, price);
    console.log(req.body.uploaded_image);
    console.log(typeof(req.body.uploaded_image));
    if (req.files) console.log("some file was uploaded ");
    else console.log("no file found");
    var file = req.files.uploaded_image;
    var img_name = file.name;
    console.log(img_name);
    file.mv('public/img/' + file.name);
    const enrolled = 0;
    const rating = 0;
    const ratedBy = 0;

    const course_repo = await infoModels.add_new_course(new_id, title, description, level, category, price, img_name, enrolled, rating, ratedBy);
    console.log(course_repo);

    const add_repo = await infoModels.add_teacher_into_new_course(userId, new_id);
    console.log(add_repo);

    let url = '/teacher/user/' + userId + '/add-course/' + new_id;
    res.redirect(url);
}


exports.get_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userModels.findById(userId);
    const Module_repo = await infoModels.findModulesByCourseId(courseId);
    console.log(Module_repo);


    const course_repo = await infoModels.findCourseById(courseId);
    //find existing modules, if any. 


    const teachers_repo = await infoModels.findCourseTeacherById(courseId);



    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            create_button: 'true',
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            weekView: 'false',
            modules: Module_repo.data,
            showFAQ: 'false'

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}

exports.get_add_course_FAQ = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userModels.findById(userId);
    const course_repo = await infoModels.findCourseById(courseId);
    const teachers_repo = await infoModels.findCourseTeacherById(courseId);
    const Module_repo = await infoModels.findModulesByCourseId(courseId);

    const ansQues_repo = await infoModels.get_ansQues_by_courseId(courseId);
    console.log('ansQues_repo : ', ansQues_repo);

    const Ques_repo = await infoModels.get_Ques_by_courseId(courseId);
    console.log('Ques_repo : ', Ques_repo);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            create_button: 'true',
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            weekView: 'false',
            modules: Module_repo.data,
            showFAQ: 'true',
            ansQues: ansQues_repo.data,
            Ques: Ques_repo.data

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);



}

exports.post_add_course_FAQ = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const answer = req.body.answer_inserted;
    const questionId = req.body.question_id;

    console.log('answer', answer);
    console.log('question id : ', questionId);

    const insert_repo = await infoModels.giveAnsToFaq_by_quesId(answer, userId, questionId);
    console.log('insert_repo', insert_repo);

    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/FAQ';
    res.redirect(url);



}

exports.getSingleCourseInsideModuleView = async(req, res, next) => {
    console.log("single course inside MODULE VIEW view")
    const userId = req.params.ID;
    const user_repo = await userModels.findById(userId);


    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const course_repo = await infoModels.findCourseById(courseId);

    const Module_repo = await infoModels.findModulesByCourseId(courseId);

    const VideoContent_repo = await infoModels.findContentsOfSingleModule(moduleId);

    const Module = await infoModels.findModuleByModule_ID(moduleId, courseId);
    console.log(Module.data[0]);
    //  const content_repo = await infoModels.findContentsOfSingleModule(moduleId);
    // const QuizContent_repo = await infoModels.findQuizContentIDByModule_ID(moduleId);


    const QuizContent_repo = await infoModels.findQuizContentIDByModule_ID(moduleId);
    console.log('quiz: ', QuizContent_repo.data[0]);
    const teachers_repo = await infoModels.findCourseTeacherById(courseId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data,
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'false',
            add_quiz_button: 'false',
            showFAQ: 'false'

        })
    }
}

exports.post_search_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const user_repo = await userModels.findById(userId);


    const course_repo = await infoModels.findCourseById(courseId);


    const teachers_repo = await infoModels.findCourseTeacherById(courseId);


    let req_src = req.body.search_bar_req;
    console.log(req_src);

    req_src = '%' + req_src + '%';

    const req_src_teacher_repo = await infoModels.searchTeacherByTeacherName(req_src);
    console.log('req-search : ', req_src_teacher_repo);

    let url = '';

    if (user_repo.success && course_repo.success && req_src_teacher_repo.success) {
        if (req_src_teacher_repo.data.length > 0) searched_teacers = req_src_teacher_repo.data;
        else searched_teacers = [];

        console.log('here in post : ', searched_teacers);

        url = '/teacher/user/' + userId + '/add-course/' + courseId + '/add-teacher/show-teachers';
        return res.redirect(url);
    }
    url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}


exports.get_add_course_add_teacher_show = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userModels.findById(userId);


    const course_repo = await infoModels.findCourseById(courseId);


    const teachers_repo = await infoModels.findCourseTeacherById(courseId);


    console.log('here in get : ', searched_teacers);


    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            create_button: 'true',
            teachers_in: teachers_repo.data,
            req_teachers: searched_teacers,
            req_teachers_show: 'true',
            weekView: 'false',
            showFAQ: 'false'
        })
    }

    url = '/teacher/user/' + userId + '/';
    res.redirect(url);


}





exports.get_add_course_add_teacher = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const new_teacher_id = req.params.TEACHID;

    console.log('course id : ', courseId);
    console.log('new_teacher_id : ', new_teacher_id);


    const temp_repo = await infoModels.add_teacher_into_new_course(new_teacher_id, courseId);
    console.log(temp_repo);

    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}


exports.get_add_course_add_video = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const user_repo = await userModels.findById(userId);
    const course_repo = await infoModels.findCourseById(courseId);

    const teachers_repo = await infoModels.findCourseTeacherById(courseId);
    const Module_repo = await infoModels.findModulesByCourseId(courseId);

    const Module = await infoModels.findModuleByModule_ID(moduleId, courseId);
    console.log(Module.data[0]);
    const VideoContent_repo = await infoModels.findContentsOfSingleModule(moduleId);
    const QuizContent_repo = await infoModels.findQuizContentIDByModule_ID(moduleId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data,
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'true',
            add_quiz_button: 'false',
            showFAQ: 'false'

        })
    }

    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}

exports.post_add_course_add_video = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const title = req.body.title;
    console.log(title);
    const description = req.body.description;
    console.log("Description : ", description);
    //find out content id to be added
    //insert into video content with the module id
    const lastInsertedVideo = await infoModels.getLastInsertedVideoContentID();
    console.log("last Video Id :", lastInsertedVideo);
    let newVideo_ID = lastInsertedVideo.data[0].VideoID + 1;
    console.log("new Video Id :", newVideo_ID);
    var file = req.files.uploaded_video;
    var video_name = file.name;
    console.log(video_name);
    file.mv('public/videos/' + file.name);
    const addVideo = await infoModels.addNewVideo(newVideo_ID, moduleId, title, description, video_name);

    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + moduleId;
    res.redirect(url);
}



exports.get_add_course_add_quiz = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const user_repo = await userModels.findById(userId);
    const course_repo = await infoModels.findCourseById(courseId);
    const teachers_repo = await infoModels.findCourseTeacherById(courseId);
    const Module_repo = await infoModels.findModulesByCourseId(courseId);

    const Module = await infoModels.findModuleByModule_ID(moduleId, courseId);

    const VideoContent_repo = await infoModels.findContentsOfSingleModule(moduleId);
    console.log('video : ', VideoContent_repo);
    const QuizContent_repo = await infoModels.findQuizContentIDByModule_ID(moduleId);
    console.log('quiz : ', QuizContent_repo)
    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data,
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'false',
            add_quiz_button: 'true',
            showFAQ: 'false'

        })
    }
    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}


exports.post_add_course_add_quiz = async(req, res, next) => {
    console.log("INSIDE QUIZ")
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    var file = req.files.quizFile;
    var quizFile_name = file.name;
    console.log(quizFile_name);
    file.mv('./Quiz/' + quizFile_name);


    let question = [],
        option1 = [],
        option2 = [],
        option3 = [],
        option4 = [],
        answer = [];

    /*
        const lineReader = require('line-reader');
        let i = 1;

        const test = await lineReader.eachLine('./Quiz/' + quizFile_name, (line, last) => {
            if (i % 6 == 1) {
                question.push(line);
                console.log("question :", question)
            } else if (i % 6 == 2) option1.push(line);
            else if (i % 6 == 3) {
                option2.push(line);
                console.log("option 2", option2)
            } else if (i % 6 == 4) option3.push(line);
            else if (i % 6 == 5) option4.push(line);
            else if (i % 6 == 0) {
                answer.push(line);
                console.log("answer", answer)
            }
            i++;
        })
        console.log('test : ', test);
    */

    LineReaderSync = require("line-reader-sync")
    lrs = new LineReaderSync('./Quiz/' + quizFile_name)
    let test = lrs.toLines()
    console.log(test);

    for (let i = 1; i <= test.length; i++) {
        if (i % 6 == 1) {
            question.push(test[i - 1]);
            console.log("question :", question)
        } else if (i % 6 == 2) option1.push(test[i - 1]);
        else if (i % 6 == 3) {
            option2.push(test[i - 1]);
            console.log("option 2", option2)
        } else if (i % 6 == 4) option3.push(test[i - 1]);
        else if (i % 6 == 5) option4.push(test[i - 1]);
        else if (i % 6 == 0) {
            answer.push(test[i - 1]);
            console.log("answer", answer)
        }
    }




    const lastInsertedQuizID = await infoModels.getLastInsertedQuizContentID();
    console.log("last quiz Id :", lastInsertedQuizID);
    let newQuiz_ID = lastInsertedQuizID.data[0].QuizID + 1;


    console.log(" array length :", question.length);



    for (let j = 0; j < question.length; j++) {
        console.log("ADDING QUESTIONS");
        const added = await infoModels.addQuizQuestion(newQuiz_ID, moduleId, question[j], option1[j], option2[j], option3[j], option4[j], answer[j], (j + 1));
    }
    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + moduleId;
    res.redirect(url);

}