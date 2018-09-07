import React from 'react';
import {connect} from 'react-redux';

export function Pet (props){
  console.log(props);
  return(
    <div>
      <section className='catToAdopt'>
          <h1>{props.cat.name}</h1>
          <img 
          src={props.cat.imageURL} 
          alt={props.cat.imageDescription}/>
          <dl>
            <dt>Description</dt>
            <dd>{props.cat.imageDescription}</dd>
            <dt>Sex</dt>
            <dd>{props.cat.sex}</dd>
            <dt>Age</dt>
            <dd>{props.cat.age}</dd>
            <dt>Breed</dt>
            <dd>{props.cat.breed}</dd>
            <dt>Story</dt>
            <dd>{props.cat.story}</dd>
          </dl>
          <button 
          className='adoptCat'
          onClick={() => props.onAdoptPet()}
          >
          Adopt</button>
        </section>
        <section className='dogToAdopt'>
          <h1>{props.dog.name}</h1>
            <img 
            src={props.dog.imageURL} 
            alt={props.dog.imageDescription}/>
            <dl>
              <dt>Description</dt>
              <dd>{props.dog.imageDescription}</dd>
              <dt>Sex</dt>
              <dd>{props.dog.sex}</dd>
              <dt>Age</dt>
              <dd>{props.dog.age}</dd>
              <dt>Breed</dt>
              <dd>{props.dog.breed}</dd>
              <dt>Story</dt>
              <dd>{props.dog.story}</dd>
            </dl>
            <button 
            className='adoptDog'
            onClick={() => props.onAdoptPet()}
            >
            Adopt</button>
        </section>
      </div>
  );
}

const mapStateToProps = (state, props) => ({
  cat: state.catR.data, 
  dog: state.dogR.data,
});

export default connect(mapStateToProps)(Pet);