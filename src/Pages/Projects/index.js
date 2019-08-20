import React from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Form/Select';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="column-items">
        <LargeCard
            className="full-width-card"
            title={<HeadTitle className="white-text-on-dark" text="Projects"/>}
            actions={<>
              <Select
                  options={[
                      {id: 0,title: 'All Platforms'},
                      {id: 1,title: 'Parkners'},
                      {id: 2,title: 'LuckyHouse'},
                  ]}
                  arrow={true}
                  selectedOption={0}
              />
          </>}
        >  
          <div className="projects">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
        </LargeCard>
    </div>
  );
}

export default Projects; 