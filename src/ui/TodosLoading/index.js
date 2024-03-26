import React from "react";
//import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//import Stack from '@mui/material/Stack';
import "./TodosLoading.css"

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading }; // Export nombrados
