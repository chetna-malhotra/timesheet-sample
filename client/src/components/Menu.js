import React, { Component, useState } from "react";
import { getUser, removeUserSession } from "../utils/session";
import Moment from "react-moment";

import Clock from "react-digital-clock";
import axios from "axios";

function Menu(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
  };

  return (
    <div className="wrapper">
      <div className="sidebar" >
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
            <a className="navbar-brand" href="#pablo">
              {" "}
              Dashboard{" "}
            </a>
            <button
              href
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar burger-lines" />
              <span className="navbar-toggler-bar burger-lines" />
              <span className="navbar-toggler-bar burger-lines" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    <span className="d-lg-none">Dashboard</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/user">
                    <span className="no-icon">Account</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" onClick={handleLogout.bind(this)}>
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
                  <div>
                    <span
                      className="fas fa-user-friends"
                      style={{ fontSize: "50px" }}
                    ></span>
                  </div>
                  <div className="card-header ">
                    <h3 className="card-title">282</h3>
                    <h4>Employees</h4>
                    <h4 className="card-category">In Wavelabs</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card text-center"
                  style={{
                    backgroundColor: "teal",
                    height: "200px",
                    color: "white",
                  }}
                >
                  <Moment format="D MMM YYYY" date={new Date()} />
                  <h1>
                    <Clock />
                  </h1>
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
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="card strpied-tabled-with-hover">
                  <div className="card-header ">
                    <h4 className="card-title">Careers</h4>
                  </div>
                  <div class="card-body table table-responsive">
                    <table class="table table-hover table-striped">
                      <thead>
                        <th>Job Code</th>
                        <th>Job Title</th>
                        <th>Experience</th>
                        <th> </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>TL1234</td>
                          <td>Timesheets Manager</td>
                          <td>2-5 years</td>
                          <td>
                            <button className="btn btn-rounded">
                              Referral
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>TL1234</td>
                          <td>Timesheets Manager</td>
                          <td>2-5 years</td>
                          <td>
                            <button className="btn btn-rounded">
                              Referral
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>TL1234</td>
                          <td>Timesheets Manager</td>
                          <td>2-5 years</td>
                          <td>
                            <button className="btn btn-rounded">
                              Referral
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>TL1234</td>
                          <td>Timesheets Manager</td>
                          <td>2-5 years</td>
                          <td>
                            <button className="btn btn-rounded">
                              Referral
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>TL1234</td>
                          <td>Timesheets Manager</td>
                          <td>2-5 years</td>
                          <td>
                            <button className="btn btn-rounded">
                              Referral
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            
            {/*   */}
            <div class="col-md-6">
              <div class="card strpied-tabled-with-hover">
                <div class="card-header ">
                  <h4 class="card-title">Employee Referral Scheme</h4>
                  <p class="card-category">
                    This policy is envisioned to cheer employees to refer their
                    friends and connections to a suitable position in Wavelabs
                    Technologies and strengthen the bonding between the
                    employees and the company in order to make the environment
                    lively and the work as pleasing as possible. An employee can
                    refer any number of resumes against a specific vacancy, for
                    which HR will announce the requirements from time to time.
                    Once a resume is received, it will go through the standard
                    recruitment processes and in the event of a referred
                    candidate being offered and joined, the employee who
                    referred the said candidate will be eligible to claim a
                    Referral Bonus, as indicated below, after 3 months from the
                    joining date:
                  </p>
                </div>
                <div class="card-body table table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <th>Designation</th>
                      <th>Indicative Experience Range</th>
                      <th>Referral Bonus</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Engineer</td>
                        <td>2-3 years</td>
                        <td>15,000</td>
                      </tr>
                      <tr>
                        <td>Senior Enineer</td>
                        <td>5+ years</td>
                        <td>30,000</td>
                      </tr>
                      <tr>
                        <td>React Developer</td>
                        <td>2-3 years</td>
                        <td>20,000</td>
                      </tr>
                    </tbody>
                  </table>
                  
                    <ul className="card-category"><li>
                       All payments will be made subject to the prevailing Income Tax regulations/deductions.
                    </li>
                    <li>
                      No bonus will be paid for referring candidates with less than 1.5 year of experience.
                    </li>
                    <li>
                      HR Team Members, Senior Architect/Senior Managers & above are not eligible to receive any reward under this  policy.
                    </li>
                    <li>
                      All the resumes to be sent to hr@wavelabs.ai by the employee from his/her own official email address.
                    </li>
                    </ul>
                 



                  
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
           
          </nav>
        </div>
      </footer>
    </div>
  );
}
export default Menu;
