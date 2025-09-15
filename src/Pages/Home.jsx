import React from 'react'
import {Element} from "react-scroll"
import HomeHero from '../Components/HomeHero'
import Cards from '../Components/Cards'
import HomeAbout from '../Components/HomeAbout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import HomeService from '../Components/HomeService';
import HomeChoose from '../Components/HomeChoose';
import HomeProcess from '../Components/HomeProcess';
import VideoSection from '../Components/HomeVideo';
import HomeProject from '../Components/HomeProject';
import HomeTestimonial from '../Components/HomeTestomonial';
import HomeFAQ from '../Components/HomeFAQ';
import TeamSection from '../Components/HomeTeams';
import BlogCards from '../Components/HomeBlogSection';

const Home = () => {
    const text = [
        "Mordern Design","Professional worker","Trusted Company","Affordable Rate","Natural Unique Material","Flexible Pricing","Quality Coustomer Service"
    ]
    
  return (
    <Element
    name='home'>
    <div className='overflow-hidden'>
      <section>
        <HomeHero/>
      </section>
      <section>
        <Cards/>
      </section>
      <section>
        <HomeAbout/>
      </section>
      <section className="bg-gray-50 py-10 my-[3%]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={50}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="flex items-center"
        >
          {text.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <div className="flex items-center gap-3 px-4">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA21JREFUeJztm09rFDEYxp9k4rEXL0VhqVbowWsLrdhudyle6mdQUBQKfgAprSdbincPBcWDX8BbT8Xt7lbYgh69FKwtFaVeezSTeOimLDqTzczkzyy7z3GSyb7Pb5JMkneHwLPaW/PTVIjPSWWC0pmF1f0vPuOhPn+sjBoBCB1AaI0AhA4gtIYeADOt2NpcuBbJ+C0HW1lcb526DCqvmhvVCgPfjkn0pLrW/mVyj1EP6GzOjjPwXRAsM8LbzZfVm8VCta/mRrXCCG+AYDlCvLf/6u51k/v6Auhszo4L0I8S5Hb30gSjvFEmCJfmgVvdS1OEy4YJBC2ABPNKpYGQYF7JCIIWQCyjdwnmlSYY5bvNjWolQ7xW1TW/h//NK02RP/KNrg0tAA62AuCbpspkqDmh58lPaqqd0Eg807WjBbC43jrlktWhh+B9OGi6fa9OKBW1O6udY11bfSfBskGwaR4wfA2WBYJt80CGlWBoCC7MAxmXwqEguDIP5NgL+Ibg0jyQczPkC4Jr80CB3aBrCD7MAwW3w64g+DIPAKTIzUqmAXPB6pSJq7pTYRHT377MA5YORLL0BBqLG2kVIhl7e/JKVnqAUs/mRLc+PwcwlqMMAI64ZDWbBzJWAQDGwyGPrD55JesAACcQnJgHHAEArEJwZh4ASHtrftpFw8DFpCYleQ/9uNbpnBD5MCaRs0NYlvZKsiFZvIONSUk+UClshJOooc8LjACEDiC0RgBCBxBaTFA646rxQXgNDsRCiAtWX3zR+m4jrn81MEthVxAGajPkAoLVSdAgVwdcbHnzlDnJRVoDYJqrg8Sj1FKJB/Cci7QCIMsZnojocVoFEdEfvvMOhQHYPsD0nXcoBMDV6a1PCLkBuD669gUhFwBf5/Y+IGQG4DNpAbiHkAmAb/NKLiEYAwhlXskVBCMAoc0ruYDQF0BZzCvZhqAFUDbzSjYhaAEw8G3ozR9xyRZ8mlfqgXCkqTbBCH+ta0cLICLxYxB8TSk+oVQshfzneBdCDek94VBeIU91bWgBzK0dnEUyXkqA4L3bp0kzHA4lI/X5559+6u7vOwkmQCiNeaUECEbmAcPX4NzawVkso3uQ2Ak15vvpEoLEToyoZmIeyPDFSPcLjPu5I/Sg7nyUKcahzwuMAIQOILRGAEIHEFpDD+AvAten22NVJ+oAAAAASUVORK5CYII="
                  alt="icon"
                  className="w-6 h-6"
                />
                <span className="text-lg font-medium text-gray-800 whitespace-nowrap">{item}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <Element name='services'>
        <HomeService/>
        </Element>
      </section>
      <section>
        <HomeChoose/>
      </section>
      <section>
        <HomeProcess/>
      </section>
      <section>
        <VideoSection/>
      </section>
      <section>
        <HomeProject/>
      </section>
      <section>
        <HomeTestimonial/>
      </section>
      <section>
        <HomeFAQ/>
      </section>
      <section>
        <TeamSection/>
      </section>
      <section>
        <BlogCards/>
      </section>
    </div>
    </Element>
  )
}

export default Home
