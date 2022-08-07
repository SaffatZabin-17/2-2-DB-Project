create table COMPLETED_CONTENT
(
    USER_ID        NUMBER not null
        constraint COMPLETED_CONTENT_USER_USER_ID_FK
            references "USER",
    CONTENT_ID     NUMBER not null
        constraint COMPLETED_CONTENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    OBTAINED_MARKS NUMBER not null,
    constraint COMPLETED_CONTENT_PK
        primary key (USER_ID, CONTENT_ID)
)
/
