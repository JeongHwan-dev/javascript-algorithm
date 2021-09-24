<div align="center">
  <br />
  <img src="./readme_assets/js-algorithm_logo.jpg" alt="JS Algorithm" width="300px" />
  <br />
  <h1>자바스크립트 알고리즘 문제풀이</h1>
  <br />
</div>

## 목차

1. [**기본문제 풀이**](#1)
2. [**1, 2차원 배열 탐색**](#2)
3. [**문자열 탐색**](#3)
4. [**완전탐색(블루투포스)**](#4)
5. [**효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)**](#5)
6. [**자료구조(스택, 큐)**](#6)
7. [**정렬과 그리디, 결정알고리즘(이분검색)**](#7)
8. [**재귀함수와 완전탐색(DFS:깊이우선탐색)**](#8)
9. [**그래프와 탐색(DFS, BFS:넓이 우선탐색)**](#9)
10. [**Dynamic programming(동적계획법)**](#10)

<br />

> 자바스크립트 알고리즘 문제 풀이 일정  
> 1차 풀이 (2021.07.29. ~ 2021.09.21.)  
> 2차 풀이 (2021.09.22. ~ ing)

<br />

<div id="1"></div>

## 기본문제 풀이

| 번호 |       문제       |                                       JS 풀이 코드                                        | 1차 풀이 | 2차 풀이 |
| :--: | :--------------: | :---------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 세 수 중 최소값  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol01.js) |  07.29.  |  09.22.  |
|  2   | 삼각형 판별하기  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol02.js) |  07.29.  |  09.22.  |
|  3   |    연필 개수     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol03.js) |  08.01.  |  09.22.  |
|  4   | 1부터 N까지의 합 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol04.js) |  08.01.  |  09.22.  |
|  5   |  최소값 구하기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol05.js) |  08.05.  |  09.22.  |
|  6   |       홀수       | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol06.js) |  08.07.  |  09.23.  |
|  7   |      10부제      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol07.js) |  08.08.  |  09.23.  |
|  8   |    일곱난쟁이    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol08.js) |  08.09.  |  09.23.  |
|  9   |    A를 #으로     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol09.js) |  08.10.  |  09.23.  |
|  10  |    문자 찾기     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol10.js) |  08.11.  |  09.23.  |
|  11  |   대문자 찾기    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol11.js) |  08.12.  |  09.23.  |
|  12  |   대문자 통일    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol12.js) |  08.13.  |  09.23.  |
|  13  |  대소문자 변환   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol13.js) |  08.16.  |  09.24.  |
|  14  |  가장 긴 문자열  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol14.js) |  08.16.  |  09.24.  |
|  15  | 가운데 문자 출력 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol15.js) |  08.17.  |  09.24.  |
|  16  |  중복 문자 제거  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol16.js) |  08.18.  |  09.24.  |
|  17  |  중복 단어 제거  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol17.js) |  08.18.  |  09.24   |

<br />

<div id="2"></div>

## 1, 2차원 배열 탐색

| 번호 |      문제      |                                       JS 풀이 코드                                        | 1차 풀이 | 2차 풀이 |
| :--: | :------------: | :---------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 큰 수 출력하기 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol17.js) |  08.19.  |    -     |
|  2   |  보이는 학생   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol18.js) |  08.19.  |    -     |
|  3   |   가위바위보   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol19.js) |  08.19.  |    -     |
|  4   |   점수 계산    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol20.js) |  08.19.  |    -     |
|  5   |  등수 구하기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol21.js) |  08.19.  |    -     |
|  6   | 격자판 최대합  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol22.js) |  08.19.  |    -     |
|  7   |     봉우리     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol23.js) |  08.20.  |    -     |

<br />

<div id="3"></div>

## 문자열 탐색

| 번호 |        문제        |                                        JS 풀이 코드                                        | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |     회문문자열     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol24.js) |  08.21.  |    -     |
|  2   |  유효한 팰린드롬   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol25.js) |  08.22.  |    -     |
|  3   |    숫자만 추출     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol26.js) |  08.23.  |    -     |
|  4   | 가장 짧은 문자거리 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol27.js) |  08.24.  |    -     |
|  5   |    문자열 압축     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol28.js) |  08.24.  |    -     |

<br />

<div id="4"></div>

## 완전탐색(블루투포스)

| 번호 |    문제     |                                          JS 풀이 코드                                          | 1차 풀이 | 2차 풀이 |
| :--: | :---------: | :--------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 회문문자열  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol29.js) |  08.25.  |    -     |
|  2   | 뒤집은 소수 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol30.js) |  08.26.  |    -     |
|  3   |   멘토링    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol31.js) |  08.27.  |    -     |
|  4   |  졸업선물   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol32.js) |  08.28.  |    -     |
|  5   | K번째 큰 수 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol33.js) |  08.30.  |    -     |

<br />

<div id="5"></div>

## 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| 번호 |        문제        |                                          JS 풀이 코드                                          | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :--------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |   두 배열 합치기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol34.js) |  08.31.  |    -     |
|  2   |  공통원소 구하기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol35.js) |  08.31.  |    -     |
|  3   |   연속부분수열1    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol36.js) |  09.02.  |    -     |
|  4   |   연속부분수열2    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol37.js) |  09.03.  |    -     |
|  5   |     최대 매출      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol38.js) |  09.04.  |    -     |
|  6   |     학급 회장      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol39.js) |  09.05.  |    -     |
|  7   |      아나그램      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol40.js) |  09.05.  |    -     |
|  8   | 모든 아나그램 찾기 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol41.js) |  09.06.  |    -     |

