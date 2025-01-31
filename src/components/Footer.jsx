import React from 'react';

function Footer() {
  return (
    <footer className="bg-info text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-dark">
            <p className="mb-0">© {new Date().getFullYear()} Task Manager App by Nupur. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-decoration-none me-3 text-dark">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;