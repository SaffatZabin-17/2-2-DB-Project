create table "USER"
(
    USER_ID  NUMBER       not null
        constraint USER_PK
            primary key,
    NAME     VARCHAR2(30) not null,
    EMAIL    VARCHAR2(30),
    PASSWORD VARCHAR2(30),
    IMAGE    VARCHAR2(100)
)
/


