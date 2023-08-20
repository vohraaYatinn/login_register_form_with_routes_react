import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FileUploader } from "react-drag-drop-files";

const Register = () => {
const [profilePhoto, setprofilePhoto] = useState(false)
const [file, setFile] = useState(null);
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
const handleChange = (file) => {
    setFile(file);
  };

  return (

    <div className="container__login">
    <div className="container_login_form">
        <div className="login_head all-flex ">
        <h2>React Chat</h2>
        <p>Register</p>
        </div>
        <div className="inputs_login all-flex">
            {!profilePhoto ?
            <>
        <input type="text" name="" id="" placeholder='display name'/>
            <input type="text" name="" id="" placeholder='email'/>
            <input type="password" name="" id="" placeholder='password'/>
            </>:
            <>
                    <p style={{marginBottom:"1rem",fontSize:"0.8rem"}}>Upload Profile Photo</p>
            <FileUploader className="fileUpload_register" handleChange={handleChange} name="file" types={fileTypes} />
            </>
}

        </div>
        <div className="submit_login all-flex">
            <button onClick={()=>{
                setprofilePhoto(true)
            }}>{profilePhoto?"Register":"Next"}</button>
        </div>
        <div className="login_foot">
            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
        </div>
    </div>
    </div>
  )
}

export default Register