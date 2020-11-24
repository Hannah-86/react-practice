import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { readEvents } from '../actions'
import './member.css'

class MemberIndex extends React.Component {
  constructor(props) {
    super(props)
    this.renderEvents = this.renderEvents.bind(this)
  }

  renderEvents() {
    const { members } = this.props
    console.log(members)

    return members.map(member => (
      <tr key={member.id}>
        <td>{member.id}</td>
        <td>
          <Link to={`members/${member.id}`}>
            {member.name}
          </Link>
        </td>
        <td>{member.sex}</td>
        <td>{member.role}</td>
      </tr>
    ))
  }

  render() {
    return(
      <div className="body">
        <h1>member</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>sex</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ members : state.members })
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(MemberIndex); 
