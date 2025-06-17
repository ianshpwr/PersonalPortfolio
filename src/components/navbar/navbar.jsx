import Link from 'next/link';
import './navbar.css';


export default function Navbar(){
    return(
    <div className="navbar-container">
<div className='logo'>
    <img src='/logo.png' alt='Logo' />
</div>
        <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/experience">Experience</Link>
        </div>
    </div>
)       
}        