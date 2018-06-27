import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Overview from './Overview.jsx';
import Highlights from './Highlights.jsx';
import Summary from './Summary.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';

const Div2h22gn = Styled.div`
  margin-left: -8px !important;
  margin-right: -8px !important;
  box-sizing: border-box;
`;
const Div1kzvqab3 = Styled.div`
  padding-left: 8px !important;
  padding-right: 8px !important;
  min-height: 1px !important;
  position: relative !important;
  box-sizing: border-box;
`;
const Div76irmj = Styled.div`
  border-bottom: 1px solid #DBDBDB !important;
`;
const listingId = window.location.pathname.split('/')[2];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      loc: '',
      ln: '',
      lb: '',
      intro: [],
      s1: [],
      s2: [],
      s3: [],
      s4: [],
      br: '',
      bd: '',
      ba: '',
      gs: '',
      sleep: [],
      roomTally: 0,
      rightClicksAvailable: 0,
    };
    this.tallyUpRoomCounts = this.tallyUpRoomCounts.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/overview`)
      .then((results) => {
        const loc = results.data.neighborhood;
        const ln = results.data.listingname;
        const lb = results.data.listingblurb;
        const intro = results.data.summary.split('.');
        const s1 = results.data.thespace.split('.');
        const s2 = results.data.guestaccess.split('.');
        const s3 = results.data.interactionwithguests.split('.');
        const s4 = results.data.otherthingstonote.split('.');
        const br = results.data.noofbedrooms;
        const bd = results.data.noofbeds;
        const ba = results.data.noofbaths;
        const gs = results.data.noofguests;
        const hh1 = results.data.homehighlights1;
        const hh2 = results.data.homehighlights2;
        const hh3 = results.data.homehighlights3;

        this.setState({
          loc,
          ln,
          lb,
          overview: results.data,
          intro,
          s1,
          s2,
          s3,
          s4,
          br,
          bd,
          ba,
          gs,
          hh1,
          hh2,
          hh3,
        });
      })
      .catch((error) => {
        throw error;
      });
    axios.get(`/listings/${listingId}/arrangements`)
      .then((results) => {
        const sleep = [];
        const keys = Object.keys(results.data);
        for (let i = 0; i < keys.length; i += 1) {
          sleep.push(results.data);
        }
        this.setState({
          sleep,
        }, () => {
          this.tallyUpRoomCounts();
        });
      });
  }
  tallyUpRoomCounts() {
    let tally = 0;
    for (let i = 0; i < this.state.sleep.length; i += 1) {
      tally += 1;
    }
    this.setState({
      roomTally: tally,
      rightClicksAvailable: (tally - 3) < 0 ? 0 : (tally - 3),
    });
  }
  render() {
    return (
      <Div2h22gn className='2h22gn'>
        <Div1kzvqab3 className='1kzvqab3'>
          <div>
            <div>
              <Summary
                listingName={this.state.ln}
                listingBlurb={this.state.lb}
                location={this.state.loc}
                noOfBedrooms={this.state.br}
                noOfBeds={this.state.bd}
                noOfBath={this.state.ba}
                noOfGuests={this.state.gs}
              />
              <Highlights
                homeHighlight1={this.state.hh1}
                homeHighlight2={this.state.hh2}
                homeHighlight3={this.state.hh3}
              />
              <Overview
                intro={this.state.intro}
                section1= {this.state.s1}
                section2= {this.state.s2}
                section3= {this.state.s3}
                section4= {this.state.s4}
              />
            </div>
              {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
            <div>
              {/* Amenities */}
              <Amenities />
            </div>
            {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
            <div>
              {/* Sleeping Arrangements */}
              <SleepingArrangements
                sleep = {this.state.sleep}
                roomTally = {this.state.roomTally}
                rightClicksAvailable = {this.state.rightClicksAvailable}
              />
            </div>
            {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
          </div>
        </Div1kzvqab3>
      </Div2h22gn>
    );
  }
}

export default App;
