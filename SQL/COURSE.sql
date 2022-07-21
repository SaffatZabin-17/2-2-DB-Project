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