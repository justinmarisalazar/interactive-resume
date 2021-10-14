import React, { Component } from 'react'
import Content from './Content'
import Heading from './Heading'
import Sidenav from './Sidenav'

export class Main extends Component {
    constructor(props) {
        super(props)
        
        // Declaration of states
        this.state = {
            info: {
                name: "Justin Mari Salazar",
                address: "Blk 4 Lot 20 Westwood Mansions P1 Paradahan I, Tanza, Cavite",
                contactNum: "09564111022",
                email: "justinlazarosalazar@gmail.com",
                educBG: [{
                    course: "Bachelor of Engineering Technology major in Computer Engineering Technology",
                    school: "Technological University of the Philippines - Manila",
                    year: "2018-present"
                }, {
                    course: "Senior High School",
                    school: "University of the East - Caloocan",
                    year: "2016-2018"
                }, {
                    course: "Junior High School",
                    school: "Governor Andres Pascual College",
                    year: "2012-2016"
                }],
                seminars: [{
                    title: "Building Academic Integrity Using Turnitin",
                    place: "Technological University of the Philippines",
                    date: "March 25, 2021"
                }, {
                    title: "Introduction to The Internet of Things",
                    place: "Trend Micro Secure Learning",
                    date: "February 18, 2021"
                }],
                nickname: "Memem / JM",
                birthdate: "April 20, 2000",
                age: "21",
                religion: "Roman Catholic",
                citizenship: "Filipino",
                civilStatus: "Single",
                achievements: [{
                    award: "1st Place in Programming at TUP Skills Competition 2018",
                    place: "Technological University of the Philippines - Manila"
                }]
            },
            currentScreen: {
                persoInfoScreen: true,
                addInfoScreen: false,
                skillsScreen: false,
                hobbiesScreen: false
            }
        }
    }

    // Function to change the content component to show personal information
    switchToPersoInfoScreen = () => {
        this.setState({ currentScreen: {
            persoInfoScreen: true,
            addInfoScreen: false,
            skillsScreen: false,
            hobbiesScreen: false
        }});
    }

    // Function to change the content component to show additional information
    switchToAddInfoScreen = () => {
        this.setState({ currentScreen: {
            persoInfoScreen: false,
            addInfoScreen: true,
            skillsScreen: false,
            hobbiesScreen: false
        }});
    }

    // Function to change the content component to show skills
    switchToSkillsScreen = () => {
        this.setState({ currentScreen: {
            persoInfoScreen: false,
            addInfoScreen: false,
            skillsScreen: true,
            hobbiesScreen: false
        }});
    }

    // Function to change the content component to show hobbies
    switchToHobbiesScreen = () => {
        this.setState({ currentScreen: {
            persoInfoScreen: false,
            addInfoScreen: false,
            skillsScreen: false,
            hobbiesScreen: true
        }});
    }
    
    render() {
        return (
            <div className="main">
                <div>
                    <Heading info={this.state.info} />
                </div>
                <div className="sidenav-content">
                    <Sidenav
                        switchToPersoInfoScreen={this.switchToPersoInfoScreen}
                        switchToAddInfoScreen={this.switchToAddInfoScreen}
                        switchToSkillsScreen={this.switchToSkillsScreen}
                        switchToHobbiesScreen={this.switchToHobbiesScreen}
                        currentScreen={this.state.currentScreen}
                    />
                    <Content info={this.state.info} currentScreen={this.state.currentScreen} />
                </div>
            </div>
        )
    }
}

export default Main
