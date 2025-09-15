import React from 'react';
import { Link } from 'react-router-dom';
import BrightenSection from '../Components/Brighteen';
import FlooringSection from '../Components/FlooringSection';
import HomeChoose from '../Components/HomeChoose';
import TeamSection from '../Components/HomeTeams';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import MarqueeSwiper from '../Components/MarquueeSweipwe';
import PageTop from '../Components/PageTop';

const About = () => {
  const image = [
    { url: "https://carpent-react.vercel.app/assets/2-0qttj0fo.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
  ];

  return (
    <div>
      <section>
        <PageTop
        url="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-12/Bathroom%20fittings%20brands%20in%20india.jpg"
        header="About Us"
        currentPage="About"
        breadcrumbUrl="/about"/>
      </section>

      <main>
        <section>
          <BrightenSection />
        </section>

        <section>
          <FlooringSection />
        </section>

        <section className="px-4">
          <HomeChoose />
        </section>

        <section>
          <MarqueeSwiper/>
        </section>

        <section>
          <TeamSection />
        </section>
      </main>
    </div>
  );
};

export default About;
