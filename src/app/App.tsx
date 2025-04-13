import { StatisticsProvider } from "@/contexts"
import { MainPage } from "@/pages"

import "./App.scss"

const App = () => (
  <StatisticsProvider>
    <MainPage />
  </StatisticsProvider>
)

export default App
