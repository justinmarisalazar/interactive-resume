import React, { Component } from 'react'

export class Heading extends Component {
    // Component for displaying the owner's photo, name, and social media links
    render() {
        return (
            <div>
                <div className="heading">
                    <img src="https://tinyurl.com/x3k4ypet" alt="profile" className="profile-pic" />
                    <h1 className="heading-info">
                        {this.props.info.name}
                        <a href="https://github.com/memzuuu" className="heading-link" target="_blank" rel="noreferrer">
                            <img src="https://tinyurl.com/bpdaxjnn" className="social-button" alt="github" />
                        </a>
                        <a href="https://www.facebook.com/mememz" className="heading-link" target="_blank" rel="noreferrer">
                            <img src="https://tinyurl.com/669v26w" className="social-button" alt="facebook" />
                        </a>
                    </h1>
                </div>
                
            </div>
        )
    }
}

export default Heading
