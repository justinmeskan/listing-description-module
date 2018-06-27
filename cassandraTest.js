CREATE KEYSPACE realtest WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

use realtest;

create table realtable(
    id int,
    noOfBaths int,
    noOfBedrooms int,
    noOfBeds int,
    noOfGuests int,
    guestAccess text,
    homeHighlights1 text,
    homeHighlights2 text,
    homeHighlights3 text,
    interactionWithGuests text,
    listingBlurb text,
    listingName text,
    neighborhood text,
    otherThingsToNote text,
    summary text,
    theSpace text,
    PRIMARY KEY(id)
);
create table realtabletwo(
    id int,
    noOfBeds int,
    roomName text,
    typeOfBed text,
    PRIMARY KEY(id)
);

COPY realtest.realtable (id,noOfBaths,noOfBedrooms,noOfBeds,noOfGuests,guestAccess,homeHighlights1,homeHighlights2,homeHighlights3,interactionWithGuests,listingBlurb,listingName,neighborhood,otherThingsToNote,summary,theSpace) FROM './data.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY realtest.realtabletwo (id, noOfBeds, roomName, typeOfBed) FROM './data2.csv' WITH DELIMITER=',' AND HEADER=TRUE;

