import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import PageTitle from '../component/_common/PageTitle'
import ToolsNoopen from '../component/about/ToolsNoopen'
import ToolsOpen from '../component/about/ToolsOpen';
import Education from '../component/about/Education'
import Introduction from '../component/about/Introduction'
import Contact from '../component/_common/Contact';
import TopBtn from '../component/icons/TopBtn';
import '../styles/about/about.scss'
import toolList from '../data/toolList.json';
import BtnItem from '../component/detail/BtnItem';

function About() {
  const [openCategory, setOpenCategory] = useState('Front_end');

  // 교육이력부분 내용 배열
  const educationList = [
    {
      date: '2024.12 - 2025.06',
      title: '역삼 그린컴퓨터아카데미',
      content: '@프론트엔드(React, PHP), 플러터(Flutter)활용 웹&앱개발 과정 수료',
      details: [
        '· 프로젝트 기반 커리큘럼으로 기획, 퍼블리싱, 프론트엔드, 백엔드 전 과정을 학습',
        '· React와 PHP를 활용한 웹 서비스 및 SPA 구축 역량 강화',
        '· 데이터베이스 설계부터 테스트, 배포까지 실무 흐름에 맞춘 실습 수행',
        '· Flutter를 활용한 앱 개발 환경 및 네이티브 UI 구현 학습',
        '· 팀 프로젝트를 통한 협업 경험 및 Git을 활용한 형상 관리 역량 향상',
        '',
      ],
    },
    {
      date: '2015.03 - 2019.02',
      title: '전주대학교',
      content: '@시각디자인학과 학사 졸업',
      details: [
        '· 2017-2018 전주대학교 시각디자인학과 3-4학년 과대표 / 대외협력홍보실 장학생 근무',
        '· Adobe Photoshop, Illustrator 등을 활용한 시각 콘텐츠 디자인 실습',
        '· 포스터, 인포그래픽, 패키지디자인 등 다양한 그래픽 작업을 수행',
        '· 다양한 그래픽 작업을 통해 색채, 구성, 타이포그래피 등 시각 요소에 대한 감각 강화',
        '· 디자인 경험을 기반으로 사용성과 전달력을 고려한 UI 구성이 가능'
      ],
    },
  ];

  // 자기소개서 내용 배열
  const introList = [
    {
      title: '캔버스에서 브라우저로',
      content:
        '시각디자인을 전공하고 편집디자이너로 근무하면서 **사용자 중심의 시각적 완성도**를 고민하며 작업해왔습니다. 하지만 브랜드 웹사이트를 제작하는 과정에서, 단순한 디자인을 넘어 직접 **사용자의 경험을 설계하고 구현하는 영역**에 매력을 느끼게 되었습니다.\n' +
        '기획-디자인-프론트엔드 개발의 흐름을 모두 경험해본 저는, 단순히 ‘코드를 잘 짜는 개발자’가 아니라 ‘**디자인의 의도를 정확하게 구현하고 사용자 경험을 고민하는 프론트엔드 개발자**’로 성장하고자 합니다.\n',
    },
    {
      title: '나란히, 함께 나아가기',
      content:
        '프론트엔드 개발자 양성 과정 중 1차, 2차 팀 프로젝트에서 **총괄 팀장을 맡으며 협업의 본질**을 **경험**했습니다. 역할 분담을 넘어서, 매일 개발 상황을 공유하고 계획을 수립하며 모든 팀원이 주도적으로 참여할 수 있는 환경을 만드는 것이 저의 가장 중요한 역할이었습니다.\n' +
        '진행 중에는 의견 충돌이나 소극적인 태도로 인한 어려움도 있었습니다. 하지만 팀의 완성도는 **‘기술력’보다 ‘소통’과 ‘신뢰’에서 시작**된다고 믿었기에, 먼저 다가가 각자의 상황을 듣고 조율하며 프로젝트를 이끌었습니다.\n',
    },
    {
      title: '혼자보다 함께',
      content:
        '저는 팀의 목표를 최우선으로 생각하며, **책임감을 가지고** 끝까지 **완수하려는 성향**을 지녔습니다. 실제 프론트엔드 팀 프로젝트 중 팀원 한 명이 중도 이탈해, 각자 맡은 파트만으로도 벅찬 상황이었지만, 꼭 필요한 기능이기에 자발적으로 부족한 파트를 추가로 맡아 구현하고, 오류 점검과 발표 자료까지 책임지고 준비했습니다. 그러나 이 과정에서 모든 것을 혼자 책임지려다 과도한 부담을 안게 되었고, 오히려 협업의 흐름을 방해할 수 있다는 점을 느꼈습니다. 이 경험을 통해, 저는 **책임감과 협업의 균형**이 **중요**하다는 것을 배웠습니다.\n',
    },
  ];

  const download = ()=>{
    const link = document.createElement('a');
    link.href = '/소연희_입사지원서.pdf';
    link.download = '소연희_입사지원서.pdf';
    link.click();
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='about'>
      <PageTitle title={'About'}/>

      <div className='about-profile'>
        <p className='profileImg'>
          <img src="/imgs/AboutProfile.png" alt="profile" />
        </p>
        <div className='profileRight'>
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
          <div className='profileBtn'>
            <BtnItem
              className={'yellowBtn'}
              text={'📑 이력서 다운받기'}
              onClick={download}
            />
            <BtnItem
              className={'grayBtn'}
              text={'📁 Notion 바로가기'}
              onClick={() => window.open('https://www.notion.so/soyeonhee/21d2ffab606380aabecad93e71406817', '_blank', 'noopener,noreferrer')}
            />
          </div>
        </div>
      </div>

      <div className='aboutEdu'>
        <h2>Education & Training</h2>
        <Education education={educationList}/>
      </div>

      <div className='aboutTools'>
        <div className='aboutToolTop'>
          <h2>Tools & Skills</h2>
          <p>활용 가능한 도구들을 탭을 클릭해서 확인해보세요!👆</p>
        </div>
        <div className='front'>
          {Object.entries(toolList).map(([category, tools]) => (
            <div key={category} className='toolAll'>
              <div className='toolNoOpen' onClick={()=> setOpenCategory(category)}>
                <ToolsNoopen category={category} tools={tools} />
              </div>

              <AnimatePresence initial={false}>
                {openCategory === category && (
                  <motion.div
                    className='toolOpen'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ToolsOpen category={category} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className='aboutMe'>
        <h2>저에 대해 조금 더 궁금하신가요?</h2>
        <div className='aboutMeForm'>
          {introList.map((item,i)=>(
            <Introduction 
              key={i}
              title={item.title}
              content={item.content}/>
          ))}
        </div>
      </div>

      <div className='aboutContact'>
        <div className='aboutContactTop'>
          <h2>Contact</h2>
          <p>프론트엔드가 필요하신가요? 제가 여기 있어요!🙋‍♀️</p>
        </div>
        <Contact className={'aboutContactItem'}/>
      </div>

      <TopBtn/>

    </div>
  )
}

export default About