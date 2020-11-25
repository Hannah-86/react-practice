import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getEvent } from '../actions'
import './member.css'

class MemberProfile extends React.Component {

  componentDidMount(){
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  render() {
    console.log(this.props.members)
    const member = this.props.members[0]
    return (
      <div className="body">
        <h1>プロフィール</h1>
        <div>
          <ul>
            <li>id: {member.id}</li>
            <li>name: {member.name}</li>
            <li>sex: {member.sex}</li>
            <li>role: {member.role}</li>
            <li></li>
          </ul>
        </div>
        <Link to="/">戻る</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ members : state.members })
const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => dispatch(getEvent(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberProfile)
