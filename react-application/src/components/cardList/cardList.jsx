import React from 'react'
import Card from '../card/Card';
import './CardListStyle.css';



function cardList({ monsters }) {
    return (
        <div className='card-list'>
            {
                monsters.map((monster) => {
                    return <Card monster={monster}/>
                })
            }
        </div>
    );
}

export default cardList;
