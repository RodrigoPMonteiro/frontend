import React from 'react';

// export default function Header(props) { // >>>> ESTRUTURADO
export default function Header({ title , children }) {    // >>>> DESESTRUTURADO
    return(
        <header>
            <h1>{title}</h1>

        </header>
    );
};