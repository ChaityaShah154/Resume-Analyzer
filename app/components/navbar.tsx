import { Link } from "react-router"

const navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
        <p className="text-2xl font-bold text-gradient">CVision</p>
        </Link>
        <Link to="/uplaod" className="primary-button w-fit">
        <p>Uplaod Resume</p>
        </Link>

    </nav>
  )
}

export default navbar
