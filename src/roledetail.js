import React from 'react';
import './roledetail.css';

export default class RoleDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        detail_name: '',
        detail_type: '',
        role: '',
        company: '',
        team: '',
        city: '',
        state: '',
        start_month: '',
        end_month: '',
        bullets: []
    }
  }

  componentDidMount() {
    this.initializeDetail();
  }

  componentDidUpdate() {
    console.log('$$ state from RoleDetail', this.state);
  }

  initializeDetail = () => {
    this.setState({
        ...this.props.detail
    })
  }
  
  render () {
    return (
        <div className={this.state.detail_type}>
            <p><b><u>{this.state.role}</u></b> @ <b>{this.state.company}</b></p>
            <p><i>{this.state.team}</i></p>
            <div>{this.state.city}, {this.state.state}</div>
            <div>{this.state.start_month} - {this.state.end_month}</div>
            { this.state.bullets ? 
                (<ul>
                    {this.state.bullets.map((bullet, ndx) => {
                        return (
                            <li key={`bullet_${ndx}`}>{bullet}</li>
                        )
                    })}
                </ul>)
                : null}
        </div>

    )
  }
}
