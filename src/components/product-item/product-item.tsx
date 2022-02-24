import React from 'react';
import {Elevation, Card, Icon} from "@blueprintjs/core";
import defaultItemPhoto from './assets/pprmint.png';
import './product-item.css';

export interface ProductItemProps { 
    itemPhotoURL?: string;
    itemName?: string;
    itemPrice?: number;
    itemDescription?: string;
    isFavorite?: boolean

}

/**
 * This Product Item component is a simple demo component to showcase the capabilities of Wix Component Studio, 
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 * 
 * Use this demo to get a feel for how easy and fun it is to create and edit components in WCS using Blueprint.js, a 3rd party React-based UI toolkit.
 * 
 */
export const ProductItem: React.FC<ProductItemProps> = ({ 
    itemPhotoURL = defaultItemPhoto,
    itemName = 'Peppermint Mocha',
    itemPrice = 18.0,
    itemDescription = 'A holiday classic, Espresso Roast combines with steamed milk, sweet mocha sauce and peppermint-flavored syrup, topped with whipped cream.',
    isFavorite = false

}) => {
    return (
        <Card className='product-wrapper' elevation={Elevation.FOUR}>             
            <img src={itemPhotoURL} />            
            <Card className='product-body'>                
                <div className='row'> 
                    <p className='name'>{itemName}</p>
                    <p className='price'>{'$' + itemPrice}</p>
                </div>
                <div className='row'>
                    <p className='option'>Big</p>
                    <input type='radio' name='radio' defaultChecked/>
                </div>
                <div className='row'> 
                    <p className='option'>Medium</p>
                    <input type='radio' name='radio'/>
                </div>
                <div className='row'> 
                    <p className='option'>Small</p>
                    <input type='radio' name='radio' />
                </div>                    
                <div className='row'>
                    <p className='desc'>{itemDescription}</p>                  
                </div>
                <div className='row'>               
                    <button className='btn-icon' type='button'>
                        <Icon icon='heart' color={isFavorite ? '#ff7979': 'white'} size={20} />
                    </button>
                    <button className='btn-add' type='button'>Add to cart</button>
                </div>
            </Card>
        </Card>
    )
};