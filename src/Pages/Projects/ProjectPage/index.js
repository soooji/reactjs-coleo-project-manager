import React from 'react';
import { Large3PartCard } from '../../../Components/Cards/Card';
import { HeadTitle } from '../../../Components/Texts/Text';
import { ArrowButton } from '../../../Components/Buttons/Buttons';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { Link } from 'react-router-dom';
import SectionItem from './Section';

function ProjectPage(props) {
  return (
    <Large3PartCard
      className="full-width-card"
      left={<Link to="/panel/projects/"><ArrowButton title="projects" leftIcon={<ArrowLeft style={{fontSize: '1.1rem'}}/>}/></Link>}
      center={<HeadTitle className="white-text-on-dark" text={props.match.params.id}/>}
      right={<div className="project-progress">25%</div>}
    >
      <div className="project-sections">
        <SectionItem/>
        <SectionItem/>
      </div>
    </Large3PartCard>
  );
}

export default ProjectPage;