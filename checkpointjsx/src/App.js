import logo from './logo.svg';
import './App.css';
import pic from './imageInSrc.jpg'
import * as styles from './styling.css'

function App() {
  return (
    <div>
        <div className="d1" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red"> watch the followed video to find out more about the realation between Greeks and Romans: </h1>
          <br />
          <img src={pic} alt="Logo" style={{ height:"100%" , width:'100%'}}/>
          <br />
        </div>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/Sxpd3Cc6c5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  );
}

export default App;
