/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Button from './atoms/button';
import InputBlock from './molecules/inputBlock';

function App() {
  return (
    <div className="App">
      <InputBlock placeholder="Input user name" text="User name" />
      <br />
      <InputBlock placeholder="Input user name" text="User name" isError />
      <br />
      <Button type="submit" disabled={false} onClick={() => {}} text="Log In" />
    </div>
  );
}

export default App;
