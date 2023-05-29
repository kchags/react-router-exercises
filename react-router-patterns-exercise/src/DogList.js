import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
function DogList({ dogs }) {

    return (
        <div>
            {dogs.map(dog => <Link to={"/dogs/" + dog.name.toLocaleLowerCase()} key={uuid()}><img src={require('./dogs/' + dog.name.toLocaleLowerCase() + ".jpg")} alt={dog.name} height={200} width={200} /></Link>)}
        </div>
    )
}

export default DogList;