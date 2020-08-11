import React from 'react'

const Counter = ({ counter }) => (
  <>
    <h1>Counter: { counter }</h1>
    <ul>
      <li><button>Decrement</button></li>
      <li><button>Increment</button></li>
    </ul>
  </>
);

export default Counter;