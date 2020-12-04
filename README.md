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