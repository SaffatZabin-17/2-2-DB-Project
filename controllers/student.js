const userModels = require('../models/user');

const infoModels = require('../models/category-course-info');


exports.getHome = async(req, res, next) => {

    const userId = req.params.ID;
    console.log(userId);

    const category_repo = await infoModels.getTopCategories();
    console.log(category_repo);

    const course_repo = await infoModels.getTopCourses();
    console.log(course_repo);

    const teacher_repo = await infoModels.getTopTeachers();
    console.log(teacher_repo);

    const user_repo = await userModels.findByID(userId);
    console.log(user_repo);

    if (category_repo[0]!=undefined && user_repo[0] != undefined) {
        return res.render('/', {
            pageTitle: 'Home',
            path: '/',
            isStudent: 'true',
            logged_in: 'true',
            categories: category_repo[0],
            courses: course_repo[0],
            teachers: teacher_repo[0],
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
        userInfo: user_repo.data[0]
    })

}
exports.getProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);

    const coursesTaken = await userRepository.coursesTaken(userId);
    console.log('coursesTaken : ', coursesTaken);


    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo.data[0],
            myCoursesReq: 'true',
            courses: coursesTaken.data,


        })
    }
}


exports.PostEditProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    let user_repo = await userRepository.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userRepository.coursesTaken(userId);

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

    const updateUser = await userRepository.updateUser(userId, name, email, pass, img_name);
    // console.log(updateUser.data.success);
    user_repo = await userRepository.findById(userId);

    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo.data[0],
            myCoursesReq: 'true',
            courses: coursesTaken.data,

        })
    }
}
exports.editProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userRepository.coursesTaken(userId);


    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            editReq: 'true',
            userInfo: user_repo.data[0],
            myCoursesReq: 'false',
            courses: coursesTaken.data,

        })

    }
}
exports.postSearch = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    let start = req.params.START;


    let searchReq = req.body.search_bar_req;
    console.log(searchReq);

    searchReq = searchReq.toLowerCase();

    let req_search = '%' + searchReq + '%';
    console.log(req_search)

    const search_repo = await infoRepository.getCoursesofSearch(req_search);
    console.log(search_repo);

    if (search_repo.success) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            req: searchReq,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'false',
            fromSearch: 'true',
            start: start
        })
    }


    let url = '/student/user/' + userId + '/';
    res.redirect(url);
}

exports.getAbout = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const testimonial_repo = await infoRepository.getTestimonials_about_learnE();
    console.log(testimonial_repo);

    if (testimonial_repo.success && user_repo.success) {
        return res.render('home/about-view.ejs', {
            pageTitle: 'About',
            path: '/about',
            isStudent: 'true',
            logged_in: 'true',
            testimonials: testimonial_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

}

exports.getCourses = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const category_repo = await infoRepository.getTopCategories();
    console.log(category_repo);

    if (category_repo.success && user_repo.success) {
        return res.render('home/courses-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            categories: category_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

}

exports.get_Category_view = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const reqCategory = req.params.CATEGORY;
    console.log('here : ', reqCategory);

    let start = req.params.START;
    console.log(start);

    const search_repo = await infoRepository.getCoursesOfCatagory(reqCategory);
    console.log(search_repo);

    if (user_repo.success && search_repo.success) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'true',
            logged_in: 'true',
            req: reqCategory,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'true',
            fromSearch: 'false',
            start: start
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

}
exports.getSingleCourseInsideView = async(req, res, next) => {
    console.log("inside course view")

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : user_repo', user_repo);

    const courseId = req.params.CRSID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('Module_repo ', Module_repo);

    const purchased = await infoRepository.isPurchased(courseId, userId);
    if (purchased.data.length == 0) {
        let completedContent = 0;
        const newPurchase = await infoRepository.createNewPurchase(courseId, userId, completedContent);
        console.log("new purchase : ", courseId, userId);
        console.log("new purchase repo : ", newPurchase.success);
    }



    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            reviewView: 'false',
            faqView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data

        })
    }
}





