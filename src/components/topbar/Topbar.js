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
					<li className="top-list-item">HOME</li>
					<li className="top-list-item">ABOUT</li>
					<li className="top-list-item">CONTACT</li>
					<li className="top-list-item">WRITE</li>
					<li className="top-list-item">LOGOUT</li>
				</ul>
			</div>
			<div className="top-right">
				<i className="top-user fas fa-user-circle"></i>
				<i className="top-search fas fa-search"></i>
			</div>
		</div>
	)
}