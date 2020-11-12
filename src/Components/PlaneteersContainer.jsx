import React from 'react';
import Planeteer from './Planeteer'
import SearchBar from './SearchBar'

class PlaneteersContainer extends React.Component {


  newHero(){
    return this.props.planeteers.map((obj) => <Planeteer key={obj.id} bio={obj.bio} born={obj.born} fromUSA={obj.fromUSA} twitter={obj.twitter} quote={obj.quote} pictureUrl={obj.pictureUrl} name={obj.name}/>)
  }

  render(){
    console.log(this.props)
  return (
    <div>
    <ul className="cards">
      {
        this.newHero()
      }
    </ul>
    </div>
  )
    }
};

export default PlaneteersContainer;
