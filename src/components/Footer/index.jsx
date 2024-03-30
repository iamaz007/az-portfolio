import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../helpers/ImageHelper';
import parse from 'html-react-parser';
const addressDataList = [
  'Faisalabad, Pakistan',
  '<a href="mailto:abdullahzahid344@gmail.com">abdullahzahid344@gmail.com</a>',
];

const socialBtnList = [
  {
    icon: 'fa6-brands:github',
    href: 'https://github.com/iamaz007',
  },
  {
    icon: 'fa6-brands:upwork',
    href: 'https://www.upwork.com/freelancers/~01672da7ec37c4dd51?viewMode=1',
  },
  {
    icon: 'fa6-brands:linkedin-in',
    href: 'https://www.linkedin.com/in/abdullah-zahid-264460201/',
  },
];
export default function Footer() {
  return (
    <footer
      className="cs_fooer cs_bg_filed"
      style={{ backgroundImage: 'url(/images/footer_bg.jpeg)' }}
    >
      <div className="cs_fooer_main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Based in</h2>
                <ul className="cs_menu_widget cs_mp0">
                  {addressDataList.map((item, index) => (
                    <li key={index}>{parse(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Social Media</h2>
                <div className="cs_social_btns cs_style_1">
                  {socialBtnList.map((item, index) => (
                    <a href={item.href} target='_nlank' className="cs_center" key={index}>
                      <Icon icon={item.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
