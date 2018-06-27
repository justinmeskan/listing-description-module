const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/listings/:id', express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());

// All the RESTFUL methods for the overview request
app.get('/listings/:listingId/overview', (req, res) => {
  db.getListingOverview(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.post('/listings/:listingId/overview', (req, res) => {
  db.addListingOverview(req.params.listingId, req.body.values, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.put('/listings/:listingId/overview', (req, res) => {
  db.changeListingOverview(req.params.listingId, req.body.key, req.body.value, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.delete('/listings/:listingId/overview', (req, res) => {
  db.removeListingOverview(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

// All the RESTFUL methods for arrangements request
app.get('/listings/:listingId/arrangements', (req, res) => {
  db.getSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.post('/listings/:listingId/arrangements', (req, res) => {
  db.addSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.put('/listings/:listingId/arrangements', (req, res) => {
  db.changeSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.delete('/listings/:listingId/arrangements', (req, res) => {
  db.removeSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

module.exports = app;
