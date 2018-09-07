import React from 'react';
import Pet from './components/pet';
import {connect} from 'react-redux';
import {fetchCat, fetchDog} from './actions';
import './dashboard.css';

export class Dashboard extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  onAdoptPet(){
    console.log('I was clicked');
  }
  render(){
    return(
      <div className='mainpg'>
        <h1>Petful Adoption</h1>
        <p>Welcome to Petful Adoption! Cats are on the left and dogs are on the right!
          Please note that the first pets in queue will be up for adoption first before newer arrivals!
        </p>
        <Pet 
       /*  catToAdopt={this.props.cat} 
        dogToAdopt={this.props.dog}  */
        onAdoptPet={() => {this.onAdoptPet()}}/>
      </div>
    )
  }
}

/* const mapStateToProps = state => ({
  cat: state.catR.data, 
  dog: state.dogR.data,
}); */

export default connect(/* mapStateToProps */)(Dashboard);