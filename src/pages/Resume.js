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
            </p> <br />
            <Grid container spacing={1}>
            <Grid item xs={2}/>
                <Grid item xs={4}>
                    <a href={gameDesignPDF} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> Game Development
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href={softwareEngineerPDF} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> Software Engineering
                    </a>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
            <br />
        </div >
    );
}

export { Resume };