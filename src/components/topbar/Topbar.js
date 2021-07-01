import { useContext } from "react";
import { Context } from "../../context/Context";
import { Logout } from '../../context/Actions'
import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
	const { user, dispatch } = useContext(Context);
  const PF = "https://seaborg-blog.herokuapp.com/images/"

  const handleLogout = () => {
    dispatch(Logout());
  };

	return (
		<div className="top">
			<div className="top-left">
				<i className="top-icon fab fa-facebook-square"></i>
				<i className="top-icon fab fa-twitter-square"></i>
				<i className="top-icon fab fa-instagram-square"></i>
				<i className="top-icon fab fa-reddit-square"></i>
			</div>
			<div className="top-center">
				<ul className="top-list">
					<li className="top-list-item">
						<Link className="link" to="/">HOME</Link>
					</li>
					<li className="top-list-item">
						<Link className="link" to="/">ABOUT</Link>
					</li>
					<li className="top-list-item">
						<Link className="link" to="/">CONTACT</Link>
					</li>
					<li className="top-list-item">
						<Link className="link" to="/write">WRITE</Link>
					</li>
					<li className="top-list-item" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="top-right">
				{user ? (
					<Link to="/settings">
	          <img className="top-img" src={PF+user.profilePic} alt="" />
	        </Link>
				) : (
					<ul className="top-list">
	          <li className="top-list-item">
	            <Link className="link" to="/login">
	              LOGIN
	            </Link>
	          </li>
	          <li className="top-list-item">
	            <Link className="link" to="/register">
	              REGISTER
	            </Link>
	          </li>
	        </ul>
				)}
				<i className="top-search fas fa-search"></i>
			</div>
		</div>
	)
}