import React, { Component } from "react";
import styled, { css } from "styled-components";

class App extends Component {
  state = {
    inputText: ""
  };

  render() {
    const { inputText } = this.state;
    return (
      <MainContainer>
        <TextArea value={inputText} onChange={this._onHandleInputText} />
        <ChangeButton onClick={this._checkGrammar}>맞춤법 검사</ChangeButton>
        <Result>{inputText}</Result>
      </MainContainer>
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TextArea = styled.textarea`
  ${inputAndResult}
  width: 200px;
  height: 100px;
`;

const Result = styled.div`
  width: 200px;
  height: 100px;
  ${inputAndResult}
  border: 1px black solid;
`;

const ChangeButton = styled.button`
  display: flex;
  width: 68px;
  height: 30px;
`;

const inputAndResult = css`
  width: 200px;
  height: 100px;
`;
