// Resume.js
import PDFViewer from './PdfViewer';
import PDFJSBackend from '../helpers/pdfJs';

export default function Resume() {
    var url = '/assets/chris_coray_resume_mkg.pdf';
    var docx = '/assets/chris_coray_resume_mkg.docx';

    return (
        <section className="resume-container container-fluid">
            <h2>Marketing Resume</h2>
            <p>I've been working in software and web development for over a decade. With that job market being completely disrupted right now, I decided it's the right time to switch careers back to what my degree is in.</p>
            <p>Throughout my time as an engineer, I've felt like my Marketing degree has served me well. My resume goes into more detail, but whenever there was a need for marketing know-how in a development role, I always volunteered.</p>
            <h4>Download Links</h4>
            <ul>
                <li><a href={url}>PDF</a></li>
                <li><a href={docx}>.docx</a></li>
            </ul>
            <h4>In-Page Viewer</h4>
            <PDFViewer
                backend={PDFJSBackend}
                src={url}
            />
        </section>
    );
};
