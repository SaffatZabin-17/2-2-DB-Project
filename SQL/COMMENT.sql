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

INSERT INTO "COMMENT"(CONTENT_ID, USER_ID, DESCRIPTION) VALUES (2,14,'Insert Comment Here');
