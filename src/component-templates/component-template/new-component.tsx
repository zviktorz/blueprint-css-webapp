import React from 'react';
import './new-component.css'

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div className="root">NewComponent</div>;
};