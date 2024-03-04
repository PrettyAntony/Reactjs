import React from 'react';
import headerImage from './headerImage.jpg';

//Header as a class component
class Header extends React.Component {
    constructor(props){
        super(props);
        //state initialization
        this.state = {
            show:'none',
            btnName:'Show Image',
            btnClass:"showBtn"
        };
        this.showImage = this.showImage.bind(this);
    }
    //defining states in the function showImage
    showImage(){
        (this.state.show === 'none') ? this.setState({ show : "block" }) : this.setState({ show : "none" });
        (this.state.btnName === 'Show Image') ? this.setState({ btnName : "Hide Image" }) : this.setState({ btnName : "Show Image" });
        (this.state.btnClass === 'showBtn') ? this.setState({ btnClass : "hideBtn" }) : this.setState({ btnClass : "showBtn" });
    }
    
    render() {
        return (
            <header class='head'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div style={{display:this.state.show}}><img class="headerImage" src={headerImage} /></div>
                <p class='head-intro'>Hi I'm</p>
                <h1 class='head-heading'>{this.props.fullName}</h1>
                <h6 style={{textAlign: "left",margin: "-50px 0px 20px 45px"}}><button class={this.state.btnClass} type='button' onClick={this.showImage}>{this.state.btnName}</button></h6>
            </header>
        );
    }
}


export default Header;