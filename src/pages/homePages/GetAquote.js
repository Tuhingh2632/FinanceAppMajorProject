import React from 'react'
var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          
          <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <h1>Logis</h1>
              </a>
              <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
              <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a className="get-a-quote" href="get-a-quote.html">Get a Quote</a></li>
                </ul>
              </nav>{/* .navbar */}
            </div>
          </header>{/* End Header */}
          {/* End Header */}
          <main id="main">
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs">
              <div className="page-header d-flex align-items-center" style={{backgroundImage: 'url("assets/img/page-header.jpg")'}}>
                <div className="container position-relative">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h2>Get a Quote</h2>
                      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <div className="container">
                  <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>Get a Quote</li>
                  </ol>
                </div>
              </nav>
            </div>{/* End Breadcrumbs */}
            {/* ======= Get a Quote Section ======= */}
            <section id="get-a-quote" className="get-a-quote">
              <div className="container" data-aos="fade-up">
                <div className="row g-0">
                  <div className="col-lg-5 quote-bg" style={{backgroundImage: 'url(assets/img/quote-bg.jpg)'}} />
                  <div className="col-lg-7">
                    <form action="forms/quote.php" method="post" className="php-email-form">
                      <h3>Get a quote</h3>
                      <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <input type="text" name="departure" className="form-control" placeholder="City of Departure" required />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="delivery" className="form-control" placeholder="Delivery City" required />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="weight" className="form-control" placeholder="Total Weight (kg)" required />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="dimensions" className="form-control" placeholder="Dimensions (cm)" required />
                        </div>
                        <div className="col-lg-12">
                          <h4>Your Personal Details</h4>
                        </div>
                        <div className="col-md-12">
                          <input type="text" name="name" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="col-md-12 ">
                          <input type="email" className="form-control" name="email" placeholder="Email" required />
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="col-md-12">
                          <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                        </div>
                        <div className="col-md-12 text-center">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>
                          <button type="submit">Get a quote</button>
                        </div>
                      </div>
                    </form>
                  </div>{/* End Quote Form */}
                </div>
              </div>
            </section>{/* End Get a Quote Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <span>Logis</span>
                  </a>
                  <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                  <div className="social-links d-flex mt-4">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Product Management</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <div className="copyright">
                © Copyright <strong><span>Logis</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/ */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>{/* End Footer */}
          {/* End Footer */}
          <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          <div id="preloader" />
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
    }
  });