import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p><h4>{email}</h4></p>
            </div>
         </div>
    );
}

export default Card;