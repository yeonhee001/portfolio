
## ✨ 소개
React로 제작된 SPA 포트폴리오 웹사이트, <b>"Init(💻)Load(🌟)"</b> 입니다.

"Init(frontend) & Load(potential)" — 프론트엔드를 시작하고, 가능성이 현실로 펼쳐지다
라는 뜻을 담아, 지금까지의 성장 과정과 다양한 작업물을 기록하였습니다.

홈, 프로젝트, 어바웃, 디테일 페이지로 구성되어 있으며, <br>
프로젝트 페이지에서는 팀, 개인, 웹디자인으로 분류되어 다양한 작업물 확인이 가능합니다. <br>
각 프로젝트는 JSON 파일을 통해 관리되며, 화면에 필요한 정보가 효율적으로 출력되도록 구성했습니다.<br>

모바일 환경에서도 보기 쉽도록 반응형으로 제작하여,<br>
어떤 디바이스에서도 편리하게 포트폴리오를 열람할 수 있도록 작업했습니다.

## 🔗 배포 URL
https://soyeonhee-portfolio.vercel.app/

## 📑 프로젝트 요약

### 1. 주제

* 다양한 프로젝트와 작업물을 정돈된 구조와 직관적인 UI로 소개하는 React 기반 포트폴리오 웹사이트 제작

### 2. 목표

* 다양한 프로젝트와 작업물을 보기 쉽게 정리하여 나의 개발 역량을 효과적으로 전달
* JSON 기반 데이터 구조를 활용한 유연한 콘텐츠 관리
* React의 컴포넌트 구조를 활용해 일관된 UI와 효율적인 개발 환경 구현
* 프로젝트 카테고리 분류 및 상세 페이지 구현으로 정보 전달력 향상
* 반응형 디자인을 통한 접근성 강화

### 3. 주요 기술 스택

* Front-End : React, React Router
* 데이터 구성 : JSON 기반 데이터 설계

## 📆 기간 및 인원

  * 2025.06.18-2025.06.27 총 10일
    * 기획 및 디자인 기간 : 4일
    * 개발 및 테스트 기간 : 6일
   
  * 개인 작업 100%

## 💡 주요 기능

### 1. 홈 페이지 구성
* 프로젝트 썸네일과 어바웃 섹션의 일부 내용을 미리 볼 수 있도록 하여, 전체 흐름을 빠르게 파악할 수 있도록 구성

### 2. 디테일 페이지 구성
* 프로젝트 상세 페이지에서 썸네일 이미지를 슬라이드로 구현하여 시각적 전달력 향상
* 디테일 페이지 하단에서 다른 프로젝트를 슬라이드로 표시하여 탐색 흐름 자연스럽게 유도

### 3. 어바웃 페이지 구성
* 교육 이력, 사용 기술(툴/스택), 자기소개를 보기 쉽게 정리하여 방문자에게 나를 효과적으로 소개
* 연락처 및 이메일 클릭 시, 클립보드에 복사되도록 구현하여 접근성과 편의성 강화
* 깃허브 클릭 시, 깃허브 페이지로 이동되어 접근성 강화

## 🗂️ 폴더 구조

```
📂portfolio                    # 포트폴리오 ( Front-End_React 프로젝트 )
┣ 📂public
┃ ┣ 📂imgs
┃ ┃ ┣ 📂_icons
┃ ┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂component                # 컴포넌트 폴더
┃ ┃ ┣ 📂_common                # 공통 컴포넌트 폴더
┃ ┃ ┣ 📂about                  # 어바웃 페이지 컴포넌트 폴더
┃ ┃ ┣ 📂detail                 # 디테일 페이지 컴포넌트 폴더
┃ ┃ ┣ 📂home                   # 홈 컴포넌트 폴더
┃ ┃ ┣ 📂icons                  # 아이콘 컴포넌트 폴더               
┃ ┃ ┗ 📂work                   # 프로젝트 페이지 컴포넌트 폴더
┃ ┣ 📂data                     # JSON 데이터 파일
┃ ┃ ┣ 📜detailList.json            
┃ ┃ ┣ 📜projectList.json            
┃ ┃ ┣ 📜toolDetailText.json
┃ ┃ ┗ 📜toolList.json
┃ ┣ 📂pages                    # 각 페이지 컴포넌트 폴더
┃ ┃ ┣ 📜About.jsx
┃ ┃ ┣ 📜Detail.jsx
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┗ 📜Work.jsx
┃ ┗ 📂styles                   # scss
┃ ┗ 📜App.js                   # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
┗ README.md
```

## 💻 개발 환경

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **SPA기반 프레임워크** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
|**React Router Dom** | **페이지 라우팅 관리** |![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)|
| **JSON** | **데이터 구조 및 관리** | ![json](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white) |

### 2. UI/UX 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|

### 3. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**Git** | **로컬 버전 관리** |![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white)|
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

