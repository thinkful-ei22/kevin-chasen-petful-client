import React from 'react';
import {connect} from 'react-redux';
import {adoptCat, adoptDog} from '../actions';
import './pet.css';

export class Pet extends React.Component{
  render(){
  return(
    <div>
      <section className='catToAdopt'>
          <h2>{this.props.cat.name}</h2>
          <img 
          className = 'img'
          src={this.props.cat.imageURL} 
          alt={this.props.cat.imageDescription}/>
          <dl>
            <div className='info'>
            <dt>Description</dt>
            <dd>{this.props.cat.imageDescription}</dd>
            </div>
            <div className='info'>
            <dt>Sex</dt>
            <dd>{this.props.cat.sex}</dd>
            </div>
            <div className='info'>
            <dt>Age</dt>
            <dd>{this.props.cat.age}</dd>
            </div>
            <div className='info'>
            <dt>Breed</dt>
            <dd>{this.props.cat.breed}</dd>
            </div>
            <div className='info'>
            <dt>Story</dt>
            <dd>{this.props.cat.story}</dd>
            </div>
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
          <h2>{this.props.dog.name}</h2>
            <img 
            className = 'img'
            src={this.props.dog.imageURL} 
            alt={this.props.dog.imageDescription}/>
            <dl>
              <div className='info'>
              <dt>Description</dt>
              <dd>{this.props.dog.imageDescription}</dd>
              </div>
              <div className='info'>
              <dt>Sex</dt>
              <dd>{this.props.dog.sex}</dd>
              </div>
              <div className='info'>
              <dt>Age</dt>
              <dd>{this.props.dog.age}</dd>
              </div>
              <div className='info'>
              <dt>Breed</dt>
              <dd>{this.props.dog.breed}</dd>
              </div>
              <div className='info'>
              <dt>Story</dt>
              <dd>{this.props.dog.story}</dd>
              </div>
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