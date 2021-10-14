import React, { Component } from 'react'

export class Content extends Component {
    // Component for displaying information depending on user input

    displayCurrentScreen = () => {
        // If and else if statements for determining which information to display
        if(this.props.currentScreen.persoInfoScreen) {
            return (
                <div>
                    <h3>Contact Information</h3>
                    <div>
                        {this.props.info.address}
                        <br />
                        {this.props.info.contactNum}
                        <br />
                        {this.props.info.email}
                        <br />
                        <hr />
                    </div>
                    <h3>Educational Background</h3>
                    <div>
                        <ul>
                            {this.props.info.educBG.map((item) => {
                                return(
                                    <li key={item.course}>
                                        {item.course}
                                        <p className="year">{item.year}</p>
                                        <br />
                                        <em>{item.school}</em>
                                    </li>
                                )
                            })}
                        </ul>
                        <hr />
                    </div>
                    <h3>Conferences/Seminars/Trainings Attended</h3>
                    <div>
                        <ul>
                            {this.props.info.seminars.map((item) => {
                                return(
                                    <li key={item.title}>
                                        {item.title}
                                        <p className="year">{item.date}</p>
                                        <br />
                                        <em>{item.place}</em>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else if (this.props.currentScreen.addInfoScreen) {
            return (
                <div>
                    <h3>Profile</h3>
                    <div>
                        Nickname: {this.props.info.nickname} <br />
                        Birthdate: {this.props.info.birthdate} <br />
                        Age: {this.props.info.age} <br />
                        Religion: {this.props.info.religion} <br />
                        Citizenship: {this.props.info.citizenship} <br />
                        Civil Status: {this.props.info.civilStatus} <br />
                        <hr />
                    </div>
                    <h3>Achievements</h3>
                    <div>
                        <ul>
                            {this.props.info.achievements.map((item) => {
                                return(
                                    <li key={item.award}>
                                        {item.award}
                                        <br />
                                        <em>{item.place}</em>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else if (this.props.currentScreen.skillsScreen) {
            return (
                <div>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img src="https://tinyurl.com/4ekm783w" className="skill-pic" alt="computer-literate" />
                            <h2>Computer Literate</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/wt52t88v" className="skill-pic" alt="software-design" />
                            <h2>Software Design</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/528vzmw7" className="skill-pic" alt="animation" />
                            <h2>Animation</h2>
                        </div>
                    </div>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img src="https://tinyurl.com/228xfx5c" className="skill-pic" alt="graphic-design" />
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/4tu9t5cf" className="skill-pic" alt="web-design" />
                            <h2>Web Design</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/kfpm4rs7" className="skill-pic" alt="pcb-design" />
                            <h2>PCB Design</h2>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.currentScreen.hobbiesScreen) {
            return (
                <div>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img src="https://tinyurl.com/m2bah6hj" className="hobby-pic" alt="codm" />
                            <h2>Call of Duty: Mobile</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/x5zun53c" className="hobby-pic" alt="genshin-impact" />
                            <h2>Genshin Impact</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/kjwzjn9y" className="hobby-pic" alt="wild-rift" />
                            <h2>Wild Rift</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/hdth9js8" className="hobby-pic" alt="toram-online" />
                            <h2>Toram Online</h2>
                        </div>
                    </div>
                    <div className="skillsContainer">
                        <div className="skill">
                            <img src="https://tinyurl.com/2325kd9j" className="hobby-pic" alt="guitar" />
                            <h2>Guitar</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/3em4anzr" className="hobby-pic" alt="music" />
                            <h2>Listening to Music</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/ded4t5ak" className="hobby-pic" alt="movies" />
                            <h2>Movies</h2>
                        </div>
                        <div className="skill">
                            <img src="https://tinyurl.com/38a23ezn" className="hobby-pic" alt="animation" />
                            <h2>Animation</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="content">
                {this.displayCurrentScreen()}
            </div>
        )
    }
}

export default Content
