import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import hackerFull from '../images/portfolio/hackergame_full.png';
import hackerThumb from '../images/portfolio/hackergame_thumb.png';
import chrislcorayThumb from '../images/portfolio/chrislcoray_thumb.png';
import chrislcorayFull from '../images/portfolio/chrislcoray_full.png';
import vtmThumb from '../images/portfolio/vtm5etools_thumb.png';
import vtmFull from '../images/portfolio/vtm5etools_full.png';

export default function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState(undefined);
    const [modalImgSrc, setModalImgSrc] = useState(undefined);
    const handleClose = () => setShowModal(false);

    // data for generating a portfolio page
    // format: { name: '', thumb_image: '', full_image: '', description: ``, code: '', link: '' },
    const portfolioData = [
        {
            name: 'ChrisLCoray.com',
            thumb_image: chrislcorayThumb,
            full_image: chrislcorayFull,
            description: `It would make sense for a frontend developer to code their own website. This site was created using React, and in 2024 I've gone through and updated to React 18 with Bootstrap.`,
            code: 'https://github.com/ChrisLCoray/chrislcoray_site',
            link: ''
        },
        {
            name: 'Hackertron 3000',
            thumb_image: hackerThumb,
            full_image: hackerFull,
            description: `Small game based on Fallout 4's hacking mini-game by Bethesda Softworks, re-created in ReactJS. Note: Requires a mouse, only somewhat playable on mobile in Horizontal view and hasn't been optimized.`,
            code: 'https://github.com/ChrisLCoray/hackergame',
            link: 'https://hackergame.chrislcoray.com/'
        },
        {
            name: 'VtM 5e Tools',
            thumb_image: vtmThumb,
            full_image: vtmFull,
            description: `Set of tools I wrote for a tabletop roleplaying game, "Vampire: The Masquerade" (VtM) 5th Edition. If you're familiar with "Dungeons & Dragons" (D&D), VtM is somewhat similar but with more focus on social intrigue and politics. I built this in TypeScript and Lit, which in retrospect I think was Google's attempt to create their own version of VueJS. The parent company, World of Darkness, announced that they were releasing their own version of this in 2022 so I stopped working on this project. They still haven't released their version, to my knowledge.`,
            code: 'https://github.com/ChrisLCoray/vtm-5e-tools/',
            link: ''
        },
    ];

    const portfolioRows = portfolioData.map((p, i) =>
        <Accordion key={`key-${i}`} className="mb-3">
            <Accordion.Item eventKey={i}>
                <Accordion.Header>{p.name}</Accordion.Header>
                <Accordion.Body>
                    <div className="row row-cols-2 mb-2">
                        <div className="col-6">
                            Screenshot (click to enlarge):
                        </div>
                        <div className="col-6">
                            {(p.thumb_image) ? <img src={p.thumb_image} className="thumbnail" alt={`Thumbnail of ${p.name} project`} onClick={() => { setModalImgSrc(p.full_image); setModalTitle(`Screenshot of ${p.name}`); setShowModal(true); }} /> : "N/A"
                            }
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12"><strong>Description:</strong></div>
                        <div className="col-12">{p.description}</div>
                    </div>
                    <div className="row row-cols-2 mb-2">
                        <div className="col-4"><strong>GitHub Link:</strong></div>
                        <div className="col-8"><a href={p.code} rel="_blank">{p.code}</a></div>
                    </div>
                    <div className="row row-cols-2">
                        <div className="col-4"><strong>Link:</strong></div>
                        <div className="col-8">{(p.link) ? <a href={p.link} rel="_blank">{p.link}</a> : "N/A"}</div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
    return (
        <section className="portfolio-container container-fluid mb-3">
            <h2>Portfolio</h2>

            {portfolioRows}

            <Modal id="portfolio-modal" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="screenshot-full" src={modalImgSrc} alt={modalTitle} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}
