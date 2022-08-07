create table EXAM
(
    CONTENT_ID  NUMBER not null
        constraint EXAM_PK
            primary key
        constraint EXAM_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    TOTAL_MARKS NUMBER not null
)
/

INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (1, 10);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (2, 15);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (3, 30);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (4, 10);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (5, 15);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (6, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (7, 25);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (8, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (9, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (10, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (11, 20);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (12, 30);
INSERT INTO EXAM (CONTENT_ID, TOTAL_MARKS) VALUES (13, 30);
