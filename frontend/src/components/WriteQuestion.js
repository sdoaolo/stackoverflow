import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100vh;
  overflow: hidden;
`;
const TopTitle = styled.h1`
  position: relative;
  left: 260px;
  top: 100px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 300px;
  margin-top: 120px;
  border: solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 250px;
  color: #ffff;
  b {
    position: absolute;
    bottom: 80px;
    margin-right: 750px;
    font-size: 22px;
    color: black;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 60px;
    margin: 0 340px 0 0;
  }
`;

const TitleInput = styled.input`
  position: absolute;
  bottom: 15px;
  margin: 13px 0 0 5px;
  width: 800px;
  height: 30px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 1000px;
  border: solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  left: 250px;
  margin-top: 70px;
  b {
    position: absolute;
    top: 30px;
    left: 55px;
    margin-right: 400px;
    font-size: 22px;
    color: black;
  }
`;
const Body = styled.textarea`
  position: absolute;
  left: 50px;
  width: 800px;
  height: 250px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

const Submitbtn = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;
  left: 50px;
  bottom: 25px;
  border: solid;
  background-color: #4393f7;
  border-color: #8ebefa;
  color: #ffff;
  border-radius: 5px;
  cursor: pointer;
`;

function WriteQuestion() {
  //title,body,redirec
  const [btn, setBtn] = useState(false);

  const ClickBtn = () => {
    setBtn(true);
  };

  const sendQuestion = () => {
    //setRedirect
  };
  return (
    <>
      {/* {redirect={/}} */}
      <TopTitle>Ask a public question</TopTitle>
      <Wrap onSubmit={(e) => sendQuestion(e)}>
        <TitleContainer>
          <b>Title</b>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <TitleInput placeholder="  Title..." />
        </TitleContainer>

        <BodyContainer>
          <b>What are the details of your problem?</b>
          <p>Introduce the problem and expand on what you put in the title.</p>
          <Body
            placeholder="  Introduce the problem and expand on what you put in the title "
            onClick={ClickBtn}
          />
          {btn === false ? "" : <Submitbtn type={"submit"}>Submit</Submitbtn>}
        </BodyContainer>
      </Wrap>
    </>
  );
}

export default WriteQuestion;
