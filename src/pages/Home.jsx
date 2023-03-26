import React from 'react'
import { Container } from 'react-bootstrap'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DownloadApp from '../Components/DownloadApp';
import FavBukas from '../Components/FavBukas';
import HomeFooter from '../Components/HomeFooter';
import HomerHeader from '../Components/HomerHeader';
import NewBukas from '../Components/NewBukas';
import { bukasData } from '../constants/index';
import TodaysBukasList from '../Components/TodayBukas';
import fav1 from '../images/fav1.png'
import fav2 from '../images/fav2.png'
import fav3 from '../images/fav3.png'


const titleStyle = {
    fontFamily: 'Raleway',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '106.4%',
    color: '#585353',
    margin: '30px 0'
}

const Home = () => {
    console.log(bukasData);
    return (
        <>
            <HomerHeader />
            <Container>
                <div style={titleStyle}>Today’s Special</div>
            </Container>
            <div style={{ marginLeft: 200, }}>
                <TodaysBukasList bukasData={bukasData} />
            </div>
            <Container>
                <div style={titleStyle}>Favourite Bukas</div>
            </Container>
            <div style={{ marginLeft: 200 }}>
                <Slide autoplay={false} slidesToScroll={1} slidesToShow={3} arrows={false}>

                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                </Slide>
            </div>

            <Container>
                <div style={titleStyle}>Newly Registered Bukas   </div>
                <div style={{ display: 'flex', flexWrap: "wrap", columnGap: 220, rowGap: 40 }}>
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                </div>
            </Container>
            <DownloadApp />
            <HomeFooter />

        </>
    )
}

export default Home
