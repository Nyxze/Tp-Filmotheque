import React from 'react';
import { Outlet } from 'react-router';
import {AddressMap} from '../component/Map';


export default function Home(){

   

    return (

        <>
        <h1>Bienvenue dans notre boutique de fleurs </h1>
        <AddressMap></AddressMap>
        <Outlet />

        </>
    )
}