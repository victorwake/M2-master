import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';

export default function About(onClose) {
  return (
    <div className='about'>
    <div id="closeIcon" className="row">
    <Link to='/'>
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
    </Link>
        </div>
    
        Soy About viste
        
    </div>
  );
};