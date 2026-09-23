
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger" to="/"><strong><big></big>ShopKart</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Cart">Cart</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto gap-2'>
                            <li className="nav-item bg-success rounded-2 px-2 ">
                                <Link className="nav-link active text-light " aria-current="page" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item bg-primary rounded-2 px-2">
                                <Link className="nav-link active text-light" aria-current="page" to="/Register">Register</Link>
                            </li>

                        </ul>
                            
                            
                            
                    </div>
                </div>
            </nav>
        </div>
    )
}
