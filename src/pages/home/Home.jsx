// import { Grid } from "@material-ui/core";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css'
export default function Home() {
    return (
        <>
        {/* <Grid xs={12} sm={6} md={4} lg={3}>  */}
            <Topbar />
            <div class="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
            {/* </Grid> */}
        </>
    );
}
