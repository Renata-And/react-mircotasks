import React, { MouseEvent } from 'react';
import './App.css';
import { NewComponent } from './components/NewComponent';
import { Button } from './components/Button';
import { Filter } from './components/Filter';

function App() {
  const button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address)
  }

  const button2Foo = (subscriber: string) => {
    console.log(subscriber)
  }

  const button3Foo = () => {
    console.log('I\'m stupid button')
  }

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Hi');
    console.log(event);

  }

  return (
    <div className='App'>
      {/* <NewComponent /> */}
      {/* <button onClick={onClickHandler}>Event</button> */}
      {/* <Button name={'YouTubeChannel - 1'} callBack={() => button1Foo('Renata', 33, 'Nha Trang')} /> */}
      {/* <Button name={'YouTubeChannel - 2'} callBack={() => button2Foo('Stepa')} /> */}
      {/* <Button name={'YouTubeChannel - 3'} callBack={button3Foo} /> */}
      <Filter />
    </div>
  );
}

export default App;
