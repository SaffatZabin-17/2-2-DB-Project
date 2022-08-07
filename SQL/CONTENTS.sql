create table CONTENTS
(
    CONTENT_ID NUMBER        not null
        constraint TABLE_NAME_PK
            primary key,
    SL_NO      NUMBER        not null,
    TITLE      VARCHAR2(100) not null,
    DURATION   VARCHAR2(10)  not null,
    TOPIC_ID   NUMBER        not null
        constraint TABLE_NAME_TOPICS_TOPIC_ID_FK
            references TOPICS
)
/
