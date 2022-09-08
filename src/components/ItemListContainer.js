import React, {useState, useEffect} from 'react';
import Item from './Item';
import customFetch from './customFetch';
import ItemList from './ItemList';
const cafeBD = [
    {
        id:1,
        image:'https://th.bing.com/th/id/OIP.LZL38vGWuxR-Vs9TtP-1-gHaIZ?pid=ImgDet&w=750&h=850&rs=1',
        name:'Cafe Italia',
        precio:'$20.00',
        cantidad:'340 g'
    },
    {
        id:2,
        image:'https://th.bing.com/th/id/R.0c25fa0784b878ee67279a924db6c8d1?rik=kqcEh%2fNkP9Jl3A&riu=http%3a%2f%2fwww.enaturalltd.com%2fwp-content%2fuploads%2f2021%2f01%2fStarbucks-Medium-Colombia-Roast-coffee-beans-200g-300x300.jpg&ehk=W9ei0XsqXOlxkG7agyq6dUlBI0G%2bQ9zUMClw1QBvCNI%3d&risl=&pid=ImgRaw&r=0',
        name:'Cafe Colombia',
        precio:'$45.00',
        cantidad:'2,23 kg'
    },
    {
        id:3,
        image:'https://th.bing.com/th/id/OIP.sECYbNGiTM1b2OR3mQKPeQHaHa?pid=ImgDet&w=500&h=500&rs=1',
        name:'Cafe Brazil',
        precio:'$10.00',
        cantidad:'275 g'
    },        
    {
        id:4,
        image:'https://th.bing.com/th/id/OIP.hnnx4b-SNryxLrObUrLlyAHaHa?pid=ImgDet&rs=1',
        name:'Cafe Costa Rica',
        precio:'$11.00',
        cantidad:'275 g'
    },
    {
        id:5,
        image:'https://th.bing.com/th/id/OIP.hmxJdOeiHRzNFj1wWZjFbQHaHa?pid=ImgDet&rs=1',
        name:'Cafe Kenya',
        precio:'$14.99',
        cantidad:'275 g'
    },
    {
        id:6,
        image:'https://th.bing.com/th/id/OIP.imqIOpbfUfgXIcp3wMZFZAHaHa?pid=ImgDet&rs=1',
        name:'Cafe Guatemala',
        precio:'$19.00',
        cantidad:'453 g'
    },
    {
        id:7,
        image:'https://th.bing.com/th/id/OIP.QXww564mL-lumHqytv_SJgHaHa?pid=ImgDet&w=1000&h=1000&rs=1',
        name:'Cafe Verona',
        precio:'$50.00',
        cantidad:'2,45 kg'
    },
    {
        id:8,
        image:'https://i.pinimg.com/originals/12/74/bb/1274bbe021a7bf1e814b6883f017afaf.png',
        name:'Tri Coffe',
        precio:'$30',
        cantidad:'765 g'
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
            <ItemList items={Cafes}/>
        </div>
    )
}

export default ItemListContainer;