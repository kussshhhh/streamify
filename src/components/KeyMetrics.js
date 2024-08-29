import React from "react";
import Card from "./Card";

const KeyMetrics = () => {
    return (
        <div className="key-metrics">
            <Card title="Total Users" value = {1234567}/ >
            <Card title="Active Users" value = {1000302}/ >
            <Card title="Total Streams" value ={7439284739}/>
            <Card title="Revenue" value={326721}/>
            <Card title="Top Artist" value="Taylor SWift"/>  
        </div>
    )
}

export default KeyMetrics ;