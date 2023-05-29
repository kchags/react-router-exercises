import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

function DogDetails({ filterDogs }) {
    const { name } = useParams();
    const thisDog = filterDogs(name);
    if (thisDog) {
        return (
            <div>
                <p>Name: {thisDog.name}</p>
                <p>Age: {thisDog.age}</p>
                <p>Facts:</p>
                <ul>
                    {thisDog.facts.map((fact, ind) => <li key={ind}>{fact}</li>)}
                </ul>
                <img src={require('./dogs/' + name + '.jpg')} alt={thisDog.name} />
            </div>
        )
    } else {
        return (
            <Redirect to="/dogs" />
        )
    }

}

export default DogDetails;