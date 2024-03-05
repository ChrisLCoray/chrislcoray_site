// Resume.js
import PDFViewer from './PdfViewer';
import PDFJSBackend from '../helpers/pdfJs';

export default function Resume() {
    var url = '/assets/chris_coray_resume_public.pdf';
    var docx = '/assets/chris_coray_resume_public.docx';

    return (
        <section className="resume-container container-fluid">
            <h2>Professional Resume</h2>
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
