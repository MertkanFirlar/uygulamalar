import { useNavigate } from 'react-router-dom';
import './PhoneCard.css';

const PhoneCard = ({ app }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/${app.id}`);
  };

  return (
    <div className="phone-card" onClick={handleClick}>
      <div className="phone-frame" style={{ background: app.gradient }}>
        <div className="phone-notch"></div>
        <div className="phone-screen">
          {app.screenPreview ? (
            <div className="screen-preview">
              <img src={app.screenPreview} alt={app.name} />
              <div className="screen-overlay">
                <button className="explore-btn">Keşfet</button>
              </div>
            </div>
          ) : (
            <>
              <div className="app-icon-placeholder">
                <img
                  src={app.icon}
                  alt={app.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="icon-fallback" style={{ background: app.gradient }}>
                  {app.name.charAt(0)}
                </div>
              </div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-short-desc">{app.shortDescription}</p>
              <button className="explore-btn">Keşfet</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
