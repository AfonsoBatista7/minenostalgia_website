import StatsBox from '../components/stats/StatsBox';

//require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.REACT_APP_MONGODB_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('\nConnected to the database :D!');
}).catch((error) => {
    console.log(error);
});

const Stats = () => {
    return (
        <div>
            <h1>Stats</h1>
            <p>Stats Page</p>
            <StatsBox/>
        </div>
    )
};

export default Stats;
