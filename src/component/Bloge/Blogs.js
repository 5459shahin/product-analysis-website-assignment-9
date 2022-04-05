import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
        <h3 className='text-3xl'>what is context api?</h3>
        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
        The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
        </p>

        <h3 className='text-3xl'>different inline and inline block? </h3>
        <p>Compared to display: inline , the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline , top and bottom margins & paddings are not respected, and with display: inline-block they are.
        An element with display: inline; cannot have a height or a width or a vertical margin . An element with display: block; can have a width , height and margin .
        </p>
        </div>
    );
};

export default Blogs;