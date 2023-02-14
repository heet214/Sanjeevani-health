import React from 'react'


export default function NavBar() {
  return (
    <>
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
        <div classname="container-fluid">
            <a classname="navbar-brand" href="/">Navbar</a>
            
            <div classname="collapse navbar-collapse" id="navbarNav">
            <ul classname="navbar-nav">
                <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li classname="nav-item">
                <a classname="nav-link" href="/">Features</a>
                </li>
            
            </ul>
            </div>
        </div>
</nav>
    </>
  )
}
