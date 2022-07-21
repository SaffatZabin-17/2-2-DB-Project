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

