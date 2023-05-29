import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorPage from './ColorPage';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';

function App({ startColors }) {
  const [colors, setColors] = useState([...startColors]);

  function addColor(color) {
    setColors([color, ...colors]);
  }

  function filterColor(color) {
    const foundColor = colors.filter(col => col === color);
    return foundColor[0];
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/colors" />
        </Route>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <ColorPage filterColor={filterColor} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;

App.defaultProps = {
  startColors: ["red", "green", "blue"]
}