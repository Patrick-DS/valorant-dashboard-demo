import { useStatistics } from "@/contexts"
import "./TopPickedAgents.scss"

const TopPickedAgents = () => {
    const { topPickedAgents } = useStatistics()

    return (
        <div className="top-picked-agents-container">
            <h3>Top 5 Picked Agents</h3>
            {topPickedAgents.map(({agent, pickCount, peak, pickStats}, index) => (
                <div key={index} className="picked-agent-entry">
                    <div className="picked-agent-entry-header">
                        <span className="picked-agent-entry-name">{index+1}. {agent}</span>
                        <span className="picked-agent-entry-pick-count">{pickCount} picks</span>
                    </div>
                    <div className="picked-agent-entry-details">
                        <span className="top-peak">Peak: {peak.pickRank} Ban ({peak.pickCount})</span>
                        <span className="pick-list">
                            {pickStats.map(({ pickRank, pickCount }, index) => (
                            <>
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    {`${pickRank} Ban: ${pickCount}`}
                                </span>
                                {index < pickStats.length - 1 && " • "}
                            </>
                            ))}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopPickedAgents
