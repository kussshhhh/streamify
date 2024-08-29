import React from "react";
import KeyMetrics from "./KeyMetrics";
import GrowthChart from "./GrowthChart";
import RevenueChart from "./PieChart";
import EnhancedTopStreamedSongsChart from "./StreamedSongs"


const Dashboard = () => {
    return (
      <>
        <KeyMetrics/>
        <GrowthChart/>
        <RevenueChart/>
        <EnhancedTopStreamedSongsChart/>
      </>
    )
}

export default Dashboard ;