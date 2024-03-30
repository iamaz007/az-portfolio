import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import Portfolio from '../Portfolio';
import CtaStyle2 from '../Cta/CtaStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import { projects } from '../../helpers/projects';
import { AllProjects } from '../Projects/Projects';


export default function ProjectPage() {
  pageTitle('Project');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Project I have worked"
        subTitle="My Portfolio"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <AllProjects data={projects} />
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </>
  );
}
