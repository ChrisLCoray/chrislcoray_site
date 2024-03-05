// import hackerFull from '../images/portfolio/hackergame_full.png';
import hackerThumb from '../images/portfolio/hackergame_thumb.png';
import chrislcorayThumb from '../images/portfolio/chrislcoray_thumb.png';
import vtmThumb from '../images/portfolio/vtm5etools_thumb.png';

export default function Portfolio() {
    // data for generating a portfolio page
    // format: { name: '', thumb_image: '', description: ``, code: '', link: '' },
    const portfolioData = [
        { name: 'ChrisLCoray.com', thumb_image: chrislcorayThumb, description: `It would make sense for a frontend developer to code their own website. This site was created using React, and in 2024 I've gone through and updated to React 18 with Bootstrap.`, code: 'https://github.com/ChrisLCoray/chrislcoray_site', link: '' },
        { name: 'Hackertron 3000', thumb_image: hackerThumb, description: `Small game based on Fallout 4's hacking mini-game by Bethesda Softworks, re-created in ReactJS. Note: Requires a mouse, only somewhat playable on mobile in Horizontal view and hasn't been optimized.`, code: 'https://github.com/ChrisLCoray/hackergame', link: 'https://hackergame.chrislcoray.com/' },
        { name: 'VtM 5e Tools', thumb_image: vtmThumb, description: `Set of tools I wrote for a tabletop roleplaying game, "Vampire: The Masquerade" (VtM) 5th Edition. If you're familiar with "Dungeons & Dragons" (D&D), VtM is somewhat similar but with more focus on social intrigue and politics. I built this in TypeScript and Lit, which in retrospect I think was Google's attempt to create their own version of VueJS. The parent company, World of Darkness, announced that they were releasing their own version of this in 2022 so I stopped working on this project. They still haven't released their version, to my knowledge.`, code: 'https://github.com/ChrisLCoray/vtm-5e-tools/', link: '' },
    ];
    const portfolioRows = portfolioData.map(p =>
        <div className="row row-cols-5" key={`key-${p.name.replace(` `, '_').toLowerCase()}`}>
            <div className="col-sm-1 d-none d-md-block">{(p.thumb_image) ? <img src={p.thumb_image} className="thumbnail" alt={`Thumbnail of ${p.name} project`} /> : "N/A"}</div>
            <div className="col-6 col-md-2">{p.name}</div>
            <div className="col-sm-3 d-none d-md-block">{(p.link) ? <a href={p.link} rel="_blank">{p.link}</a> : "N/A"}</div>
            <div className="col-6 col-sm-3"><a href={p.code} rel="_blank">{p.code}</a></div>
            <div className="col-md-3 d-none d-md-block">{p.description}</div>
        </div>
    );
    return (
        <section className="portfolio-container container-fluid">
            <h2>Portfolio</h2>
            <div className="container-fluid">
                <div className="row row-cols-5 header-row">
                    <div className="col-sm-1 d-none d-md-block">Image</div>
                    <div className="col-6 col-md-2">Name</div>
                    <div className="col-sm-3 d-none d-md-block">Link</div>
                    <div className="col-6 col-sm-3">Code</div>
                    <div className="col-md-3 d-none d-md-block">Description</div>
                </div>
                {portfolioRows}
            </div>
        </section>
    )
}
