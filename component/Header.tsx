import React from 'react';
import Enhancer from '../hoc/withAdd';

const Header = (props) => {
    const { Add, state } = props;
   return <h1 onMouseOver={Add}> HoveredOn {state} Times</h1>
}

export default Enhancer(Header);