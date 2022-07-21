create table INSTITUTION
(
    INSTITUTION_ID   int         not null
        constraint INSTITUTION_PK
            primary key,
    TYPE             VARCHAR(10) not null,
    NAME             VARCHAR(100) not null,
    EIIN             int,
    LOCATION         VARCHAR(100) not null,
    ZIP_CODE         int         not null,
    EMAIL            VARCHAR(50) not null,
    WEBSITE_LINK     VARCHAR(100) not null,
    INSTITUTION_LOGO VARCHAR(100)
)
/

create unique index INSTITUTION_EIIN_UINDEX
    on INSTITUTION (EIIN)
/

create unique index INSTITUTION_WEBSITE_LINK_UINDEX
    on INSTITUTION (WEBSITE_LINK)
/

INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00001,
        'University',
        'Bangladesh University of Engineering & Technology',
        1,
        'Jahir Rayhan Road, Shahbag, Dhaka-1000',
        1000,
        'buet_edu@buet.ac.bd',
        'https://buet.ac.bd',
        'C://Users/Downloads/Image_BUET.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00002,
        'University',
        'Khulna University of Engineering & Technology',
        2,
        'Fulbaria Gate, KUET Road, Khulna-9203',
        9203,
        'kuet_edu@kuet.ac.bd',
        'https://kuet.ac.bd',
        'C://Users/Downloads/Image_KUET.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00003,
        'University',
        'Dhaka University',
        3,
        'Shahbag, Dhaka-1000',
        1000,
        'du_edu@du.ac.bd',
        'https://du.ac.bd',
        'C://Users/Downloads/Image_DU.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00004,
        'School',
        'Ideal School and College',
        108277,
        'Arambagh, Motijheel, Dhaka-1000',
        1000,
        'ISC_school@gmail.com',
        'https://isc.ac.bd',
        'C://Users/Downloads/Image_ISC.jpg'
       );
INSERT INTO INSTITUTION (INSTITUTION_ID, TYPE, NAME, EIIN, LOCATION, ZIP_CODE, EMAIL, WEBSITE_LINK, INSTITUTION_LOGO)
VALUES (
        00005,
        'College',
        'Notre Dame College',
        108274,
        'Arambagh, Motijheel, Dhaka-1000',
        1000,
        'ndc_edu@gmail.com',
        'https://NDC.ac.bd',
        'C://Users/Downloads/Image_NDC.jpg'
       );