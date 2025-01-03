import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import chrislcorayThumb from '../images/portfolio/chrislcoray_thumb.png';
import chrislcorayFull from '../images/portfolio/chrislcoray_full.png';
import hackerFull from '../images/portfolio/hackergame_full.png';
import hackerThumb from '../images/portfolio/hackergame_thumb.png';
import threeJsDemoFull from '../images/portfolio/threejsdemo_full.png';
import threeJsDemoThumb from '../images/portfolio/threejsdemo_thumb.png';
import vtmThumb from '../images/portfolio/vtm5etools_thumb.png';
import vtmFull from '../images/portfolio/vtm5etools_full.png';

import dpf0 from '../images/portfolio/dpf_0.jpg';
import dpf0Thumb from '../images/portfolio/dpf_0_thumb.png';
import dpf1 from '../images/portfolio/dpf_1.jpg';
import dpf1Thumb from '../images/portfolio/dpf_1_thumb.png';
import dpf2 from '../images/portfolio/dpf_2.jpg';
import dpf2Thumb from '../images/portfolio/dpf_2_thumb.png';
import dpf3 from '../images/portfolio/dpf_3.jpg';
import dpf3Thumb from '../images/portfolio/dpf_3_thumb.png';
import dpf4 from '../images/portfolio/dpf_4.jpg';
import dpf4Thumb from '../images/portfolio/dpf_4_thumb.png';

import pf0 from '../images/portfolio/pf_0.jpg';
import pf0Thumb from '../images/portfolio/pf_0_thumb.png';
import pf1 from '../images/portfolio/pf_1.jpg';
import pf1Thumb from '../images/portfolio/pf_1_thumb.png';
import pf2 from '../images/portfolio/pf_2.jpg';
import pf2Thumb from '../images/portfolio/pf_2_thumb.png';
import pf3 from '../images/portfolio/pf_3.jpg';
import pf3Thumb from '../images/portfolio/pf_3_thumb.png';
import pf4 from '../images/portfolio/pf_4.jpg';
import pf4Thumb from '../images/portfolio/pf_4_thumb.png';
import pf5 from '../images/portfolio/pf_5.jpg';
import pf5Thumb from '../images/portfolio/pf_5_thumb.png';
import pf6 from '../images/portfolio/pf_6.jpg';
import pf6Thumb from '../images/portfolio/pf_6_thumb.png';
import pf7 from '../images/portfolio/pf_7.jpg';
import pf7Thumb from '../images/portfolio/pf_7_thumb.png';
import pf8 from '../images/portfolio/pf_8.jpg';
import pf8Thumb from '../images/portfolio/pf_8_thumb.png';
import pf9 from '../images/portfolio/pf_9.jpg';
import pf9Thumb from '../images/portfolio/pf_9_thumb.png';

import iYVLt25ub2A_thumb from '../images/portfolio/iYVLt25ub2A_thumb.png';
import FMjxZEIfLK0_thumb from '../images/portfolio/FMjxZEIfLK0_thumb.png';

