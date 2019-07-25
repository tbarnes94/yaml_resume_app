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
      headshot_url: '',
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
    const headshot_url = cv[2].headshot_url;
    const options = cv[3].options;
    const sections = cv[4].sections;

    this.setState({
      name,
      email,
      headshot_url,
      options,
      sections
    });
  }
  
  render () {
    return (
      <div className="resume">
        <div className="resume-header big-text">
          <h1 className="name">{`${this.state.name.first} ${this.state.name.middle[0]}. ${this.state.name.last}`}</h1>
        </div>
        <b>{this.state.email}{this.state.options.map(function(option){ return ` | ${option}` })}</b>
        <div className="resume-body">
          { this.state.sections ? this.state.sections.map((section, ndx) => { 
            return (
              <Section key={`section_${ndx}`} section={section} headshot_url={this.state.headshot_url}>
                Section did not load successfully.
              </Section>
            ) }) : null }
        </div>
      </div>
    )
  }
}
