import React from "react"
import './Road.css'

const Roads = () => {
    const myEvents = [
        {
            dateOf: 'May 2023',
            desc1: "Concluded my role as a Data Science Engineer at Coherent Tech.",
            desc2: "Achieved 7% energy cost savings through key performance indicator analysis and benchmark analysis on US sites."
        },
        {
            dateOf: 'Jul 2022',
            desc1: "Started as a Data Science Engineer at Coherent Tech.",
            desc2: "Began enhancing decision-making processes and implementing benchmark analysis."
        },
        {
            dateOf: 'Aug 2021',
            desc1: "Began my Python Analyst role at Honeywell.",
            desc2: "Focused on enhancing data accessibility and developing ML models and algorithms."
        },
        {
            dateOf: 'Jun 2020',
            desc1: "Joined ISRO as a Software Engineer.",
            desc2: "Led a team of 5 in building encrypted SQL-Server and IP-Telephone (IVR)."
        },
        {
            dateOf: 'Jan 2020',
            desc1: "Started my journey as a Data Analyst with Smart Bridge.",
            desc2: "Crafted advanced SQL queries for data analysis and reporting."
        },
        {
            dateOf: 'Placeholder Date',
            desc1: "Engaged in the Bird CLEF Kaggle Competition.",
            desc2: "Conducted EDA and Feature Engineering, optimizing a CNN model."
        },
        {
            dateOf: 'Placeholder Date',
            desc1: "Began my Fellowship with Correlation One.",
            desc2: "Segmented customers and detected fraud transactions with high accuracy."
        },
        {
            dateOf: 'Placeholder Date',
            desc1: "Teaching Assistant at JNTU.",
            desc2: "Designed ML and AI courses, tutoring over 900 students."
        },
        {
            dateOf: 'Placeholder Date',
            desc1: "Achievements in education and certifications.",
            desc2: "Earned Science Scholarship, Academic Excellence Scholarship, Best Intern at ISRO, and completed multiple certifications."
        },

        {
            dateOf: 'March 2023',
            desc1: 'Published my Music Recommendation App!',
            desc2: 'I wrote a blog on it too!',
            linkDesc1: true,
            linkUrl1: 'https://kusahl-arun.github.io/',
            linkWordPos1: 0,
            linkDesc2: true,
            linkUrl2: 'https://awstip.com/45986e42',
            linkWordPos2: 3
        },
        {
            dateOf: 'May 2020',
            desc1: "Published an IEEE paper on Algorithms for Obstacle Avoidance!",
            desc2: "Covid won't let me attend the conference though.",
            linkDesc1: true,
            linkUrl1: 'https://ieeexplore.ieee.org/',
            linkWordPos1: 0
        },    
    ]
    return (
        <div className="eventsContainer">
            {myEvents.map((e) =>  
                <div className="myEvent">
                    <div className="eventDate">{e.dateOf}</div>
                    <div>
                    {e.linkDesc1?
                        <div className="eventDesc">{e.desc1.split(' ').map((s,i) => i===e.linkWordPos1?<a href={e.linkUrl1} target="_blank" rel="noopener noreferrer">{s} </a>:<span>{s} </span>)}</div>
                        :
                        <div className="eventDesc">{e.desc1}</div>}
                    {e.linkDesc2?
                        <div className="eventDesc">{e.desc2.split(' ').map((s,i) => i===e.linkWordPos2?<a href={e.linkUrl2} target="_blank" rel="noopener noreferrer">{s} </a>:<span>{s} </span>)}</div>
                        :
                        <div className="eventDesc">{e.desc2}</div>}
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Roads;