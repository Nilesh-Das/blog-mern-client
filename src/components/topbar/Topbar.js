import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
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
					<li className="top-list-item">
						<Link className="link" to="/">LOGOUT</Link>
					</li>
				</ul>
			</div>
			<div className="top-right">
				<i className="top-user fas fa-user-circle"></i>
				<i className="top-search fas fa-search"></i>
			</div>
		</div>
	)
}