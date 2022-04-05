
import React, { useEffect, useReducer, useState } from 'react';
import { Line } from 'recharts';
import useReview from '../../customHooks/useReview';
import Review from '../Review/Review';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Home.css';


const Home = () => {
    const [reviews] = useReview();
   
    return (
        <div>
            <div className='home-component'>
                <div className='home-component-product-info'>
                    <h1 className='text-5xl'>your best products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sed consectetur temporibus reprehenderit fugit expedita reiciendis, aliquam ipsum neque repellat!</p>

                  <button> live demo</button>
                </div>
                
                <div className='product'>
                   <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*" alt="" srcset="" />
                </div>

                
                
            </div>

            <div>
               <h3 className='text-5xl'> Customer Review </h3>
               <div className='review-detail'>
                   {
                       (reviews.slice(0,3)).map(review => <ReviewDetails key={review.id} 
                        review={review}
                       
                       ></ReviewDetails>)
                   }

               </div>
             
            </div>
            
               <Line to='/review'><button className='review-button'>See all Review</button></Line>
           
           
        </div>
    );
};

export default Home;