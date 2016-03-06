import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    ReactDOM.render(<App />, shell);
}
