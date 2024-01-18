import { useEffect, useState } from 'react';
const mcs = require('node-mcstatus');

//Put this info on .env file
const ip = 'mc.hypixel.net';
const port = 25565;
const options = {
    query: true,
};

const StatsBox = () => {

    const [response, setResponse] = useState({});
    useEffect(() => {
        mcs.statusJava(ip, port, options)
            .then((response) => {
                setResponse(response);
                console.log(response.online);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="stats-box">
            <h3>Server Status</h3>
            <p>Server IP: {ip}</p>
            <p>Number Online Players: {Object.keys(response).length!=0 && response.players.online}</p>
            <p>Version: {Object.keys(response).length!=0 && response.version.name_clean}</p>
            <p>Online: {Object.keys(response).length!=0 && response.online.toString()}</p>
        </div>
    )
};

export default StatsBox;