export default function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState(undefined);
    const [modalImgSrc, setModalImgSrc] = useState(undefined);
    const handleClose = () => setShowModal(false);

    const digitalImages = [
        {
            thumb_image: dpf0Thumb,
            full_image: dpf0,
            caption: `Pompeiian Garden & Bath 1`
        },
        {
            thumb_image: dpf1Thumb,
            full_image: dpf1,
            caption: `Pompeiian Garden & Bath 2`
        },
        {
            thumb_image: dpf2Thumb,
            full_image: dpf2,
            caption: `Saloon Ruins`
        },
        {
            thumb_image: dpf3Thumb,
            full_image: dpf3,
            caption: `13th Century English Church`
        },
        {
            thumb_image: dpf4Thumb,
            full_image: dpf4,
            caption: `"The Security Incident" (stillframe from an animation)`
        }
    ]

    const imageData = [
        {
            thumb_image: pf0Thumb,
            full_image: pf0,
            caption: `Morning Commuters - Seattle, WA`
        },
        {
            thumb_image: pf1Thumb,
            full_image: pf1,
            caption: `Afternoon Rain - Seattle, WA`
        },
        {
            thumb_image: pf2Thumb,
            full_image: pf2,
            caption: `Creek Bridge - Lynnwood, WA`
        },
        {
            thumb_image: pf3Thumb,
            full_image: pf3,
            caption: `Wooded Path in Fall - Shoreline, WA`
        },
        {
            thumb_image: pf4Thumb,
            full_image: pf4,
            caption: `Early Spring Fog - West Jordan, UT`
        },
        {
            thumb_image: pf5Thumb,
            full_image: pf5,
            caption: `Cherry Blossom Sunset - Murray, UT`
        },
        {
            thumb_image: pf6Thumb,
            full_image: pf6,
            caption: `Electric Halloween - Pleasant Grove, UT`
        },
        {
            thumb_image: pf8Thumb,
            full_image: pf8,
            caption: `Winter Panorama - West Jordan, UT`
        },
        {
            thumb_image: pf7Thumb,
            full_image: pf7,
            caption: `Royal Bliss Holiday Show - Riverton, UT`
        },
        {
            thumb_image: pf9Thumb,
            full_image: pf9,
            caption: `New Years Morning Walk - West Jordan, UT`
        }
    ]

    // data for generating a portfolio page
    // format: { name: '', thumb_image: '', full_image: '', description: ``, code: '', link: '' },
    const portfolioData = [
        {
            name: 'ChrisLCoray.com',
            thumb_image: chrislcorayThumb,
            full_image: chrislcorayFull,
            description: `This site was created using ReactJS 16.5 with 100% homegrown SCSS in 2018, and in 2024 I've gone through and updated to ReactJS 18.2 with Bootstrap.`,
            code: 'https://github.com/ChrisLCoray/chrislcoray_site',
            link: '',
            techs: ['ReactJS', 'React-Router-DOM', 'Bootstrap']
        },
        {
            name: 'Hackertron 3333',
            thumb_image: hackerThumb,
            full_image: hackerFull,
            description: `Small game based on Fallout 4's hacking mini-game by Bethesda Softworks, re-created in ReactJS. Note: Requires a mouse, only somewhat playable on mobile in Horizontal view and hasn't been optimized.`,
            code: 'https://github.com/ChrisLCoray/hackergame',
            link: 'https://hackergame.chrislcoray.com/',
            techs: ['ReactJS']
        },
        {
            name: 'ThreeJS Demo "Cube Builder"',
            thumb_image: threeJsDemoThumb,
            full_image: threeJsDemoFull,
            description: `Demo app written in ThreeJS on ViteJS platform. The idea is the ability to add 3D objects (cubes, to keep it simple) to a scene and then edit them with real-time feedback. Works best on desktop/laptop, but I tried to format controls and mobile view to make it as usable as possible on mobile-landscape views.`,
            code: 'https://github.com/ChrisLCoray/threejs-cube-builder',
            link: 'https://cube-builder.chrislcoray.com/',
            techs: ['ThreeJS', 'WebGL', 'ViteJS']
        },
        {
            name: 'VtM 5e Tools',
            thumb_image: vtmThumb,
            full_image: vtmFull,
            description: `Set of tools I wrote for a tabletop roleplaying game, "Vampire: The Masquerade" (VtM) 5th Edition. If you're familiar with "Dungeons & Dragons" (D&D), VtM is somewhat similar but with more focus on social intrigue and politics. I built this in Lit, which in retrospect I think was Google's attempt to create their own version of VueJS, with TypeScript. The parent company, World of Darkness, announced that they were releasing their own version of this in 2022 so I stopped working on this project. They still haven't released their version, to my knowledge.`,
            code: 'https://github.com/ChrisLCoray/vtm-5e-tools/',
            link: '',
            techs: ['Lit', 'Material Design']
        },
    ]

    const videoData = [
        {
            id: 'iYVLt25ub2A',
            thumb: iYVLt25ub2A_thumb,
            title: 'Monty Python-inspired jQuery/CSS animation circa 2013',
            desc: `This animation for Timpanogus Storyteller Festival was inspired by the clip-art style animation of Monty Python, written in jQuery and CSS. The client loved it, and EKR used it as an example of "what is possible" with other clients for a little while after.`
        },
        {
            id: 'FMjxZEIfLK0',
            thumb: FMjxZEIfLK0_thumb,
            title: 'Haunted Shenanigans Oct 2021',
            desc: `This is a brief video I made by combining Nest cam footage, editing out the kids' faces, and adding some filters, background music, and sound effects. It's not a cinematic masterpiece, but it was a fun project. Video software was Vegas Movie Studio 13.`
        }
    ]
    // https://youtu.be/FMjxZEIfLK0

    const writingData = [
        {
            title: `Combating Misinformation in the Digital Age`,
            topics: `Misinformation, Social Media, Fake News, Critical Thinking`,
            platform: `Medium`,
            link: `https://medium.com/@chriscoraywrites/combating-misinformation-in-the-digital-age-bb85ac11b399`
        },
        {
            title: `Bookshelf to Boardroom: Business Reads That Shaped Me`,
            topics: `Business, Marketing, Reading`,
            platform: `Medium`,
            link: `https://medium.com/@chriscoraywrites/bookshelf-to-boardroom-business-reads-that-shaped-me-6a6ee9950a80`
        },
    ]

    const appPortfolioRows = portfolioData.map((p, i) =>
        <Accordion key={`appPf-${i}`} className="mb-3">
            <Accordion.Item eventKey={i}>
                <Accordion.Header>
                    {p.name} &mdash;&nbsp;{p.techs.map((t, x) => (x !== (p.techs.length - 1)) ? <span key={`t-${i}-${x}`}>{t},&nbsp;</span> : <span key={`t-${i}-${x}`}>{t}</span>)}
                </Accordion.Header>
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
                        <div className="col-8"><a href={p.code} target="_blank" rel="noreferrer">{p.code}</a></div>
                    </div>
                    <div className="row row-cols-2">
                        <div className="col-4"><strong>Link:</strong></div>
                        <div className="col-8">{(p.link) ? <a href={p.link} target="_blank" rel="noreferrer">{p.link}</a> : "N/A"}</div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )

    const videoPortRows = videoData.map((vid, i) =>
        <Accordion key={`vidPf-${i}`} className="mb-3">
            <Accordion.Item eventKey={i}>
                <Accordion.Header>
                    {vid.title}
                </Accordion.Header>
                <Accordion.Body>
                    <div className="row row-cols-2 mb-2">
                        <div className="col-2">
                            <a href={`https://youtu.be/${vid.id}`} target="_blank" rel="noreferrer">
                                <img src={vid.thumb} className="thumbnail" alt={`Thumbnail of ${vid.title} project`} />
                            </a>
                        </div>
                        <div className="col-10">
                            {vid.desc}
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )

    const writingRows = writingData.map((article, i) =>
        <Row key={`writing-row-${i}`}>
            <Col xs={6} md={6}>
                <a href={article.link} target="_blank">{article.title}</a>
            </Col>
            <Col xs={6} md={3}>{article.topics}</Col>
            <Col xs={6} md={3}>{article.platform}</Col>
        </Row>
    )

    const renderedPortfolioRows = digitalImages.map((img, i) =>
        <Col key={`dpfImg-${i}`} xs={6} md={3} className="mb-3">
            <Image
                src={img.thumb_image}
                title={img.caption}
                onClick={() => { setModalImgSrc(img.full_image); setModalTitle(`${img.caption}`); setShowModal(true); }}
                thumbnail />
        </Col>
    )

    const imgPortfolioRows = imageData.map((img, i) =>
        <Col key={`pfImg-${i}`} xs={6} md={3} className="mb-3">
            <Image
                src={img.thumb_image}
                title={img.caption}
                onClick={() => { setModalImgSrc(img.full_image); setModalTitle(`${img.caption}`); setShowModal(true); }}
                thumbnail />
        </Col>
    )

    const artBlob = <>
        <h4>Digital Modeling&mdash;Works in Progress (Blender, Photoshop)</h4>
        <Container>
            <Row className="mb-3">
                {renderedPortfolioRows}
            </Row>
        </Container>
    </>

    const codeBlob = <>
        <h4>Applications/Software</h4>
        {appPortfolioRows}
    </>

    const photoBlob = <>
        <h4>Photography</h4>
        <Container>
            <Row className="mb-3">
                {imgPortfolioRows}
            </Row>
        </Container>
    </>

    const videoBlob = <>
        <h4>Videos</h4>
        {videoPortRows}
    </>

    const writingBlob = <>
        <h4>Writing</h4>
        <Container>
            <Row>
                <Col xs={6} md={6}><strong>Title</strong></Col>
                <Col xs={6} md={3}><strong>Topics</strong></Col>
                <Col xs={6} md={3}><strong>Platform</strong></Col>
            </Row>
            {writingRows}
        </Container>
    </>

    const j = localStorage.getItem('j');
    const loadArray = (j && j !== undefined) ?
        (j === 'coder') ? [codeBlob, writingBlob, artBlob, photoBlob, videoBlob]
            : (j === 'writer') ? [writingBlob, photoBlob, artBlob, codeBlob]
                : [photoBlob, writingBlob, videoBlob, codeBlob, artBlob]
        : [photoBlob, writingBlob, videoBlob, codeBlob, artBlob]

    const loadOrder = loadArray.map((c, i) =>
        <div className="blob" key={`blob-${i}`}>{c}</div>
    )

    return (
        <section className="portfolio-container container-fluid mb-3">
            <h2>Portfolio</h2>

            {loadOrder}

            <Modal id="portfolio-modal" show={showModal} fullscreen={true} onHide={handleClose}>
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
