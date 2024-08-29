import React from "react";
import KeyMetrics from "./KeyMetrics";
import GrowthChart from "./GrowthChart";
import RevenueChart from "./PieChart";
import EnhancedTopStreamedSongsChart from "./StreamedSongs"


const Dashboard = () => {
    return (
      <div className="dashboard">
        <KeyMetrics/>
        <GrowthChart/>
        <RevenueChart/>
        <EnhancedTopStreamedSongsChart/>
      </div>
    )
}

export default Dashboard ;