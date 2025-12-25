import { useParams, Link } from 'react-router-dom';
import { getAppById } from '../data/apps';
import './AppDetail.css';

const AppDetail = () => {
  const { appId } = useParams();
  const app = getAppById(appId);

  if (!app) {
    return (
      <div className="app-detail not-found">
        <h1>Uygulama Bulunamadı</h1>
        <Link to="/" className="back-btn">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const headerStyle = app.background
    ? { backgroundImage: `url(${app.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: app.gradient };

  return (
    <div className="app-detail" style={{ '--app-color': app.color }}>
      {app.background && (
        <div
          className="page-background"
          style={{ backgroundImage: `url(${app.background})` }}
        />
      )}
      <nav className="app-nav">
        <Link to="/" className="back-link">
          <span className="back-arrow">←</span> Geri
        </Link>
      </nav>

      <header className="app-header" style={headerStyle}>
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="app-icon-large" style={{ background: !app.icon ? app.gradient : 'transparent' }}>
            {app.icon ? (
              <img
                src={app.icon}
                alt={app.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="icon-fallback-large" style={{ display: app.icon ? 'none' : 'flex' }}>
              {app.name.charAt(0)}
            </div>
          </div>
          <div className="app-info">
            <h1>{app.name}</h1>
            <p className="app-tagline">{app.shortDescription}</p>
          </div>
        </div>
      </header>

      <main className="app-content">
        <section className="section about-section">
          <h2>Hakkında</h2>
          <p>{app.fullDescription}</p>
        </section>

        <section className="section features-section">
          <h2>Özellikler</h2>
          <ul className="features-list">
            {app.features.map((feature, index) => (
              <li key={index}>
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="section screenshots-section">
          <h2>Ekran Görüntüleri</h2>
          <div className="screenshots-grid">
            {app.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-item">
                <img
                  src={screenshot}
                  alt={`${app.name} ekran görüntüsü ${index + 1}`}
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="screenshot-placeholder">Görsel ${index + 1}</div>`;
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section legal-section">
          <h2>Yasal Bilgiler</h2>
          <div className="legal-links">
            <Link to={`/app/${app.id}/privacy`} className="legal-link">
              Gizlilik Politikası
            </Link>
            <Link to={`/app/${app.id}/terms`} className="legal-link">
              Kullanım Şartları
            </Link>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 {app.name}. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

export default AppDetail;
