import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import "./BarCharts.css";

const BarCharts = (props) => {
  const { barChartData, month } = props;
  return (
    <div className="barchart-container">
      <h1>
        Bar Chart Stats -{" "}
        {month.displayText === "Select Month" ? "Overall" : month.displayText}
      </h1>
      <BarChart
        width={900}
        height={400}
        data={barChartData.barChartData}
        margin={{
          top: 5,
        }}
      >
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#6ce5e8" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
