// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// CSS STYLES
import "../styles/cta.scss";
import { useState } from "react";

export const CTA = () => {
  const [showAllDirections, setShowAllDirections] = useState(false);

  const toggleDirections = () => {
    setShowAllDirections(!showAllDirections);
  };

  return (
    <section className="cta-section">
      <h2 className="cta-title">Самые популярные направление</h2>

      {showAllDirections ? (
        <>
          <div className="cta-directions">
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Худжанд</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Куляб</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Хорог</p>
            </div>
          </div>
          <div className="cta-directions">
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Худжанд</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Куляб</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Хорог</p>
            </div>
          </div>
          <div className="cta-directions">
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Худжанд</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Куляб</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Хорог</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cta-directions">
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Худжанд</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Куляб</p>
            </div>
            <div className="cta-direction">
              <p className="cta-city">Душанбе</p>
              <div className="cta-city-arrow-icon">
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </div>
              <p className="cta-city">Хорог</p>
            </div>
          </div>
        </>
      )}
      <div className="cta-city-btn">
        <button onClick={toggleDirections}>
          {showAllDirections ? "показат менше" : "популярные маршрути"}
        </button>
      </div>
    </section>
  );
};
