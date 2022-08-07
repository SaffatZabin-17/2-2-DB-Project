create table "COMMENT"
(
    CONTENT_ID  NUMBER         not null
        constraint COMMENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    USER_ID     NUMBER         not null
        constraint COMMENT_USER_USER_ID_FK
            references "USER",
    DESCRIPTION VARCHAR2(4000) not null
)
/