exports.getSingleCourseInsideModuleView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);

    const VideoContent_repo = await infoRepository.findContentsOfSingleModule(moduleId);

    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);
    console.log('this module : ', Module)


    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);
    console.log("  QUIZ CONTENT ", QuizContent_repo.data.length);



    const completed_content_repo = await infoRepository.get_Completion_of_a_module(courseId, userId, moduleId);


    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            reviewView: 'false',
            faqView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data[0],
            quizContentExistence: QuizContent_repo.data.length,
            completedContents: completed_content_repo.data

        })
    }
}
exports.postReview = async(req, res, next) => {
    console.log("INSIDE POST Review :");
    const userId = req.params.ID;
    const rating = req.body.rating;
    const review = req.body.review;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    //inserting the review into database, write a trigger for updating the Rating of this course
    const addReview = await infoRepository.addReviewByStudent(courseId, userId, rating, review);
    console.log('Redirecting this URL');
    const url = '/student/user/' + userId + '/course-inside-view/' + courseId + '/Review/';
    res.redirect(url)
}
exports.addReview = async(req, res, next) => {
    console.log("INSIDE Review :");
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    let reviewdBefore;
    const HasReviewdBefore = await userRepository.getReviewByStudent(courseId, userId);
    if (HasReviewdBefore.data.length == 0) {
        reviewdBefore = false;
        console.log("HASN'T REVIEWD BEFORE")
    } else {
        reviewdBefore = true;
        console.log(HasReviewdBefore);
    }

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            faqView: 'false',
            reviewExistence: reviewdBefore,
            ownReview: HasReviewdBefore.data[0],
            reviewView: 'true',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,


        })
    }
}
exports.getSingleCourseVideoContentView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const VideoContent_ID = req.params.VideoContent_ID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('here : ', Module_repo);
    const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);
    console.log('Module Founded : ', Module_repo);
    const video_content = await infoRepository.findVideoContentByContent_ID(VideoContent_ID);
    console.log('video content : ', video_content)

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'true',
            quizView: 'false',
            gradeView: 'false',
            faqView: 'false',
            reviewView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            contents: content_repo.data,
            video_content: video_content.data[0]

        })
    }
}
exports.getSingleCourseQuizContentView = async(req, res, next) => {
    console.log("get single course quiz content view ");
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const serial = req.params.SERIAL;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);


    const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);


    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);
    if (QuizContent_repo.data.length > 0) {
        //insert into grade with student ID, QUIZID, HOW MANY QUESTIONS
        const QUIZID = QuizContent_repo.data[0].QuizContent_ID;
        const quizTopic = Module.data[0].Topics;
        console.log("Topic : ", quizTopic);
        const answer = 0;
        const insertGrade = await infoRepository.addGrade(QUIZID, userId, QuizContent_repo.data.length, answer, courseId, quizTopic);
    }



    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'true',
            reviewView: 'false',
            gradeView: 'false',
            faqView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            contents: content_repo.data,
            question: QuizContent_repo.data[serial - 1],
            total_ques: QuizContent_repo.data.length,
            quiz_serial: serial,
            showAnswer: 'false',
            given_ans: 0
        })
    }
}
exports.getGrades = async(req, res, next) => {
    console.log("INSIDE GRADES");
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    const getGrades = await userRepository.getGrades(userId, courseId);
    let hasGrades;
    if (getGrades.data.length == 0) {
        hasGrades = false;
    } else hasGrades = true;
    console.log(getGrades);

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            faqView: 'false',
            quizView: 'false',
            reviewView: 'false',
            gradeView: 'true',
            gradeExistence: hasGrades,
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            grades: getGrades.data

        })
    }

}
exports.postSingleCourseQuizContentView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const serial = req.params.SERIAL;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);


    const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);


    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);
    const quizID = QuizContent_repo.data[0].QuizContent_ID;
    console.log("QUIZ ID : ", quizID);

    const Ans = QuizContent_repo.data[serial - 1].Answer;

    const ans1 = Boolean(req.body.option1);
    const ans2 = Boolean(req.body.option2);
    const ans3 = Boolean(req.body.option3);
    const ans4 = Boolean(req.body.option4);

    let test = ('ans' + Ans) == 1 ? 'hell yah' : 'hell no';
    console.log(test);

    let given_ans = 0;
    if (ans1 == 1) given_ans = 1;
    if (ans2 == 1) given_ans = 2;
    if (ans3 == 1) given_ans = 3;
    if (ans4 == 1) given_ans = 4;

    console.log(QuizContent_repo.data.length);
    if (Ans == given_ans) {
        //update correct answer
        const updateCorrectAnswer = await infoRepository.updateQuizCorrectAnswer(quizID, userId);
    }


    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'true',
            gradeView: 'false',
            faqView: 'false',
            reviewView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            contents: content_repo.data,
            question: QuizContent_repo.data[serial - 1],
            total_ques: QuizContent_repo.data.length,
            quiz_serial: serial,
            showAnswer: 'true',
            given_ans: given_ans
        })
    }





    let url = '/student/user/' + userId + '/course-inside-view/' + courseId + '/' + moduleId + '/quiz/' + serial;
    res.redirect(url);

}

