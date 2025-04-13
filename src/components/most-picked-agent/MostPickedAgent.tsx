import { useStatistics } from "@/contexts"

import "./MostPickedAgent.scss"

const MostPickedAgent = () => {
  const {
    mostPickedAgent: {
      agent,
      pickCount,
      peak: { pickRank: peakPickRank, pickCount: peakPickCount },
    },
  } = useStatistics()

  return (
    <div className="most-picked-agent-container">
      <h3>Most Picked Agent</h3>
      <div className="most-picked-agent-details">
        <span className="pick-count">
          {agent}: {pickCount} picks
        </span>
        <span className="pick-peak">
          Peak: {peakPickRank} Pick ({peakPickCount})
        </span>
      </div>
    </div>
  )
}

export default MostPickedAgent
