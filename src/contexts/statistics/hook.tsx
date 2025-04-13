import { useContext } from "react"
import StatisticsContext from "./context"

const useStatistics = () => {
  const context = useContext(StatisticsContext)

  if (!context) {
    throw new Error("StatisticsContext must be used within the StatisticsProvider")
  }

  return context    
}

export default useStatistics
