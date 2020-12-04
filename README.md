# Moive App 2020


# Step 1 : react 설치 및 실행 확인
node, npm, npx, git 설치 후
npx create-react-app movie_app_2020 입력

설치가 완료된 후 package.json에서 scripts 항목의 start, build만 남기고 두 항목은 삭제

실행하려면 터미널에서 npm start 입력


# Step 2 : git 연동
git init 입력

github에서 저장소 만든 후
git remote add origin https~~~ 입력

모든 폴더를 넣기 위해 순서대로
git add.
git commit -m "~~~~" 입력

이 후 git push origin master

# Step 3, 4 : React 기초
남아있는 파일 확인해서 해당 파일로만 작업

# Step 5, 6
map을 활용해 컴포넌트를 동적으로 생성

# Step 7
npm i prop-types 를 통해 prop type 설치

이 prop type은 내가 전달받은 props가 내가 원하는 props인지 확인하기 위함

# Step 8
function을 class로 변경해서 작업

# Step 9
axios를 통해 데이터 다운로드
npm install axios 실행

영화 api는 yts의 api 사용

yts 홈페이지 하단의 api로 들어가서 list movie 클릭

https://yts.mx/api/v2/list_movies.json
이 json을 사용
참고로 저 url이 자주 바뀌므로 
https://yts-proxy.now.sh/list_movies.json 이 url로 사용함

# Step 10
App.js , Movie.js 로 나눠서 작업 
css까지 완료

# Step 11
페이지 공유를 위해 github pages 사용
npm install gh-pages

package.json에서 hompage 설정
https://{github username}.github.io/{the name of project in github}
다 소문자여야함

script에 deploy 추가
predeploy까지 넣어서 gh-pages에 올리기전에 빌드하도록 설정함

실행은 npm run deploy

# Step 12
navigation dom을 만들기 위해 
npm install react-router-dom

src 폴더에 components와 routes 폴더 추가

이전까지 작업한 내용을 다 수정..

# Step 13
Link를 활용해 페이지 View 구현까지 하면 마무리!


# 이후 작업물을 위한 참고 URL
## 공공 데이터 포털
https://www.data.go.kr/tcs/dss/selectDataSetList.do?dType=API&keyword=&detailKeyword=&publicDataPk=&recmSe=&detailText=&relatedKeyword=&commaNotInData=&commaAndData=&commaOrData=&must_not=&tabId=&dataSetCoreTf=&publicDataPks=&coreDataNm=&sort=&relRadio=&orgFullName=&orgFilter=&org=&orgSearch=&currentPage=5&perPage=10&brm=&instt=&svcType=&kwrdArray=&extsn=JSON&coreDataNmArray=
https://www.data.go.kr/data/15059126/openapi.do
https://www.data.go.kr/data/15058578/openapi.do

## IGDB 
https://www.igdb.com/api
https://dev.twitch.tv/console/apps