exports.getCompletion = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const contentId = req.params.Content_ID;

    const check_insertion = await infoRepository.insert_Completion(courseId, userId, contentId, moduleId);
    console.log('check_insertion : ', check_insertion);

    let url = '/student/user/' + userId + '/course-inside-view/' + courseId + '/' + moduleId;
    res.redirect(url);

}

exports.get_course_view = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : ', course_repo);
    const courseTeacher_repo = await infoRepository.findCourseTeacherById(courseId);
    console.log('here : ', courseTeacher_repo);
    const content_repo = await infoRepository.getContentsOfCourse(courseId);
    console.log(content_repo);
    const review_repo = await infoRepository.findReviewsOfCourse(courseId);
    console.log("REVIEWS :", review_repo);
    const TopCourse_repo = await infoRepository.getTopCourses();
    console.log(TopCourse_repo);

    var isPurchased;
    const purchased = await infoRepository.isPurchased(courseId, userId);
    if (purchased.data.length == 0) isPurchased = false;
    else
        isPurchased = true;


    if (user_repo.success && course_repo.success && content_repo.success) {
        return res.render('course/course-view.ejs', {
            pageTitle: 'Course',
            path: '/course',
            isStudent: 'true',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            teachers: courseTeacher_repo.data,
            reviews: review_repo.data,
            topCourses: TopCourse_repo.data,
            contents: content_repo.data,
            purchased: isPurchased

        })
    }

}






exports.getTeachers = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const teacher_repo = await infoRepository.getTopTeachers();
    console.log(teacher_repo);

    if (teacher_repo.success && user_repo.success) {
        return res.render('home/teacher-view.ejs', {
            pageTitle: 'Teachers',
            path: '/teachers',
            isStudent: 'true',
            logged_in: 'true',
            teachers: teacher_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

}


exports.getSingleCourseInsideView_FAQ = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userRepository.findById(userId);
    const course_repo = await infoRepository.findCourseById(courseId);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);

    const others_ansQues_repo = await infoRepository.get_others_ansQues_by_courseId_studentId(courseId, userId);
    console.log('others ansQues : ', others_ansQues_repo, );
    const others_Ques_repo = await infoRepository.get_others_Ques_by_courseId_studentId(courseId, userId);
    console.log('others Ques : ', others_Ques_repo);

    const mine_ansQues_repo = await infoRepository.get_ansQues_by_courseId_studentId(courseId, userId);
    console.log('mine ans Ques : ', mine_ansQues_repo);
    const mine_Ques_repo = await infoRepository.get_Ques_by_courseId_studentId(courseId, userId);
    console.log('mine Ques : ', mine_Ques_repo);


    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            faqView: 'true',
            reviewView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            others_ansQues: others_ansQues_repo.data,
            others_Ques: others_Ques_repo.data,
            mine_ansQues: mine_ansQues_repo.data,
            mine_Ques: mine_Ques_repo.data,

        })
    }
}


exports.postSingleCourseInsideView_FAQ = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const question = req.body.question_inserted;
    console.log('question : ', question);

    const id_repo = await infoRepository.get_last_questionId_in_faq();
    console.log('id_repo : ', id_repo);
    let id = id_repo.data[0].id + 1;
    console.log('id: ', id);
    const insert_repo = await infoRepository.insert_into_FAQ(id, courseId, userId, question);
    console.log('insert_repo : ', insert_repo);

    let url = '/student/user/' + userId + '/course-inside-view/' + courseId + '/FAQ';
    res.redirect(url);

}