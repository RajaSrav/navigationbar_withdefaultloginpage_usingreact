import React, { Component } from 'react';
import './org.css';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import raja from './images/i1.jpeg'

export class Navigation extends Component {

    render() {
        
        return(
           
           <div >
             
               
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                     <Navbar.Brand><Link to='/home'> <img width="30" height='30' className="rounded-circle" src={raja} alt="logo" /></Link></Navbar.Brand> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link > <Link className="Link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="Link" to='/reg'>Sign Up</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/login'>Login</Link></Nav.Link>
                            

                            
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link><Link className="Link"  to='/login' onClick = {() => localStorage.removeItem("token")}>Logout</Link></Nav.Link>
                        <Nav.Link><Link className="Link" to='/Profile' >Profile</Link></Nav.Link>
                        </Navbar.Collapse>
                        </Navbar.Collapse>
                </Navbar>

                    
                
           </div> 
           
        )
    }
}

export default Navigation;
