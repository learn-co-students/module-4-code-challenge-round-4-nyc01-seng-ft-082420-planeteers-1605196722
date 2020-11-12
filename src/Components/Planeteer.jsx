import React from 'react';

class Planeteer extends React.Component {

  state={
    clicked: false
  }

  clickHandler=(e)=>{
    console.log(e.target)
    this.setState({
      clicked: !this.state.clicked
    })
  }




  render() {
    console.log(this.state)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.pictureUrl} alt={this.props.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text">{this.state.clicked
            ?
          this.props.bio
        :
        this.props.quote}</p> 
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <br></br>
              <p>{this.props.fromUSA
              ?
            "USA Based"
          :
          "Working Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
