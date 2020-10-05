import React from 'react'

function User() {
    return (
        <div>
            
        <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
  {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

  Tip 2: you can also add an image using data-image tag
    */}
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href=""className="simple-text">
        Wavelabs
      </a>
    </div>
    <ul className="nav">
      <li>
        <a className="nav-link" href="/dashboard">
          <i className="nc-icon nc-chart-pie-35" />
          <p>Dashboard</p>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./user.html">
          <i className="nc-icon nc-circle-09" />
          <p>User Profile</p>
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
      <a className="navbar-brand" href="#pablo"> User </a>
      <button href className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-bar burger-lines" />
        <span className="navbar-toggler-bar burger-lines" />
        <span className="navbar-toggler-bar burger-lines" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navigation">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#" className="nav-link" data-toggle="dropdown">
             
              <span className="d-lg-none">Dashboard</span>
            </a>
          </li>
         
         
        </ul>
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            <a className="nav-link" href="#pablo">
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
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-5 pr-1">
                    <div className="form-group">
                      <label>Company (disabled)</label>
                      <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Creative Code Inc." />
                    </div>
                  </div>
                  <div className="col-md-3 px-1">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
                    </div>
                  </div>
                  <div className="col-md-4 pl-1">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="Company" defaultValue="Mike" />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" defaultValue="Andrew" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pr-1">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="City" defaultValue="Mike" />
                    </div>
                  </div>
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" placeholder="Country" defaultValue="Andrew" />
                    </div>
                  </div>
                  <div className="col-md-4 pl-1">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="number" className="form-control" placeholder="ZIP Code" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>About Me</label>
                      <textarea rows={4} cols={80} className="form-control" placeholder="Here can be your description" value="Mike" defaultValue={"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."} />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-user">
            <div className="card-image">
              <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
            </div>
            <div className="card-body">
              <div className="author">
                <a href="#">
                  <img className="avatar border-gray" src="../assets/img/faces/face-3.jpg" alt="..." />
                  <h5 className="title">Mike Andrew</h5>
                </a>
                <p className="description">
                  michael24
                </p>
              </div>
              <p className="description text-center">
                "Lamborghini Mercy
                <br /> Your chick she so thirsty
                <br /> I'm in that two seat Lambo"
              </p>
            </div>
            <hr />
            <div className="button-container mr-auto ml-auto">
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <i className="fa fa-facebook-square" />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <i className="fa fa-twitter" />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <i className="fa fa-google-plus-square" />
              </button>
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
</div>

    )
}

export default User
