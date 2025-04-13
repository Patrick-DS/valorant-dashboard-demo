import "./TeamPreferences.scss"

const MostXedByTeamsList = () => <div className="list-entry-container">
    {[1,2,3,4,5].map((index) => (
        <div key={index} className="list-entry">
            <span className="list-entry-agent">Tejo</span>
            <span className="list-entry-team">arise(9)</span>
        </div>
    ))}
</div>

const TeamPreferences = () => (
    <section className="team-preferences-container">
        <h3>Team Preferences</h3>
        <div>
            <h4>Most Banned By Teams</h4>
            <MostXedByTeamsList />
        </div>
        <div>
            <h4>Most Picked By Teams</h4>
            <MostXedByTeamsList />
        </div>
    </section>
)

export default TeamPreferences
