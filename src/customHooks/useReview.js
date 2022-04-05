import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setReview(data) )
    },[])
    return [review, setReview];
    
};

export default useReview;