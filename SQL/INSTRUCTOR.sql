create table INSTRUCTOR
(
    USER_ID    NUMBER
        constraint INSTRUCTOR_USER__FK
            references "USER"
                on delete set null,
    SPECIALITY VARCHAR2(100),
    RATINGS    FLOAT
)
/


