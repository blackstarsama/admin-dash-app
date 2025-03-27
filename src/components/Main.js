import React from "react";
import { useSelector } from "react-redux";
import RecentOrders from "./RecentOrders";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BarChartIcon from "@mui/icons-material/BarChart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

const Main = () => {
  const totalSales = useSelector((state) => state.sales.total);
  const totalExpenses = useSelector((state) => state.expenses.total);
  const totalIncome = useSelector((state) => state.income.total);

  return (
    <main>
      <h1>Dashboard</h1>

      <div className="insights">
        <div className="sales">
          <AnalyticsIcon className="material-icons-sharp" />
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>${totalSales}</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        <div className="expenses">
          <BarChartIcon className="material-icons-sharp" />
          <div className="middle">
            <div className="left">
              <h3>Total Expenses</h3>
              <h1>${totalExpenses}</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        <div className="income">
          <StackedLineChartIcon className="material-icons-sharp" />
          <div className="middle">
            <div className="left">
              <h3>Total Income</h3>
              <h1>${totalIncome}</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
      </div>
      <RecentOrders />
    </main>
  );
};

export default Main;
