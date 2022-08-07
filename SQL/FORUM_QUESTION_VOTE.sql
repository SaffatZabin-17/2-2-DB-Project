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
