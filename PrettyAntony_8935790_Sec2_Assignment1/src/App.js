import './App.css';
import './site.css';
import Header from "./Header.js";
import Footer from './Footer.js';
import Content from './Content.js';

//components Header,Content and Footer added to App
function App() {
  return (
    <div className="App">
      <Header fullName="Pretty Antony" />
      <Content />
      <Footer gitLink="https://github.com/PrettyAntony" twitterLink = "https://twitter.com/?lang=en" googleLink = "https://www.google.com/"
                year = "2024" fullName="Pretty Antony" studentNumber = "8935790"/>
      
    </div>
  );
}

export default App;
