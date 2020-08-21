import React from 'react'
import { addMember } from '../Actions/Action'
import { connect } from 'react-redux'

export class NewMemberForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            klass: "",
            race: "",
            level: "",
            rank: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addMember( this.state )
        this.props.history.push('/members')
      }

    render(){
        return(
            <form className="form" onSubmit= {this.handleSubmit}>
                <h2>Name:</h2>
                <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                
                <br />
                <h2>Class:</h2>
                <lable>
                    <input
                    type="radio"
                    name="klass"
                    value="Necromancer"
                    checked={this.state.klass === "Necromancer"}
                    onChange={this.handleChange}
                    /> Necromancer
                </lable>
                <br/>
                <lable>
                    <input
                        type= "radio"
                        name= "klass"
                        value= "Hunter"
                        checked= {this.state.klass === "Hunter"}
                        onChange={this.handleChange}
                    /> Hunter
                </lable>
                <br/>
                <lable>
                    <input
                        type= "radio"
                        name= "klass"
                        value= "Thief"
                        checked= {this.state.klass === "Thief"}
                        onChange={this.handleChange}
                    /> Hunter
                </lable>
                <br/>
                <label>
                    <input
                        type= "radio"
                        name= "klass"
                        value= "Paladin"
                        checked= {this.state.klass === "Paladin"}
                        onChange={this.handleChange}
                    /> Paladin
                </label>
                <br/>
                <h2>Level:</h2>
                <lable>
                    <input
                        type= "text"
                        id= "level"
                        value={this.state.level}
                        name="level"
                        placeholder="Level"
                        onChange={this.handleChange}
                    />
                </lable>
                <br/>
                <h2>Race:</h2>
                <lable>
                    <input
                        type= "radio"
                        name= "race"
                        value= "Human"
                        checked= {this.state.race === "Human"}
                        onChange= {this.handleChange}
                    />Human
                </lable>
                <br/>
                <lable>
                    <input
                        type= "radio"
                        name= "race"
                        value= "Demon"
                        checked= {this.state.race === "Demon"}
                        onChange= {this.handleChange}
                    />Demon  
                </lable>
                <br/>
                <lable>
                    <input
                        type= "radio"
                        name= "race"
                        value= "Elf"
                        checked= {this.state.race === "Elf"}
                        onChange= {this.handleChange}
                    />Elf     
                </lable>
                <br/>
                <lable>
                    <input
                        type= "radio"
                        name= "race"
                        value= "Orc"
                        checked= {this.state.race === "Orc"}
                        onChange= {this.handleChange}
                    />Orc     
                </lable>
                <br/>
                <h2>Ranking:</h2>
                <lable>S
                    <input
                        type= "radio"
                        name= "rank"
                        value= "S"
                        checked= {this.state.rank === "S"}
                        onChange= {this.handleChange}
                    />     
                </lable>
                <lable>A
                    <input
                        type= "radio"
                        name= "rank"
                        value= "A"
                        checked= {this.state.rank === "A"}
                        onChange= {this.handleChange}
                    />     
                </lable>
                <lable>B 
                    <input
                        type= "radio"
                        name= "rank"
                        value= "B"
                        checked= {this.state.rank === "B"}
                        onChange= {this.handleChange}
                    />    
                </lable>
                <lable>C
                    <input
                        type= "radio"
                        name= "rank"
                        value= "C"
                        checked= {this.state.rank === "C"}
                        onChange= {this.handleChange}
                    />     
                </lable>
                <lable>D 
                    <input
                        type= "radio"
                        name= "rank"
                        value= "D"
                        checked= {this.state.rank === "D"}
                        onChange= {this.handleChange}
                    />    
                </lable>
                <br/>
                <input type="submit" value="Create Member" className="btn" />
                
            </form>
        )
    }
  
}
export default connect(null, { addMember })(NewMemberForm)
