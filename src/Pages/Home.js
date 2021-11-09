import React from 'react';
import '../App.css';
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../graphql/Queries";

function Home() {
    const { errors, loading, data } = useQuery(GET_LAUNCHES);
    const getRandomImg = imgs => imgs[Math.floor(Math.random() * imgs.length)];
    if (loading) return <p>Loading...</p>;
    if (errors) return <p>Error :(</p>;
        if (data) {
            console.log(data);
          }
    return (
        <>
        <h1>SpaceX Launches</h1>
        <div>
            <div className="space">
            {data.launchesPast.map(launch => (
               <div key={launch.mission_name}>
               <h2>🛰 {launch.mission_name}</h2>
               <p>{launch.details}</p>
               <img src={getRandomImg(launch.links.flickr_images)} alt="Spacex launch images" width="350" height="350"/>
               </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Home;