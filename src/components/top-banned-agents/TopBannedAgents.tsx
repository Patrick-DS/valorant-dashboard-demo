import "./TopBannedAgents.scss"

const TopBannedAgents = () => (
    <div className="top-banned-agents-container">
        <h3>Top 5 Banned Agents</h3>
        {[1,2,3,4,5].map((index) => (
            <div key={index} className="banned-agent-entry">
                <div className="banned-agent-entry-header">
                    <span className="banned-agent-entry-name">{index}. Tejo</span>
                    <span className="banned-agent-entry-ban-count">arise(9)</span>
                </div>
                <div className="banned-agent-entry-details">
                    <span className="top-ban">Ban: 3rd Ban (46)</span>
                    <span className="ban-list">{["3rd Ban: 46", "4th Ban: 42", "1st Ban: 34", "6th Ban: 27", "2nd Ban: 23", "5th Ban: 22", "8th Ban: 11", "7th Ban: 9", "9th Ban: 6", "10th Ban: 2", "3rd Ban: 1"].join(" • ")}</span>
                </div>
            </div>
        ))}
    </div>
)

export default TopBannedAgents
