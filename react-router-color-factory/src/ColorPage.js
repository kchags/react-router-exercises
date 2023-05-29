import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

function ColorPage({ filterColor }) {
    const { color } = useParams();
    const exists = filterColor(color);
    if (exists) {
        return (
            <div>
                <h3>{color.toLocaleUpperCase()}</h3>
                <div style={{ backgroundColor: color, height: 500, width: 500 }} />
                <Link to="/colors">Go Back Home</Link>
            </div>
        )
    } else {
        return (
            <Redirect exact to="/colors" />
        )
    }

}

export default ColorPage;