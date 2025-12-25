import { useParams, Link } from 'react-router-dom';
import { getAppById } from '../data/apps';
import './LegalPage.css';

const TermsOfService = () => {
  const { appId } = useParams();
  const app = getAppById(appId);

  if (!app) {
    return (
      <div className="legal-page not-found">
        <h1>Sayfa Bulunamadı</h1>
        <Link to="/" className="back-btn">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to={`/app/${app.id}`} className="back-link">
          <span className="back-arrow">←</span> {app.name}
        </Link>
      </nav>

      <main className="legal-content">
        <header className="legal-header" style={{ background: app.gradient }}>
          <h1>Kullanım Şartları</h1>
          <p>{app.name}</p>
        </header>

        <article className="legal-body">
          <p className="last-updated">Son güncelleme: Aralık 2024</p>

          <section>
            <h2>1. Kabul</h2>
            <p>
              {app.name} uygulamasını indirerek veya kullanarak,
              bu kullanım şartlarını kabul etmiş sayılırsınız.
              Bu şartları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
            </p>
          </section>

          <section>
            <h2>2. Kullanım Lisansı</h2>
            <p>
              Size {app.name} uygulamasını kişisel, ticari olmayan amaçlarla
              kullanmanız için sınırlı, münhasır olmayan, devredilemez bir lisans veriyoruz.
            </p>
          </section>

          <section>
            <h2>3. Yasaklar</h2>
            <p>Aşağıdaki faaliyetler kesinlikle yasaktır:</p>
            <ul>
              <li>Uygulamayı tersine mühendislik yapmak</li>
              <li>Uygulamayı kopyalamak veya dağıtmak</li>
              <li>Hile, bot veya üçüncü taraf yazılımları kullanmak</li>
              <li>Diğer kullanıcılara zarar vermek</li>
              <li>Uygulamayı yasadışı amaçlarla kullanmak</li>
            </ul>
          </section>

          <section>
            <h2>4. Sanal İçerikler</h2>
            <p>
              Uygulama içi satın alımlar geri ödenmez.
              Sanal içerikler sadece uygulama içinde geçerlidir ve
              gerçek dünya değeri taşımaz.
            </p>
          </section>

          <section>
            <h2>5. Fikri Mülkiyet</h2>
            <p>
              {app.name} ve tüm içeriği (grafikler, sesler, metinler)
              telif hakkı ile korunmaktadır.
              Tüm haklar saklıdır.
            </p>
          </section>

          <section>
            <h2>6. Sorumluluk Reddi</h2>
            <p>
              Uygulama "olduğu gibi" sunulmaktadır.
              Herhangi bir garanti verilmemektedir.
              Uygulamanın kullanımından doğabilecek zararlardan sorumlu değiliz.
            </p>
          </section>

          <section>
            <h2>7. Hesap Sonlandırma</h2>
            <p>
              Bu şartların ihlali durumunda, hesabınızı
              önceden bildirimde bulunmaksızın sonlandırma hakkını saklı tutarız.
            </p>
          </section>

          <section>
            <h2>8. Değişiklikler</h2>
            <p>
              Bu kullanım şartlarını istediğimiz zaman değiştirme hakkını saklı tutarız.
              Değişiklikler bu sayfada yayınlanacaktır.
            </p>
          </section>

          <section>
            <h2>9. İletişim</h2>
            <p>
              Kullanım şartları hakkında sorularınız varsa,
              lütfen bizimle iletişime geçin.
            </p>
          </section>
        </article>
      </main>

      <footer className="legal-footer">
        <p>&copy; 2024 {app.name}. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;
