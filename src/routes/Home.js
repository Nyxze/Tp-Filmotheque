import React from 'react';
import { Outlet } from 'react-router';

export default function Home(){



    return (

        <>
        <h1>Bienvenue ds la boutique de fleur </h1>
        <Outlet />
        </>
    )
}