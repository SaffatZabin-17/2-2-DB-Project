create table INSTITUTIONAL_INSTRUCTOR
(
    USER_ID        NUMBER not null
        constraint INSTITUTIONAL_INSTRUCTOR_PK
            primary key
        constraint INSTITUTIONAL_INSTRUCTOR_USER_USER_ID_FK
            references "USER",
    INSTITUTION_ID NUMBER not null
        constraint INSTITUTIONAL_INSTRUCTOR_INSTITUTION_INSTITUTION_ID_FK
            references INSTITUTION
)
/


