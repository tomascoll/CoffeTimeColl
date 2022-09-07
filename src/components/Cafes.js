import React, {useState, useEffect} from 'react';
import Cafe from './Cafe';

const Cafes = () =>{
    const[Cafes,setCafes] = useState([]);

    useEffect(() => {
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
            }
        ];
        setCafes(cafeBD);
    }, []);
    
    
    return(
        <div className='Gallery'>
            {Cafes.map(cafe =>{
                return(
                    <Cafe key={cafe.id} name={cafe.name} img={cafe.img} precio={cafe.precio} cantidad={cafe.cantidad}/>
                )
            })}
        </div>
    )
}

export default Cafes;