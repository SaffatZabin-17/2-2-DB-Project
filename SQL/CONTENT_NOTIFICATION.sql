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
