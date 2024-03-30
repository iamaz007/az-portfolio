import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { Icon } from '@iconify/react';
import { pageTitle } from '../../helpers/PageTitle';
import { projects } from '../../helpers/projects';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '../../helpers/ImageHelper';

export default function ProjectDetailsPage({ }) {
  const { slug } = useParams();
  const project = projects[projects.findIndex(x => x.slug == slug)];
  // console.log('slug', slug);
  // console.log('project', project);
  pageTitle('Project Details');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title={project.title}
        subTitle={`visit ${project.title}`}
        href={project.link}
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <div className="cs_portfolio_details">
          <img src={getImageUrl('/images/others/portfolio_details_1.jpeg')} alt="Thumb" />
          <Spacing lg="100" md="40" />
          <div className="cs_portfolio_details_in">
            <ul className="cs_portfolio_details_info cs_mp0">
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Technology:</h3>
                <p className="mb-0">{project.technology}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">APIs & SDKs:</h3>
                <p className="mb-0">{project.thirdy_party_api}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Platform:</h3>
                <p className="mb-0">{project.platform}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Company:</h3>
                <p className="mb-0">{project.company}</p>
              </li>
            </ul>
            <div className="cs_portfolio_details_right">
              <h2>Project Summary</h2>
              <p>
                {project.short_description}
              </p>
            </div>
          </div>
          <Spacing lg="115" md="60" />
          <div className="cs_portfolio_details_gallery">
            <div>
              <img src={getImageUrl('/images/others/portfolio_details_2.jpeg')} alt="Thumb" />
            </div>
            <div>
              <img src={getImageUrl('/images/others/portfolio_details_3.jpeg')} alt="Thumb" />
            </div>
            <div>
              <img src={getImageUrl('/images/others/portfolio_details_4.jpeg')} alt="Thumb" />
            </div>
          </div>
        </div>
        <Spacing lg="90" md="60" />
      </div>
      <Spacing lg="150" md="80" />
    </>
  );
}
