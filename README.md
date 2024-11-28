# ChatGPT 클론 프로젝트

Next.js와 OpenAI API를 활용한 ChatGPT 클론 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 ChatGPT와 유사한 대화형 AI 채팅 인터페이스를 구현하는 것을 목표로 합니다. 사용자는 AI와 실시간으로 대화를 나누고, 이전 대화 기록을 확인할 수 있습니다.

## 기술 스택

- **Frontend**
  - Next.js 15.0.3
  - React 18
  - TypeScript
  - Tailwind CSS
  - Heroicons

- **AI/API**
  - OpenAI API (GPT-3.5 Turbo)

- **개발 도구**
  - ESLint
  - Turbopack
  - PostCSS

## 주요 기능

- 실시간 AI 채팅
- 채팅 히스토리 관리
- 반응형 디자인
- 다크 모드 UI

## 학습 내용

- Next.js App Router 아키텍처
- React 상태 관리 및 컴포넌트 설계
- OpenAI API 통합
- TypeScript를 활용한 타입 안전성
- Tailwind CSS를 활용한 모던 UI 구현

## 시작하기

1. 환경 변수 설정:
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your_api_key   
   ```
   - .env.local에 설정
   - OpenAI 플랫폼(https://platform.openai.com/account/billing)에서 결제 설정 후 API키 발급 후 설정
   - OpenAI API 플랫폼과 , ChatGPT Plus 구독과는 별개로 각자 결제를 해야 테스트가 가능함.


2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. http://localhost:3000 접속

## 프로젝트 구조

```
src/
├── app/              # Next.js 앱 라우터
├── components/       # React 컴포넌트
│   ├── Chat/        # 채팅 관련 컴포넌트
│   └── Layout/      # 레이아웃 컴포넌트
├── types/           # TypeScript 타입 정의
└── utils/           # 유틸리티 함수
```

## 주의사항

### OpenAI API 설정
- OpenAI API 키는 반드시 `.env.local` 파일에 설정해야 합니다.
- OpenAI API는 ChatGPT Plus 구독과는 별개로 결제 설정이 필요합니다.
- API 키 발급 및 결제 설정: https://platform.openai.com/account/billing

### 환경 설정
1. OpenAI 플랫폼에서 결제 설정 후 API키 발급
2. .env.local에 API키 설정:
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your_api_key   
   ```
3. OpenAI API 플랫폼과 ChatGPT Plus 구독은 별개의 서비스이므로 각각 결제 필요

## 개발 가이드

### 컴포넌트 구조
- `ChatContainer`: 채팅 기능의 메인 컨테이너
- `ChatMessage`: 개별 메시지 표시
- `ChatInput`: 사용자 입력 처리
- `Sidebar`: 채팅 히스토리 관리

### 스타일링
- Tailwind CSS를 사용한 반응형 디자인
- 다크 모드 지원
- 커스텀 색상 테마 설정 가능

## 문제 해결

### 자주 발생하는 오류
1. API 할당량 초과 (429 에러)
   - OpenAI 플랫폼에서 결제 설정 확인
   - API 사용량 모니터링
   
2. 환경 변수 오류
   - .env.local 파일 존재 여부 확인
   - API 키 올바른 형식 확인
