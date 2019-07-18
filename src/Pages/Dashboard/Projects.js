import React from 'react'
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import MiniProjectItem from '../../Components/Projects/MiniProjectItem';
import { Project } from '../../Models/Project';

export default function Projects(props) {
  return (
    <LargeCard
        className="half-card"
        title={<HeadTitle className="white-text-on-dark" text="Projects Progress"/>}
        actions={<></>}
    >
      <MiniProjectItem project={new Project({id: 0,title: 'LuckyHouse',progress: 32,currentSection: 'Web UI Design',nextDeadlineDuration: 340000000,logo: 'http://uupload.ir/files/ctm_ln.png'})}/>
      <MiniProjectItem project={new Project({id: 0,title: 'Parkners',progress: 76,currentSection: 'Reasearch',nextDeadlineDuration: 3400000,logo: 'http://uupload.ir/files/mbpc_appicon.png'})}/>
    </LargeCard>
  )
}