import React from 'react';
import style from './recipe.module.scss';
const Recipe = ({title, calories, image}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories} kCal</p>
            <img src={image} alt="" className={style.img}/>
        </div>
    )
}

export default Recipe;