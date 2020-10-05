import React, { Component, useState } from 'react'
import { getUser, removeUserSession } from '../utils/session';
import axios from 'axios'

function Menu(props){
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    
  }

        return (
         <div className="wrapper">
  <div className="sidebar" data-image="../assets/img/sidebar-3.jpg">
    <div className="sidebar-wrapper">
      <div className="logo">
        <a href="#" className="simple-text">
          Wavelabs
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item active">
          <a className="nav-link" href="dashboard.html">
            <i className="nc-icon nc-chart-pie-35" />
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/user">
            <i className="nc-icon nc-circle-09" />
            <p>My Profile</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./table.html">
            <i className="nc-icon nc-notes" />
            <p>Table List</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./typography.html">
            <i className="nc-icon nc-paper-2" />
            <p>Typography</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./icons.html">
            <i className="nc-icon nc-atom" />
            <p>Icons</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./maps.html">
            <i className="nc-icon nc-pin-3" />
            <p>Maps</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./notifications.html">
            <i className="nc-icon nc-bell-55" />
            <p>Notifications</p>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
  <div className="main-panel">
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#pablo"> Dashboard </a>
        <button href className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <i className="nc-icon nc-palette" />
                <span className="d-lg-none">Dashboard</span>
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="nc-icon nc-planet" />
                <span className="notification">5</span>
                <span className="d-lg-none">Notification</span>
              </a>
              <ul className="dropdown-menu">
                <a className="dropdown-item" href="#">Notification 1</a>
                <a className="dropdown-item" href="#">Notification 2</a>
                <a className="dropdown-item" href="#">Notification 3</a>
                <a className="dropdown-item" href="#">Notification 4</a>
                <a className="dropdown-item" href="#">Another notification</a>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nc-icon nc-zoom-split" />
                <span className="d-lg-block">&nbsp;Search</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#pablo">
                <span className="no-icon">Account</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="no-icon">Dropdown</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link"   onClick={handleLogout.bind(this)} >
                <span className="no-icon">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* End Navbar */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
            <div >
            <span className="fas fa-user-friends" style={{fontSize:"50px"}}></span>
            </div>
              <div className="card-header ">
                <h3 className="card-title">282</h3>
                <h4>Employees</h4>
                <h4 className="card-category">In Wavelabs</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card text-align-center " style={{backgroundColor:"teal"}}>
          <p>Date/Time: <span id="datetime"></span></p>
          <script>
          var dt = new Date();
          document.getElementById("datetime").innerHTML=dt.toLocaleString();
          </script>   
            <h1 style={{color:'white'}}>11:10AM</h1>
            <h4 style={{color:'white'}}>24th September, 2020</h4>
          </div>
          </div>
          <div className="col-md-4">
          <div class="card strpied-tabled-with-hover">
              <div className="card-header ">
                <h4 className="card-title">Leaves</h4>
                
              </div>
              <div class="card-body table table-responsive">
              <table class="table table-hover table-striped">
                                        <thead>
                                            <th>Accrued</th>
                                            <th>Taken</th>
                                            <th>LOP</th>
                                            <th>Balance</th>
                                           
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>1</td>
                                               
                                            </tr>
                                            </tbody>
                                            </table>
              </div>
              <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    <footer className="footer">
      <div className="container-fluid">
        <nav>
          <ul className="footer-menu">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Company
              </a>
            </li>
            <li>
              <a href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                Blog
              </a>
            </li>
          </ul>
          <p className="copyright text-center">
            ©
            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
          </p>
        </nav>
      </div>
    </footer>
  </div>


        )
    
}
export default Menu



