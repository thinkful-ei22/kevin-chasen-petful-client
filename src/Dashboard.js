import React from 'react';
import Pet from './components/pet';
import {connect} from 'react-redux';

export class Dashboard extends React.Component{
  onAdoptPet(){
    console.log('I was clicked');
  }
  render(){
    return(
      <div>
        <Pet 
       /*  catToAdopt={this.props.catToAdopt} 
        dogToAdopt={this.props.dogToAdopt}  */
        onAdoptPet={() => {this.onAdoptPet()}}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  cat: state.catR.data, 
  dog: state.dogR.data,
});

export default connect (mapStateToProps)(DashBoard);