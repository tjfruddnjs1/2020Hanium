/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const ExplanationScreen = () => {
  // var RNFS = require('react-native-fs');
  // const title = RNFS.readFile('./Problem/1/1_Title.txt', 'utf8');
  return (
    <ScrollView style={styles.container}>
      {/* <Text>
        {RNFS.readFile('./Problem/1/1_Title.txt', 'utf8')}
      </Text>    */}
      <Text style={styles.textBody}>다음 순서도는 4부터 1000까지 정수 중 이러한 약수를 갖는 수를 찾아 출력하고, 또한 그 개수를 구하여 출력하는 알고리즘이다.
      순서도의 괄호 안 내용 (1)~(5)에 가장 적합한 내용을 기입하시오.
      </Text>
      <Text style={styles.textBody}>
        {`조건: 약수 중 가장 큰 수는 그 수를 2로 나눈 것보다 같거나 작다. 짝수의 경우 자신을 제외한 제일 큰 약수는 2를 나눈 값이다.

<사용 변수 설명>
 - LM :  완전수의 개수
 - N : 임의의 정수
 - J : 약수를 담을 변수
 - R : 임의의 정수를 N/2 이하의 수로 나눈 나머지
 - K : 어떤 수의 최대의 약수
 - SUM : 약수의 합

INT( N/ 2 ) : N을 2로 나누고 소수점 아래를 버림한 결과이다. 

MOD(N,J) : N 을 J로 나눈 나머지

약수는 어떤 수를 나누어떨어지게 하는 수를 말한다`}</Text>
      <Text style={styles.subTitle}>순서도</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} >문제 풀러 가기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: '#36485f'
  },
  subTitle: {
    color: '#33E9FF',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  textBody: {
    color: 'white',
    fontSize: 20,
    marginBottom: 40
  },
  button: {
    alignItems: "center",
    backgroundColor: "#33E9FF",
    margin: 10
  },
  buttonText: {
    color: 'white',
    margin: 10,
  },
  image: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

});
export default ExplanationScreen;
