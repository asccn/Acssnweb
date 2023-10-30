// import { useState } from "react";
import Volunteer from "./componenta/volunteer";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPeopleGroup,
  faHandshakeAngle,
  faPersonCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import "./Mobile.css";
import Testinomials from "./componenta/Testinomial";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img className="logoimg" src="src/assets/logo.png" alt="logo" />
        </div>
        <nav>
          <a href="#">Home</a>

          <Link
            activeClass="active"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="linkscroll"
          >
            About Us
          </Link>

          <Link
            activeClass="active"
            to="missions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="linkscroll"
          >
            Missions
          </Link>

          <Link
            activeClass="active"
            to="ourworks"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="linkscroll"
          >
            Our Works
          </Link>

          <Link
            activeClass="active"
            to="volunteer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="linkscroll"
          >
            Our Team
          </Link>

          <Link
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="linkscroll"
          >
            Contact Us
          </Link>
        </nav>
      </header>
      <section className="hero">
        <div className="left">
          <h1>
            &quot;Help us to color the world with compassion and understanding
          </h1>

          <h3>
            Support our mission to make a difference in the lives of those with
            Autism.&quot;
          </h3>
        </div>
        <div className="right">
          <img
            className="herochildrenimg"
            src="./assets/mainimg.jpeg"
            alt="herochildren"
          />
        </div>
      </section>
      <section className="features1">
        <div className="feature1 feature1">
          <div>
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              style={{ color: "#f90033", fontSize: "50px" }}
            />
          </div>
          <div className="featurediv">
            <h2>Helpful</h2>
            <p>We Are Very Helpful & Always Prepared.</p>
          </div>
        </div>
        <div className="feature1 feature1">
          <div>
            <FontAwesomeIcon
              icon={faPersonCircleCheck}
              style={{ color: "#fb0021", fontSize: "50px" }}
            />
          </div>
          <div className="featurediv">
            <h2>Dedicated</h2>
            <p>We are Always Dedicated To Our Work.</p>
          </div>
        </div>
        <div className="feature1 feature1">
          <div>
            <FontAwesomeIcon
              icon={faPeopleGroup}
              style={{ color: "#f30030", fontSize: "50px" }}
            />
          </div>
          <div className="featurediv">
            <h2>Strong Team</h2>
            <p>We Working As A Family Everytime.</p>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="aboutus-img">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <div className="aboutus-right">
          <span className="aboutust titles">About us</span>
          <h1 className="red-text">How We Are Making A Difference</h1>
          <p>
            Autism Care and Support Society Nepal, Bardaghat-04, Nawalparasi
            (ACSSN) was founded on 7th August 2023. We are active autism
            organization in Nepal that is run by passionate parents that care
            for persons with autism. It is a non-governmental, nonprofit making,
            non-political NGO registered in District Administration Office
            (Regd. No. 2597/2080) and affiliated to Social Welfare Council (SWC
            No: 55796).
          </p>
          <p>
            In the picturesque landscapes of rural Nepal, our Autism
            Organization is fervently dedicated to catalyzing transformation
            among children with autism, particularly those hailing from
            financially challenged backgrounds. We recognize that economic
            constraints often compound the daily struggles faced by these
            families, limiting their access to essential resources and support.
            That&apos;s why, we have been unwavering in our commitment to
            bridging this gap and ensuring that every child, regardless of their
            socio-economic status, has access to the basic level trainings and
            interventions they deserve. These fundamental trainings equip
            autistic children with crucial life skills, helping them navigate
            their world with greater confidence and independence. Moreover, we
            extend our outreach to the parents, providing them with the
            knowledge and tools they need to support their children effectively.
            <br></br>
            <br></br>
            As a result, we witness not only the remarkable growth and
            development of these children but also the profound positive impact
            on their families. Through the empowerment of the financially
            challenged, we are sowing the seeds of hope and progress, nurturing
            a more inclusive and compassionate society where every child&apos;s
            potential can flourish, regardless of their financial circumstances.
            Our work in rural Nepal stands as a testament to the unwavering
            spirit of our organization, dedicated to bringing about meaningful
            change, one child and one family at a time.
          </p>
        </div>
      </section>
      <section className="missions">
        <div className="missiontitle1 titles">Our mission</div>
        <div className="missiontitle2 red-text">Why Do We This</div>
        <div className="missionslist">
          <div className="mission1 mission">
            <div>
              <img className="mission-img" src="src/assets/edu.webp" alt="" />
            </div>
            <div className="missiondiv">
              <h2>Education</h2>
              <p>Education, nutrition and holistic development of children</p>
            </div>
          </div>
          <div className="mission1 mission">
            <div>
              <img
                className="mission-img"
                src="src/assets/health.webp"
                alt=""
              />
            </div>
            <div className="missiondiv">
              <h2>Health Care</h2>
              <p>Taking healthcare services to needy children </p>
            </div>
          </div>
          <div className="mission1 mission">
            <div>
              <img
                className="mission-img"
                src="src/assets/awareness.webp"
                alt=""
              />
            </div>
            <div className="missiondiv">
              <h2>Awareness</h2>
              <p>Effective Awareness Program about Autism</p>
            </div>
          </div>
          <div className="mission1 mission">
            <div>
              <img
                className="mission-img"
                src="src/assets/livelihood.webp"
                alt=""
              />
            </div>
            <div className="missiondiv">
              <h2>Livelihood</h2>
              <p>
                Skill training and placement support for underprivileged
                Childrens
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ourworks">
        <h2 className="red-text">Our recent work</h2>
        <p className="ourworkp">
          <div className="date">On September-02,2023</div>
          we have conducted a seminar with moto: &quot;Empower the Spectrum:
          Free Autism Checks for a Brighter Tomorrow&quot; where expected around
          50-60 autistic children but very surprisingly 170 Autistic children
          attended the seminar. Not only Families around our district but from
          various part of Nepal.
        </p>
        <div className="workimgs">
          <div className="workimg">
            <img
              className="workimg11"
              src="src/assets/workimg1.jpeg"
              alt="herochildren"
            />
          </div>
          <div className="workimg">
            <img
              className="workimg11"
              src="src/assets/workimg2.jpeg"
              alt="herochildren"
            />
          </div>
          <div className="workimg">
            <img
              className="workimg11"
              src="src/assets/workimg3.jpeg"
              alt="herochildren"
            />
          </div>
        </div>
      </section>
      <section className="helpus">
        <h4 className="red-text">How Can We Help Them?</h4>
        <div className="help">
          <div className="help1">
            <div>
              <img src="src/assets/Giving-Love.png" alt="" />
            </div>
            <div className="helpdiv">
              <h2>Giving Love</h2>
              <p>
                Embracing Autism: Nurturing Uniqueness, Building Understanding,
                and Cultivating Inclusive Support with Love.
              </p>
            </div>
          </div>
          <div className="help1">
            <div>
              <img src="src/assets/Donations.png" alt="" />
            </div>
            <div className="helpdiv">
              <h2>Donations</h2>
              <p>
                Fostering Impact: Supporting Causes, Empowering Change, and
                Driving Progress through Generous Donations.
              </p>
            </div>
          </div>
          <div className="help1 ">
            <div>
              <img src="src/assets/Volunteering.png" alt="" />
            </div>
            <div className="helpdiv">
              <h2>Volunteering</h2>
              <p>
                Enabling Impact: Inspiring Action, Cultivating Empathy, and
                Driving Change through Dedicated Volunteering.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testinomials">
        <div className="mob-hidden">
          <img
            className="founderimg"
            src="/herochildren1.jpeg"
            alt="herochildren"
          />
        </div>
        <div className="messages">
          <h2 className="red-text msg-founder"> Message from Founder</h2>
          <div className="desktop-hidden">
            <img
              className="founderimg"
              src="/herochildren1.jpeg"
              alt="herochildren"
            />
          </div>
          <div className="message">
            <p>
              As the Chairperson of our Autism Organization and mother of
              Autistic Child, Chiraag Karki, I am deeply humbled and inspired by
              the incredible journey we have started and embarked upon together.
              Our mission to provide basic level training to economically
              challenged children with autism is a testament to the power of
              compassion, resilience, and unwavering dedication. In the heart of
              rural Nepal, where financial hardships can often overshadow the
              dreams and aspirations of our children, we stand as a beacon of
              hope. Our commitment to extending a helping hand to those who need
              it the most is a source of immense pride for us all. Through your
              support and our collective efforts, we are making a profound
              difference in the lives of these children and their families. We
              are empowering them with the tools, knowledge, and skills they
              need to navigate the complex world of autism. With each training
              session, we are planting the seeds of hope, growth, and
              independence. I want to express my heartfelt gratitude to each and
              every one of you. Your generosity, kindness, and belief in our
              cause have allowed us to reach new heights in our mission.
              Together, we are transforming the lives of children who, for too
              long, have been denied the opportunities they deserve. As we move
              forward, let us continue to work tirelessly, to innovate, and to
              inspire. Let us keep the flame of hope burning brightly in the
              hearts of these children and their families. Together, we are
              proving that economic challenges should never be a barrier to
              dreams and potential. Thank you for being a part of this
              extraordinary journey. Your support is not just changing lives; it
              is building a more inclusive and compassionate world for all. With
              deep gratitude and unwavering determination
            </p>
            <h3>
              <span>Chija Sunar</span>
              <span>Founder & Chairperson,ASCCN</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="testinomials">
        <div className="mob-hidden">
          <img
            className="founderimg"
            src="/herochildren1.jpeg"
            alt="herochildren"
          />
        </div>
        <div className="messages">
          <h2 className="red-text msg-founder"> Message from Founder</h2>
          <div className="desktop-hidden">
            <img
              className="founderimg"
              src="/herochildren1.jpeg"
              alt="herochildren"
            />
          </div>
          <div className="message">
            <p>
              Our journey as co-founders of this Autism Organization began with
              a simple yet profound idea: to extend a helping hand to families
              facing economic challenges while navigating the intricate
              landscape of autism. We realized that in the remote and
              underserved rural areas of Nepal, where resources are scarce,
              these families often faced insurmountable barriers. It became our
              mission to bridge this gap and bring fundamental training and
              support to these families, helping them and their children with
              autism thrive despite economic constraints. We understood that by
              empowering these families, we were not only transforming
              individual lives but also uplifting entire communities. Our
              journey is a testament to the power of dedication and collective
              effort. We are proud to say that we are making a tangible
              difference in the lives of these families, enabling them to become
              advocates for change, not only in their own homes but also in the
              broader rural landscape of Nepal. I want to extend my heartfelt
              gratitude to each one of you who has supported our cause.
              Together, we are sowing the seeds of progress and fostering hope
              in the hearts of those who need it most. With unwavering
              commitment,
            </p>
            <h3>
              <span>Rohit Karki</span>
              <span>Chief Adminitrator/Co-Founder/Project Coordinator</span>
            </h3>
          </div>
        </div>
      </section> */}
      <Testinomials />
      <Volunteer />
      <section className="contactus">
        <div className="missiontitle2">CONTACT US</div>
        <div className="contact">
          <div className="contact1 ">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#fb001c", fontSize: "50px" }}
              />
            </div>
            <h4>Our main Office</h4>
            <p>
              Bardaghat Municipality-04,Badhipidit, Nawalparasi-west,Lumbini
              Province,Nepal
            </p>
          </div>
          <div className="contact1 ">
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#f8002c", fontSize: "50px" }}
              />
            </div>
            <h4>Phone Number</h4>
            <p>🇳🇵+977-9864153866</p>
            <p>🇳🇵+977-9809103854</p>
          </div>
          {/* <div className="contact1 ">
            <div>
              <img src="src/assets/Donations.png" alt="" />
            </div>
            <h4>FAX</h4>
            <p>2736578236582</p>
          </div> */}
          <div className="contact1 ">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#f8003c", fontSize: "50px" }}
              />
            </div>
            <h4>E-mail</h4>
            <p>Karki.rohit.45@gmail.com</p>
            <p>Sunar.chija45@gmail.com</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <img className="logoimg" src="src/assets/logo.png" alt="logo" />

          <div className="followus">
            <h4 className="bg">Follow us</h4>
            <div className="slinks">
              <a href="#">
                <img
                  className="sicon bg"
                  src="src/assets/facebook.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img className="sicon" src="src/assets/instagram.png" alt="" />
              </a>
              <a href="#">
                <img className="sicon" src="src/assets/twitter.png" alt="" />
              </a>
              <a href="#">
                <img className="sicon" src="src/assets/linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <div className="quicklinks">
            <h4 className="bg">Quick Links</h4>
            <a href="#">Home</a>

            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              About Us
            </Link>

            <Link
              activeClass="active"
              to="missions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Missions
            </Link>

            <Link
              activeClass="active"
              to="ourworks"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Our Works
            </Link>

            <Link
              activeClass="active"
              to="volunteer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Our Team
            </Link>

            <Link
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="credits">
          <p>
            <span> ACSSN ©All Rights Reserved-2023</span>
            <span className="developer">
              Developed with ❤️ by
              <a href="https://www.facebook.com/sujansince2003">Sujan Khatri</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
