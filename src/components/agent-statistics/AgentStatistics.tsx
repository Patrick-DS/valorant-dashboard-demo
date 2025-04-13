import { type FC } from "react"

import { useStatistics } from "@/contexts"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

import "./AgentStatistics.scss"

interface HistogramProps {
  config: any
}

const HistogramChart: FC<HistogramProps> = ({ config }) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
  )
}

const chart = {
  type: "column",
  backgroundColor: "transparent",
  height: 600,
}

const title = {
  text: "",
}

const legend = {
  enabled: true,
  verticalAlign: "top",
  itemStyle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "20px",
    itemWidth: 200,
  },
  symbolRadius: "0px",
}

const getXAxis = (labels: string[]) => ({
  title: "",
  categories: labels,
  labels: {
    style: {
      color: "#fff",
      fontWeight: 600,
      fontSize: "20px",
    },
  },
  gridLineColor: "#333",
  gridLineWidth: 1,
})

const yAxis = {
  title: "",
  labels: {
    style: {
      color: "#fff",
    },
  },
  gridLineColor: "#333",
  gridLineWidth: 1,
  tickPositions: [0, 50, 100, 150, 200, 250],
}

const plotOptions = {
  column: {
    borderColor: "#333",
    pointWidth: 13,
  },
}

const banColor = "#0a647a"
const pickColor = "#0aa3a3"

const AgentStatistics = () => {
  const { agentStatistics } = useStatistics()
  const labels = agentStatistics.map(({ agent }) => agent)
  const bans = agentStatistics.map(({ bans }) => bans)
  const picks = agentStatistics.map(({ picks }) => picks)

  const chartOptions = {
    chart,
    title,
    legend,
    xAxis: getXAxis(labels),
    yAxis,
    tooltip: { enabled: false },
    plotOptions,
    series: [
      {
        name: "Bans",
        data: bans,
        color: banColor,
      },
      {
        name: "Picks",
        data: picks,
        color: pickColor,
      },
    ],
  }

  return (
    <div className="chart-container">
      <h2>Agent Statistics</h2>
      <HistogramChart config={chartOptions} />
    </div>
  )
}

export default AgentStatistics
