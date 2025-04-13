import { useStatistics } from "@/contexts"

import "./MostBannedAgent.scss"

const MostBannedAgent = () => {
  const {
    mostBannedAgent: {
      agent,
      banCount,
      peak: { banRank: peakBanRank, banCount: peakBanCount },
    },
  } = useStatistics()

  return (
    <div className="most-banned-agent-container">
      <h3>Most Banned Agent</h3>
      <div className="most-banned-agent-details">
        <span className="ban-count">
          {agent}: {banCount} bans
        </span>
        <span className="ban-peak">
          Peak: {peakBanRank} Ban ({peakBanCount})
        </span>
      </div>
    </div>
  )
}

export default MostBannedAgent
