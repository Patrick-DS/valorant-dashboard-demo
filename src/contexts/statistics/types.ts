export interface AgentStatistic {
    agent: string;
    bans: number;
    picks: number;
}

// BANS
export interface AgentBanByTeamStats {
    agent: string;
    team: string;
    banCount: number;
}

export interface AgentBanStats {
    agent: string;
    banCount: number;
    peak: AgentBanRankStats
}


export interface TopBannedAgent extends AgentBanStats {
    banStats: AgentBanRankStats[]
}

export interface AgentBanRankStats {
    banRank: string;
    banCount: number;
}

// PICKS
export interface AgentPickByTeamStats {
    agent: string;
    team: string;
    pickCount: number;
}

export interface AgentPickStats {
    agent: string;
    pickCount: number;
    peak: AgentBanRankStats
}


export interface TopPickedAgent extends AgentPickStats {
    pickStats: AgentPickRankStats[]
}

export interface AgentPickRankStats {
    pickRank: string;
    pickCount: number;
}

export type MostBannedAgent = AgentBanStats
export type MostBannedByTeams = AgentBanByTeamStats[]
export type TopBannedAgents = TopBannedAgent[]
export type MostPickedAgent = AgentPickStats
export type MostPickedByTeams = AgentPickByTeamStats[]
export type TopPickedAgents = TopPickedAgent[]
export type AgentStatistics = AgentStatistic[]
