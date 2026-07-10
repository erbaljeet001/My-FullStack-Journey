
import './App.css'
import IMG from './assets/hero.png'
const App = () =>
{
  const Internal_css= {
    background: "pink",
    textAlign: "center",
    border :"5px solid black"
  }
  
  return (<>
    <h4>Task 01
Create a React component. Display an image using the public folder method. (Example path: myimage.jpg)</h4>
    <img src="/img02.jpg" height={500} width={500} alt="" />
    <br />  <hr/>
    
    <h4>Task 02
Create a React component. Display an image using the src folder method.
      (Import the image from the src/assets folder)</h4>
    <img src={IMG} alt="" />

     <br/> <hr/>
    
    <h4>Task 03 Apply Inline CSS in a React component. (Use style={"{{ }}"} on at least one element)</h4>

    <h1 style={{ background: "yellow", textAlign: "center", border :"5px solid green" }}>Inline Css</h1>
    
    <br /> <hr/>
    
    <h4>Task 04
Apply Internal CSS in a React component.
      (Use a JavaScript styles object)</h4>
    
    <h1 style={ Internal_css}>Internal Css</h1>
  
    <p style={Internal_css}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis quia ullam! Perspiciatis atque repellat voluptatibus ipsum optio impedit vero?</p>

    <br />  <hr/>
    
    <h4>Task 05
Apply External CSS in a React component.
(Create App.css, import it, and use className)</h4>

    <h1 className='x'>External Css</h1>

  </>)
}




export default App;