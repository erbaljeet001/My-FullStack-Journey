
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const App = () => {
  return (
    <>
    <h4>
    Task 12
Install react-icons in your React project.
      Command: npm install react-icons : Installation Done</h4>
    
      <hr />
      
      <h4>Task 13
        Display a Home icon from react-icons (FaHome) in your component.</h4>
      
      <FaHome size={40}  />

      <hr />
      <h4>Task 14
Display three icons in one row: User icon, Email icon, and Phone icon.
        (Use icons from react-icons — FaUser, FaEnvelope, FaPhone)</h4>
      
      <div>
        <FaUser size={40} />
        <FaEnvelope size={40} />
        <FaPhone size={40} />
      </div>

      <hr />

      <h4>Task 15
Create a button with an icon and text together.
        (Example: Download icon + "Download" text)</h4>
      
      <button>
        <FaDownload size={40} /> <br/>
           <b>Download</b>
      </button>

      <hr />
      
      <h4>Task 16
Display social media icons: Facebook, Instagram, and Twitter.
        (Use FaFacebook, FaInstagram, FaTwitter from react-icons)</h4>
      
      <div>
          <FaFacebook size={40}/>
          <FaInstagram size={40}/>
          <FaTwitter size={40}/>
      </div>
      
    
    </>
  )
}

export default App