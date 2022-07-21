create table QUESTION_ANSWER
(
    "Question_ID" NUMBER         not null
        constraint QUESTION_ANSWER_PK
            primary key,
    SL_NO         NUMBER         not null,
    DESCRIPTION   VARCHAR2(1000) not null,
    OPTION_1      VARCHAR2(100)  not null,
    OPTION_2      VARCHAR2(100)  not null,
    OPTION_3      VARCHAR2(100)  not null,
    OPTION_4      VARCHAR2(100)  not null,
    CONTENT_ID    NUMBER
        constraint "Q&A_CONTENTS_CONTENT_ID_FK"
            references CONTENTS
)
/


