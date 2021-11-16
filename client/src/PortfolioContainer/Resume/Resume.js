import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase my projects and skills at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, NodeJs, Heroku",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Online ecommerce website for selling T-shirts with payment system integration of both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
    {
      title: "TaskMatepro",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "A website for updating and monitoring day-to-day tasks",
      subHeading:
        "Technologies Used:  Django, Python, SQLlite, Heroku",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Arizona State University, Tempe"}
        subHeading={"Master's in Computer Science"}
        fromDate={"2021"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"PES Institute of Technology, Bengaluru"}
        subHeading={"Bachelor's in Electronics and Communication"}
        fromDate={"2013"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Expert PU College, Mangalore"}
        subHeading={"Pre University"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Dell EMC"}
          subHeading={"Software Engineer"}
          fromDate={"2017"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed and designed an automation framework using python to run test suites and integrated it with jenkins and report portal for test report generation to reduce manual work by 60%.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed a log-collector web application in django for easy collection of logs from heterogenous storage products to reduce human effort by 50%.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed reusable components in React.js for triggering test suites using a GUI.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed Bash and Python scripts to stress test BMC and IPMI KCS driver.
          </span>
          <br />
        </div>

        <ResumeHeading
          heading={"Fouses"}
          subHeading={"Web Development Intern"}
          fromDate={"2020"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed a REST API using express and node.js for an online examination portal to help students take exams remotely.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated Swagger with the REST API for creating API documentation.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Application development"
        description="I love using the trending technologies for building applications both for web and mobile"
      />
      <ResumeHeading
        heading="Competitive Programming"
        description="I love solving complex programmming challenges on websites like Lettcode and Hackerrank. Want to explore Codeforces challenges in future"
      />
      <ResumeHeading
        heading="Music and Cricket"
        description="During my leisure time I love listening to music and and playing cricket"
      />
      
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;