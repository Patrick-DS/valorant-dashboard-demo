import type { ReactNode, FC } from "react"

import StatisticsContext from "./context"
import agentStatisticsData from "./demo/agent-statistics.json"
import mostBannedAgentData from "./demo/most-banned-agent.json"
import mostBannedByTeamsData from "./demo/most-banned-by-teams.json"
import mostPickedAgentData from "./demo/most-picked-agent.json"
import mostPickedByTeamsData from "./demo/most-picked-by-teams.json"
import topBannedAgentsData from "./demo/top-banned-agents.json"
import topPickedAgentsData from "./demo/top-picked-agents.json"
import {
  AgentStatistics,
  MostBannedAgent,
  MostBannedByTeams,
  MostPickedAgent,
  MostPickedByTeams,
  TopBannedAgents,
  TopPickedAgents,
} from "./types"

interface StatisticsProviderProps {
  children?: ReactNode
}

const StatisticsProvider: FC<StatisticsProviderProps> = ({ children }) => {
  const mostBannedAgent = mostBannedAgentData as MostBannedAgent
  const mostBannedByTeams = mostBannedByTeamsData as MostBannedByTeams
  const topBannedAgents = topBannedAgentsData as TopBannedAgents
  const mostPickedAgent = mostPickedAgentData as MostPickedAgent
  const mostPickedByTeams = mostPickedByTeamsData as MostPickedByTeams
  const topPickedAgents = topPickedAgentsData as TopPickedAgents
  const agentStatistics = agentStatisticsData as AgentStatistics

  return (
    <StatisticsContext.Provider
      value={{
        mostBannedAgent,
        mostBannedByTeams,
        topBannedAgents,
        mostPickedAgent,
        mostPickedByTeams,
        topPickedAgents,
        agentStatistics,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  )
}

export default StatisticsProvider
