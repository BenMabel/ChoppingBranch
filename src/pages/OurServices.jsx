import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
    const navigate = useNavigate();
    function navDonations(){
        navigate('/donations')
    }
    return (
        <div className='services'>
            <Header />
            <Container style={{ marginTop: '70px', display: 'flex', flexDirection: 'column', height: '100%' }}>

                <h1 className='title' style={{ color: 'white', fontSize: 45, lineHeight: '100.4%' }}>
                    <span>Here is</span>
                    <br />
                    what we do.</h1>


                <div style={{ display: 'flex', marginTop: 20, marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='card' >
                        <div className='title'> Local Food Hub</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>We provide a service connecting you to your favourite local food restaurant. A platform where local food sellers can increase their sales and also enjoy a grant priviledge for improving their businesses through donations received.</div>
                    </div>
                    <div className='card' >
                        <div className='title'> Express Delivery</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>We bring comfort to local food lovers by offering them an ordering service where they can get quick delivery of meals from any Buka of their choice and also track it's process until arrival.</div>

                    </div>
                    <div className='card' >
                        <div className='title'> Quality Control</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>Ensuring that users get quality local food is our priority. With our structured system, we ensure that our partners are offering the best quality from an healthy environment while we investigate negative feedbacks.</div>
                    </div>
                </div>
                <button className='loginBtn' onClick={navDonations} >Make a donation</button>
                {/* <Link className='loginBtn' style={{ width: '15%', textAlign: 'center', marginBottom: 30, marginTop: 20 }} to='#'>Make a donation</Link> */}
            </Container >
        </div >
    )
}

export default OurServices
