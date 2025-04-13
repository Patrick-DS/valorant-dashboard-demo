import "./TopPickedAgents.scss"

const TopPickedAgents = () => (
    <div className="top-picked-agents-container">
        <h3>Top 5 Picked Agents</h3>
        {[1,2,3,4,5].map((index) => (
            <div className="picked-agent-entry">
                <div className="picked-agent-entry-header">
                    <span className="picked-agent-entry-name">{index}. Tejo</span>
                    <span className="picked-agent-entry-pick-count">arise(9)</span>
                </div>
                <div className="picked-agent-entry-details">
                    <span className="top-peak">Peak: 3rd Pick (46)</span>
                    <span className="pick-list">{["3rd Pick: 46", "4th Pick: 42", "1st Pick: 34", "6th Pick: 27", "2nd Pick: 23", "5th Pick: 22", "8th Pick: 11", "7th Pick: 9", "9th Pick: 6", "10th Pick: 2", "3rd Pick: 1"].join(" • ")}</span>
                </div>
            </div>
        ))}
    </div>
)

export default TopPickedAgents
