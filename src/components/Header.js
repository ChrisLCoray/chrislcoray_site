import headshot from '../images/headshot1.png';

export default function Header() {
    return (
        <header className="container-fluid">
            <h2>Chris L. Coray</h2>
            <img src={headshot} aria-hidden="true" alt="" />
        </header>
    );
}
