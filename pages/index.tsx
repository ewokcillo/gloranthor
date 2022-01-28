import React from "react";

import { Header, Main, Footer, Cards, Profiles } from "@components";

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Main />
            {/* <Cards /> */}
            <Profiles />
            <Footer />
        </div>
    );
};

export default Home;
