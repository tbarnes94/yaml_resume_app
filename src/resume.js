import React from 'react';
import './resume.css';
import Section from './section';
const cv = require('./templates/thomasbarnes.json').resume;

export default class Resume extends React.Component {

  constructor() {
    super();

    this.state = {
      name: {
        first: '',
        middle: '',
        last: ''
      },
      email: '',
      options: [],
      sections: []
    }
  }

  componentDidMount() {
    this.initializeParams();
    console.log('$$ state from Resume', this.state);
  }

  initializeParams = () => {
    const name = {
      first: cv[0].name[0].first,
      middle: cv[0].name[0].middle,
      last: cv[0].name[0].last
    };

    const email = cv[1].email;
    const options = cv[2].options;
    const sections = cv[3].sections;

    this.setState({
      name,
      email,
      options,
      sections
    });
  }
  
  render () {
    // const img_url = 'https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.0-9/48397510_10157176821969645_8214141283065659392_n.jpg?_nc_cat=100&_nc_oc=AQnT4q27vKw_0WHirzl3989tzQISi8DEIAUirdt5gI4yN4KeMH7ED7RP0TPmd8BuwnQ&_nc_ht=scontent.fnyc1-1.fna&oh=2bc76fe24f06eb4a9267a60290f5d49d&oe=5DA1F622';
    return (
      <div className="resume">
        <div className="resume-header big-text">
          <h1 className="name">{`${this.state.name.first} ${this.state.name.middle[0]}. ${this.state.name.last}`}</h1>
          {/* <img src={img_url} alt='headshot' height='100' /> */}
        </div>
        <b>{this.state.email}{this.state.options.map(function(option){ return ` | ${option}` })}</b>
        <div className="resume-body">
          { this.state.sections ? this.state.sections.map((section, ndx) => { 
            return (
              <Section key={`section_${ndx}`} section={section}>
                Section did not load successfully.
              </Section>
            ) }) : null }
        </div>
      </div>
    )
  }
}
