import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Komen = () => {

   const { id } = useParams()
    return( 
    <wrapper>
    <div>Komen {id}</div>
    <Link to="/komens/1">komen 1</Link>
    <Link to="/komens/2">Komen 2</Link>
    <Link to="/komens/3">komen 3</Link>
    <Link to="/komens/4">komen 4</Link>
    <Link to="/komens/new">new komens</Link>
    </wrapper>
    
    
    
    
    
    )
}

export default Komen;

//use param can read id from route
