import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../component/_common/PageTitle'
import TitleBar from '../component/work/TitleBar'
import CardItem from '../component/_common/CardItem'
import projectList from '../data/projectList.json'
import TopBtn from '../component/icons/TopBtn'
import '../styles/work/work.scss'

function Work() {

  const navi = useNavigate();

  const projectType = (type)=>{
    return projectList.filter(p => p.type===type).sort((a,b)=> b.id - a.id);
  }
  
  const teamProjects = projectType('TEAM');
  const personalProjects = projectType('PERSONAL');
  const designProjects = projectType('WEB-DESIGN');

  useEffect(()=>{
      window.scrollTo(0,0);
    },[])

  return (
    <div className='work'>
      <PageTitle title={'Project'}/>

      <div className='workTeam'>
        <TitleBar className={'workTopBar'} title={'TEAM'} content={'팀 프로젝트 관련 작업물입니다.'}/>
        <div className='workItem'>
          {teamProjects.map(item=>(
            <CardItem
              key={item.id}
              img={item.img2}
              title={item.title}
              content={item.content.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              tool={item.tool}
              onClick={()=>{navi(`/project/detail/${item.id}`)}}
            />
          ))}
        </div>
      </div>

      <div className='workPersonal'>
        <TitleBar className={'workTopBar'} title={'PERSONAL'} content={'개인 프로젝트 관련 작업물입니다.'}/>
        <div className='workItem'>
          {personalProjects.map(item=>(
            <CardItem
              key={item.id}
              img={item.img2}
              title={item.title}
              content={item.content.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              tool={item.tool}
              onClick={()=>{navi(`/project/detail/${item.id}`)}}
            />
          ))}
        </div>
      </div>

      <div className='workWeb'>
        <TitleBar className={'workTopBar'} title={'WEB-DESIGN'} content={'웹사이트 유지보수 관련 작업물입니다.'}/>
        <div className='workItem'>
          {designProjects.map(item=>(
            <CardItem
              key={item.id}
              img={item.img2}
              title={item.title}
              content={item.content.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              tool={item.tool}
              onClick={()=>{navi(`/project/detail/${item.id}`)}}
            />
          ))}
        </div>
      </div>

      <TopBtn/>
    </div>
  )
}

export default Work