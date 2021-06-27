import "./Header.css"

export default function Header() {
	return (
		<div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">BLOG</span>
      </div>
      <img
        className="header-img"
        src="https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484_960_720.jpg"
        alt=""
      />
    </div>
	)
}