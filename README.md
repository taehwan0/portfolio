# md-portfolio

마크다운과 YAML만으로 포트폴리오를 만들 수 있는 정적 사이트 템플릿입니다.

코드를 수정할 필요 없이, `config.yaml`과 `content/` 디렉토리의 마크다운 파일만 편집하면 포트폴리오가 완성됩니다.

**[데모 보기](https://taehwan0.github.io/md-portfolio/)**

## 특징

- **마크다운 기반** — 콘텐츠를 마크다운으로 작성, 코드 수정 불필요
- **자유로운 섹션 구성** — config.yaml에서 섹션 순서와 표시 여부를 제어
- **다크모드** — 시스템 설정 자동 감지 + 수동 토글, localStorage에 저장
- **반응형** — 모바일/태블릿/데스크탑 대응
- **SEO** — Open Graph, Twitter Card 메타태그 자동 생성
- **PDF 내보내기** — 브라우저 인쇄 기능으로 깔끔한 PDF 출력
- **색상 프리셋** — blue, green, purple, neutral 4종
- **GitHub Pages 배포** — push만 하면 자동 배포

## 빠른 시작

### 1. 레포지토리 복제

```bash
# Fork 후 클론하거나 직접 클론
git clone https://github.com/taehwan0/md-portfolio.git
cd md-portfolio

# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

### 2. 내 정보 입력

`config.yaml`을 열고 내 정보로 수정합니다.

```yaml
# 기본 정보
name: 홍길동
title: 백엔드 개발자
intro: |
  자기소개를 작성합니다.
  여러 줄로 작성할 수 있습니다.

# 프로필 사진 (선택)
# public/images/ 에 이미지를 넣고 경로를 지정합니다
profileImage: /images/profile.png

# 연락처
contacts:
  - type: email
    value: hello@example.com
  - type: github
    url: https://github.com/username
  - type: linkedin
    url: https://linkedin.com/in/username

# 표시할 섹션과 순서
# 순서를 바꾸거나 항목을 제거하면 그대로 반영됩니다
sections:
  - id: work
    title: 경력
  - id: project
    title: 프로젝트
  - id: skills
    title: 기술 스택
  - id: activity
    title: 대외활동
  - id: education
    title: 교육
  - id: certification
    title: 자격 & 외국어

# 상단 네비게이션 표시 여부
showNavigation: true

# 색상 테마: blue | green | purple | neutral
theme: blue

# SEO 설정
seo:
  description: 백엔드 개발자 홍길동의 포트폴리오
  ogImage: /og-image.png
```

### 3. 콘텐츠 작성

`content/` 디렉토리에 마크다운 파일을 작성합니다.

#### 경력 (`content/work/`)

회사당 하나의 마크다운 파일을 만듭니다. 파일명은 자유롭게 지정할 수 있습니다.

```markdown
<!-- content/work/my-company.md -->
---
title: 회사 또는 대표 서비스명
subtitle: 서비스 한 줄 설명
period: "2023.06 ~ 현재"
company: 회사명 | 소속팀
tags: [Spring Boot, Java, Docker]
logo: /images/company-logo.png    # 선택, public/images/에 이미지 저장
order: 1                           # 낮을수록 위에 표시
---

여기에 경험을 자유롭게 작성합니다.
마크다운 문법을 모두 사용할 수 있습니다.

## 프로젝트 A

프로젝트별로 ## 제목이나 --- 구분선으로 나눌 수 있습니다.

**주요 성과**
- API 응답속도 1/6으로 단축
- CI/CD 파이프라인 구축

> 인용문은 테마 색상 배경으로 강조됩니다.

`인라인 코드`도 테마 색상이 적용됩니다.

---

## 프로젝트 B

같은 회사의 다른 프로젝트를 구분선(---)이나 제목(##)으로 나눕니다.
회사 로고는 좌측에 sticky로 고정되어 스크롤을 따라옵니다.
```

**frontmatter 필드:**

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | O | 회사명 또는 서비스명 |
| `subtitle` | X | 한 줄 설명 |
| `period` | O | 기간 (예: `"2023.06 ~ 현재"`) |
| `company` | X | 소속 (예: `회사명 \| 팀명`) |
| `tags` | X | 기술 스택 태그 배열 |
| `logo` | X | 로고 이미지 경로 (public/ 기준) |
| `order` | X | 정렬 순서 (기본값: 99, 낮을수록 먼저) |

#### 프로젝트 (`content/project/`)

경력과 동일한 형식입니다. 사이드 프로젝트나 개인 프로젝트를 별도로 분리하고 싶을 때 사용합니다.

#### 대외활동 (`content/activity/`)

```markdown
<!-- content/activity/hackathon.md -->
---
title: UNITHON 10기
period: "2023"
organization: UNITHON
order: 1
---

서비스 기획 및 백엔드 개발, 인프라 구축 — 대상 수상
```

**frontmatter 필드:**

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | O | 활동명 |
| `period` | O | 기간 |
| `organization` | X | 주최/소속 |
| `order` | X | 정렬 순서 (기본값: 99) |

#### 기술 스택 (`content/skills.md`)

```markdown
---
title: 기술 스택
---

| 분류 | 기술 |
|------|------|
| Language | `Java` `TypeScript` `Python` |
| Framework | `Spring Boot` `FastAPI` |
| Database | `MySQL` `Redis` |
```

테이블이나 리스트 형식으로 자유롭게 작성합니다.

#### 교육 (`content/education.md`)

```markdown
---
title: 교육
---

- **서울대학교** 컴퓨터공학과 학사 (2018.03 ~ 2022.02)
```

#### 자격 & 외국어 (`content/certification.md`)

```markdown
---
title: 자격 & 외국어
---

- **정보처리기사**
- **TOEIC 900**
```

### 4. 이미지 추가

`public/images/` 디렉토리에 이미지를 저장합니다.

```
public/
└── images/
    ├── profile.png        ← 프로필 사진
    ├── company-logo.png   ← 회사/서비스 로고
    └── og-image.png       ← SNS 공유 시 미리보기 이미지
```

- 프로필 사진: 정사각형 권장 (둥글게 잘림)
- 로고: 정사각형 권장, 80x80px 이상
- config.yaml이나 frontmatter에서 `/images/파일명.png`으로 참조

### 5. 로컬 확인

```bash
npm run dev
```

브라우저에서 `http://localhost:4321/md-portfolio/` 로 확인합니다.

### 6. 배포

#### GitHub Pages (자동 배포)

1. GitHub에 레포지토리를 push합니다.

2. GitHub 레포 설정에서 Pages 소스를 변경합니다:
   ```
   Settings → Pages → Source → "GitHub Actions" 선택
   ```

3. `astro.config.mjs`에서 사이트 주소를 수정합니다:
   ```js
   export default defineConfig({
     integrations: [tailwind()],
     site: 'https://USERNAME.github.io',
     base: '/REPO_NAME',
   });
   ```

4. `main` 브랜치에 push하면 자동으로 배포됩니다.

#### 배포 확인

배포 후 `https://USERNAME.github.io/REPO_NAME/` 에서 확인할 수 있습니다.

## 색상 프리셋

config.yaml의 `theme` 값으로 강조 색상을 변경할 수 있습니다.

| 프리셋 | 인라인 코드 | blockquote | 액센트 |
|--------|------------|------------|--------|
| `blue` | 파란 배경 | 연한 파랑 | #3B82F6 |
| `green` | 초록 배경 | 연한 초록 | #22C55E |
| `purple` | 보라 배경 | 연한 보라 | #A855F7 |
| `neutral` | 회색 배경 | 연한 회색 | #6B7280 |

다크모드에서는 자동으로 어두운 톤으로 전환됩니다.

## 섹션 관리

config.yaml의 `sections` 배열로 표시할 섹션과 순서를 제어합니다.

```yaml
# 경력과 기술 스택만 표시
sections:
  - id: work
    title: 경력
  - id: skills
    title: 기술 스택
```

- 배열에 없는 섹션은 표시되지 않습니다.
- 순서를 바꾸면 페이지에서도 순서가 바뀝니다.
- `content/` 디렉토리에 파일이 없는 섹션은 자동으로 숨겨집니다.

사용 가능한 섹션 ID: `work`, `project`, `activity`, `skills`, `education`, `certification`

## 디렉토리 구조

```
md-portfolio/
├── config.yaml              ← 사이트 설정 (이름, 연락처, 섹션, 테마)
├── content/                  ← 마크다운 콘텐츠 (여기만 수정하면 됩니다)
│   ├── work/                 ← 경력 (회사당 1파일)
│   │   └── my-company.md
│   ├── project/              ← 프로젝트 (선택)
│   ├── activity/             ← 대외활동
│   │   └── hackathon.md
│   ├── skills.md             ← 기술 스택
│   ├── education.md          ← 교육
│   └── certification.md      ← 자격 & 외국어
├── public/
│   └── images/               ← 이미지 파일
├── src/                      ← 소스 코드 (수정 불필요)
├── .github/workflows/        ← GitHub Actions 배포 워크플로우
├── astro.config.mjs          ← Astro 설정 (배포 시 site/base 수정)
├── tailwind.config.mjs
├── package.json
└── README.md
```

## AI로 포트폴리오 작성하기

Claude Code, GitHub Copilot 등 AI 도구를 활용하면 포트폴리오 초안을 빠르게 작성할 수 있습니다.

### 사용 방법

1. `docs/` 디렉토리에 참고 자료를 넣습니다 (이력서, 회의록, 메모, 기술 문서 등).

2. AI에게 이 README와 함께 요청합니다:

```
이 프로젝트의 README.md를 읽고, docs/ 디렉토리의 자료를 분석하여
config.yaml과 content/ 디렉토리에 포트폴리오 콘텐츠를 작성해주세요.
```

3. AI가 생성한 초안을 검토하고 수정합니다.

> `docs/` 디렉토리는 .gitignore에 포함되어 있어 배포되지 않습니다.

## 기술 스택

- [Astro](https://astro.build/) — 정적 사이트 생성
- [Tailwind CSS](https://tailwindcss.com/) — 스타일링
- [TypeScript](https://www.typescriptlang.org/) — 타입 안전성

## 라이선스

MIT

---

이 프로젝트는 [Claude Code](https://claude.com/claude-code)로 제작되었습니다.
