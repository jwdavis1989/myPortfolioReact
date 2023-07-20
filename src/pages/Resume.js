import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid } from '@mui/material';
import gameDesignPDF from "../resources/handouts/JerryDavisGameDevResume2023.pdf";
import softwareEngineerPDF from "../resources/handouts/JerryDavisFrontEndResume2023.pdf";

function Resume() {
    return (
        <div className="NormalPageLayout">
            <p className="HeaderTitleNoHover">
                <ArticleSharpIcon fontSize='inherit' /> RESUMES
            </p><br />
                    <a href={softwareEngineerPDF} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> Software Engineering
                    </a><p /><br />
                    <a href={gameDesignPDF} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> Game Development
                    </a>
            
            <br />
        </div >
    );
}

export { Resume };