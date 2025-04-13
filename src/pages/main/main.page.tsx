import {
  AgentStatistics,
  MostBannedAgent,
  MostPickedAgent,
  TeamPreferences,
  TopBannedAgents,
  TopPickedAgents,
} from "@/components"
import "./main.page.scss"


const MainPage = () => (
    <div className="page-container">
        <h1 className="title">Valorant Agent Statistics</h1>
        <main>
            <section className="central-view">
                <div className="statistics">
                    <div>
                        <MostBannedAgent />
                        <TopBannedAgents />
                    </div>
                    <div>
                        <MostPickedAgent />
                        <TopPickedAgents />
                    </div>
                </div>
                <AgentStatistics />
            </section>
            <TeamPreferences />
        </main>
    </div>
)

export default MainPage
