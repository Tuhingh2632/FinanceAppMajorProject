import React from 'react'
var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Logis Bootstrap Template - Pricing</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="assets/css/main.css" rel="stylesheet" />
          {/* =======================================================
    * Template Name: Logis
    * Updated: Mar 10 2023 with Bootstrap v5.2.3
    * Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
          {/* ======= Header ======= */}
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
                  <li><a href="pricing.html" className="active">Pricing</a></li>
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
                      <h2>Pricing</h2>
                      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <div className="container">
                  <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>Pricing</li>
                  </ol>
                </div>
              </nav>
            </div>{/* End Breadcrumbs */}
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="pricing-item">
                      <h3>Free Plan</h3>
                      <h4><sup>$</sup>0<span> / month</span></h4>
                      <ul>
                        <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                        <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                        <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                      </ul>
                      <a href="#" className="buy-btn">Buy Now</a>
                    </div>
                  </div>{/* End Pricing Item */}
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="pricing-item featured">
                      <h3>Business Plan</h3>
                      <h4><sup>$</sup>29<span> / month</span></h4>
                      <ul>
                        <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                        <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                        <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
                      </ul>
                      <a href="#" className="buy-btn">Buy Now</a>
                    </div>
                  </div>{/* End Pricing Item */}
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                    <div className="pricing-item">
                      <h3>Developer Plan</h3>
                      <h4><sup>$</sup>49<span> / month</span></h4>
                      <ul>
                        <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                        <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                        <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
                      </ul>
                      <a href="#" className="buy-btn">Buy Now</a>
                    </div>
                  </div>{/* End Pricing Item */}
                </div>
              </div>
            </section>{/* End Pricing Section */}
            {/* ======= Horizontal Pricing Section ======= */}
            <section id="horizontal-pricing" className="horizontal-pricing pt-0">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <span>Horizontal Pricing</span>
                  <h2>Horizontal Pricing</h2>
                </div>
                <div className="row gy-4 pricing-item" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>Free Plan</h3>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup>0<span> / month</span></h4>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <ul>
                      <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                      <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                      <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="row gy-4 pricing-item featured mt-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>Business Plan</h3>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup>29<span> / month</span></h4>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <ul>
                      <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                      <li><i className="bi bi-check" /> <strong>Nec feugiat nisl pretium</strong></li>
                      <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="row gy-4 pricing-item mt-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h3>Developer Plan</h3>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <h4><sup>$</sup>49<span> / month</span></h4>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <ul>
                      <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                      <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                      <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                  </div>
                </div>{/* End Pricing Item */}
              </div>
            </section>{/* End Horizontal Pricing Section */}
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