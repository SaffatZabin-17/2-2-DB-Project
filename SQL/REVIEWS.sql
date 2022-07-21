create table REVIEWS
(
    USER_ID     int           not null
        constraint REVIEWS_USER_USER_ID_FK
            references "USER",
    COURSE_ID   int           not null
        constraint REVIEWS_COURSE_COURSE_ID_FK
            references COURSE,
    REVIEW_BODY VARCHAR(4000) not null,
    RATING      FLOAT         not null,
    constraint REVIEWS_PK
        unique (USER_ID, COURSE_ID)
)
/

