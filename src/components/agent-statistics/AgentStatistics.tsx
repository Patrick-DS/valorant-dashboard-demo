import { type FC } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./AgentStatistics.scss"


interface HistogramProps {
    config: any;
}

const HistogramChart: FC<HistogramProps> = ({config}) => {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </div>
    );
  }

const labels = ["Tejo", "Vyse", "Cypher", "Yoru", "Breach", "Fade", "Killjoy", "KAYIO", "Astra", "Deadlock", "Neon", "Jett", "Raze", "Omen", "Sova", "Iso", "Clove", "Skye", "Gekko", "Viper", "Wayjay", "Chamber", "Brimstone", "Phoenix", "Sage", "Reyna", "Harbor"]
            
const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 600,
    },
    title: {
        text: "",
    },
    legend: {
        enabled: true,
        verticalAlign: "top",
        itemStyle: {
            color: "#fff",
            fontWeight: 600,
            fontSize: "20px",
            itemWidth: 200,
        },
        symbolRadius: "0px",
    },
    xAxis: {
      title: "",
      categories: labels,
      labels: {
        style: {
            color: "#fff",
            fontWeight: 600,
            fontSize: '20px',
        }
      },
      gridLineColor: "#333",
      gridLineWidth: 1,
    },
    yAxis: {
      title: "",
      labels: {
        style: {
            color: "#fff",
        }
      },
      gridLineColor: "#333",
      gridLineWidth: 1,
      tickPositions: [0,50,100,150,200,250],
    },
    tooltip: { enabled: false },
    plotOptions: {
        column: {
            borderColor: "#333",
            pointWidth: 13,
        }
    },
    series: [
        {
            name: "Bans",
            data: [150, 140, 130, 125, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
            color: "#0a647a" 
        },
        {
            name: "Picks",
            data: [210, 205, 195, 190, 160, 158, 155, 152, 150, 148, 140, 135, 130, 110, 108, 105, 100, 95, 90, 85, 80, 78, 75, 75, 45, 30, 25], // Replace with your actual data values
                color: "#0aa3a3"
        },
    ]
};

const AgentStatistics = () => (
    <div className="chart-container">
        <h2>Agent Statistics</h2>
        <HistogramChart config={chartOptions} />
    </div>
)

export default AgentStatistics

