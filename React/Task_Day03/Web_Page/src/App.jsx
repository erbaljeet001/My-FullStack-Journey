import './App.css';
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
const App = () =>
{
  const demo = () =>
  {
      Swal.fire({
      title: 'Here More Information',
      text: 'Here is the additional data you requested.',
  icon: "success"
});
  }
   
  return (<>
    <div id="outer">
      <div id='Navbar'>
        <div id='logo'>
          <div id='logoleft'>
            <img src="/logopic2.jpg" alt="" style={{ height: "60%", width: "200" }} />
            </div>
            <div id='logoright'>YOUR LOGO</div>
          </div> 
        <div id='menu'>
          <ul>
            <a> <li><FaHome size={25}/> Home</li></a>
            <a> <li> <FaUser/> About us</li></a>
            <a> <li> <FaBriefcase/> Work</li></a>
            <a> <li> <FaInfoCircle/> Info</li></a>
            <a> <li style={{color:"blue"}}><b> <FaEnvelope/> Contact us</b></li></a>
            </ul>
          </div>
      </div>
      
      <div id='slider'>
        <div id='textleft'>

          <div id='Creative'>
          <h1 id="text" style={{ lineHeight: '1.2' }}>
        <Typewriter
          options={{
            
            strings: ['Creative <br/> Process'],
            autoStart: true,
            loop: true,
            delay: 250, 
            deleteSpeed: 100 
          }}
        />
      </h1>
          </div>

          <div id='moreinfo'>
             <p style={{marginLeft: "80px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. hello my dear frined'psum dolor sit, amet consectet .</p>

          <button id='btn' onClick={demo}>MORE INFO</button>
          </div>
          
         
        </div>
        <div id='imgright'>
           
          <img src="/img3.png" alt=""/>
        </div>
      </div>
    </div>
    </>)
}

export default App;