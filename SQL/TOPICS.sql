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
