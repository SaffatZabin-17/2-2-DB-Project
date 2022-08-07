create table WRITTEN_DOCUMENT
(
    CONTENT_ID  NUMBER         not null
        constraint WRITTEN_DOCUMENT_PK
            primary key
        constraint WRITTEN_DOCUMENT_CONTENTS_CONTENT_ID_FK
            references CONTENTS,
    DESCRIPTION VARCHAR2(4000) not null
)
/

INSERT INTO WRITTEN_DOCUMENT (CONTENT_ID, DESCRIPTION) VALUES (1, 'Written Documents go here');
