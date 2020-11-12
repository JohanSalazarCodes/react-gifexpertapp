const { shallow } = require("enzyme");

import React from 'react';
import { GifGridItem } from '../components/GifGridItem';   


describe('Prueba de componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('debe mostrar el componente correctamente', () => {
       

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        const {src, alt} = img.props();

       expect(src).toBe(url);
       expect(alt).toBe(title);

    });

    test('debe de tener animate_fadeIn', () => {
       const div = wrapper.find('div');
       const className = div.prop('className');
       expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
    
    
    
})
