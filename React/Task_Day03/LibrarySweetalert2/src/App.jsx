import Swal from 'sweetalert2'

const App = () => {

  const demo1 = () =>
  {
      Swal.fire({
  title: "Good job!",
  text: "Data saved successfully!",
  icon: "success"
      });
  }

  const demo2 = () =>
  {
       Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
 
});
  }

  const demo3 = () =>
  {
       Swal.fire({
  icon: "info",
  title: "information...",
  text: "This is an information message.",
 
});
  }

   const demo4 = () =>
  {
       Swal.fire({
  icon: "warning",
  title: "Warning...",
  text: "Please check your input!",
 
});
   }
  
  const demo5 = () =>
  {
       Swal.fire({
  icon: "question",
  title: "Question...",
  text: "Are you sure you want to continue?",
 
});
  }

  return (<>
    
      <h4>Task 01
Install sweetalert2 in your React project.
      Command: npm install sweetalert2 : Already Installation Done </h4>
      <hr/>
    <h4>Task 02
Create a button. On click, show a Success alert using SweetAlert2.
(Message example: "Data saved successfully!")</h4>
    <div>
       <button onClick={demo1}>Click me</button>
    </div>
    
    <hr />
    
<h4>Task 03
Create a button. On click, show an Error alert using SweetAlert2.
(Message example: "Something went wrong!")</h4>

    <div>
        <button onClick={demo2}>Click me</button>
    </div>
    <hr />
    
    <h4>Task 04
Create a button. On click, show an Info alert using SweetAlert2.
      (Message example: "This is an information message.")</h4>
    
    <div>
         <button onClick={demo3}>Click me</button>
    </div>
  
     <hr/>

    <h4>Task 05
Create a button. On click, show a Warning alert using SweetAlert2.
      (Message example: "Please check your input!")</h4>
    
    <div>
      <button onClick={demo4}>Click me</button>
    </div>

    <hr />
    
    <h4>Task 06
Create a button. On click, show a Question alert using SweetAlert2.
      (Message example: "Are you sure you want to continue?")</h4>
    
    <div> 
      <button onClick={demo5}>Click me</button>
    </div>
    <hr/>
  </> 
  )
}

export default App