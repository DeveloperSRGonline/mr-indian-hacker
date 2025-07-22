import React from 'react';
import './Team.scss';

const teamMembers = [
    {
        name: "Ankur Sharma",
        role: "Content Head",
        description: "Leads all experiments and creative direction.",
        img: "https://via.placeholder.com/150"
    },
    {
        name: "Rohit Verma",
        role: "Video Production",
        description: "Ensures the highest quality in every video.",
        img: "https://via.placeholder.com/150"
    },
    {
        name: "Sneha Singh",
        role: "Project Manager",
        description: "Manages timelines and innovation strategies.",
        img: "https://via.placeholder.com/150"
    },
    {
        name: "Saurabh Yadav",
        role: "Technical Expert",
        description: "Handles all technical builds and safety.",
        img: "https://via.placeholder.com/150"
    }
];

const Team = () => {
    return (
        <section className="team-section">
            <h2>Meet The Team Behind The Experiments</h2>
            <div className="team-scroll">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p className="role">{member.role}</p>
                        <p className="desc">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
