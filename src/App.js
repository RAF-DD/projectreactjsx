import logo from './logo.svg';
import './App.css';
import img from './img1.jpg';

function App() {
  return (
    <div className="App">
      
      <div className="client">

        <h1 className="title red">Saadaoui Abderraouf</h1>

        <br />
       
        <img src={img} />

        <br />

        <img src="./img2.jpg"/>
       
      </div>
      <br />
     <video src="myVideo.mp4" type="video/mp4"  controls />
    </div>
  );
}

export default App;
