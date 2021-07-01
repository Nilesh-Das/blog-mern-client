import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { UpdateStart, UpdateSuccess, UpdateFailure } from '../../context/Actions'
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios'
import "./Settings.css";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://seaborg-blog.herokuapp.com/images/";
  const API_URL = "https://seaborg-blog.herokuapp.com/api";

  const handleSubmit = async(e)=> {
    e.preventDefault();
    dispatch(UpdateStart());
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`${API_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch(UpdateSuccess(res.data));
    } catch (err) {
      dispatch(UpdateFailure());
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input 
            type="text" 
            placeholder={user.username} 
            name="username" 
            onChange={e=>setUsername(e.target.value)}
          />
          <label>Email</label>
          <input 
            type="email" 
            placeholder={user.email} 
            name="email" 
            onChange={e=>setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password"
            name="password" 
            onChange={e=>setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span className="settingsUpdateSuccess">
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
