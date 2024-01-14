import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function AllCourses() {
    useEffect(()=>{
        document.title='All Courses'
    });


  return (
    <div className='container mt-3' >
        <h3>All courses</h3>
        {/*=== LATEST COURSES ===*/}
        <h3 className='pb-1 mb-4 mt-4 text-start'>Latest Courses  <Link to="" className="ml-7">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*=== END OF LATEST COURSES ===*/}
    </div>
  )
}

export default AllCourses;