import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import RightMainIcon from '../component/icons/RightMainIcon'
import Typing from '../component/home/Typing';
import Computer from '../component/icons/Computer'
import Star from '../component/icons/Star'
import ToolsItem from '../component/_common/ToolsItem'
import RightMiniGreyIcon from '../component/icons/RightMiniGreyIcon'
import TopBar from '../component/home/TopBar'
import CardItem from '../component/_common/CardItem'
import Contact from '../component/_common/Contact'
import TopBtn from '../component/icons/TopBtn'
import '../styles/home/home.scss'
import toolList from '../data/toolList.json'
import iconMap from '../utils/iconMap'
import projectList from '../data/projectList.json'

function Home() {
  const navi = useNavigate();
  const {id} = useParams();
  const [typingDone, setTypingDone] = useState(false);

  // json 파일 사용해 아이콘 출력
  const selectIcons = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Flutter', // 상단
    'Node.js', 'PHP', 'mongoDB', 'MySQL', 'GitHub', 'Vercel'   // 하단
  ]
  const allTool = Object.values(toolList).flat(); //전체 항목 배열로 변환
  const selectTools = allTool.filter(tool => selectIcons.includes(tool.title)); // 내가 넣고 싶은 아이콘만 있음
  const topTool = selectTools.slice(0,6);
  const bottomTool = selectTools.slice(6);

  // json 파일 사용해 프로젝트 리스트 출력
  const homeProject = projectList.slice(0,6);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='home'>
      <div className='homeMain'>
        <div className='homeBg'>
          <img src="/imgs/Background01.png" alt="mainbg" />
        </div>
        <div className='homeText'>
          <div className='homeMainTitle'>
            <div className='homeTitle'>
              <Typing text={`Init(💻)\nLoad(🌟)`} className="homeLine" onComplete={()=>setTypingDone(true)}/>
              {/* <b>init(<Computer className={'homeComputer'}/>)</b>
              <b>Load(<Star className={'homeStar'}/>)</b> */}
            </div>
            
            {typingDone && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1, // 한 사이클에 걸리는 시간
                  repeat: 2, // 3번 깜빡이려면 repeat: 2 (총 3회 표시됨)
                  repeatType: 'loop'
                }}
              >
                <RightMainIcon className={'homeRightMainIcon'}/>
              </motion.div>
            )}

          </div>
          <div className='homeMainText'>
            <p>
              init(Frontend) & Load(Potential) <br/>
              프론트엔드를 시작하고, 가능성이 현실로 펼쳐지다
            </p>
            <p>
              2025 <br/> PORTFOLIO
            </p>
          </div>
        </div>
      </div>

      <div className='home-profile'>
        <p className='profileImg'>
          <img src="/imgs/HomeProfile.png" alt="profile" />
        </p>
        <div className='profileRight' onClick={()=>navi('/about')}>
          <div className='profileText'>
            <img src="/imgs/QuoteOneIcon.svg" alt="QuoteOneIcon" />
            <div className='profileContent'>
              <b><span>경험</span>을 <span>설계</span>하는<br/>프론트엔드 개발자, 소연희입니다.</b>
              <p>사용자의 입장에서 생각하며,<br/>
                직관적이고 효율적인 인터페이스를 설계하기 위해<br/>
                끊임없이 경험하고 도전합니다.
              </p>
            </div>
            <img src="/imgs/QuoteTwoIcon.svg" alt="QuoteTwoIcon" />
          </div>
          <div className='profileIcons'>
            <div className='iconsTop'>
              {topTool.map(tool=>{
                const IconComponent = iconMap[tool.icon];
                return(<ToolsItem key={tool.title} icons={IconComponent ? <IconComponent/> : null} title={tool.title} color={tool.color}/>)
              })}
            </div>
            <div className='iconsBottom'>
              {bottomTool.map(tool=>{
                const IconComponent = iconMap[tool.icon];
                return(<ToolsItem key={tool.title} icons={IconComponent ? <IconComponent/> : null} title={tool.title} color={tool.color}/>)
              })}
            </div>
          </div>
          <div className='profileBtn' onClick={()=>navi('/about')}>
            <p>더 많은 이야기가 기다리고 있어요!</p>
            <RightMiniGreyIcon className={'aboutRightIcon'}/>
          </div>
        </div>
      </div>
      
      <div className='home-project'>
        <TopBar className={'homeMenuTop'} title={'Project'} onClick={()=>navi('/project')}/>
        <div className='home-projectList'>
          <Box sx={{ width: '100%', paddingTop: '20px' }}>
            <Masonry   
              columns={{ xs: 2, sm: 3, md: 3 }}
              spacing={{ xs: 3, sm: 4, md: 5 }}>
              {homeProject.map((project, index) => (
                <div className='home-projectItem' key={project.title + index}>
                  <CardItem
                    img={project.img1}
                    title={project.title}
                    content={
                      project.content.includes('\n')
                        ? project.content.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))
                        : project.content
                    } // 컨텐츠에 \n이 포함되어있는거 br로 변경
                    tool={project.tool}
                    onClick={()=>{navi(`/project/detail/${project.id}`)}}
                  />
                </div>
              ))}
            </Masonry>
          </Box>
        </div>
      </div>

      <div className='home-contact'>
        <TopBar className={'homeMenuTop'} title={'Contact'} onClick={()=>navi('/about')}/>
        <Contact className={'home-contactItem'}/>
      </div>

      <TopBtn/>

    </div>
  )
}

export default Home