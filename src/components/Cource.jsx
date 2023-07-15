import React from 'react'

export default function Course(props) {
  return (
    <>
    { props.authorised  && <div>
      <div className="container text-center">
        <h1>Cources</h1>
      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>  
      <div className="card text-center mt-3">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
      <div className="card text-center mt-3">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
      </div>
    </div>
}
{!props.authorised && 
      <div className="container text-center mt-4">

       <h1 className='mb-4'> Oops Unauthorized Access</h1>
       <h1 className='mt-4'>Please Login</h1>

      </div>
    
}
    </>
  )

}