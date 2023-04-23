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
                      <h2>Service Details</h2>
                      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <div className="container">
                  <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>Service Details</li>
                  </ol>
                </div>
              </nav>
            </div>{/* End Breadcrumbs */}
            {/* ======= Service Details Section ======= */}
            <section id="service-details" className="service-details">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-4">
                    <div className="services-list">
                      <a href="#" className="active">Storage</a>
                      <a href="#">Logistics</a>
                      <a href="#">Cargo</a>
                      <a href="#">Trucking</a>
                      <a href="#">Packaging</a>
                      <a href="#">Warehousing</a>
                    </div>
                    <h4>Enim qui eos rerum in delectus</h4>
                    <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
                  </div>
                  <div className="col-lg-8">
                    <img src="assets/img/service-details.jpg" alt="" className="img-fluid services-img" />
                    <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
                    <p>
                      Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle" /> <span>Aut eum totam accusantium voluptatem.</span></li>
                      <li><i className="bi bi-check-circle" /> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span></li>
                      <li><i className="bi bi-check-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                    </ul>
                    <p>
                      Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                    </p>
                    <p>
                      Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
                    </p>
                  </div>
                </div>
              </div>
            </section>{/* End Service Details Section */}
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