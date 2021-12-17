import React from 'react';
import '../css/home.css';

//Components
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime" className="home__image" />

                <div className="home__row">
                    <Product
                        id="2645237"
                        title='The lean startup'
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
                    />

                    <Product
                        id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W,"
                        price={239.0}
                        rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/61etD4-IrPL.__AC_SY300_SX300_QL70_ML2_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="243253553"
                        title="BTS Hoodie Love Yourself Long Sleeves Pullover Sweater Coat"
                        price={23.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61yr7OXQBlL._AC_UX385_.jpg"
                    />

                    <Product
                        id="23445930"
                        title="Echo (3rd Gen) - Smart speaker with Alexa"
                        price={450.22}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61O1+NI15FL._AC_SX425_.jpg"
                    />
                    <Product
                        id="224354645"
                        title="Apple AirPods Pro"
                        price={354.66}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
                        price={917.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;