import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add';
import {Link} from 'react-router-dom';

class Herbivore extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        var stuff2 = this.props.herbsArray.length > 1 ? 
        this.props.herbsArray.map((e,i) => {
            return (
                <div className="data" key={e.name}>
                        <h1>Name: {e.name}</h1>
                        <h1>Meaning: {e.meaningOfName}</h1>
                        <h1>Diet: {e.diet}</h1>
                        <h1>Period: {e.period}</h1>
                        <h1>Info: {e.info}</h1>
                        <div className="editDel">
                            <button>edit</button>
                            <button onClick={() => this.props.deleteDino(e.name)}>kill</button>
                        </div>
                        <hr></hr>
                    </div>
            )
        }) : null;
        return (
            <div className="inner-content2">
                <div className="buttDiv2">
                    <Link to='/herbivore'><button
                        className="button2"
                        onClick={() => this.props.listHerbs()}
                    >Herbivorous Dinosaurus
                    </button>
                    </Link>
                    <Add className="editDel" addDino={this.props.addDino} saveName={this.props.handleName}/>
                </div>
                <div className="herbInfo">
                    {stuff2}
                </div>
            </div>
        )
    }
}
export default Herbivore;