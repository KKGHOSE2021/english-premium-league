import React from 'react';
import './Teams.css';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const history = useHistory();
    const handleId = (idTeam) => {
        const url = `/teams/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <div className="card bg-light m-3 p-5 text-center">
                <img className="card-img-top rounded mx-auto" src={strTeamBadge} />
                <div className="card-body">
                    <h5 className="card-title text-dark font-weight-bold">{strTeam}</h5>
                    <p className="card-text text-dark">Sports type: {strSport}</p>
                    <button className="btn btn-primary" onClick={() => handleId (idTeam) }>Explore  <FontAwesomeIcon icon={faArrowRight}/></button>  
                </div>
            </div>
        </div>

    );
};

export default Teams;