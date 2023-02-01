![image](https://user-images.githubusercontent.com/90181028/216120357-f2f96a46-24b7-4e1d-8d70-91c710ba5665.png)

# CRUD w React Query 
> 원티드 프리온보딩 프론트엔드 챌린지 1월

- [원티드 프리온보딩 프론트엔드 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_5)
- [챌린지 과제 가이드](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

## Features

### Assignment 1 - Login / SignUp

- [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- [x] 이메일과 비밀번호의 유효성을 확인합니다
- [x] 이메일 누락
- [x] 패스워드 누락
- [x] 패스워드, 확인 패스워드 불일치
- [x] 이메일 조건 : 최소 `@`, `.` 포함
- [x] 비밀번호 조건 : 8자 이상 입력
- [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
- [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
- [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
- [x] 로그아웃
- [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- [x] 목록 / 상세 영역으로 나누어 구현해주세요
- [x] Todo 목록을 볼 수 있습니다.
- [x] 현재 시각과 비교하여 타임스탬프
- [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
- [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
- [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- [x] 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
- [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
- [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- [ ] 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
- [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## Tech Stack

`React`, `Typesctipt`, `styled-componets`, `React-Query`, `Recoil`

## Demo

<img src="https://user-images.githubusercontent.com/90181028/210785620-7b11cce1-7bf9-4875-a0c7-64f5ec380973.gif" width="90%" />