<br />

<div id="6"></div>

## 자료구조(스택, 큐)

| 번호 |        문제         |                                          JS 풀이 코드                                           | 1차 풀이 | 2차 풀이 |
| :--: | :-----------------: | :---------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |     올바른 괄호     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol42.js) |  09.06.  |    -     |
|  2   |   괄호 문자 제거    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol43.js) |  09.07.  |    -     |
|  3   |   크레인 인형뽑기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol44.js) |  09.07.  |    -     |
|  4   | 후위식(postfix)연산 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol45.js) |  09.07.  |    -     |
|  5   |      쇠막대기       | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol46.js) |  09.08.  |    -     |
|  6   |     공주구하기      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol47.js) |  09.08.  |    -     |
|  7   |    교육과정설계     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol48.js) |  09.10.  |    -     |

<br />

<div id="7"></div>

## 정렬과 그리디, 결정알고리즘(이분검색)

| 번호 |            문제            |                                           JS 풀이 코드                                            | 1차 풀이 | 2차 풀이 |
| :--: | :------------------------: | :-----------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |          선택정렬          | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol49.js) |  09.11.  |    -     |
|  2   |          버블정렬          | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol50.js) |  09.12.  |    -     |
|  3   | Special Sort(버블정렬응용) | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol51.js) |  09.12.  |    -     |
|  4   |          삽입정렬          | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol52.js) |  09.13.  |    -     |
|  5   |       LRU(캐시 변형)       | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol53.js) |  09.13.  |    -     |
|  6   |      장난꾸러기 현수       | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol54.js) |  09.13.  |    -     |
|  7   |         좌표 정렬          | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol55.js) |  09.13.  |    -     |
|  8   |        회의실 배정         | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol56.js) |  09.14.  |    -     |
|  9   |           결혼식           | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol57.js) |  09.14.  |    -     |
|  10  |          이분검색          | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol58.js) |  09.14.  |    -     |
|  11  |         뮤직비디오         | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol59.js) |  09.15.  |    -     |
|  12  |       마구간 정하기        | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/07-selectionSort/sol60.js) |  09.16.  |    -     |

<br />

<div id="8"></div>

## 재귀함수와 완전탐색(DFS:깊이우선탐색)

| 번호 |         문제          |                                           JS 풀이 코드                                            | 1차 풀이 | 2차 풀이 |
| :--: | :-------------------: | :-----------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 재귀함수와 스택프레임 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol61.js) |  09.17.  |    -     |
|  2   |      이진수 출력      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol62.js) |  09.17.  |    -     |
|  3   |    이진 트리 순회     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol63.js) |  09.17.  |    -     |
|  4   |    부분집합 구하기    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol64.js) |  09.17.  |    -     |
|  5   |  합이 같은 부분집합   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol65.js) |  09.17.  |    -     |
|  6   |      바둑이 승차      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol66.js) |  09.17.  |    -     |
|  7   |   최대 점수 구하기    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol67.js) |  09.17.  |    -     |
|  8   |       중복순열        | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol68.js) |  09.19.  |    -     |
|  9   |       동전교환        | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol69.js) |  09.19.  |    -     |
|  10  |      순열 구하기      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol70.js) |  09.19.  |    -     |
|  11  |       팩토리얼        | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol71.js) |  09.19.  |    -     |
|  12  | 조합수(메모이제이션)  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol72.js) |  09.19.  |    -     |
|  13  |     순열 추측하기     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol73.js) |  09.19.  |    -     |
|  14  |      조합 구하기      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol74.js) |  09.19.  |    -     |
|  15  |      수들의 조합      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/08-recursive&DFS/sol75.js) |  09.19.  |    -     |

<br />

<div id="9"></div>

## 그래프와 탐색(DFS, BFS:넓이 우선탐색)

| 번호 |           문제           |                                           JS 풀이 코드                                           | 1차 풀이 | 2차 풀이 |
| :--: | :----------------------: | :----------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |  경로탐색(DFS-인접행렬)  | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/09-graph&search/sol76.js) |  09.19.  |    -     |
|  2   | 경로탐색(DFS-인접리스트) | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/09-graph&search/sol77.js) |  09.20.  |    -     |
|  3   |         미로탐색         | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/09-graph&search/sol78.js) |  09.20.  |    -     |
|  4   |       송아지 찾기        | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/09-graph&search/sol79.js) |  09.20.  |    -     |
|  5   |     섬나라 아일랜드      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/09-graph&search/sol79.js) |  09.21.  |    -     |

<br />

<div id="10"></div>

## Dynamic programming(동적계획법)

| 번호 |        문제        |                                              JS 풀이 코드                                              | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |    계단 오르기     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/10-DynamicProgramming/sol81.js) |  09.21.  |    -     |
|  2   |   돌다리 건너기    | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/10-DynamicProgramming/sol82.js) |  09.21.  |    -     |
|  3   | 최대 부분 증가수열 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/10-DynamicProgramming/sol83.js) |  09.21.  |    -     |
|  4   |      동전교환      | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/10-DynamicProgramming/sol84.js) |  09.21.  |    -     |
|  5   |  최대점수 구하기   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/10-DynamicProgramming/sol85.js) |  09.21.  |    -     |
