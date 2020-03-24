import React, { useState } from 'react';

const Enhancer = WrappedComponent  => {
const WithAdd = ()  => {
    const [state, setState] = useState(0);

    const Add = () => {
        setState(prevState => {
          return prevState + 1
        })
    }

    return <WrappedComponent state={state} Add={Add} />
}

    return WithAdd
}

export default Enhancer;