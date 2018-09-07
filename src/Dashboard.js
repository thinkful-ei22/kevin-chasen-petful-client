import React from 'react';
import Pet from './components/pet';
import {connect} from 'react-redux';
import {fetchCat, fetchDog} from './actions';
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
      <div>
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