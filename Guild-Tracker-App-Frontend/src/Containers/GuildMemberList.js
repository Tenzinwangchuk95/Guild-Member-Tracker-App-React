import React from 'react'
import GuildMemberCard from '../Components/GuildMemberCard'
import { fetchMembers } from '../Actions/Action'
import { connect } from 'react-redux'

class GuildMemberList extends React.Component{

    componentDidMount(){
        this.props.fetchMembers()
    }
    
    createMemberList(members){
        return members.map((member, index) => <GuildMemberCard key={index} member={member}
        />)
    }


    render(){
        return(
            <div id= "member-list">
                {this.createMemberList(this.props.members)}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        members: state.members
    }
}
//   console.log()

export default connect(mapStateToProps, {fetchMembers})(GuildMemberList)
