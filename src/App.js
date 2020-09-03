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
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default App;
