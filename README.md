<div align="center">
  <br />
  <img src="./img/js-algorithm_logo.jpg" alt="JS Algorithm" width="300px" />
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

> 자바스크립트 알고리즘 문제 풀이 일정 (2021.07.29. ~ ing)

<br />

<div id="1"></div>

## 기본문제 풀이

| 번호 |                                                            문제                                                            | 풀이 날짜 |
| :--: | :------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |           [세 수 중 최소값](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol01.js)           |  07.29.   |
|  2   |           [삼각형 판별하기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol02.js)           |  07.29.   |
|  3   |              [연필개수](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol03.js)               |  08.01.   |
|  4   |          [1부터 N까지의 합](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol04.js)           |  08.01.   |
|  5   |            [최소값 구하기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol05.js)            |  08.05.   |
|  6   |                [홀수](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol06.js)                 |  08.07.   |
|  7   |               [10부제](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol07.js)                |  08.08.   |
|  8   |             [일곱난쟁이](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol08.js)              |  08.09.   |
|  9   |              [A를 #으로](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol09.js)              |  08.10.   |
|  10  |              [문자 찾기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol10.js)              |  08.11.   |
|  11  |             [대문자 찾기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol11.js)             |  08.12.   |
|  12  |             [대문자 통일](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol12.js)             |  08.13.   |
|  13  |           [가장 긴 문자열](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol13.js)            |  08.16.   |
|  14  | [가운데 문자 출력(substring, substr)](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol14.js) |  08.17.   |
|  15  |        [중복문자제거(indexOf)](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol15.js)        |  08.18.   |
|  16  |            [중복단어제거](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/01-basic/sol16.js)             |  08.18.   |

<br />

<div id="2"></div>

## 1, 2차원 배열 탐색

| 번호 |                                                 문제                                                  | 풀이 날짜 |
| :--: | :---------------------------------------------------------------------------------------------------: | :-------: |
|  1   | [큰 수 출력하기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol17.js) |  08.19.   |
|  2   |  [보이는 학생](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol18.js)   |  08.19.   |
|  3   |   [가위바위보](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol19.js)   |  08.19.   |
|  4   |   [점수 계산](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol20.js)    |  08.19.   |
|  5   |  [등수 구하기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol21.js)   |  08.19.   |
|  6   | [격자판 최대합](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol22.js)  |  08.19.   |
|  7   |     [봉우리](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/02-array/sol23.js)     |  08.20.   |

<br />

<div id="3"></div>

## 문자열 탐색

| 번호 |                                                    문제                                                    | 풀이 날짜 |
| :--: | :--------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |     [회문문자열](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol24.js)     |  08.21.   |
|  2   |  [유효한 팰린드롬](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol25.js)   |  08.22.   |
|  3   |    [숫자만 추출](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol26.js)     |  08.23.   |
|  4   | [가장 짧은 문자거리](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol27.js) |  08.24.   |
|  5   |    [문자열 압축](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol28.js)     |  08.24.   |

<br />

<div id="4"></div>

## 완전탐색(블루투포스)

| 번호 |                                                  문제                                                   | 풀이 날짜 |
| :--: | :-----------------------------------------------------------------------------------------------------: | :-------: |
|  1   | [회문문자열](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol29.js)  |  08.25.   |
|  2   | [뒤집은 소수](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol30.js) |  08.26.   |
|  3   |   [멘토링](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol31.js)    |  08.27.   |
|  4   |  [졸업선물](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol32.js)   |  08.28.   |
|  5   | [K번째 큰 수](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/04-fullSearch/sol33.js) |  08.30.   |

<br />

<div id="5"></div>

## 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| 번호 |                                                      문제                                                      | 풀이 날짜 |
| :--: | :------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |   [두 배열 합치기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol34.js)   |  08.31.   |
|  2   |  [공통원소 구하기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol35.js)   |  08.31.   |
|  3   |   [연속부분수열1](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol36.js)    |  09.02.   |
|  4   |   [연속부분수열2](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol37.js)    |  09.03.   |
|  5   |     [최대 매출](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol38.js)      |  09.04.   |
|  6   |     [학급 회장](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol39.js)      |  09.05.   |
|  7   |      [아나그램](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol40.js)      |  09.05.   |
|  8   | [모든 아나그램 찾기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/05-efficiency/sol41.js) |  09.06.   |

<br />

<div id="6"></div>

## 자료구조(스택, 큐)

| 번호 |                                                       문제                                                       | 풀이 날짜 |
| :--: | :--------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |     [올바른 괄호](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol42.js)     |  09.06.   |
|  2   |   [괄호 문자 제거](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol43.js)    |  09.07.   |
|  3   |   [크레인 인형뽑기](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol44.js)   |  09.07.   |
|  4   | [후위식(postfix)연산](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/06-stack&queue/sol45.js) |  09.07.   |
