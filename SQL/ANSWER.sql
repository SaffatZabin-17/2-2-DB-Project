create table ANSWER
(
    CORRECT_ANSWER VARCHAR2(100),
    "Question_ID"  NUMBER
        constraint ANSWER_QUESTION_ANSWER_QUESTION_ID_FK
            references Question_Answer ()
)
/


