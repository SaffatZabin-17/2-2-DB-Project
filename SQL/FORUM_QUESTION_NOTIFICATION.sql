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


