import React, { Component } from 'react'

export class Sidenav extends Component {
    // Component for displaying buttons which the user can interact with

    // Group of functions for switching content depending on user input
    persoInfoHandler = () => {
        this.props.switchToPersoInfoScreen();
    }

    addInfoHandler = () => {
        this.props.switchToAddInfoScreen();
    }

    skillsHandler = () => {
        this.props.switchToSkillsScreen();
    }

    hobbiesHandler = () => {
        this.props.switchToHobbiesScreen();
    }

    render() {
        return (
            <div className="sidenav">
                <button
                    className={this.props.currentScreen.persoInfoScreen ? "current" : null}
                    onClick={this.persoInfoHandler}>
                    Personal Information
                </button>
                <button
                    className={this.props.currentScreen.addInfoScreen ? "current" : null}
                    onClick={this.addInfoHandler}>
                    Additional Information
                </button>
                <button
                    className={this.props.currentScreen.skillsScreen ? "current" : null}
                    onClick={this.skillsHandler}>
                    Skills
                </button>
                <button
                    className={this.props.currentScreen.hobbiesScreen ? "current" : null}
                    onClick={this.hobbiesHandler}>
                    Hobbies
                </button>
            </div>
        )
    }
}

export default Sidenav
