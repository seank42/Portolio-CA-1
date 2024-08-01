import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import project1Image from '../assets/country.png';
import project2Image from '../assets/giphy.png';
import project3Image from '../assets/todo.png';
import project4Image from '../assets/event.png';

const ProjectPage = () => {
    return (
        <Container className="home-page">
            <Row>
                <Col md={4}>
                    <ProjectCard
                        title="Rest Countries CA"
                        imageUrl={project1Image}
                        link="https://loquacious-dango-2baf3f.netlify.app"
                    />
                </Col>
                <Col md={4}>
                    <ProjectCard
                        title="Giphy view"
                        imageUrl={project2Image}
                        link="https://astonishing-cheesecake-243e32.netlify.app"
                    />
                </Col>
                <Col md={4}>
                    <ProjectCard
                        title="Todo"
                        imageUrl={project3Image}
                        link="https://stunning-cassata-51c9a2.netlify.app"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ProjectCard
                        title="Event Go"
                        imageUrl={project4Image}
                        link="https://taupe-scone-2a9831.netlify.app"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectPage;
