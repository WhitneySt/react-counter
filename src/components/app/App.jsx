import React from 'react';
import Counter from '../counter/Counter';
import './app.css'

const App = () => {
    return (
        <div className='container'>
            <h1>Este es nuestro contador</h1>

            <Counter />

            <footer>Es un ejemplo de una React app para Front 4 ❤</footer>
        </div>
    )
}

export default App;