import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const Main = styled("main")(() => ({
  flex: 2,
  display: "flex",
  flexDirection: "column",
}));

const Layout = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
          <Grid item xs={6} md={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Main>
      <Footer />
    </Root>
  );
};

export default Layout;
