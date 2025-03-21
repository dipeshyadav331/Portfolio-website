import "./about.css";
import microphone from "../../assets/about.png";
import Rounded from "../../cards/RoundedButton/index.jsx";
import projectIcon from "../../assets/calander.png";

const About = () => {
  return (
    <>
    <section id="about" className="aniAbout">
      <div className="about-container">
        <div className="delll">
          <div className="flex">
            <div className="abt-image-div">
              <img
                src={microphone}
                alt="note book icon"
                className="about-image"
              />
            </div>

            <h1 className="abt-header alt-text">About Me</h1>
          </div>
          <hr className="short-hr" />

          <br></br>
          <p className="about-me-text">
            My self <span className="para-c">Dipesh Yadav</span>. I'm an{" "}
            <span className="para-c">optimistic person </span>
            who loves to <span className="para-c">learn</span> and explore{" "}
            <span className="para-c">new technologies</span> and fields. I am a
            focused person who loves to{" "}
            <span className="para-c">overcome challenges</span> and{" "}
            <span className="para-c">solve problems</span>.
          </p>

          <p className="about-me-text">
            I am in my final year of <span className="para-c">B. Tech</span>{" "}
            UG from <span className="para-c">NSUT Delhi </span>(erstwhile NSIT)
            in
            <span className="para-c"> Information Technology(IT) </span>
            and I will graduate in <span className="para-c">2025</span>. I am a
            highly motivated and technically proficient student with a{" "}
            <span className="para-c">passion </span>
            for <span className="para-c">problem-solving </span>
            and <span className="para-c">software development</span>, skilled in{" "}
            <span className="para-c">Java, C++, JavaScript, Kotlin</span> and a range of{" "}
            <span className="para-c">web technologies</span>, including{" "}
            <span className="para-c">React, Redux</span>, and{" "}
            <span className="para-c">NodeJs</span>, with a strong track record
            in <span className="para-c">competitive programming</span> and a
            commitment to <span className="para-c">leadership</span> and
            <span className="para-c"> learning</span>.
          </p>
          <br />
          <br />

          <div className="about-me-textt flexx">
            <p className="ach-ie">
              <span className="ull">Achievements</span> :-
            </p>
            <br />
            <ul style={{color:'black'}}>
              <li>
                <h3>
                  <a
                    href="https://codeforces.com/profile/yadavdipesh"
                    target="blank"
                  >
                    <span className="blue">Expert (1700+)</span>
                  </a>{" "}
                  at CodeForces
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://www.codechef.com/users/yadavdipesh331" target="blank">
                    <span className="cyan">4 star (1850+) </span>
                  </a>{" "}
                  at CodeChef
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://leetcode.com/yadavdipesh" target="blank">
                    <span className="cyan">Guardian (2200+)</span>
                  </a>{" "}
                  at Leetcode
                </h3>
              </li>
              <li>
                <h3>
                  Solved{" "}
                  <a href="https://clist.by/coder/yadavdipesh/" target="blank">
                    <span className="cyan">1000+</span>
                  </a>{" "}
                  algorithmic{" "}
                  <a href="https://clist.by/coder/yadavdipesh/" target="blank">
                    <span className="cyan">problems</span>
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codechef.com/users/yadavdipesh331"
                    target="blank"
                  >
                    <span className="cyan">Rank 39</span>
                  </a>{" "}
                  in CodeChef Starters 91 out of{" "}
                  <span className="cyan"> 18726 </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codechef.com/users/yadavdipesh331"
                    target="blank"
                  >
                    <span className="cyan">Rank 54</span>
                  </a>{" "}
                  in CodeChef Starters 115 out of{" "}
                  <span className="cyan"> 26446 </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codechef.com/users/yadavdipesh331"
                    target="blank"
                  >
                    <span className="cyan">Rank 62</span>
                  </a>{" "}
                  in CodeChef Starters 113 out of{" "}
                  <span className="cyan"> 25065 </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codechef.com/users/yadavdipesh331"
                    target="blank"
                  >
                    <span className="cyan">Rank 73</span>
                  </a>{" "}
                  in CodeChef Starters 83 out of{" "}
                  <span className="cyan"> 25247 </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codeforces.com/profile/yadavdipesh"
                    target="blank"
                  >
                    <span className="cyan">Rank 533 </span>
                  </a>
                  in Codeforces Round 905 out of{" "}
                  <span className="cyan"> 25518 </span> Participants{" "}
                </h3>
              </li>
              <li>
                <h3>
                  Global{" "}
                  <a
                    href="https://codeforces.com/profile/yadavdipesh"
                    target="blank"
                  >
                    <span className="cyan">Rank 685 </span>
                  </a>
                  in Codeforces Round 895 out of{" "}
                  <span className="cyan"> 39240 </span> Participants{" "}
                </h3>
              </li>
              <li>
                <h3>
                  India{" "}
                  <a href="https://leetcode.com/yadavdipesh" target="blank">
                    <span className="cyan"> Rank 177</span>
                  </a>{" "}
                  in Leetcode Weekly 348 out of{" "}
                  <span className="cyan"> 6000+ </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  India{" "}
                  <a href="https://leetcode.com/yadavdipesh" target="blank">
                    <span className="cyan"> Rank 387</span>
                  </a>{" "}
                  in Leetcode BiWeekly 119 out of{" "}
                  <span className="cyan"> 5000+ </span> Participants
                </h3>
              </li>
              <li>
                <h3>
                  Qualified for{" "}
                  <span className="cyan">
                    RMO(Regional Mathematics Olympiad)
                  </span>{" "}
                  in 11th
                </h3>
              </li>
            </ul>
          </div>
          <br /> 
          <a
            href="https://drive.google.com/file/d/1yzSwX-IBQwyMIyBppsXiyrEM6r13oHyQ/view?usp=drive_link"
            target="blank"
          >
            <Rounded target="blank">
              <p style={{color:'black'}}>Resume </p>
              <i style={{color:'black'}} className="fa-solid fa-download"></i>
            </Rounded>
          </a>
        </div>
      </div>
            </section>

      <div className="flex project_heading">
          <div className="abt-image-div">
            <img
              src={projectIcon}
              alt="3d calender icon"
              className="about-image"
            />
          </div>

          <div>
            <h1 className="project-head-text alt-text">
              {" "}
              My Development Projects
            </h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>
    </>
  );
};

export default About;
