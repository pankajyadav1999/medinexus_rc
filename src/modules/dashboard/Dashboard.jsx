import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Outlet } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

class Dashboard extends Component {
  state = {
    cardData: [
      { title: "Total Patients", value: 120 },
      { title: "Total Doctors", value: 25 },
      { title: "Appointments Today", value: 15 },
      { title: "Revenue", value: "$5,000" }
    ],
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Patients Admitted",
          data: [12, 19, 10, 14, 18, 20],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)"
          ]
        }
      ]
    }
  };

  componentDidMount() {
    console.log("Dashboard mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) console.log("Dashboard updated");
  }

  render() {
    const { cardData, chartData } = this.state;
    const isOnDashboardRoot = this.props.location.pathname === "/dashboard";

    return (
      <MainLayout>
        {isOnDashboardRoot ? (
          <>
            <h2>Hospital Dashboard</h2>
            <div className="dashboard-cards">
              {cardData.map((card, idx) => (
                <div key={idx} className="dashboard-card">
                  <h4>{card.title}</h4>
                  <p>{card.value}</p>
                </div>
              ))}
            </div>
            <div className="chart-container">
              <PolarArea data={chartData} />
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </MainLayout>
    );
  }
}

export default Dashboard;
