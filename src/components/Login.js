import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = (props) => {

    const location = useLocation();
    console.log(location)

    return (
    <div>
    <h1>Hello from the Other Component</h1>
    <p>Name: {location.state.item.name}</p>
    <p>Age: {location.state.item.description}</p>
    </div>
    )
}

export default Login