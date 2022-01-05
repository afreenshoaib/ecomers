import React from "react";
import './collection.scss';

const CollectionPreview = ({title,items})=>(
    <div className="">
        <h1 className="">{title.toUpperCase()}</h1>
        <div className="">
            {
                items.filter((item,idx ) =>idx<4).map(item=>(
                    <div key={item.id}>{item.name}</div>

                ))
            }
        </div>
    </div>

);
export default CollectionPreview;