import React from 'react';

const ReviewDetails = (props) => {
    
    const {name, comment, ratings } = props.review;
    return (
        <div className='review'>
           <div className='review-item'>
           <h3>name: {name}</h3>
            <p>Comment: {comment}</p>
           </div>
            <h4 className='mb-10'>ratings: {ratings}</h4>
            
        </div>
    );
};

export default ReviewDetails;