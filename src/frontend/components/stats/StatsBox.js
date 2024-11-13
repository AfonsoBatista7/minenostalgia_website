import PlayerStats from "./PlayerStats";
import ServerStats from "./ServerStats";

const StatsBox = () => {

    return (
        <div className="stats-box">
            <ServerStats/>
            <PlayerStats/>
        </div>
    )
};

export default StatsBox;
