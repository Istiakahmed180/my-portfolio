import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context/Context";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://my-personal-portfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  return (
    <div className="portfolio my-80 lg:my-32" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {portfolio.map((pfi) => (
          <div key={pfi.id}>
            <img src={pfi.image1} className="h-3/4" alt="" />
            <Link
              to={`/project/${pfi.id}`}
              className="w-full flex justify-center mt-5"
            >
              <button className="button">Explore More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
