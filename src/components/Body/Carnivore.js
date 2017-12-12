import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add';
import Edit from'./Edit';

class Carnivore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
console.log(this.props);
//this.props.editDino();
        var stuff = this.props.carnsArray.length > 1 ?
            this.props.carnsArray.map((e, i) => {
                return (
                    <div className="data" key={e.name}>
                        <h1>Name: {e.name}</h1>
                        <h1>Meaning: {e.meaningOfName}</h1>
                        <h1>Diet: {e.diet}</h1>
                        <h1>Period: {e.period}</h1>
                        <h1>Info: {e.info}</h1>
                        <div className="editDel">
                            <Edit editDino={this.props.editDino} id={e.id}/>
                            <button onClick={() => this.props.deleteDino(e.name)}>kill</button>
                        </div>
                        <hr></hr>
                    </div>
                )
            }) : null;
        return (
            <div className="inner-content1">
                <div className="buttDiv1">
                    <button
                        className="button1"
                        onClick={() => this.props.listCarns()}
                    >Carnivorous Dinosaurs
                    </button>
                    <Add className="editDel" addDino={this.props.addDino} saveName={this.props.handleName}/>
                </div>
                <div className="carnInfo">
                    {stuff}
                </div>
            </div>
        )
    }
}
export default Carnivore;