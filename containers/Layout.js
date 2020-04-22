import React from 'react';
import Nav from '../components/Nav';

const Layout = ({children})=>{
    return (
        <div className="layout">
             <Nav></Nav>
            {children}
        </div>
    )
}

export default Layout;