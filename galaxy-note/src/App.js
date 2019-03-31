import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import cheerio from "cheerio";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class App extends Component {
  statusTextColor = [];

  state = {
    inputText: ""
  };

  render() {
    const { inputText } = this.state;
    return (
      <Fragment>
        <Title>상훈이의 맞춤법 검사기</Title>
        <MainContainer>
          <InputContainer>
            <TextArea value={inputText} onChange={this._onHandleInputText} />
            <InputStatus>{inputText.length}/500</InputStatus>
          </InputContainer>
          <ChangeButton onClick={this._checkGrammar}>검사</ChangeButton>
          <ResultContainer>
            <TextArea
              value={inputText}
              onChange={this._onHandleInputText}
              readOnly={true}
            />
            <ResultStatusBox>
              <dl style={{ marginRight: "10px" }}>
                <ResultStatusOneLine>
                  <ResultStatusCircle color="red" /> 맞춤법
                </ResultStatusOneLine>
                <ResultStatusOneLine>
                  <ResultStatusCircle color="green" /> 띄어쓰기
                </ResultStatusOneLine>
              </dl>
              <dl>
                <ResultStatusOneLine>
                  <ResultStatusCircle color="skyblue" /> 통계적 교정
                </ResultStatusOneLine>
                <ResultStatusOneLine>
                  <ResultStatusCircle color="purple" /> 표준어 의심
                </ResultStatusOneLine>
              </dl>
            </ResultStatusBox>
          </ResultContainer>
        </MainContainer>
      </Fragment>
    );
  }

  _onHandleInputText = e => {
    const { value } = e.target;
    if (value.length <= 500) this.setState({ inputText: e.target.value });
    else alert("글자 수는 500글자가 최대입니다.");
  };

  _checkGrammar = () => {
    const window = new JSDOM("", {
      url:
        "https://search.naver.com/search.naver?sm=top_sug.pre&fbm=1&acr=1&acq=%EB%A7%9E%EC%B6%A4%EB%B2%95&qdt=0&ie=utf8&query=%EB%A7%9E%EC%B6%A4%EB%B2%95%EA%B2%80%EC%82%AC%EA%B8%B0"
    }).window;
    console.log(window.document.body.innerHTML);

    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://search.naver.com/search.naver?sm=top_sug.pre&fbm=1&acr=1&acq=%EB%A7%9E%EC%B6%A4%EB%B2%95&qdt=0&ie=utf8&query=%EB%A7%9E%EC%B6%A4%EB%B2%95%EA%B2%80%EC%82%AC%EA%B8%B0"
    // )
    //   .then(res => res.text())
    //   .then(html => {
    //     const window = new JSDOM(`${html}`, { runScripts: "outside-only" })
    //       .window;
    //     console.log(window.document.getElementsByTagName("textarea")[0].value);
    //     console.log(
    //       window.document.getElementsByTagName("textarea")[0].className
    //     );
    //     window.document.getElementsByTagName(
    //       "textarea"
    //     )[0].value = this.state.inputText;
    //     console.log(window.document.getElementsByTagName("textarea")[0].value);
    //     console.log(
    //       window.document.getElementsByTagName("textarea")[0].className
    //     );
    //     // console.log(
    //     //   window.document.getElementsByClassName("_result_text")[0].innerHTML
    //     // );
    //   });
  };
}

export default App;

const MainContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultStatusBox = styled.div`
  display: flex;
  flex-direction: row;
  color: rgb(157, 163, 164);
`;

const ResultStatusCircle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin-top: 3px;
`;

const ResultStatusOneLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputStatus = styled.p`
  color: rgb(134, 139, 147);
  font-size: 15px;
`;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
  color: rgb(173, 178, 179);
`;

const TextArea = styled.textarea`
  width: 250px;
  height: 140px;
  resize: none;
  background-color: rgb(38, 41, 43);
  color: rgb(232, 235, 236);
  font-size: 20px;
`;

const ChangeButton = styled.button`
  width: 50px;
  height: 30px;
  margin-top: 50px;
  background-color: rgb(38, 41, 43);
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;
