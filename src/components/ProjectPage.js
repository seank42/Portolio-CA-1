import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import project1Image from '../assets/country.png'; // Import the local image
import project2Image from '../assets/giphy.png'; // Import the local image
import project3Image from '../assets/todo.png'; // Import the local image
import project4Image from '../assets/event.png'; // Import the local image

const ProjectPage = () => {
    let { projectId } = useParams(); // Get projectId from URL

    return (
        <Container className="home-page">
        <Row>
            <Col md={4}>
                <ProjectCard
                    title="Rest Countries CA"
                    imageUrl={project1Image} // Use the imported image here
                    link="https://loquacious-dango-2baf3f.netlify.app"
                />
            </Col>
            <Col md={4}>
                <ProjectCard
                    title="Giphy view"
                    imageUrl={project2Image} // Use the imported image here
                    link="https://astonishing-cheesecake-243e32.netlify.app"
                />
            </Col>
            <Col md={4}>
                <ProjectCard
                    title="Todo"
                    imageUrl={project3Image} // Use the imported image here
                    link="https://stunning-cassata-51c9a2.netlify.app"
                />
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <ProjectCard
                    title="Event Go"
                    imageUrl={project4Image} // Use the imported image here
                    link="https://taupe-scone-2a9831.netlify.app"
                />
            </Col>
            
           
        </Row>
    </Container>
    );
};

export default ProjectPage;