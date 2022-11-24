import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Komen = () => {

   const { id } = useParams()
    return( 
    <wrapper>
    <div>Komen {id}</div>
    <Link to="/komens/recieved">recieved</Link>
    <br/>
    <Link to="/komens/sent">sent</Link>
    <br/>
    <Link to="/komens/noticeboard">noticeboard</Link>
    <br/>
    <Link to="/komens/draft">draft</Link>
    <br/>
    <Link to="/komens/new">new komens</Link>
    <br/>
    </wrapper>
    
    
    
    
    
    )
}

export default Komen;

//use param can read id from route
