const faker = require('faker');
const fs = require('fs');
const makeCSV = () => {
	let string = 'id, noOfBaths, noOfBedrooms, noOfBeds, noOfGuests, guestAccess, homeHighlights1, homeHighlights2, homeHighlights3, interactionWithGuests, listingBlurb, listingName, neighborhood, otherThingsToNote, summary, theSpace\n';
	let count = 0;
	let exponent = 0;
	let id;
	let noOfBaths;
	let noOfBedrooms;
	let noOfBeds;
	let noOfGuests;
	let guestAccess;
	let homeHighlights1;
	let homeHighlights2;
	let homeHighlights3;
	let interactionWithGuests;
	let listingBlurb;
	let listingName;
	let neighborhood;
	let otherThingsToNote;
	let summary;
	let theSpace;
	let inc = -1;
	while (exponent < 100){
		while (count < 100000) {
			inc++;
			id = inc;
			noOfBaths = Math.floor(Math.random() * 5);
			noOfBedrooms = Math.floor(Math.random() * 4);
			noOfBeds = Math.floor(Math.random() * 3);
			noOfGuests = Math.floor(Math.random() * 5);
			homeHighlights1 = faker.address.state();
			homeHighlights2 = faker.hacker.noun(); 
			homeHighlights3 = faker.address.city();
			interactionWithGuests = faker.lorem.sentences();
			listingName = faker.date.month();
			listingBlurb = faker.date.weekday();
			neighborhood = faker.hacker.verb();
			guestAccess = faker.lorem.sentences();
			otherThingsToNote = faker.finance.accountName();
			theSpace = faker.lorem.sentences();
			summary = faker.lorem.sentences();
			string += id +', '+ noOfBaths +', '+ noOfBedrooms +', '+ noOfBeds +', '+ noOfGuests +', '+ guestAccess +', '+ homeHighlights1 +', '+ homeHighlights2 +', '+ homeHighlights3 +', '+ interactionWithGuests +', '+ listingBlurb +', '+ listingName +', '+ neighborhood +', '+ otherThingsToNote +', '+ summary +', '+ theSpace + '\n';
			count++;
		}
		fs.appendFileSync('./data.csv', string);
		string = '';
		exponent++;
		count = 0;
	}
}

const makeCSV2 = () => {
	let string = 'id,noOfBeds,roomName,typeOfBed\n';
	let count = 0;
	let exponent = 0;
	let id;
	let noOfBeds;
	let roomName;
	let typeOfBed;

	let inc = -1;
	while (exponent < 100){
		while (count < 100000) {
			inc++;
			id = inc;
			noOfBeds = Math.floor(Math.random() * 5);
			roomName = faker.address.state();
			typeOfBed = faker.date.month();
			string += id +','+ noOfBeds +','+ roomName +','+ typeOfBed + '\n';
			count++;
		}
		fs.appendFileSync('./data2.csv', string);
		string = '';
		exponent++;
		count = 0;
	}
}
makeCSV();
// makeCSV2();

