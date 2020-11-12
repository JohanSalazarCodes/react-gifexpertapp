import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Bleach']);
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <h1>Ivannia2</h1>
            <AddCategory setCategories = { setCategories } />
            <hr/>

           
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key= {category}
                            category= { category } />
                    ))
                }
            </ol>

        </>
    );
};


