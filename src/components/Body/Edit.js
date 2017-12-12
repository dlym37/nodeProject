import axios from 'axios';
import React, {Component} from 'react';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            editting: false,
            data: this.props.data
        }
    }
    handleChange(event, prop){
        this.setState({
            data: Object.assign({}, this.state.data, {[prop]: event})

        })
    }
render(){
    return (
        <section>
            <button>Edit</button>{/*onClick=show edit box*/}
            <div className="editBox">
                <input onChange={(e)=>this.handleChange(e.target.value, "name")} placeHolder="name"/>
                <input onChange={(e)=>this.handleChange(e.target.value, "meaningOfName")} placeHolder="meaning"/>
                <input onChange={(e)=>this.handleChange(e.target.value, "diet")} placeHolder="diet"/>
                <input onChange={(e)=>this.handleChange(e.target.value, "period")} placeHolder="period"/>
                <input onChange={(e)=>this.handleChange(e.target.value, "info")} placeHolder="info"/>
                <button onClick={() => this.props.editDino(this.props.id)}>Finish</button>
             </div>
        </section>
    ) //create box with input fields that is hidden and appears
    // when Edit is clicked.
    //inside will have input values for the 5 options and a
    //finish button that will then call the editDino function.
    
}


}