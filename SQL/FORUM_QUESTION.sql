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
