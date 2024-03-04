import React from 'react';
import './site.css';

//footer as a function component with 'props'
function Footer (props){
    return (
        <footer class="content-footer">
            <p>Say hi to me on these social networks:</p>

            <ul class="social">
                <li><a class="css-is-deranged" href={props.gitLink}><i class="fa fa-2x fa-github"></i></a></li>
                <li><a class="css-is-deranged" href={props.twitterLink}><i class="fa fa-2x fa-twitter"></i></a></li>
                <li><a class="css-is-deranged" href={props.googleLink}><i class="fa fa-2x fa-google"></i></a></li>
            </ul>

            <div class="container">
            &copy; {props.year} - {props.fullName} {props.studentNumber} - Privacy Policy
            </div>
        
        </footer>
    );
    
}


export default Footer;