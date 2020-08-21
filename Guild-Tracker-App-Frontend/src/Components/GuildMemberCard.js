import React from 'react'
import { connect } from 'react-redux'
import { removeMember } from '../Actions/Action'

const style = {
    opacity: "1"
}

const GuildMemberCard = ({ member, removeMember}) => {
    return(
        <div id= {member.id} style={style} className="member-card">
            <h1>Name:{member.name}</h1>
            <h3>Class:{member.klass}</h3>
            <h3>Race:{member.race}</h3>
            <h3>Level:{member.level}</h3>
            <h3>Rank:{member.rank}</h3>
            <button onClick={()=>removeMember(member.id)}>Remove from guild</button>
            <button onClick={()=>changeCard(member.id)} >Send out on Quest</button>
        </div>
    )
} 

const changeCard = (id) => {
    if (document.getElementById(id).style.opacity === '1' ){
        document.getElementById(id).style.opacity = '.5'
    }else{
        document.getElementById(id).style.opacity = '1'
    }
}

export default connect(null, {removeMember})(GuildMemberCard)

