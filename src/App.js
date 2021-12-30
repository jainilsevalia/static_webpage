import React from 'react';
import NavBar from "./Navbar"
import JamboTrone from "./Jambotron"
import Appsection from "./Appsection"
import Cardsection from "./Cardsection"
import Footer from "./Footer"
const App = () => {
    return(
        <div>
            <NavBar/>
            <JamboTrone/>
            <Appsection/>
            <Cardsection/>
            <Footer/>
        </div>
    )
};

export default App;