import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <section >
                <div className="addSpace">
                    <input  onChange={(e)=> {this.props.saveName(e , 'name')}} 
                       placeholder="name"/>
                       <input  onChange={(e)=> {this.props.saveName(e , 'meaningOfName')}} 
                       placeholder="meaning"/>
                       <input  onChange={(e)=> {this.props.saveName(e , 'diet')}} 
                       placeholder="diet"/>
                       <input  onChange={(e)=> {this.props.saveName(e , 'period')}} 
                       placeholder="period"/>
                       <input  onChange={(e)=> {this.props.saveName(e , 'info')}} 
                       placeholder="info"/>
                       <button className="addButton"onClick={this.props.addDino}>Add Dino</button>
                </div>
                
                
            </section>
        )
    }
}
export default Add;