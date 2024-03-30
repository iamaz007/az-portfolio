import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../helpers/ImageHelper';
import Masonry from 'react-masonry-css';

const Projects = ({ data, variantColor, limit }) => {
  return (
    <ul className={`cs_image_box_1_list ${variantColor ? variantColor : ''} cs_mp0`}>
      {data?.slice(0, limit).map((item, index) => (
        <li key={index}>
          <div className="cs_image_box cs_style_1">
            <div className="cs_image_box_number cs_primary_color cs_primary_font cs_fs_38 cs_semibold">{index + 1}</div>
            <Link to={`/project/${item.slug}`} className="cs_image_box_img cs_radius_15 overflow-hidden">
              <img src={getImageUrl(item.thumbnail)} alt={item.title} />
            </Link>
            <div className="cs_image_box_info position-relative">
              <h2 className="cs_image_box_title cs_fs_29 cs_semibold"><Link to={`/project/${item.slug}`}>{item.title}</Link></h2>
              <p className="cs_image_box_subtitle mb-0">{item.short_description}</p>
              <a href={item.link} target='_blank' className="cs_image_box_btn cs_center position-absolute rounded-circle">
                <svg width={30} height={29} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z" fill="currentColor" />
                </svg>
                <svg width={30} height={29} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

const AllProjects = ({ data }) => {
  const breakpoints = {
    default: 2,
    991: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => (
          <div key={index} className="masonry-item">
            <div className="cs_portfolio cs_style_1">
              <Link to={item.link} className="cs_portfolio_thumb cs_radius_15">
                <img src={getImageUrl(item.thumbnail)} alt="Portfolio" />
              </Link>
              <div className="cs_portfolio_info">
                <h2 className="cs_portfolio_title cs_fs_38">
                  <Link to={item.link}>{item.title}</Link>
                </h2>
                <Link to={item.href} className="cs_portfolio_btn">
                  {item.btnText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
}

export { Projects, AllProjects }