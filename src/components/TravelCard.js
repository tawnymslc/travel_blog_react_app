import React from 'react';
//import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import veganImg from '../img/vegan_home.jpg'
import gymImg from '../img/gym_home.jpg'
import packingImg from '../img/backpackers_home.jpeg'
import loungeImg from '../img/airport_lounge_home.jpg'
import soloImg from '../img/solo_travel_home.jpg'
import blogImg from '../img/blog_home.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const TravelCard = () => {
    return (
        /*<Card>
            <CardImg 
                width='25%'
                src={veganImg}
            />
            <CardImgOverlay>
                        <CardTitle>Vegan Travel</CardTitle>
            </CardImgOverlay>
      </Card>*/
    <div className="card-group">
        <div className="row row-cols-1 row-cols-sm-3 text-center card-row ml-1 mr-1">
            <div className="card">
                <div className="img-wrapper">
                    <img src={veganImg} className="card-img-top" alt="..." />
                </div>
                <div className='card-body'>
                    <h5 className="travel-card-title">VEGAN TRAVEL GUIDE</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div className="card">
                <div className="img-wrapper">
                    <img src={gymImg} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="travel-card-title">TOURIST FRIENDLY GYMS</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div className="card">
                <div className="img-wrapper">
                    <img src={packingImg} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="travel-card-title">LIGHT PACKING</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div class="card">
                <div class="img-wrapper">
                    <img src={loungeImg} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <h5 class="travel-card-title">AIRPORT LOUNGE GUIDE</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div class="card">
                <div class="img-wrapper">
                    <img src={soloImg} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <h5 class="travel-card-title">SOLO TRAVEL STORIES</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div class="card">
                <div class="img-wrapper">
                    <img src={blogImg} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <h5 class="travel-card-title">BLOG</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>

    
    );
  }

  export default TravelCard;