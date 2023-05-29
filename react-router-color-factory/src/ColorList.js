import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function ColorList({ colors }) {

    return (
        <div>
            <div width={"100%"} style={{ backgroundColor: "black" }}>
                <h3 style={{ color: "white" }}>Welcome to the Color Factory</h3>
                <Link to="/colors/new" style={{ color: "white" }}>Add a Color</Link>
            </div>
            <div>
                <ul>
                    {colors.map(color => <li key={uuid()}><Link to={"/colors/" + color.toLocaleLowerCase()}>{color}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}

export default ColorList;