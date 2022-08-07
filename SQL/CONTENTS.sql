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

INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (1, 1, 'What is OOP?', '05:00:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (2, 2, 'OOP in Java', '04:00:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (3, 3, 'Classes & Instances', '05:30:00', 1);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (4, 1, 'Java Basic Input & Output: The Scanner class', '02:50:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (5, 2, 'Java Data Types', '05:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (6, 3, 'Java Conditional Statements', '03:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (7, 4, 'Loops in Java: For loop, While loop, Do-while loop', '06:00:00', 2);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (8, 1, 'Java Data Structures: Array, LinkedList, Queue, Stack', '05:00:00', 3);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (9, 2, 'Java Collection Class: ArrayList, Set, LinkedList, Hashset', '10:00:00', 3);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (10, 1, 'Java Inheritance: Super class, Child class, Nested class', '10:00:00', 4);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (11, 2, 'Java Polymorphism: Function Overloading, Constructor Overloading', '10:00:00', 4);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (12, 1, 'Java advanced: Multithreading', '15:00:00', 5);
INSERT INTO CONTENTS(CONTENT_ID, SL_NO, TITLE, DURATION, TOPIC_ID) VALUES (13, 2, 'Java advanced: Networking', '15:00:00', 5);
