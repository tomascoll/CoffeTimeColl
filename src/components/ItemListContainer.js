import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import customFetch from './customFetch';

const cafeBD = [
    {
        id:1,
        image:'src\assets\italian.jpg',
        name:'Cafe Italia',
        precio:'$20',
        cantidad:'567g'
    },
    {
        id:2,
        image:'src\assets\colombia.jpg',
        name:'Cafe Colombia',
        precio:'$45',
        cantidad:'2,23kg'
    },
    {
        id:3,
        image:'src\assets\brazil.jpg',
        name:'Cafe Brazil',
        precio:'$10',
        cantidad:'275g'
    },        
    {
        id:4,
        image:'src\assets\costarica.jpg',
        name:'Cafe Costa Rica',
        precio:'$11',
        cantidad:'275g'
    },
    {
        id:5,
        image:'src\assets\keyna.jpg',
        name:'Cafe Kenya',
        precio:'$12',
        cantidad:'275g'
    },
    {
        id:6,
        image:'src\assets\parama.jpg',
        name:'Cafe Parama',
        precio:'$35',
        cantidad:'2,25kg'
    },
    {
        id:7,
        image:'src\assets\verona.jpg',
        name:'Cafe Verona',
        precio:'$50',
        cantidad:'2,45kg'
    },
    {
        id:8,
        image:'src\assets\tricoffe.jpg',
        name:'Tri Coffe',
        precio:'$30',
        cantidad:'765g'
    }
];

const ItemListContainer = () =>{
    const[Cafes,setCafes] = useState([]);

    useEffect(() => {
        customFetch(2000,cafeBD)
            .then(datos => setCafes(cafeBD))
            .catch(err => console.log('Error'));
    }, []);
    
    
    return(
        <div className='Gallery'>
            {Cafes.map(cafe =>{
                return(
                    <ItemList key={cafe.id} name={cafe.name} img={cafe.img} precio={cafe.precio} cantidad={cafe.cantidad}/>
                )
            })}
        </div>
    )
}

export default ItemListContainer;