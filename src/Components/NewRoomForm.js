import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea(''); 
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4 class="text-primary">Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder= 'name'
                    onChange={(e) => setName(e.target.value)}
                    // every time the text changes the name value in our state is being updated with it
                />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                 />
                 <button type="submit" class="btn-success">Add Room</button>
            </form>
        </div>
    )
}