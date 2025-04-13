import { useStatistics } from "@/contexts"
import "./TopBannedAgents.scss"

const TopBannedAgents = () => {
    const { topBannedAgents } = useStatistics()
    console.log(topBannedAgents)
    return (
        <div className="top-banned-agents-container">
            <h3>Top 5 Banned Agents</h3>
            {topBannedAgents.map(({agent, banCount, peak, banStats}, index) => (
                <div key={index} className="banned-agent-entry">
                    <div className="banned-agent-entry-header">
                        <span className="banned-agent-entry-name">{index+1}. {agent}</span>
                        <span className="banned-agent-entry-ban-count">{banCount} bans</span>
                    </div>
                    <div className="banned-agent-entry-details">
                        <span className="top-ban">Peak: {peak.banRank} Ban ({peak.banCount})</span>
                        <span className="ban-list">{
                            banStats.map(({ banRank, banCount }, index) => (
                            <>
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    {`${banRank} Ban: ${banCount}`}
                                </span>
                                {index < banStats.length - 1 && " • "}
                            </>
                            ))}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopBannedAgents
