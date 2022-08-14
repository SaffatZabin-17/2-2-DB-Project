create table "USER"
(
    USER_ID  NUMBER       not null
        constraint USER_PK
            primary key,
    NAME     VARCHAR2(30) not null,
    EMAIL    VARCHAR2(30),
    PASSWORD VARCHAR2(30),
    IMAGE    VARCHAR2(100)
)
/

INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00001, 'Saffat Zabin', 'saffatzabin08430843@gmail.com', 'password1', 'C://Users/Downloads/Image01.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00002, 'Riad Ahmed Anonto', 'anonto69420@gmail.com', 'password2', 'C://Users/Downloads/Image02.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00003, 'Farhan Tahmid Ryan', 'farhanitrate35@gmail.com', 'password3', 'C://Users/Downloads/Image03.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00004, 'Hafijul Haque Chowdhury', 'nabid.hasan@gmail.com', 'password4', 'C://Users/Downloads/Image04.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00005, 'Syeda Rifah Tasfia', 'neha@gmail.com', 'password5', 'C://Users/Downloads/Image05.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00006, 'Md Motiur Hossain', 'motiur.rahman@gmail.com', 'password6', 'C://Users/Downloads/Image06.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00007, 'Md. Lal Mia', 'lal.mia@gmail.com', 'password7', 'C://Users/Downloads/Image07.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00008, 'Asif Azad', 'asif.azad@gmail.com', 'password8', 'C://Users/Downloads/Image08.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00009, 'Asif Al Shahriar', 'asif.shahriar@gmail.com', 'password9', 'C://Users/Downloads/Image09.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00010, 'Shattik Islam', 'shattik.islam@gmail.com', 'password10', 'C://Users/Downloads/Image10.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00011, 'Ibnul Islam', 'ibnul.islam@gmail.com', 'password11', 'C://Users/Downloads/Image11.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00012, 'Ishtiak Ahmed', 'ishtiak.ahmed@gmail.com', 'password12', 'C://Users/Downloads/Image12.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00013, 'Abrar Faiyaj', 'abrar.faiyaz@gmail.com', 'password13', 'C://Users/Downloads/Image13.png');
INSERT INTO "USER" (USER_ID, NAME, EMAIL, PASSWORD, IMAGE) VALUES (00014, 'Asibur Rahman', 'asib789@gmail.com', 'password14', 'C://Users/Downloads/Image14.png');

create table INSTRUCTOR
(
    USER_ID    NUMBER
        constraint INSTRUCTOR_USER__FK
            references "USER"
                on delete set null,
    SPECIALITY VARCHAR2(100),
    RATINGS    FLOAT
)
/

INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (1, 'Java Programming', 3.9);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (2, 'C++ Programming', 4.9);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (3, 'Mathematics', 4.8);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (4, 'Law and Finance', 4.8);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (5, 'Physics', 4.9);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (6, 'College Chemistry', 4.7);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (7, 'School Chemistry', 4.6);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (8, 'Operating System, Machine Learning, AI', 4.8);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (9, 'University Chemistry', 4.7);
INSERT INTO INSTRUCTOR (USER_ID, SPECIALITY, RATINGS) VALUES (10, 'Full Stack Web Development', 5.0);

create table INSTITUTION
(
    INSTITUTION_ID   int         not null
        constraint INSTITUTION_PK
            primary key,
    TYPE             VARCHAR(10) not null,
    NAME             VARCHAR(100) not null,
    EIIN             int,
    LOCATION         VARCHAR(100) not null,
    ZIP_CODE         int         not null,
    EMAIL            VARCHAR(50) not null,
    WEBSITE_LINK     VARCHAR(100) not null,
    INSTITUTION_LOGO VARCHAR(100)
)
/

create unique index INSTITUTION_EIIN_UINDEX
    on INSTITUTION (EIIN)
/

create unique index INSTITUTION_WEBSITE_LINK_UINDEX
    on INSTITUTION (WEBSITE_LINK)
/

INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00001,
        'University',
        'Bangladesh University of Engineering & Technology',
        1,
        'Jahir Rayhan Road, Shahbag, Dhaka-1000',
        1000,
        'buet_edu@buet.ac.bd',
        'https://buet.ac.bd',
        'C://Users/Downloads/Image_BUET.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00002,
        'University',
        'Khulna University of Engineering & Technology',
        2,
        'Fulbaria Gate, KUET Road, Khulna-9203',
        9203,
        'kuet_edu@kuet.ac.bd',
        'https://kuet.ac.bd',
        'C://Users/Downloads/Image_KUET.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00003,
        'University',
        'Dhaka University',
        3,
        'Shahbag, Dhaka-1000',
        1000,
        'du_edu@du.ac.bd',
        'https://du.ac.bd',
        'C://Users/Downloads/Image_DU.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00004,
        'School',
        'Ideal School and College',
        108277,
        'Arambagh, Motijheel, Dhaka-1000',
        1000,
        'ISC_school@gmail.com',
        'https://isc.ac.bd',
        'C://Users/Downloads/Image_ISC.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00005,
        'College',
        'Notre Dame College',
        108274,
        'Arambagh, Motijheel, Dhaka-1000',
        1000,
        'ndc_edu@gmail.com',
        'https://NDC.ac.bd',
        'C://Users/Downloads/Image_NDC.jpg'
       );

create table STUDENT
(
    USER_ID        int not null
        constraint STUDENT_USER_USER_ID_FK
            references "USER",
    EDUCATIONAL_LEVEL          VARCHAR(30),
    INSTITUTION_ID int not null
        constraint STUDENT_INSTITUTION_INSTITUTION_ID_FK
            references INSTITUTION
)
/

create unique index STUDENT_USER_ID_UINDEX
    on STUDENT (USER_ID)
/

INSERT INTO STUDENT (USER_ID, EDUCATIONAL_LEVEL, INSTITUTION_ID) VALUES (00011, 'School', 00004);
INSERT INTO STUDENT (USER_ID, EDUCATIONAL_LEVEL, INSTITUTION_ID) VALUES (00012, 'School', 00004);
INSERT INTO STUDENT (USER_ID, EDUCATIONAL_LEVEL, INSTITUTION_ID) VALUES (00013, 'College', 00005);
INSERT INTO STUDENT (USER_ID, EDUCATIONAL_LEVEL, INSTITUTION_ID) VALUES (00014, 'Undergraduate', 00001);

create table COURSE
(
    COURSE_ID          int          not null
        constraint COURSE_PK
            primary key,
    COURSE_NAME        VARCHAR(200) not null,
    COURSE_DESCRIPTION VARCHAR(2000) not null,
    TOTAL_MARKS        int,
    EDUCATIONAL_LEVEL  VARCHAR(10)
);

INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00001,
        'A Beginners Introduction to JAVA Programming',
        'Here in this course, you will learn JAVA Programming',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00002,
        'A Beginners Introduction to C++ Programming',
        'Here in this course, you will learn C++ Programming',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00003,
        'A Beginners Introduction to Full Stack Web Development',
        'Here in this course, you will learn Full Stack Web Development',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00004,
        'Introduction to College Chemistry',
        'Here in this course, you will learn college chemistry',
        300,
        'College');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00005,
        'Introduction to School Chemistry',
        'Here in this course, you will learn school chemistry',
        300,
        'School');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00006,
        'A Beginners Introduction to Mathematics',
        'Here in this course, you will learn Mathematics',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00007,
        'A Beginners Introduction to Physics',
        'Here in this course, you will learn Physics',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00008,
        'A Beginners Introduction to Machine Learning & AI',
        'Here in this course, you will learn algorithms related to Machine Learning & Artificial Intelligence',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00009,
        'A Beginners Introduction to University Chemistry',
        'Here in this course, you will learn advanced University chemistry',
        300,
        'University');
INSERT INTO COURSE (COURSE_ID, COURSE_NAME, COURSE_DESCRIPTION, TOTAL_MARKS, EDUCATIONAL_LEVEL)
VALUES (00010,
        'A Beginners Introduction to Law & Finance',
        'Here in this course, you will learn law & finance',
        300,
        'University');

create table TOPICS
(
    TOPIC_ID          int not null
        constraint TOPICS_PK
            primary key,
    TOPIC_TITLE       VARCHAR(300),
    TOPIC_DESCRIPTION VARCHAR(500),
    COURSE_ID         int not null
        constraint TOPICS_COURSE_COURSE_ID_FK
            references COURSE
)
/

INSERT INTO TOPICS (TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
VALUES (
        00001,
        'Object Oriented Programming',
        'Here we will begin with Java OOP',
        00001);
INSERT INTO TOPICS (TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
VALUES (
        00002,
        'Java Basic Syntax',
        'Here we will begin with Java basic syntax',
        00001
       );
INSERT INTO TOPICS (TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
VALUES (
        00003,
        'Java Data Structures and Collection Class',
        'Here we will begin with Java data structures & collection class',
        00001
       );
INSERT INTO TOPICS (TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
VALUES (
        00004,
        'Java Inheritance & Polymorphism',
        'Here we will begin with Java Inheritance & Polymorphism',
        00001
       );
INSERT INTO TOPICS (TOPIC_ID, TOPIC_TITLE, TOPIC_DESCRIPTION, COURSE_ID)
VALUES (
        00005,
        'Java Advanced: Multithreading & Networking',
        'Here we will begin with Java advanced features: Multithreading & Networking',
        00001
       );

create table CONTENTS
(
    CONTENT_ID NUMBER        not null
        constraint TABLE_NAME_PK
            primary key,
    SL_NO      NUMBER        not null,
    TITLE      VARCHAR2(100) not null,
    DURATION   VARCHAR2(10)  not null,
    TOPIC_ID   NUMBER        not null
        constraint TABLE_NAME_TOPICS_TOPIC_ID_FK
            references TOPICS
)
/

INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (1, 1, 'What is OOP?', '05:00:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (2, 2, 'OOP in Java', '04:00:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (3, 3, 'Classes & Instances', '05:30:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (4, 1, 'Java Basic Input & Output: The Scanner class', '02:50:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (5, 2, 'Java Data Types', '05:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (6, 3, 'Java Conditional Statements', '03:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (7, 4, 'Loops in Java: For loop, While loop, Do-while loop', '06:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (8, 1, 'Java Data Structures: Array, LinkedList, Queue, Stack', '05:00:00', 3);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (9, 2, 'Java Collection Class: ArrayList, Set, LinkedList, Hashset', '10:00:00', 3);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (10, 1, 'Java Inheritance: Super class, Child class, Nested class', '10:00:00', 4);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (11, 2, 'Java Polymorphism: Function Overloading, Constructor Overloading', '10:00:00', 4);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (12, 1, 'Java advanced: Multithreading', '15:00:00', 5);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (13, 2, 'Java advanced: Networking', '15:00:00', 5);

create table EXAM
(
    CONTENT_ID  NUMBER not null
        constraint EXAM_PK
            primary key
        constraint EXAM_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    TOTAL_MARKS NUMBER not null
)
/

INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (1, 10);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (2, 15);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (3, 30);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (4, 10);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (5, 15);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (6, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (7, 25);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (8, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (9, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (10, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (11, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (12, 30);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (13, 30);

create table VIDEO
(
    CONTENT_ID NUMBER not null
        constraint VIDEO_PK
            primary key
        constraint VIDEO_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    URL_LINK   VARCHAR2(150)
)
/

INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (1, 'https://www.youtube.com/video1');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (2, 'https://www.youtube.com/video2');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (3, 'https://www.youtube.com/video3');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (4, 'https://www.youtube.com/video4');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (5, 'https://www.youtube.com/video5');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (6, 'https://www.youtube.com/video6');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (7, 'https://www.youtube.com/video7');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (8, 'https://www.youtube.com/video8');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (9, 'https://www.youtube.com/video9');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (10, 'https://www.youtube.com/video10');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (11, 'https://www.youtube.com/video11');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (12, 'https://www.youtube.com/video12');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (13, 'https://www.youtube.com/video13');

create table QUESTION_ANSWER
(
    "Question_ID" NUMBER         not null
        constraint QUESTION_ANSWER_PK
            primary key,
    SL_NO         NUMBER         not null,
    DESCRIPTION   VARCHAR2(1000) not null,
    OPTION_1      VARCHAR2(100)  not null,
    OPTION_2      VARCHAR2(100)  not null,
    OPTION_3      VARCHAR2(100)  not null,
    OPTION_4      VARCHAR2(100)  not null,
    CONTENT_ID    NUMBER
        constraint "Q&A_CONTENTS_CONTENT_ID_FK"
            references CONTENTS
)
/

create table ANSWER
(
    CORRECT_ANSWER VARCHAR2(100),
    "Question_ID"  NUMBER
        constraint ANSWER_QUESTION_ANSWER_QUESTION_ID_FK
            references Question_Answer
)
/

create table FORUM_QUESTION
(
    FORUM_QID            NUMBER         not null
        constraint FORUM_QUESTION_PK
            primary key,
    TOPIC                VARCHAR2(100)  not null,
    QUESTION_DESCRIPTION VARCHAR2(2000) not null,
    QUESTION_TIME        VARCHAR2(30)   not null
)
/

INSERT INTO FORUM_QUESTION (FORUM_QID, TOPIC, QUESTION_DESCRIPTION, QUESTION_TIME)
VALUES (
        1,
        'Java OOP',
        'I dont understand Java pass by reference and instance of an object. When I pass an object, do I pass the instance of that object through a reference?',
        '07/19/2022 8:10:00 pm');

create table FORUM_ANSWER
(
    FORUM_ANSWER_ID   NUMBER         not null
        constraint FORUM_ANSWER_PK
            primary key,
    DESCRIPTION       VARCHAR2(1000) not null,
    ANSWER_TIME       VARCHAR2(25)   not null,
    FORUM_QUESTION_ID NUMBER         not null
        constraint FORUM_ANSWER_FORUM_QUESTION_FORUM_QID_FK
            references FORUM_QUESTION
)
/

INSERT INTO FORUM_ANSWER (FORUM_ANSWER_ID, DESCRIPTION, ANSWER_TIME, FORUM_QUESTION_ID) VALUES (1, 'Yes, that is how Java reference and instances work', '7/19/2022 08:30:00 pm', 1);

create table WRITTEN_DOCUMENT
(
    CONTENT_ID  NUMBER         not null
        constraint WRITTEN_DOCUMENT_PK
            primary key
        constraint WRITTEN_DOCUMENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    DESCRIPTION VARCHAR2(4000) not null
)
/

INSERT INTO WRITTEN_DOCUMENT (CONTENT_ID, DESCRIPTION) VALUES (1, 'Written Documents go here');

create table INDEPENDENT_INSTRUCTOR
(
    USER_ID   NUMBER not null
        constraint INDEPENDENT_PK
            primary key
        constraint INDEPENDENT_USER_USER_ID_FK
            references "USER",
    WORKPLACE VARCHAR2(50)
)
/

INSERT INTO INDEPENDENT_INSTRUCTOR (USER_ID, WORKPLACE) VALUES (1, 'Microsoft');
INSERT INTO INDEPENDENT_INSTRUCTOR (USER_ID, WORKPLACE) VALUES (3, 'Google');
INSERT INTO INDEPENDENT_INSTRUCTOR (USER_ID, WORKPLACE) VALUES (5, 'Amazon');
INSERT INTO INDEPENDENT_INSTRUCTOR (USER_ID, WORKPLACE) VALUES (8, 'DeepLearning.AI');
INSERT INTO INDEPENDENT_INSTRUCTOR (USER_ID, WORKPLACE) VALUES (9, 'Google');

create table INSTITUTIONAL_INSTRUCTOR
(
    USER_ID        NUMBER not null
        constraint INSTITUTIONAL_INSTRUCTOR_PK
            primary key
        constraint INSTITUTIONAL_INSTRUCTOR_USER_USER_ID_FK
            references "USER",
    INSTITUTION_ID NUMBER not null
        constraint INSTITUTIONAL_INSTRUCTOR_INSTITUTION_INSTITUTION_ID_FK
            references INSTITUTION
)
/

INSERT INTO INSTITUTIONAL_INSTRUCTOR (USER_ID, INSTITUTION_ID) VALUES (2, 1);
INSERT INTO INSTITUTIONAL_INSTRUCTOR (USER_ID, INSTITUTION_ID) VALUES (4, 1);
INSERT INTO INSTITUTIONAL_INSTRUCTOR (USER_ID, INSTITUTION_ID) VALUES (6, 5);
INSERT INTO INSTITUTIONAL_INSTRUCTOR (USER_ID, INSTITUTION_ID) VALUES (7, 4);
INSERT INTO INSTITUTIONAL_INSTRUCTOR (USER_ID, INSTITUTION_ID) VALUES (10, 1);

create table "COMMENT"
(
    CONTENT_ID  NUMBER         not null
        constraint COMMENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    USER_ID     NUMBER         not null
        constraint COMMENT_USER_USER_ID_FK
            references "USER",
    DESCRIPTION VARCHAR2(4000) not null
)
/

INSERT INTO "COMMENT"(CONTENT_ID, USER_ID, DESCRIPTION) VALUES (2,14,'Insert Comment Here');

create table ENROLLS
(
    USER_ID   int not null
        constraint ENROLLS_USER_USER_ID_FK
            references "USER",
    COURSE_ID int not null
        constraint ENROLLS_COURSE_COURSE_ID_FK
            references COURSE,
    constraint ENROLLS_PK
        primary key (USER_ID, COURSE_ID)
)
/

INSERT INTO ENROLLS (USER_ID, COURSE_ID) VALUES (13,2);
INSERT INTO ENROLLS (USER_ID, COURSE_ID) VALUES (11, 1);

create table INSTRUCTS
(
    USER_ID   int not null
        constraint INSTRUCTS_USER_USER_ID_FK
            references "USER",
    COURSE_ID int not null
        constraint INSTRUCTS_COURSE_COURSE_ID_FK
            references COURSE,
    constraint INSTRUCTS_PK
        primary key (USER_ID, COURSE_ID)
)
/

INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (1, 1);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (2, 2);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (3, 6);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (10, 3);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (6, 4);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (4, 10);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (5, 7);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (7, 5);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (8, 8);
INSERT INTO INSTRUCTS (USER_ID, COURSE_ID) VALUES (9, 9);

create table COMPLETED_CONTENT
(
    USER_ID        NUMBER not null
        constraint COMPLETED_CONTENT_USER_USER_ID_FK
            references "USER",
    CONTENT_ID     NUMBER not null
        constraint COMPLETED_CONTENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    OBTAINED_MARKS NUMBER not null,
    constraint COMPLETED_CONTENT_PK
        primary key (USER_ID, CONTENT_ID)
)
/

INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 1, 10);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 2, 12);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 3, 25);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 4, 10);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 5, 13);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 6, 18);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 7, 25);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 8, 16);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 9, 19);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 10, 18);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 11, 17);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 12, 12);
INSERT INTO COMPLETED_CONTENT(USER_ID, CONTENT_ID, OBTAINED_MARKS) VALUES (11, 13, 15);

create table PUBLISHES
(
    FORUM_ANSWER_ID int
        constraint PUBLISHES_FORUM_ANSWER_FORUM_ANSWER_ID_FK
            references FORUM_ANSWER,
    USER_ID         int
        constraint PUBLISHES_USER_USER_ID_FK
            references "USER",
    constraint PUBLISHES_PK
        primary key (FORUM_ANSWER_ID, USER_ID)
)
/

INSERT INTO PUBLISHES (FORUM_ANSWER_ID, USER_ID) VALUES (1, 1);

create table FORUM_ANSWER_VOTE
(
    FORUM_ANSWER_ID int not null
        constraint FORUM_ANSWER_VOTE_FORUM_ANSWER_FORUM_ANSWER_ID_FK
            references FORUM_ANSWER,
    USER_ID         int not null
        constraint FORUM_ANSWER_VOTE_USER_USER_ID_FK
            references "USER",
    constraint FORUM_ANSWER_VOTE_PK
        primary key (FORUM_ANSWER_ID, USER_ID)
)
/

INSERT INTO FORUM_ANSWER_VOTE (FORUM_ANSWER_ID, USER_ID) VALUES (1, 1);

create table FORUM_QUESTION_NOTIFICATION
(
    FORUM_QUESTION_ID NUMBER not null
        constraint NOTIFICATION_FORUM_QUESTION_FORUM_QID_FK
            references FORUM_QUESTION,
    USER_ID           NUMBER not null
        constraint NOTIFICATION_USER_USER_ID_FK
            references "USER",
    constraint NOTIFICATION_PK
        primary key (FORUM_QUESTION_ID, USER_ID)
)
/

INSERT INTO FORUM_QUESTION_NOTIFICATION (FORUM_QUESTION_ID, USER_ID) VALUES (1,1);

create table FORUM_QUESTION_VOTE
(
    FORUM_QUESTION_ID NUMBER not null
        constraint FORUM_QUESTION_VOTE_FORUM_QUESTION_FORUM_QID_FK
            references FORUM_QUESTION,
    USER_ID           NUMBER not null
        constraint FORUM_QUESTION_VOTE_USER_USER_ID_FK
            references "USER",
    constraint FORUM_QUESTION_VOTE_PK
        primary key (FORUM_QUESTION_ID, USER_ID)
)
/

INSERT INTO FORUM_QUESTION_VOTE (FORUM_QUESTION_ID, USER_ID) VALUES (1, 11);

create table CONTENT_NOTIFICATION
(
    CONTENT_ID NUMBER       not null
        constraint CONTENT_NOTIFICATION_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    USER_ID    NUMBER       not null
        constraint CONTENT_NOTIFICATION_USER_USER_ID_FK
            references "USER",
    TIME       VARCHAR2(25) not null,
    constraint CONTENT_NOTIFICATION_PK
        primary key (CONTENT_ID, USER_ID)
)
/

INSERT INTO CONTENT_NOTIFICATION(CONTENT_ID, USER_ID, TIME) VALUES (1, 1, '7/09/2022 09:48:00 PM');

create table REVIEWS
(
    USER_ID     int           not null
        constraint REVIEWS_USER_USER_ID_FK
            references "USER",
    COURSE_ID   int           not null
        constraint REVIEWS_COURSE_COURSE_ID_FK
            references COURSE,
    REVIEW_BODY VARCHAR(4000) not null,
    RATING      FLOAT         not null,
    constraint REVIEWS_PK
        unique (USER_ID, COURSE_ID)
)
/
