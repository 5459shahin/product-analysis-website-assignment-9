import React from 'react';
import './ReviewDeatil.css'

const ReviewDetails = (props) => {
    
    const {name, comment, ratings } = props.review;
    return (
        <div className='review'>
           <div className='review-item'>
           <h3 className=''><small className='review-name'>name:</small> <small>{name}</small></h3>
            <p>Comment: {comment}</p>
           </div>
            <h4 className='mb-10'>ratings: {ratings}</h4>
            
        </div>
    );
};

export default ReviewDetails;