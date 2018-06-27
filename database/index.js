const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], keyspace: 'realtest' });
client.connect((err) => {
  if (err) {
    throw err;
  }
});
// change ListingOverview methods
const getListingOverview = (listingId, callback) => {
  const query = `select id, summary, theSpace, guestAccess,
  interactionWithGuests, otherThingsToNote, noOfGuests,
  noOfBedrooms, noOfBeds, noOfBaths, listingName, listingBlurb,
  neighborhood from realtable where id = ${listingId}`;
  client.execute(query, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const addListingOverview = (listingId, values, callback) => {
  const query = `insert into realtable (id, summary, theSpace, guestAccess,
  interactionWithGuests, otherThingsToNote, noOfGuests, noOfBedrooms,
  noOfBeds, noOfBaths, listingName, listingBlurb,
  neighborhood) values(${values})`;
  client.execute(query, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const changeListingOverview = (listingId, key, value, callback) => {
  const query = `update realtable set ${key}=${value} where id = ${listingId}`;
  client.execute(query, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const removeListingOverview = (listingId, column, callback) => {
  const query = `delete ${column} from realtable where id = ${listingId}`;
  client.execute(query, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

// sleepingDetail Mmethods
const getSleepingDetails = (listingID, callback) => {
  const query2 = `select id, noOfBeds, roomName,
  typeOfBed from realtabletwo where id = ${listingID}`;
  client.execute(query2, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const addSleepingDetails = (listingID, values, callback) => {
  const query2 = `insert into realtable (id, noOfBeds, roomName,
  typeOfBed) values(${values})`;
  client.execute(query2, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const changeSleepingDetails = (listingID, key, value, callback) => {
  const query2 = `update realtable set ${key}=${value} where id = ${listingID}`;
  client.execute(query2, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

const removeSleepingDetails = (listingID, column, callback) => {
  const query2 = `delete ${column} from realtable where id = ${listingID}`;
  client.execute(query2, (err, result) => {
    if (err)callback(err);
    callback(err, result.rows[0]);
  });
};

module.exports = {
  getListingOverview,
  getSleepingDetails,
  addListingOverview,
  addSleepingDetails,
  changeListingOverview,
  changeSleepingDetails,
  removeListingOverview,
  removeSleepingDetails,
};

/*

 THESE ARE THE ORIGINAL MYSQL QUERIES

 const mysql = require('mysql');
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'Dev_Airbnb_ListingDetails',
 });

 const getListingOverview = (listingId, callback) => {
   const sql = `SELECT ov.id, ov.summary, ov.theSpace, ov.guestAccess,
                ov.interactionWithGuests, ov.otherThingsToNote,
                ov.noOfGuests, ov.noOfBedrooms, ov.noOfBeds, ov.noOfBaths,
                loc.listingName, loc.listingBlurb, loc.neighborhood,
                ov.homeHighlights1, ov.homeHighlights2, ov.homeHighlights3
                FROM tblListingOverview as ov
                LEFT JOIN tblListingLocation AS loc ON ov.id = loc.id WHERE ov.id = ${listingId} ;`;
   connection.query(sql, (err, results) => {
     if (err) {
       callback(err, null);
     } else {
       callback(null, results);
     }
   });
 };

const getSleepingDetails = (listingID, callback) => {
  const sql = `SELECT sd.roomName, sd.noOfBeds,
  sd.typeOfBed FROM tblSleepingArrangements as sd WHERE sd.listingId = ${listingID} ;`;
   connection.query(sql, (err, results) => {
     if (err) {
       callback(err, null);
     } else {
       callback(null, results);
     }
   });
 };
 */
