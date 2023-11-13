import React from "react";
import './WorkExp.css';

function WorkExpBlock({ title, company, during, summary, skills, styles }) {
    return (
        <div className="expBlock" style={{ ...styles }}>
            <div className="bottom" />
            <div className="top">
                <p className="titleLine">
                    <div className="coloredText">
                        {[...title].map((x) => <div className='nameDiv'>{x}</div>)}
                    </div>
                    <span className="companyName">{company}</span></p>
                <p>{during}</p>
                {summary.map((line, index) => <p key={index}>{line}</p>)}
                <div className="skills">
                    {skills.map((skill, index) => <div className="workSkill" key={index}>{skill}</div>)}
                </div>
            </div>
        </div>
    );
}

function WorkExp() {
    const items = [
        {
            title: "Data Science Engineer",
            company: "Coherent Tech",
            during: "Jul '22 - May '23",
            summary: [
                "Enhanced decision-making by identifying key performance indicators, analyzing business data to target systemic inefficiencies, and implementing benchmark analysis on US sites, leading to a 7% energy cost savings.",
                "Performed ETL on Amazon Redshift, handling 5TB data weekly and improving data workflows by 20%.",
                "Leveraged analytics with Neo4j across 10M+ data relationships, improving strategic outcomes by 30%. Drove market expansion by 15% by developing predictive models and advanced algorithms.",
                "Automated customer claim processes with machine learning (Classification/Prediction/Clustering) models. Utilized customer data analytics reducing 50,000 complaints yearly and boosting customer retention by 12%.",
                "Created interactive self-service analytical filters (Power-BI) fostering an enhanced business user experience."
            ],
            skills: [
                "ReactJS", "Python", "Scikit-learn", "Pandas",
            ],
            styles: {
                "flex": "1 1 20%"
            }
        },
        {
            title: "Python Analyst",
            company: "Honeywell",
            during: "Jun 2020 - Aug 2021",
            summary: [
                "Enhanced data accessibility by 35% by optimizing ETL and cleansing processes on Teradata using SQL and Python.",
                "Conducted in-depth ad-hoc analyses, developed ML models and algorithms (TensorFlow, SciKit-Learn) to identify data gaps, problems for loss on investment. Improved processes saving $1M dollars annually.",
                "Built real-time ROI graphs (matplotlib, ggplot) to track and forecast investment returns, increasing annual profit by 17%.",
                "Streamlined data interpretation and reporting by integrating Alteryx, and Tableau increasing team’s productivity by 30%.",
                "Communicated complex data-driven insights to cross-functional teams, influencing strategic business decisions."
            ],
            skills: [
                "Docker", "Kubernetes", "Prometheus", "Grafana", "Azure", "Terraform"
            ],
            styles: {
                "flex": "2 1 20%"
            }
        },
        {
            title: "Software Engineer",
            company: "ISRO",
            during: "Jan 2020 - Jun 2020",
            summary: [
                "Led a team of 5 in building encrypted SQL-Server and IP-Telephone (IVR). Increased performance by 25% via analytics."
            ],
            skills: [],
            styles: {
                "flex": "1 1 20%"
            }
        },
        {
            title: "Data Analyst",
            company: "Smart Bridge",
            during: "Apr 2017 - Nov 2019",
            summary: [
                "Crafted advanced SQL queries for data analysis and reporting, eliminating 20 hours of manual Excel tasks weekly.",
                "Reduced batch processing time by 20% by refining processes and re-designing ETL packages for SQL server.",
                "Created stored procedures in SQL to insert/update mapping values into mapping tables and aided in documentation.",
                "Extracted SAP backend data and developed SAP XSA model to aid IT security and diagnostic analysis.",
                "Engaged in client meetings to capture business requirements and identified analytical solutions."
            ],
            skills: [],
            styles: {
                "flex": "1 1 20%"
            }
        }
    ];
    

    return (
        <div className="expSection">
            {items.map((exp, index) => <WorkExpBlock key={index} {...exp} />)}
        </div>
    );
}

export default WorkExp;
