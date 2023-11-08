import { useState } from "react";
import AverageRating from "./components/AverageRating";
import Reviews from "./components/Reviews";
import Sidebar from "./components/Sidebar";
import SentimentAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="reviews">
        <Reviews />
      </div>
      <div className="averagerating">
        <AverageRating />
      </div>
      <div className="sentimentanalysis">
        <SentimentAnalysis />
      </div>
      <div className="websitevisitors">
        <WebsiteVisitors />
      </div>
    </div>
  );
}

export default App;
