import { useParams, Link } from 'react-router-dom';
import { getAppById } from '../data/apps';
import './LegalPage.css';

const PrivacyPolicy = () => {
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
          <h1>Gizlilik Politikası</h1>
          <p>{app.name}</p>
        </header>

        <article className="legal-body">
          <p className="last-updated">Son güncelleme: Aralık 2024</p>

          <section>
            <h2>1. Giriş</h2>
            <p>
              {app.name} uygulamasını kullandığınız için teşekkür ederiz.
              Bu gizlilik politikası, uygulamamızın veri toplama uygulamalarını açıklamaktadır.
            </p>
          </section>

          <section>
            <h2>2. Bizim Topladığımız Veriler</h2>
            <p>
              <strong>{app.name} olarak biz, kullanıcılarımızdan doğrudan herhangi bir kişisel veri toplamıyoruz.</strong>
            </p>
            <p>
              Uygulamamız hesap oluşturma gerektirmez ve kişisel bilgilerinizi (ad, e-posta, telefon vb.)
              talep etmez veya saklamaz.
            </p>
          </section>

          <section>
            <h2>3. Üçüncü Taraf Hizmetleri</h2>
            <p>
              Uygulamamız reklam gösterimi için <strong>Google AdMob</strong> hizmetini kullanmaktadır.
              Google AdMob, reklam sunumu ve kişiselleştirme amacıyla bazı verileri toplayabilir:
            </p>
            <ul>
              <li>Reklam tanımlayıcıları</li>
              <li>Cihaz bilgileri</li>
              <li>IP adresi</li>
              <li>Uygulama kullanım verileri</li>
            </ul>
            <p>
              Google'ın veri toplama uygulamaları hakkında daha fazla bilgi için:
              <br />
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Gizlilik Politikası
              </a>
            </p>
          </section>

          <section>
            <h2>4. Google Play Hizmetleri</h2>
            <p>
              Uygulamamız Google Play üzerinden dağıtılmaktadır. Google Play,
              uygulama performansı ve kullanım istatistikleri hakkında anonim veriler toplayabilir.
              Bu veriler doğrudan bize ait değildir ve Google tarafından yönetilmektedir.
            </p>
          </section>

          <section>
            <h2>5. Çocukların Gizliliği</h2>
            <p>
              Uygulamamız 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz.
              Uygulama içeriği her yaş grubu için uygundur.
            </p>
          </section>

          <section>
            <h2>6. Değişiklikler</h2>
            <p>
              Bu gizlilik politikasını gerektiğinde güncelleyebiliriz.
              Değişiklikler bu sayfada yayınlanacaktır.
            </p>
          </section>

          <section>
            <h2>7. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız varsa,
              bizimle iletişime geçebilirsiniz.
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

export default PrivacyPolicy;
