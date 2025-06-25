import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import IntroText from '../component/detail/IntroText';
import BtnItem from '../component/detail/BtnItem';
import ImageItem from '../component/detail/ImageItem';
import CardItem from '../component/_common/CardItem';
import TopBtn from '../component/icons/TopBtn';
import detailList from '../data/detailList.json'
import projectList from '../data/projectList.json'
import '../styles/detail/detail.scss'

function Detail() {

  const navi = useNavigate();
  const {id} = useParams();
  const allData = Object.values(detailList).flatMap(detail => detail);
  const data = allData.find((p) => p.info[0].id === Number(id));
  const infoData = data.info[0];
  const detailData = data.detail;
  const issueData = data.issue;

  const bottomlist = projectList.filter((b)=>b.id !== Number(id) && b.id !== 7).slice(0,6);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[id])

  if(!data){return <p>프로젝트를 찾을 수 없습니다ㅜㅡㅜ</p>}

  return (
    <div className='detailpage'>
      <p className='detailLogo'>
        <img src={`/imgs/${infoData.logo}`} alt="logoimage" />
      </p>

      <div className='detailSlide'>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="mySwiper detailswiper"
        >
          {infoData.slideImage.map((item,i)=>(
            <SwiperSlide key={i}>
              <img src={`/imgs/${item}`} alt="slideimg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='detailInfo'>
        <div className='info-top'>
          <div className='info-left'>
            <b>{infoData.title}</b>
            <div className='info-tag'>
              {infoData.tools.map((item, i)=>(
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
          <p className='info-right'>{infoData.desc}</p>
        </div>

        <div className='info-top-text'>
          <IntroText title={'작품 소개'} content={`${infoData.intro || '-'}`}/>
          <IntroText title={'개발 기간'} content={`${infoData.period || '-'}`}/>
          <IntroText title={'인원 & 기여도'} content={`${infoData.contribution || '-'}`}/>
          <IntroText title={'개발 환경'} content={`${infoData.environment || '-'}`}/>
          <IntroText title={'담당 업무'} content={`${infoData.role || '-'}`}/>
          <IntroText title={'주요 기능 포인트'} content={`${infoData.keyFeatures || '-'}`}/>
        </div>

        <div className='info-btn'>
          {infoData.site && (
            <BtnItem
              className={'yellowBtn'}
              text={'배포 URL 사이트 바로가기'}
              onClick={() => window.open(infoData.site, '_blank', 'noopener,noreferrer')}
            />
          )}
          {infoData.github && (
            <BtnItem
              className={'grayBtn'}
              text={'GitHub 바로가기'}
              onClick={() => window.open(infoData.github, '_blank', 'noopener,noreferrer')}
            />
          )}
        </div>
      </div>

      {infoData.id ===7 ? (
        <div className='detailImageText'>
          {detailData.map((item,i)=>(
            <div className='section' key={i}>
              <ImageItem className={'detailDesignImage'} img={item.img}/>
            </div>
          ))}
        </div>
      ) : (
        detailData?.length > 0 && (
          <div className='detailImageText'>
            {detailData.map((item,i)=>(
              <div className='section' key={i}>
                <ImageItem className={'detailImageItem'} img={item.img} title={item.title || ''} content={item.content || ''} reverse={i % 2 !== 0}/>
              </div>
            ))}
          </div>
        )
      )
      }

      <div className='detailDevlop'>
        {issueData.some(section => section.list?.length>0) && (
          <h4>개발 이슈</h4>
        )}
        {issueData.map((section, i) => (
          <div className='devlopTextSection' key={i}>
            {/* 리스트가 있을 경우 */}
            {section.list?.length > 0 ? (
              <>
                <p>{`📌 ${section.title || '파일명 없음'}`}</p>
                {section.list.map((item, j) => (
                  <div className='devlopText' key={j}>
                    <span>{item.content}</span>
                    {item.text1 && <span>{item.text1}</span>}
                    {item.text2 && <span>{item.text2}</span>}
                  </div>
                ))}
              </>
            ) : section.img?.length > 0 ? (
              <div className='devlopImg'>
                {section.img[0].split(',').map((img, idx) => (
                  <img key={idx} src={`/imgs/${img.trim()}`} alt={`issue-img-${idx}`} />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className='detailBottomBg'>
        <div className='detailBottom'>
          <h2>아직 보여드릴 게 더 남아 있어요!</h2>
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true, }}
            modules={[Pagination]}
            className="mySwiper detailbottomswiper"
            breakpoints={{
              0: {
                slidesPerView: 2.3,
              },
              768: {
                slidesPerView: 3.5,
              }
            }}
          >
            {bottomlist.map((item)=>(
              <SwiperSlide key={item.id}>
                <CardItem img={item.img2} title={item.title} content={item.content} tool={item.tool} onClick={()=>{navi(`/project/detail/${item.id}`)}}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <TopBtn/>
    </div>
  )
}

export default Detail