create table FORUM_ANSWER
(
    FORUM_ANSWER_ID   NUMBER         not null
        constraint FORUM_ANSWER_PK
            primary key,
    DESCRIPTION       VARCHAR2(2000) not null,
    ANSWER_TIME       VARCHAR2(25)   not null,
    FORUM_QUESTION_ID NUMBER         not null
        constraint FORUM_ANSWER_FORUM_QUESTION_FORUM_QID_FK
            references FORUM_QUESTION
)
/

INSERT INTO FORUM_ANSWER (FORUM_ANSWER_ID, DESCRIPTION, ANSWER_TIME, FORUM_QUESTION_ID) VALUES (1, 1, 'Yes, that is how Java reference and instances work', '7/19/2022 08:30:00 pm');
