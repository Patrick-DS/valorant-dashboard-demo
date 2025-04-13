import "./App.scss"
import { MainPage } from "@/pages"
import { StatisticsProvider } from "@/contexts"

const App = () => (
    <StatisticsProvider>
        <MainPage />
    </StatisticsProvider>
)

export default App
