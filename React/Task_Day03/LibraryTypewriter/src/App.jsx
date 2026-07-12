import Typewriter from 'typewriter-effect';

const App = () => {

  
  return (
    <>
    <h4>Task 07
Install typewriter-effect in your React project.
        Command: npm install typewriter-effect : Installation Done</h4>
      
      <hr/>
  <h4>Task 08
        Create a component. Display "Welcome to React" with typewriter effect.</h4>
      
      <h1><Typewriter
  options={{
    strings: ['Welcome to React'],
    autoStart: true,
    loop: true,
  }}
      /></h1>
      
      <hr />
      

    <h4>Task 09
Create a component. Display your name with typewriter effect.</h4>
      
      <h1>
        <Typewriter
  options={{
    strings: ['Baljeet Kumar Yadav'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>

      <hr />
      

      <h4>Task 10
Create a component. Display two lines with typewriter effect:
  Line 1: "Hello, Students!"
        Line 2: "Learning React is fun!"</h4>
      
      <h1>
        <Typewriter
  options={{
    strings: ['Hello, Students! <br/> Learning React is fun!'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>

      <hr />
      
      <h4>Task 11
Create a component. Display a heading with typewriter effect and set typing speed.
        (Hint: Use delay option to control speed)</h4>
      
      <h1>
        <Typewriter
  options={{
    strings: ['Hello Techpile Pvt. Ltd.'],
    autoStart: true,
    loop: true,
    delay : 50 ,
  }}
/>
      </h1>
      <hr/>
    </>
  )
}

export default App