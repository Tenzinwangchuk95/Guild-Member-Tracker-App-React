import React, { Component } from 'react'

export class Member extends Component {
  constructor(props) {
    super(props)

    let paramsId = parseInt(this.props.match.params.id, 10)
    let member = props.members.find( member => member.id === paramsId)

    this.state = {
      member: member ? member : { name: '', klass: '', race: '', level: '', rank: ''}
    }
  }


  render() {
    const { name, klass, race, level, rank } = this.state.member
    return (
        <div className="member-card">
            <h1>Name:{name}</h1>
            <h3>Class:{klass}</h3>
            <h3>Race:{race}</h3>
            <h3>Level:{level}</h3>
            <h3>Rank:{rank}</h3>
        </div>
    )
  }
}

export default Member