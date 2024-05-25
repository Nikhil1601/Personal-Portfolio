import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chatpro from '../assets/img/ChatPro.png'
import crbs from '../assets/img/CRBS.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import cryptogeek from '../assets/img/Crypto_Geek.png';
import HERC from '../assets/img/HERC-resized.jpg';
import DAV from '../assets/img/DAV.png';
import IMS from '../assets/img/IMS.avif'
import BookShelf from '../assets/img/pixlr-image-generator-1b0fe4d0-be85-4efb-a48f-29299f84d8d1.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import SuperMarioGame from '../assets/img/Super-mario-game.png'
import ICMS from '../assets/img/ICMS.png'
import EMW from '../assets/img/EMW.png'
import driverdrowsiness from '../assets/img/driver-drowsiness.jpg'
import wrinkles from '../assets/img/Wrinkle-detector.png'
import chatbeta from '../assets/img/ChatBeta.png'
import Aichatbot from '../assets/img/AI_CHAT_2.jpg'
export const Projects = () => {

  const projects = [
    {
      title: "ChatPro",
      description: "A chatengine.io API based react+vite chat application, in which you can can create chat groups and chat online with friends. It is a lightweight platform that is easy to implement and use.",
      imgUrl: chatpro,
      prjUrl: "https://github.com/Nikhil1601/ChatPro",
    },
    {
      title: "Car Rental Blockchain System",
      description: "It was a group WEB3.0 based project that focuses on developing an application that uses ,WEB3.0(BLOCKCHAIN) to provide convenient car rental with cryptocurrency. It could provide functionality to book car from anywhere in world and pay sing your cryptowallet relieving from currency conversion prices and making process cashless.",
      imgUrl: crbs,
      prjUrl: "https://github.com/Nikhil1601/Car-Rental-Blockchain-System",
    },
    {
      title: "CryptoGeek",
      description: "A React based application that provides a common platform to track crypto news using NEWS API and crypto price using coingecko API.",
      imgUrl: cryptogeek,
      prjUrl:'https://github.com/Nikhil1601/CryptoGeek',
    },
    {
      title: "Human emotion recognition system",
      description: "An application that uses harcascade frontal face data and cv2  to detect human emotion. It also contain gui for the purpose of emotion detection ",
      imgUrl: HERC,
      prjUrl:'https://github.com/Nikhil1601/Emotion_detection_using_ML',
    },
    {
      title: "Dijkastra-algorithm-visualizer",
      description: "A react based application to simulate the Dijkastra algorithm using a simple game setup where you can postion satrting and end points, can block paths and add weights along the path.",
      imgUrl: DAV,
      prjUrl:'https://github.com/Nikhil1601/Dijkstra-alogithm-visualizer',
    },
    {
      title: "Inventory management system",
      description: "A flask and sql lite3 based project to keep track of the resources of an organization with multiple login auth, admin can generate an new user and can perform CURD operation on all of the data tables while user can only manipulate their own tables.",
      imgUrl: IMS,
      prjUrl:'https://github.com/Nikhil1601/Inventory-management-system',
    },
  ];
  const projects2 =[    {
    title: "Super Mario game",
    description: "It's a py-game based inspired by Meth-Meth-Method's super mario game. It was just a fun project, aimed to learn pygame libraray.",
    imgUrl: SuperMarioGame,
    prjUrl: "https://github.com/Nikhil1601/Super-mario-game",
  },
  {
    title: "Wrinkles detector using CNN",
    description: "A CNN based deep learning program to detect wrinkles on a provided image. It's a Open source collabration that I made for DL simplified a deep learning GItHub page",
    imgUrl: wrinkles,
    prjUrl: "https://github.com/abhisheks008/DL-Simplified/tree/main/Wrinkle%20classifier",
  },
  {
    title: "Eye Mouth open or close and wrinkles detector ",
    description: "This application can be used to find the state of mouth and eyes whether they are open or closed and whether the face of the subject have wrinkles or not",
    imgUrl: EMW,
    prjUrl:'https://github.com/Nikhil1601/Eye-and-mouth-open-or-close-and-wrinkle-detector-application',
  },
  {
    title: "ChatBeta",
    description: "A chat application based on React library , MongoDB , NOde.js Express.js and web sockets, it will have basic features like web socket (authentication) , Online/ Offline indicator , avatar selection, auto scroll the conversation window , login and logout buttons,and much more",
    imgUrl: chatbeta,
    prjUrl:'https://github.com/Nikhil1601/',
  },
  {
    title: "Driver Drowsiness ",
    description: "A CNN based drowsiness detector that an be used to generate alert. The aim of this is system to reduce the number of accidents on the road by detecting the drowsiness of the driver and warning them using an alarm.",
    imgUrl: driverdrowsiness,
    prjUrl:'https://github.com/Nikhil1601/Driver-Drowsiness',
  },
  {
    title: "Intelligent Crop Managment System",
    description: "We are developing a method to acquire data from the sensors using Arduinoboards and then send it to an online cloud site using iot and evaluate it using ml to make crop production more productive and increase the income of farmers.",
    imgUrl: ICMS,
    prjUrl:'https://onedrive.live.com/edit?id=64026CE4FF3D97BA!10760&resid=64026CE4FF3D97BA!10760&ithint=file%2cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBcnFYUGZfa2JBSmsxQWhlcG1qUzJpWWdiZkw3P2U9SEtXR0hI&migratedtospo=true&wdo=2&cid=64026ce4ff3d97ba',
  },];
  const projects3 =[    {
    title: "AI chatbot",
    description: "It's an application that I'm working on to implement the AI modules that I,m currenlty learning.",
    imgUrl: Aichatbot,
    prjUrl: "https://github.com/Nikhil1601/",
  },
{
  title:"Book shelf management app",
  description:"MEAN stack app for book management: facilitates adding, updating, deleting, and categorizing books, providing a comprehensive solution for organizing and managing a bookshelf.",
  imgUrl:BookShelf,
  prjUrl:"https://github.com/Nikhil1601/Book-Shelf-Management-App"
},];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>🎉 Welcome to My Digital Playground! 🎨<br/>

Let me take you on a tour of the code-crafted wonders I’ve conjured. These projects aren’t just lines of text; they’re my passion, my late-night epiphanies, and my creative playground. Buckle up! 🚀</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
