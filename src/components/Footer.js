import { DateTime } from 'luxon';

export default function Footer() {
    var now = DateTime.now();

    return (
        <footer className="App-footer display-text">
            <span>&copy; Chris L. Coray {now.toLocaleString({ year: 'numeric' })}</span>
        </footer>
    );
}
