import React from 'react';

//Header as a class component
class Header extends React.Component {l̥
    render() {
        return (
            <header class='head'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <p class='head-intro'>Find Your Dream Home With Us</p>
                <h1 class='head-heading'>{this.props.fullName}</h1>
            </header>
        );
    }
}


export default Header;