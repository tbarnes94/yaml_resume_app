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
    const headshot = ( <div className={this.state.detail_name.toLowerCase() === 'role_1' ? "rightblock" : null }><img className="headshot" src={this.props.headshot_url} alt='headshot'/></div> );
    const bullet_separator = ' \u2022 ';
    const nbsp = '\u00A0';
    const space_1 = 2;
    const space_2 = 3;

    return (
        <div className={this.state.detail_type}>
          <div className={this.state.detail_name.toLowerCase() === 'role_1' ? "container" : null }>
            <div className={this.state.detail_name.toLowerCase() === 'role_1' ? "leftblock" : null }>
              <p>
                <b>
                  <u>
                    {this.state.role}
                  </u>
                </b>
                {nbsp.repeat(space_1)+'@'+nbsp.repeat(space_1)}
                <b>
                  {this.state.company}
                </b>
                {nbsp.repeat(space_2)+bullet_separator+nbsp.repeat(space_2)}
                <i>
                  {this.state.team}
                </i>
                {nbsp.repeat(space_2)+bullet_separator+nbsp.repeat(space_2)+this.state.city+', '+this.state.state}
                <i className="dates">
                  {`${this.state.start_month} - ${this.state.end_month}`}
                </i>
              </p>
              { this.state.bullets ? 
                (<ul className="bullet-text">
                  {this.state.bullets.map((bullet, ndx) => {
                    return (<li key={`bullet_${ndx}`}>{bullet}</li>)
                  })}
                </ul>)
                : null
              }
            </div>
            { this.state.detail_name === 'role_1' ? headshot : null }
          </div>
        </div>

    )
  }
}
