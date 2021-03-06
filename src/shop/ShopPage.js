import React from 'react';

import SHOP_DATA from './SHOP_DATA.js';
import CollectionPreview from '../collection/CollectionPreview.js';


class ShopPage extends React.Component{

constructor(props){
    super(props);
    this.state={
        collections:SHOP_DATA
    }
}

render(){
    const {collections}=this.state;
    return(
        <div>
            {
                collections.map(({id , ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps}/>
                ))
            }
            </div>
    );

}

}

export default ShopPage;