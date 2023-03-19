import React, { useState } from "react";
import SideBar from "../../components/Navbar";
import StatsCard from "../../components/StatsCard";
import "./style.css";

const Dashboard = () => {
  const currentDate = new Date();
  const [date, setDate] = useState(Intl.DateTimeFormat("en-US").format(currentDate));
  return (
    <div className="d-flex">
      <SideBar />
      <div className="dashboard-section p-5">
        <div className="intro-container">
          <h1>Dashboard</h1>
          <p>{date}</p>
        </div>
        <div className="stats d-flex justify-content-evenly">
          <StatsCard
            icon="/public/Coin.svg"
            percentage="+32.40%"
            price="$10,243.00"
            title="Total Revenue"
          />
          <StatsCard
            icon="/public/Vector7.svg"
            percentage="+32.40%"
            price="$10,243.00"
            title="Total Dish Ordered"
          />
          <StatsCard
            icon="/public/Vector8.svg"
            percentage="+32.40%"
            price="$10,243.00"
            title="Total Customer"
          />
        </div>
        <div className="order-report">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Menu</th>
                <th>Total Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    style={{
                      width: 52,
                    }}
                    src="/public/avatar.svg"
                  />
                  <span>Eren Jargar</span>
                </td>
                <td>
                  Spice seasoned <br /> seafood noodles
                </td>
                <td>$125</td>
                <td>
                  <span>Completed</span>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <img
                    style={{
                      width: 52,
                    }}
                    src="/public/avatar.svg"
                  />
                  <span>Eren Jargar</span>
                </td>
                <td>
                  Spice seasoned <br /> seafood noodles
                </td>
                <td>$125</td>
                <td>
                  <span>Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{
                      width: 52,
                    }}
                    src="/public/avatar.svg"
                  />
                  <span>Eren Jargar</span>
                </td>
                <td>
                  Spice seasoned <br /> seafood noodles
                </td>
                <td>$125</td>
                <td>
                  <span>Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{
                      width: 52,
                    }}
                    src="/public/avatar.svg"
                  />
                  <span>Eren Jargar</span>
                </td>
                <td>
                  Spice seasoned <br /> seafood noodles
                </td>
                <td>$125</td>
                <td>
                  <span>Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
