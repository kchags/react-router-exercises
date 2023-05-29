import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import DogList from './DogList';
import DogDetails from './DogDetails';



function App({ dogs }) {

  function filterDogs(name) {
    const dog = dogs.filter(dog => dog.name.toLocaleLowerCase() === name);
    return dog[0];
  }

  return (
    <div>
      <NavBar dogs={dogs.map(dog => dog.name)} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dogs" />
        </Route>
        <Route exact path="/dogs" >
          <DogList dogs={dogs} />
        </Route>
        <Route exact path="/dogs/:name" >
          <DogDetails filterDogs={filterDogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

export default App;

// Code given by Springboard below
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}