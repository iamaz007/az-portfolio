import React from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
import AboutStyle3 from '../About/AboutStyle3';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import Portfolio from '../Portfolio';
import Button from '../Button';
import Marquee from '../Marquee';
import BrandsStyle2 from '../Brands/BrandsStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import { getImageUrl } from '../../helpers/ImageHelper';
import { projects } from '../../helpers/projects'
import { Projects } from '../Projects/Projects';
const serviceData = [
  {
    number: '01',
    title: 'WP Development',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_1.jpeg',
    href: '/service/service-details',
  },
  {
    number: '02',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_2.jpeg',
    href: '/service/service-details',
  },
  {
    number: '03',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_3.jpeg',
    href: '/service/service-details',
  },
  {
    number: '04',
    title: 'On Page Optimization',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_4.jpeg',
    href: '/service/service-details',
  },
];
const portfolioData = [
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_1.jpeg',
    title: 'Awesome colorful artwork',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_2.jpeg',
    title: 'Admin dashboard UI design',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_3.jpeg',
    title: 'Product designing with brand',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_4.jpeg',
    title: 'Kids education website design',
    btnText: 'See Project',
  },
];
const brandData = [
  {
    logoSrc: '/images/studio-agency/brand_1.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_2.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_3.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_4.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_5.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_6.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_7.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_8.svg',
    logoAlt: 'Partner',
  },
];
const brandDataDark = [
  {
    logoSrc: '/images/studio-agency/brand_1_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_2_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_3_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_4_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_5_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_6_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_7_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_8_dark.svg',
    logoAlt: 'Partner',
  },
];

export default function HomePage({ darkMode }) {
  pageTitle('Home');
  return (
    <>
      <HeroStyle3
        title="I'm <u>Abdullah Zahid</u> <br /> experienced <u>Software Engineer</u><br />  in <u>Web & Mobile App development</u>"
        scrollingText="I have experianced in - Full stack development - Flutter mobile development - Python scraping and selenium"
        thumbnailSrc={getImageUrl('/images/studio-agency/hero_bg_dark.jpg')}
      />

      <section>
        <Spacing lg="130" md="70" />
        <AboutStyle3
          title="From planning to architecture design, coding to testing and deployment, I have experience in the complete SDLC process."
          subTitle="With 4 years of experiance in Full stack development with Laravel & ReactJs and 3 years of eperiance in Flutter app development, I have worked on all major software development cycles using Agile methodology"
          btnText="See All Project"
          btnUrl="/projects"
        />
        <Spacing lg="150" md="80" />
        <section className="cs_primary_bg">
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading
              title="Recent projects"
              subTitle="Portfolio"
              variantColor="cs_white_color"
            />
            <Spacing lg="85" md="45" />
            <Projects variantColor="cs_color_1" data={projects} limit={4} />
            <Spacing lg="85" md="30" />
            <div className="text-center">
              <Button btnText="See All Project" btnUrl="/projects" />
            </div>
          </div>
          <Spacing lg="145" md="80" />
        </section>
      </section>
      <Spacing lg="135" md="70" />
      <SectionHeading
        title="Third Part APIs & Tools"
        subTitle="Other experiences"
        variantColor="cs_white_color"
      />
      <Spacing lg="84" md="50" />
      <div className="container">
        <BrandsStyle2 data={brandDataDark} />
      </div>
    </>
  );
}
