import { type FC } from "react"

import { useStatistics } from "@/contexts"

import "./TeamPreferences.scss"

interface MostXedByTeams {
  agent: string
  team: string
  count: number
}

interface MostXedByTeamsListProps {
  data: MostXedByTeams[]
}

const MostXedByTeamsList: FC<MostXedByTeamsListProps> = ({ data }) => (
  <div className="list-entry-container">
    {data.map(({ agent, team, count }, index) => (
      <div key={index} className="list-entry">
        <span className="list-entry-agent">{agent}</span>
        <span className="list-entry-team">
          {team}({count})
        </span>
      </div>
    ))}
  </div>
)

const TeamPreferences = () => {
  const { mostBannedByTeams, mostPickedByTeams } = useStatistics()

  return (
    <section className="team-preferences-container">
      <h3>Team Preferences</h3>
      <div>
        <h4>Most Banned By Teams</h4>
        <MostXedByTeamsList data={mostBannedByTeams.map(({ banCount, ...rest }) => ({ count: banCount, ...rest }))} />
      </div>
      <div>
        <h4>Most Picked By Teams</h4>
        <MostXedByTeamsList data={mostPickedByTeams.map(({ pickCount, ...rest }) => ({ count: pickCount, ...rest }))} />
      </div>
    </section>
  )
}
export default TeamPreferences
