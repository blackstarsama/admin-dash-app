import React from "react";
import InsightCard from "./InsightCard";
import RecentOrders from "./RecentOrders";

const Main = () => {
  return (
    <main>
      <h1>Dashboard</h1>

      <div className="date">
        <input type="date" name="date" id="date" />
      </div>

      <div className="insights">
        <InsightCard
          type="sales"
          title="Total Sales"
          value="$52,309"
          percent="81%"
        />
        <InsightCard
          type="expenses"
          title="Total Expenses"
          value="$15,100"
          percent="62%"
        />
        <InsightCard
          type="income"
          title="Total Income"
          value="$29,597"
          percent="44%"
        />
      </div>

      <RecentOrders />
    </main>
  );
};

export default Main;
