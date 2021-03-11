import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    },[])
    return (

        <div className="container bg-info">
            <div className="row header-img"> </div>
            <div className="row">
                {teams.map(team => <Teams team={team}/>)}
            </div>
        </div>
    

    );
};

export default Home;