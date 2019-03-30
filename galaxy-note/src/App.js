import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";

class App extends Component {
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
          <ChangeButton onClick={this._checkGrammar}>맞춤법 검사</ChangeButton>
          <TextArea
            value={inputText}
            onChange={this._onHandleInputText}
            readOnly={true}
          />
        </MainContainer>
      </Fragment>
    );
  }

  _onHandleInputText = e => {
    this.setState({ inputText: e.target.value });
  };

  _checkGrammar = () => {
    console.log("huihi");
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

const InputStatus = styled.p`
  color: rgb(134, 139, 147);
  font-size: 15px;
`;

const Title = styled.h1`
  /* padding-top: 20px; */
  margin-left: 20px;
  font-weight: bold;
  color: rgb(173, 178, 179);
`;

const TextArea = styled.textarea`
  width: 250px;
  height: 140px;
  resize: none;
  ${inputAndResult}
  background-color:rgb(38, 41, 43);
  color: rgb(232, 235, 236);
  font-size: 20px;
`;

const ChangeButton = styled.button`
  display: flex;
  width: 68px;
  height: 30px;
  margin-top: 50px;
`;

const inputAndResult = css`
  width: 200px;
  height: 100px;
`;
