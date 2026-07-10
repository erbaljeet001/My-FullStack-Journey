import './App.css'
const App = () =>
{
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
            <a> <li>Home</li></a>
            <a> <li>About us</li></a>
            <a> <li>Work</li></a>
            <a> <li>Info</li></a>
            <a> <li style={{color:"blue"}}><b>Contact us</b></li></a>
            </ul>
          </div>
      </div>
      
      <div id='slider'>
        <div id='textleft'>
          <h1 style={{ fontSize: "60px", marginLeft: "80px" }}>Creative <br /> <b>Process</b></h1>
          <p style={{marginLeft: "80px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. hello my dear frined'psum dolor sit, amet consectet</p>

          <button id='btn'>MORE INFO</button>
        </div>
        <div id='imgright'>
           
          <img src="/img3.png" alt=""/>
        </div>
      </div>
    </div>
    </>)
}

export default App;