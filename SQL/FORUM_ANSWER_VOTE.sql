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
