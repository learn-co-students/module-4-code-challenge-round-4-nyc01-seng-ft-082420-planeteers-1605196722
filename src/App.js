import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    filtered: "",
    api: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then((pArray) => {
      this.setState({
        api: pArray
      })
    })
  }

  searchHandler =(e) => {
    console.log(this.state.api)
    let newArray = this.state.api.filter((ele) => ele.name.includes(e.target.value.toLowerCase()))
    this.setState({
      api: newArray, searchValue: e.target.value
    })
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.api} searchBar={this.searchHandler}/>
      </div>
    );
  }

}

export default App;
