import React from 'react';
import RoleDetail from './roledetail';
import './section.css';

export default class Section extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
    console.log('$$ props from Section', this.props);
  }
  
  render () {
    return (
      <div className={`section ${this.props.section.section_type}`}>
        <><hr/></>
        <div className="title">{this.props.section.section_name[0].toUpperCase() + this.props.section.section_name.substring(1).toLowerCase()}</div>
        { this.props.section.details ?
          this.props.section.details.map((detail, ndx) => { 
            switch(detail.detail_type) {
              case 'role':
                return (
                  <RoleDetail
                    key={`${this.props.section.section_name}_detail_${ndx}`}
                    detail={detail}
                  >Role did not load successfully.
                  </RoleDetail>
                )
              default:
                return null
            }
          }) : null }
      </div>
    )
  }
}
