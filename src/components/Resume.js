// Resume.js
import PDFViewer from './PdfViewer';
import PDFJSBackend from '../helpers/pdfJs';

export default function Resume() {
    // Job item from storage if user came in with a search param
    const j = localStorage.getItem('j');

    const resumeObj = {
        business: {
            desc: <div className="desc"><p>I've been working in software and web development for over a decade. With that job market being completely disrupted right now, I decided it's a great time to switch careers back to what my degree is in.</p>
                <p>Throughout my time as an engineer, I've felt like my business degree in Marketing has served me well. My resume goes into more detail, but whenever there was a need for business overview or marketing know-how in a development role, I always volunteered.</p></div>,
            header: `Business`,
            url: `business`
        },
        coder: {
            desc: <div className="desc"><p>I've worked in a variety of roles over the years. While my focus has been largely front-end applications for the past few years, I have a lot of experience in PHP platforms like WordPress and Magento, including in-house templates, plugins, and APIs.</p></div>,
            header: `Software Engineer`,
            url: `truncated`,
            url2: `engineer_full`
        },
        marketing: {
            desc: <div className="desc"><p>I've been working in software and web development for over a decade. With that job market being completely disrupted right now, I decided it's a great time to move back into business and marketing.</p>
                <p>Throughout my time as an engineer, I've felt like my Marketing degree has served me well. My resume goes into more detail, but whenever there was a need for marketing know-how in a development role, I always volunteered.</p></div>,
            header: `Marketing`,
            url: `mkg`
        }
    }

    const displayData = (j && j.length > 0 && resumeObj[j]) ? resumeObj[j] : resumeObj.marketing;

    return (
        <section className="resume-container container-fluid">
            <h2>{`${displayData.header} Resume`}</h2>

            {displayData.desc}

            <h4>Download Links</h4>
            {(j === 'coder') && <h5>Condensed Resume</h5>}
            <ul>
                <li><a href={`/assets/chris_coray_resume_${displayData.url}.pdf`}>PDF</a></li>
                <li><a href={`/assets/chris_coray_resume_${displayData.url}.docx`}>.docx</a></li>
            </ul>

            {(j === 'coder') && <>
                <h5>Full Resume</h5>
                <ul>
                    <li><a href={`/assets/chris_coray_resume_${displayData.url2}.pdf`}>PDF</a></li>
                    <li><a href={`/assets/chris_coray_resume_${displayData.url2}.docx`}>.docx</a></li>
                </ul>
            </>}

            <h4>In-Page Viewer</h4>
            <PDFViewer
                backend={PDFJSBackend}
                src={`/assets/chris_coray_resume_${displayData.url}.pdf`}
            />
        </section>
    );
};
