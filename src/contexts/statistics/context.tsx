import { createContext } from "react";
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
    mostBannedAgent: MostBannedAgent;
    mostBannedByTeams: MostBannedByTeams;
    topBannedAgents: TopBannedAgents;
    mostPickedAgent: MostPickedAgent;
    mostPickedByTeams: MostPickedByTeams;
    topPickedAgents: TopPickedAgents;
    agentStatistics: AgentStatistics;
}

const StatisticsContext = createContext<StatisticsContextProps>({
    mostBannedAgent: {},
    mostBannedByTeams: [],
    topBannedAgents: [],
    mostPickedAgent: {},
    mostPickedByTeams: [],
    topPickedAgents: [],
    agentStatistics: [],    
});

export default StatisticsContext;
