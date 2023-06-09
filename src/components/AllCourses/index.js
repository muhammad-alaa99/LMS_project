import React, { Component } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <section className='bg-light py-5 pt-2 py-xl-8'>
          <div className="container overflow-hidden  ">
              <div className="gy-md-0">
                <div className="text-md-start">
                  <div className="text-lg-left text-md-center text-sm-center">
                    <h2 className="display-3 fw-bolder">courses</h2>
                  
                    <span
                      className="w-25 mx-auto ms-md-0 mb-2 d-inline-block bg-dark"
                    style={{height:2+'px'}}              
                    ></span>
                    <br />
                    <span
                      className="mx-auto w-50 ms-md-0 mb-4 d-inline-block bg-dark"
                      style={{height:2+'px'}}   
                    ></span>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 pb-3 col-md-6 col-lg-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="image/hero5.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">software engineering</h5>
                          <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore, dolore voluptatum! Sunt error dicta
                            quidem!
                          </p>
                          <NavLink
                            to="/course"
                            className="btn btn-primary"
                            >details
                            </NavLink>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </Fragment>
    )
  }
}
