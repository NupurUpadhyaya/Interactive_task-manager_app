import React from 'react';

function Banner() {
  return (
    <div className="bg-light py-4 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-5 mb-2">Manage Your Tasks</h1>
            <p className="lead text-muted">
              Stay organized and boost your productivity with our simple task management system.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <img 
              src="https://miro.medium.com/v2/resize:fit:1400/0*1LBzF_AhNR3torr0" 
              alt="Productivity" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;