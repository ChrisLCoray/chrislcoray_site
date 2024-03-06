export default function FourOhFour() {
    const timeTrack = 5;

    function goHome() {
        setTimeout(() => {
            window.location.assign('/');
        }, timeTrack * 1000);
    }

    goHome();

    return (
        <section className="four-oh-four container-fluid">
            <h2>Path Not Found</h2>
            <p>What are you looking for again?</p>
            <p>Taking you <a href="/">Home</a> in {timeTrack} seconds...</p>
        </section>
    )
}