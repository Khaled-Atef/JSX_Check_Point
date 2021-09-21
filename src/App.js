import logo from './logo.svg';
import './App.css';
import './style.css' ;
import natureimage from "./image_one.jpg" ;
// import thevideo from "./tesla_video.mp4" ;

function App() {
  return (
<div style={{border:"solid 1px black" , maxWidth: "100vw"}}>

 <h1 className="title red">Your name here</h1>

 <br/>

 <img src={natureimage} alt="myImage"/>

 <br/>

 <img src="/image_two.jpg"/>

 
 {/* <video width="320" height="240" controls>

 <source src={thevideo} type="video/mp4" />

 </video> */}

</div>


  );
}

export default App;
