import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './components/header/Header.css';
import image from './img/volcano4.gif';
import Carnivore from './components/Body/Carnivore';
import Herbivore from './components/Body/Herbivore';
import Add from './components/Body/Add';
import axios from 'axios';
import'./components/Body/CarnButt.css';
import'./components/Body/HerbButt.css';
import'./components/Body/AddButt.css';
import'./components/Body/Edit.css';
import edit from './components/Body/Edit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carnArr: [],
      herbArr: [],
      data:{
        name: "",
        meaningOfName: "",
        diet: "",
        period: "",
        info: ""
      }
    }
    this.listCarns = this.listCarns.bind(this);
    this.listHerbs = this.listHerbs.bind(this);
    this.handleName = this.handleName.bind(this);
    this.addCarnDino = this.addCarnDino.bind(this);
    this.addHerbDino = this.addHerbDino.bind(this);
    this.deleteCarnDino = this.deleteCarnDino.bind(this);
    this.editDino = this.editDino.bind(this);
  }




  listHerbs() {
    axios.get('/api/herbs').then(response => {
      console.log(response);
      var herbDinos = response.data.filter(e => {
        if (e.diet === 'herbivorous') {
          return e;
        }
      })
      this.setState({
        herbArr: herbDinos
      })
    }

    )
  }
  listCarns() {
    console.log('list carns')
    axios.get('/api/carns').then(response => {
      console.log(response);
      var carnDinos = response.data.filter(e => {
        if (e.diet === 'carnivorous') {
          return e;
        }
        
      })
      this.setState({
        carnArr: carnDinos
      })
    }

    )
  }

  handleName(event, prop){
    this.setState({
      data: Object.assign({}, this.state.data, {[prop]: event.target.value})
    }, ()=> {
      console.log('handleName');
    })

  }


  addCarnDino(){
    axios.post('/api/Carns').then(response => {//grabbing dino info.
    
        this.setState({
          carnArr: [...this.state.carnArr, this.state.data] 
        })//need to set state and return the list with added dino.
  })
  }
  addHerbDino(){
    axios.post('/api/Herbs').then(response => {//grabbing dino info.
    
        this.setState({
          herbArr: [...this.state.herbArr, this.state.data] 
        })//need to set state and return the list with added dino.
  })
  }

deleteCarnDino(id){
  axios.delete(`/api/carn/${id}`).then(response => {
    // response.data.splice(, 1);
    this.setState({ carnArr: response.data })
  })
  
}
deleteHerbDino(id){
  axios.delete(`/api/herb/${id}`).then(response => {
    // response.data.splice(, 1);
    this.setState({ carnArr: response.data })
  })
  
}

editDino(id, text) {

axios.put(`/api/carn/${id}`, this.state.data ).then(response => {
this.setState({
  carnArr : response.data
})
})
}
// editMessage( id, text ) {
//   console.log( 'editMessage:', id, text ); 
//   axios.put( url + `/${id}`, { text } ).then( response => {
//     this.setState({ messages: response.data });
//   });
// }


  render() {
    return (

      <div>
        <header className="main-header">
          <div className="headDiv">
            <img src={image} alt="" />
            <h1>DINOSAURS</h1>
            <input placeholder="Search" />
          </div>
        </header>

        <section className="section">
          <Carnivore 
            deleteDino={this.deleteCarnDino} 
            addDino={this.addCarnDino} 
            handleName={this.handleName} 
            listCarns={this.listCarns} 
            carnsArray={this.state.carnArr} 
            editDino={this.editDino} 
            data={this.state.data}/>
          <Herbivore 
            deleteDino={this.deleteHerbDino} 
            addDino={this.addHerbDino} 
            handleName={this.handleName} 
            listHerbs={this.listHerbs} 
            herbsArray={this.state.herbArr} />
        </section>
      </div>

    )
  }
}

export default App;
