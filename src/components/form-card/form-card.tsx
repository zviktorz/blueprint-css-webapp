// Asset resolved to { package: 'react', file: './index.js' }
// Types resolved to { package: '@types/react', file: './index.d.ts' }
import React from 'react';

// Asset resolved to { package: 'react', file: './index.js' }
// Types resolved to { package: '@blueprintjs/core', file: '@blueprintjs/core.....index.d.ts' }
import {Elevation, H1, TextArea, Button, Card, InputGroup, } from "@blueprintjs/core";

// Asset resolved to { file: './src/components/assets/logo.svg' }
import defaultLogoURL from './assets/logo.svg';

// Asset resolved to { file: './src/components/form-card/form-card.scss' }
import './form-card.css';

// Files to fetch:
// react/index.js and its recursive dependencies 
// @types/react/index.d.ts and its recursive dependencies 
// @blueprintjs/core.....index.d.ts and its recursive dependencies 
// @blueprintjs/core.....index.d.ts and its recursive dependencies 
// ./src/components/form-card/form-card.scss and its recursive dependencies 
// ./src/components/assets/logo.svg


export interface FormCardProps {        
    formType?: 'signin' | 'contact' | 'signup';
    logoURL?: string;
}

/**
 * This Form Card component is a simple demo component to showcase the capabilities of Wix Component Studio, 
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 * 
 * Use this demo to get a feel for how easy and fun it is to create and edit components in WCS using Blueprint.js, a 3rd party React-based UI toolkit.
 * 
 */
export const FormCard: React.FC<FormCardProps> = ({     
    formType = 'signin',        
    logoURL = defaultLogoURL

}) => {    
    const submitCaption = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Send'
    const formTitle = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Contact Us'

    return (
        <Card className='card' elevation={Elevation.FOUR}>
            <div className='header'>
                <img className='logo' src={logoURL} />
                <H1>{formTitle}</H1>
            </div>
            <InputGroup
                type='email'
                fill
                round
                placeholder = 'Your Email' 
                id='email'       
            />

            {formType !== 'contact' ? (
                <InputGroup   
                    type='password'                
                    fill
                    round
                    placeholder = 'Password'  
                    id='pass'             
                />
            ) : (
                <TextArea/>
            )}

            <div className='submit'>               
                {formType !== 'contact' ? 'Forgot your Password?' : <span/>}
                <Button text={submitCaption} className='btn' intent='primary' type="submit" />
            </div>
        </Card>
    )
};