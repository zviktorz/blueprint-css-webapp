import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../src/components/gift-card/gift-card';
import photoURL from '../../../src/components/gift-card/assets/img-2.jpg';
import './gift-card.board.css';

export default createBoard({
    name: 'Example of a gift card panel',
    Board: () => <div className='grid2col'>
                    <GiftCard photoURL={photoURL}/>
                    <GiftCard/>
                </div>,
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600
    }
});
