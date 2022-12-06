import Head from "next/head";
import Image from "next/image";
// import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";

export default function Home({ blogs }) {
  // console.log(blogs);
  return (
    <>
      <>

        <Script src="assets/js/main.js"></Script>
        <script src="assets/js/mixitup.min.js"></script>
        <script src="assets/js/scrollreveal.min.js"></script>
        <script src="assets/js/swiper-bundle.min.js"></script>

        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            rel="icon"
            href="/assets/img/aa.ico"
            type="image/x-icon"
          />

          <link
            href="/unpkg.com/boxicons%402.1.2/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />

          <link rel="stylesheet" href="/assets/css/styles.css" />
          
          <title>{"Md Huzaifa {••}"}</title>
        </Head>

        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">
              Md Huzaifa Patel
            </a>

            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="bx bx-user"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="bx bx-book"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    <i className="bx bx-briefcase-alt-2"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="bx bx-message-square-detail"></i>
                  </a>
                </li>
              </ul>
            </div>

            <i className="bx bx-moon change-theme" id="theme-button"></i>
          </nav>
        </header>

        <main className="main">
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <span className="home__greeting">Hello, I'm</span>
                <h1 className="home__name">Muhammad Huzaifa</h1>
                <h3 className="home__education"></h3>
                <div className="home__typing">
                  <span is="type-async" id="type-text">
                    ...
                  </span>
                  <span className="blinking-cursor">_</span>
                </div>

                <div className="home__buttons">
                  <a
                    download=""
                    href="/assets/pdf/Muhammad-Huzaifa-Resume.pdf"
                    className="button button--ghost"
                  >
                    Download CV
                  </a>
                  <a href="#about" className="button">
                    About me
                  </a>
                </div>
              </div>

              <div className="home__handle">
                <img
                  className="home__img"
                  src="/assets/img/logo.png"
                  alt=""
                />
              </div>
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifa-patel/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
                <a
                  href="https://github.com/mdhuzaifapatel"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=916360262475&amp;text=Hello,%20I%20need%20a%20website!"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-whatsapp-square"></i>
                </a>
              </div>

              <a href="#about" className="home__scroll">
                <i className="bx bxs-mouse-alt home__scroll-icon"></i>
                <span className="home__scroll-name">Scroll Down</span>
              </a>
            </div>
          </section>

          <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
              <img src="/assets/img/about.jpg" alt="" className="about__img" />

              <div className="about__data">
                <div className="about__info">
                  <div className="about__box">
                    <i className="bx bx-award about__icon"></i>
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">Fresher</span>
                  </div>

                  <div className="about__box">
                    <i className="bx bx-briefcase-alt about__icon"></i>
                    <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">5+ Projects</span>
                  </div>

                  <div className="about__box">
                    <i className="bx bx-support about__icon"></i>
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">Online 24/7</span>
                  </div>
                </div>

                <p className="about__description">
                I am an aspiring developer, currently pursuing my B.E in Electronics & Communication (2023). 
                <br /> <br /> I love programming and developing websites. Interested in Full Stack Software Development
                <br /> and Web Development. <br /> <br /> Especially active on <a className="hacker" href="https://www.hackerrank.com/mdhuzaifapatel" target="_blank" >HackerRank!</a> 
                </p>

                <a href="#contact" className="button">
                  Contact Me
                </a>
              </div>
            </div>
          </section>

          <section className="skills section" id="skills">
            <span className="section__subtitle">My abilities</span>
            <h2 className="section__title">My Experience</h2>

            <div className="skills__container container grid">
              <div className="skills__content">
                <h3 className="skills__title">Frontend</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">GitHub</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    {/* <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">Angular</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="skills__content">
                <h3 className="skills__title">Backend</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    {/* <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">SQL Server</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div> */}
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    {/* <div className="skills__data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                        <h3 className="skills__name">c++</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services section">
            <span className="section__subtitle">My Services</span>
            <h2 className="section__title">What I Offer</h2>
            <div className="services__container container grid">
              <div className="services__card">
                <h3 className="services__title">
                  Frontend <br />
                  Development
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">Frontend Development</h3>
                    <p className="services__modal-description">
                      What I can provide at the frontend?
                    </p>

                    <ul className="services__modal-list">
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Responsive Website Development.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                        I develop the interactive user interface.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                        Mobile-first design.
                        </p>
                      </li>

                      {/* <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          I position your company brand.
                        </p>
                      </li> */}

                      {/* <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Design and mockups of products for companies.
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="services__card">
                <h3 className="services__title">
                  Backend <br />
                  Development
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">Backend Development</h3>
                    <p className="services__modal-description">
                    What I can provide at the backend?
                    </p>

                    <ul className="services__modal-list">
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Backend development using NodeJS, ExpressJS, MySQL, etc.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                         Python & Flask Framework.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Develop CMS (Content Management System) using Sanity, Strapi, etc.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Payment gateway integration.
                        </p>
                      </li>

                      {/* <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Design and mockups of products for companies.
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="services__card">
                <h3 className="services__title">
                  Visual <br />
                  Designer
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">Visual Designer</h3>
                    <p className="services__modal-description">
                      What I can do with my creative designing skills?
                    </p>

                    <ul className="services__modal-list">
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Photoshop, Premeire Pro, After Effects
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Create intro videos/ logo intro.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Video editing.
                        </p>
                      </li>

                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Product/Event Promo videos.
                        </p>
                      </li>

                      {/* <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          I position your company brand.
                        </p>
                      </li> */}

                      {/* <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                          Design and mockups of products for companies.
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Projects</h2>

            <div className="work__filters">
              <span className="work__item active-work" data-filter="all">
                All
              </span>
              <span className="work__item" data-filter=".web">
                Websites
              </span>
              <span className="work__item" data-filter=".soft">
                Software
              </span>
              <span className="work__item" data-filter=".video">
                Videos
              </span>
            </div>

            <div className="work__container container grid">
              <div className="work__card mix web">
                <img src="/assets/img/work1.jpg" alt="" className="work__img" />

                <h3 className="work__title">Coding Club website</h3>

                <a href="https://codefellas.tech" target="_blank" className="work__button">
                  Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix web">
                <img src="/assets/img/work2.jpg" alt="" className="work__img" />

                <h3 className="work__title">CSI Club website</h3>

                <a href="#" className="work__button">
                  Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix soft">
                <img src="/assets/img/work3.jpg" alt="" className="work__img" />

                <h3 className="work__title">Virtual Mouse</h3>

                <a href="https://drive.google.com/file/d/1ZTCaq1JF1Wmf90i8qvL8tw0_dadI3ebp/view" className="work__button" target="_blank">
                  Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix soft">
                <img src="/assets/img/work4.jpg" alt="" className="work__img" />

                <h3 className="work__title">Student Management System</h3>

                <a href="https://github.com/mdhuzaifapatel/Student-Management-System" className="work__button">
                  Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix soft">
                <img src="/assets/img/work5.jpg" alt="" className="work__img" />

                <h3 className="work__title">Library App</h3>

                <a href="#" className="work__button">
                  Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>
            </div>
          </section>

          {/* <section className="testimonial section">
            <span className="section__subtitle">My clients say</span>
            <h2 className="section__title">Testimonial</h2>

            <div className="testimonial__container container swiper">
              <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                  <img
                    src="/assets/img/testimonial1.png"
                    alt=""
                    className="testimonial__img"
                  />

                  <h3 className="testimonial__name">keyvan alishiri</h3>
                  <p className="testimonial__description">
                    A really good job, all aspects of the project were followed
                    step by step and with good results.
                  </p>
                </div>

                <div className="testimonial__card swiper-slide">
                  <img
                    src="/assets/img/testimonial2.png"
                    alt=""
                    className="testimonial__img"
                  />

                  <h3 className="testimonial__name">keyvan alishiri</h3>
                  <p className="testimonial__description">
                    A really good job, all aspects of the project were followed
                    step by step and with good results.
                  </p>
                </div>

                <div className="testimonial__card swiper-slide">
                  <img
                    src="/assets/img/testimonial3.png"
                    alt=""
                    className="testimonial__img"
                  />

                  <h3 className="testimonial__name">keyvan alishiri</h3>
                  <p className="testimonial__description">
                    A really good job, all aspects of the project were followed
                    step by step and with good results.
                  </p>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </section> */}

          <section className="contact section" id="contact">
            <span className="section__subtitle">Get in touch</span>
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container grid">
              <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                  <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">
                      mdhuzaifapatel@gmail.com
                    </span>

                    <a
                      href="mailto:mdhuzaifapatel@gmail.com"
                      target="_blank"
                      className="contact__button"
                    >
                      Write me
                      <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>
                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">6360262475</span>

                    <a
                      href="https://api.whatsapp.com/send?phone=916360262475&amp;text=Hello,%20need%20more%20information!"
                      target="_blank"
                      className="contact__button"
                    >
                      Write me
                      <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-linkedin contact__card-icon"></i>
                    <h3 className="contact__card-title">LinkedIn</h3>
                    <span className="contact__card-data">Muhammad Huzaifa Patel</span>

                    <a
                      href="https://www.linkedin.com/in/muhammad-huzaifa-patel/"
                      target="_blank"
                      className="contact__button"
                    >
                      Write me
                      <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form action="#" className="contact__form">
                  <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Insert your name"
                      className="contact__form-input"
                    />
                  </div>

                  <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="Insert your email"
                      className="contact__form-input"
                    />
                  </div>

                  <div className="contact__form-div contact__form-area">
                    <label htmlFor="" className="contact__form-tag">
                      Project
                    </label>
                    <textarea
                      className="contact__form-input"
                      placeholder="Write your project"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <button className="button">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer__container container">
            <h1 className="footer__title">Adiós Amigo!</h1>

            {/* <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" className="footer__link">
                  Projects
                </a>
              </li>
            </ul> */}
            <ul className="footer__social">
              <a
                href="https://www.linkedin.com/in/muhammad-huzaifa-patel/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/huzaifa.py/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://twitter.com/mdhuzaifapatel"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </ul>

            <span className="footer__copy">
            Copyright © 2022. All Rights Reserved.
            <br />
            Developed with ❤️ by me. 
            </span>
          </div>
        </footer>
        
      </>
    </>
  );
}

// Sanity Backend Connection
// export async function getServerSideProps(context) {
//   const client = createClient({
//     projectId: "ou96eqqz",
//     dataset: "production",
//     useCdn: false,
//   });

//   const query = `*[_type == "blog"]`;
//   const blogs = await client.fetch(query);

//   return {
//     props: {
//       blogs,
//     },
//   };
// }
