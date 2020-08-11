import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions/counter';

const Counter = ({ counter, decrement, increment }) => (
  <>
    <h1>Counter: { counter }</h1>
    <ul>
      <li><button onClick={() => decrement(counter)}>Decrement</button></li>
      <li><button onClick={() => increment(counter)}>Increment</button></li>
    </ul>
  </>
);

const mapStateToProps = state => ({
  counter: state.counterReducers.counter
});

const mapDispatchProps = dispatch => ({
  decrement: (counter) => dispatch(actions.decrement(counter)),
  increment: (counter) => dispatch(actions.increment(counter)),
});

export default connect(mapStateToProps, mapDispatchProps)(Counter);