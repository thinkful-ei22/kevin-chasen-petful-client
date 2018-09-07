import React from 'react';
import {connect} from 'react-redux';
import {adoptCat, adoptDog} from '../actions';

export class Pet extends React.Component{
  render(){
  return(
    <div>
      <section className='catToAdopt'>
          <h1>{this.props.cat.name}</h1>
          <img 
          src={this.props.cat.imageURL} 
          alt={this.props.cat.imageDescription}/>
          <dl>
            <dt>Description</dt>
            <dd>{this.props.cat.imageDescription}</dd>
            <dt>Sex</dt>
            <dd>{this.props.cat.sex}</dd>
            <dt>Age</dt>
            <dd>{this.props.cat.age}</dd>
            <dt>Breed</dt>
            <dd>{this.props.cat.breed}</dd>
            <dt>Story</dt>
            <dd>{this.props.cat.story}</dd>
          </dl>
          <button 
          className='adoptCat'
          onClick={() => {
            console.log('I was clicked');
            this.props.dispatch(adoptCat());}}
          >
          Adopt</button>
        </section>
        <section className='dogToAdopt'>
          <h1>{this.props.dog.name}</h1>
            <img 
            src={this.props.dog.imageURL} 
            alt={this.props.dog.imageDescription}/>
            <dl>
              <dt>Description</dt>
              <dd>{this.props.dog.imageDescription}</dd>
              <dt>Sex</dt>
              <dd>{this.props.dog.sex}</dd>
              <dt>Age</dt>
              <dd>{this.props.dog.age}</dd>
              <dt>Breed</dt>
              <dd>{this.props.dog.breed}</dd>
              <dt>Story</dt>
              <dd>{this.props.dog.story}</dd>
            </dl>
            <button 
            className='adoptDog'
            onClick={() =>this.props.dispatch(adoptDog())}
            >
            Adopt</button>
        </section>
      </div>
  );
}
}

const mapStateToProps = (state, props) => ({
  cat: state.catR.data, 
  dog: state.dogR.data,
});

export default connect(mapStateToProps)(Pet);