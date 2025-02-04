import React, { useEffect, useRef, useState } from "react";

// import cardData from "../../../db.json";
import Card_item from "./card-item";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Card = () => {
  let [data, setData] = useState([]);
  // //   let ref = useRef();
  let [starts, setStart] = useState("");
  let [ends, setEnd] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  let fetchFunc = async () => {
    let data = await axios({
      url: "http://localhost:5000/product",
      headers: { "Content-Type": "application/json" },
      params: {
        _start: starts,
        _end: ends,
      },
    });
    return await data.data;
  };

  let start = (e) => {
    setStart(e.target.value);
  };
  let end = (e) => {
    setEnd(e.target.value);
  };
  // console.log(searchParams.get("_start"));

  // console.log(data);
  useEffect(() => {
    if (starts.trim !== "" && ends.trim !== "") {
      setSearchParams({ _start: starts, _end: ends });
    }

    fetchFunc().then((data) => setData(data));
  }, [starts, ends]);
  // console.log(data.product);

  return (
    <div className="flex gap-5 flex-row  ">
      <div className="w-[20%] ">
        <div className="flex items-center justify-center gap-5">
          <div className="px-5 py-2 bg-amber-100 rounded-lg">  {starts} dan </div>
          <div className="px-5 py-2 bg-amber-100 rounded-lg">{ends} gacha</div>
        </div>
        <input onChange={(e) => start(e)} max={100} type="range" />
        <input onChange={(e) => end(e)} max={100} type="range" />
      </div>
      <div className="w-[80%] grid grid-cols-4 gap-5 ">
        {data?.map((value) => (
          <Card_item {...value} key={value.id} />
        ))}
      </div>
      <button></button>
    </div>
  );
};

export default Card;
