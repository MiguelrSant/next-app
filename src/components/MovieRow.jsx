import React from "react";
import Image from "next/image";

export default ({title, items}) =>{
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key)=> (
                    <div key={key} className="movieRow--item">
                        <Image src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}   width={150}  height={170}/>
                    </div>  
                ))}
                </div>
            </div>
        </div>
    )
}