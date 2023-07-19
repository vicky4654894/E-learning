import React from 'react'

export default function Course(props) {
  return (
    <>
    { props.authorised  && <div>
      <div className="container text-center">
        <h1>Cources</h1>
      <div className="card text-center">
        <div className="card-header">
          Cource 1
        </div>
        <div className="card-body">
          <h5 className="card-title">Java Learning</h5>
          <p className="card-text">Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.</p>
          <a href="#" className="btn btn-primary">Start Learning</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>  
      <div className="card text-center mt-3">
        <div className="card-header">
          Cource 2
        </div>
        <div className="card-body">
          <h5 className="card-title">Python</h5>
          <p className="card-text">Python is a popular programming language. Python can be used on a server to create web applications. </p>
          <a href="#" className="btn btn-primary">Start Learning</a>
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
          <h5 className="card-title">Web Development</h5>
          <p className="card-text">Web development refers to the creating, building, and maintaining of websites.</p>
          <a href="#" className="btn btn-primary">Start Learning</a>
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