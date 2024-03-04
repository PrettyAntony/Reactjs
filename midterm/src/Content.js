import React from 'react';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

class Content extends React.Component {
    constructor(props){
        super(props);
        //state initialization
        this.state = {
            // show:'none',
            btnName1:'Book a Viewing',
            btnName2:'Book a Viewing',
            btnName3:'Book a Viewing',
            btnName4:'Book a Viewing',
            btnClass1:"showBtn",
            btnClass2:"showBtn",
            btnClass3:"showBtn",
            btnClass4:"showBtn"
        };
        this.bookNow = this.bookNow.bind(this);
    }
    //defining states for the buttons in the function bookNow
    //
    bookNow(x){
        if(x===1){
            (this.state.btnName1 === 'Booked') ? this.setState({ btnName1 : "Book a Viewing" }) : this.setState({ btnName1 : "Booked" });
            (this.state.btnClass1 === 'showBtn') ? this.setState({ btnClass1 : "hideBtn" }) : this.setState({ btnClass1 : "showBtn" });
        }else if(x===2){
            (this.state.btnName2 === 'Booked') ? this.setState({ btnName2 : "Book a Viewing" }) : this.setState({ btnName2 : "Booked" });
            (this.state.btnClass2 === 'showBtn') ? this.setState({ btnClass2 : "hideBtn" }) : this.setState({ btnClass2 : "showBtn" });
        }else if(x===3){
            (this.state.btnName3 === 'Booked') ? this.setState({ btnName3 : "Book a Viewing" }) : this.setState({ btnName3 : "Booked" });
            (this.state.btnClass3 === 'showBtn') ? this.setState({ btnClass3 : "hideBtn" }) : this.setState({ btnClass3 : "showBtn" });
        }else if(x===4){
            (this.state.btnName4 === 'Booked') ? this.setState({ btnName4 : "Book a Viewing" }) : this.setState({ btnName4 : "Booked" });
            (this.state.btnClass4 === 'showBtn') ? this.setState({ btnClass4 : "hideBtn" }) : this.setState({ btnClass4 : "showBtn" });
        }
    }
    render(){
        return(
            <section style={{marginLeft:'20px !important'}}>
      <div class="introduction-section">
      <table cellPadding='0' cellSpacing='0' style={{border:'1px solid #ccc',width:'98%'}}>
                    <thead><th>Property Image</th><th>Property Name</th><th>Property Postal Code</th><th></th></thead>
                    <tbody>
                        <tr>
                            <td><div class="zoom"><img alt='' class="headerImage" src={image1} /></div></td><td><b>Property 1</b></td><td><b>N2L 0K5</b></td><td><button class={this.state.btnClass1} type='button' onClick={() => this.bookNow(1)}>{this.state.btnName1}</button></td>
                        </tr>
                        <tr>
                            <td><div class="zoom"><img alt='' class="headerImage" src={image2} /></div></td><td><b>Property 2</b></td><td><b>BGY 0K5</b></td><td><button class={this.state.btnClass2} type='button' onClick={() => this.bookNow(2)}>{this.state.btnName2}</button></td>
                        </tr>
                        <tr>
                            <td><div class="zoom"><img alt='' class="headerImage" src={image3} /></div></td><td><b>Property 3</b></td><td><b>XYZ 45U</b></td><td><button class={this.state.btnClass3} type='button' onClick={() => this.bookNow(3)}>{this.state.btnName3}</button></td>
                        </tr>
                        <tr>
                            <td><div class="zoom"><img alt='' class="headerImage" src={image4} /></div></td><td><b>Property 4</b></td><td><b>QUW 4J7</b></td><td><button class={this.state.btnClass4} type='button' onClick={() => this.bookNow(4)}>{this.state.btnName4}</button></td>
                        </tr>
                    </tbody>
                </table>
      </div>
      </section>
        );
    }

}

export default Content;