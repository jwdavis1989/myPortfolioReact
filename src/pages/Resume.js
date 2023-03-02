import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid } from '@material-ui/core';
import resumePDF from "../resources/handouts/Jeremy_Davis_Resume_2023.pdf";

function Resume() {
    return (
        <div className="NormalPageLayout">
            <p className="HeaderTitleNoHover">
                <ArticleSharpIcon fontSize='inherit' /> RESUME
            </p>
            <br/>
            <Grid container spacing={1}>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                    <a href={resumePDF} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> DOWNLOAD PDF
                    </a>
                </Grid>
            </Grid>
        </div >
    );
}

export { Resume };