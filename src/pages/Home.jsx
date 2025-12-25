import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import PhoneCard from '../components/PhoneCard';
import { apps } from '../data/apps';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Uygulamalarımız</h1>
        <p className="hero-subtitle">Eğlence dolu oyunlarımızı keşfedin</p>
      </div>

      <div className="carousel-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="phone-swiper"
        >
          {apps.map((app) => (
            <SwiperSlide key={app.id}>
              <PhoneCard app={app} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 Tüm Hakları Saklıdır</p>
      </footer>
    </div>
  );
};

export default Home;
