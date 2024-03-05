export default function Footer() {
    const d = new Date();

    return (
        <footer className="App-footer display-text">
            <span>&copy; Chris L. Coray {d.getFullYear()}</span>
        </footer>
    );
}
