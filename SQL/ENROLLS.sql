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

