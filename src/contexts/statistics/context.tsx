import { createContext } from "react"

import {
  MostBannedAgent,
  MostBannedByTeams,
  TopBannedAgents,
  MostPickedAgent,
  MostPickedByTeams,
  TopPickedAgents,
  AgentStatistics,
} from "./types"

export interface StatisticsContextProps {
  mostBannedAgent: MostBannedAgent
  mostBannedByTeams: MostBannedByTeams
  topBannedAgents: TopBannedAgents
  mostPickedAgent: MostPickedAgent
  mostPickedByTeams: MostPickedByTeams
  topPickedAgents: TopPickedAgents
  agentStatistics: AgentStatistics
}

const StatisticsContext = createContext<StatisticsContextProps>({
  mostBannedAgent: {
    agent: "",
    banCount: 0,
    peak: {
      banCount: 0,
      banRank: ""
    }
  },
  mostBannedByTeams: [],
  topBannedAgents: [],
  mostPickedAgent: {
    agent: "",
    pickCount: 0,
    peak: {
      pickCount: 0,
      pickRank: ""
    }
  },
  mostPickedByTeams: [],
  topPickedAgents: [],
  agentStatistics: [],
})

export default StatisticsContext
