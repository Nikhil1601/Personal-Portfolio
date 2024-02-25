
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FaReact, FaPython, FaHtml5, FaCss3, FaJs, FaJava,FaNode } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { SiMongodb,  SiSolidity, SiEthereum, SiRedux,SiWeb3Dotjs,SiBlockchaindotcom ,SiExpress} from 'react-icons/si';
import { TbSql } from "react-icons/tb";
import AIMLIcon from '../assets/img/ml.png'
import './skills.css'

export const Skills = () => {
  const logostyle = {
    width:'80px',
    height:'80px',
    margin :'10px',
    color : '#ffff'
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div className='skill-intro'>
                        <p>I'm a multifaceted developer with expertise in various domains:</p>
            <ul>
                <li><strong>Web Development:</strong> Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li><strong>Blockchain Enthusiast:</strong> Skilled in Solidity, Web3.0, and dApps.</li>
                <li><strong>State Management Wizard:</strong> Redux for React.js apps.</li>
                <li><strong>Machine Learning Aficionado:</strong> Algorithms, frameworks, and data.</li>
                <li><strong>Polyglot Coder:</strong> Python, Java, and Flask.</li>
                <li><strong>Deep Learning Explorer:</strong> TensorFlow and PyTorch.</li>
                <li><strong>SQL Sorcerer:</strong> Efficient database management.</li>
            </ul>
            <p>Let's create something amazing together! 🚀 Feel free to reach out—I'm always up for a coding adventure.</p>

            </div>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MERN Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>AI/ML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web3 Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
                        <div className="tech-icons">
      
      <div className="icon-container">
        <SiMongodb className="icon" style={logostyle}/>
        <SiExpress className="icon" style={logostyle}/>
        <FaReact className="icon" style={logostyle}/>
        <FaNode className="icon" style={logostyle}/>
        <FaPython className="icon"style={logostyle} />
        <FaHtml5 className="icon" style={logostyle}/>
        <FaCss3 className="icon" style={logostyle}/>
        <FaJs className="icon" style={logostyle}/>
        <FaJava className="icon" style={logostyle}/>
        <img src={AIMLIcon} className="icon" style={logostyle}></img>
        <SiSolidity className="icon" style={logostyle}/>
        <SiEthereum className="icon" style={logostyle}/>
      
        <SiRedux className="icon" style={logostyle}/>
        
        <TbSql className="icon" style={logostyle}/>
        <SiWeb3Dotjs className="icon" style={logostyle}/>
        <SiBlockchaindotcom className="icon" style={logostyle}/>
      </div>
    </div>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
