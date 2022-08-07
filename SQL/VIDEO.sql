create table VIDEO
(
    CONTENT_ID NUMBER not null
        constraint VIDEO_PK
            primary key
        constraint VIDEO_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    URL_LINK   VARCHAR2(150)
)
/

INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (1, 'https://www.youtube.com/video1');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (2, 'https://www.youtube.com/video2');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (3, 'https://www.youtube.com/video3');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (4, 'https://www.youtube.com/video4');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (5, 'https://www.youtube.com/video5');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (6, 'https://www.youtube.com/video6');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (7, 'https://www.youtube.com/video7');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (8, 'https://www.youtube.com/video8');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (9, 'https://www.youtube.com/video9');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (10, 'https://www.youtube.com/video10');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (11, 'https://www.youtube.com/video11');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (12, 'https://www.youtube.com/video12');
INSERT INTO VIDEO (CONTENT_ID, URL_LINK) VALUES (13, 'https://www.youtube.com/video13');
