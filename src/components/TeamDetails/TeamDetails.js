import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import maleImg from '../../male.png';
import femaleImg from '../../female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faFlag, faMars, faFutbol, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [teamDetails, setTeamDetails] = useState({});
    
    useEffect(() => {
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    }, []) 

    const {strStadiumThumb, strTeamBadge, strTeamFanart1, strDescriptionEN, strTeam, intFormedYear, strCountry, strSport, strGender, strTwitter, strFacebook, strYoutube} = teamDetails;

    let imgOfGender;
    if (strGender==='Male'){
        imgOfGender = maleImg;
    }
    else {
        imgOfGender = femaleImg;
    }

    return (
        <div className="container bg-info">
            <div className="row header-img">
                <img src={strTeamFanart1} alt=""/>
            </div>
            <div className="row add-radius bg-primary mx-5 mt-3">
                <div className="col-sm-6 p-5 text-white">
                    <h1>{strTeam}</h1>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/>  Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag}/>  Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol}/>  Sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars}/>  Gender: {strGender}</h5>
                </div>

                <div className="col-sm-6 p-5 img-size">                    
                    <img className="rounded" src={imgOfGender} alt=""/>
                </div>
            </div>
            <div className="row text-justify mx-5 mt-3">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="social-media row mx-auto mt-1">
                <div className="add-radius bg-white">
                    <a className="px-3" href={'https://'+strTwitter} target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a className="px-3" href={'https://'+strFacebook} target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="px-3" href={'https://'+strYoutube} target="_blank"><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;