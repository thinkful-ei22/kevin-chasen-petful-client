import React from 'react';

export default function Pet (props){
  return(
    <div>
      <section className='catToAdopt'>
          <h1>{props.catToAdopt.name}</h1>
          <img 
          src={props.catToAdopt.imageURL} 
          alt={props.catToAdopt.imageDescription}/>
          <dl>
            <dt>Description</dt>
            <dd>{props.catToAdopt.imageDescription}</dd>
            <dt>Sex</dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dt>Age</dt>
            <dd>{props.catToAdopt.age}</dd>
            <dt>Breed</dt>
            <dd>{props.catToAdopt.breed}</dd>
            <dt>Story</dt>
            <dd>{props.catToAdopt.story}</dd>
          </dl>
          <button 
          className='adoptCat'
          onClick={() => props.onAdoptPet()}
          >
          Adopt</button>
        </section>
        <section className='dogToAdopt'>
          <h1>{props.dogToAdopt.name}</h1>
            <img 
            src={props.dogToAdopt.imageURL} 
            alt={props.dogToAdopt.imageDescription}/>
            <dl>
              <dt>Description</dt>
              <dd>{props.dogToAdopt.imageDescription}</dd>
              <dt>Sex</dt>
              <dd>{props.dogToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{props.dogToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{props.dogToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{props.dogToAdopt.story}</dd>
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