import React from 'react';
import RoleDetail from './roledetail';
import ProjectDetail from './projectdetail';
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
        <p className="section text">{this.props.section.section_name[0].toUpperCase() + this.props.section.section_name.substring(1).toLowerCase()}</p>
        { this.props.section.details ?
            this.props.section.details.map((detail, ndx) => { 
              switch(detail.detail_type) {
                case 'role':
                  return (
                    <RoleDetail
                      key={`${this.props.section.section_name}_detail_${ndx}`}
                      detail={detail}
                      headshot_url={this.props.headshot_url}
                    >
                      Role failed to load.
                    </RoleDetail>
                  )
                case 'project':
                  return (
                    <ProjectDetail
                      key={`${this.props.section.section_name}_detail_${ndx}`}
                      detail={detail}
                    >
                      Project failed to load.
                    </ProjectDetail>
                  )
                default:
                  return null
              }
            }) : null
        }
      </div>
    )
  }
}
