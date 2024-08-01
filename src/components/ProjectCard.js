import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, imageUrl, link }) => {
    return (
        <Card className="project-card text-center">
            <Card.Img variant="top" src={imageUrl} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={link}>
                    <Button variant="primary">View Project</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;