/** 
 * use BEM naming convention
 * https://en.bem.info/methodology/naming-convention/
*/
import React from 'react';
import './App.css';
import Video from './Components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
