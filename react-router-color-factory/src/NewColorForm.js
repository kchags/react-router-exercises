import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm({ addColor }) {

    const history = useHistory();

    const INITIAL_STATE = { color: "" };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData.color);
        setFormData(INITIAL_STATE);
        history.push("/colors");
    }

    return (
        <form onSubmit={handleSubmit} key="NewColorForm0">
            <label htmlFor="color">Color</label>
            <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange} />
            <button type="submit">Add Color</button>
        </form>
    )
}

export default NewColorForm;