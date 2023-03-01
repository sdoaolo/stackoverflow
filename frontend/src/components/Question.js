import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DisplayQ from "./Qustions/DisplayQ";
import DisplayA from "./Qustions/DisplayA";
import WriteAns from "./Qustions/WriteAns";
import { useParams } from "react-router-dom";

const Container = styled.div`
  position: relative;
  left: 280px;
  display: flex;
  flex-direction: column;
  width: 68%;
  margin-top: 70px;
  margin: 0;
  padding: 30px;
`;

function Question() {
  const { id } = useParams();

  const userId = localStorage.getItem("key");

  const [list, setList] = useState();
  const [update, setUpdate] = useState("");
  const [editUpdate, setEditUpdate] = useState("");

  const readData = async () => {
    const { data } = await axios.get(`/questions/${id}`);
    setList([data.data]);
  };

  useEffect(() => {
    (async () => {
      await readData();
    })();
    setUpdate("");
    setEditUpdate("");
  }, [update, editUpdate]);

  return (
    <Container>
      <DisplayQ list={list} />
      <DisplayA list={list} setEditUpdate={setEditUpdate} />
      <WriteAns id={id} setUpdate={setUpdate} userId={userId} />
    </Container>
  );
}

export default Question;
