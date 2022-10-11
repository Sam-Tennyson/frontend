import qa_promise_await from "./qa_async_await";
import qa_callback from "./qa_callback";
import qa_promise from "./qa_promises";
import qa_VLC from "./qa_VLC";

export const data = [
  {
    attributes: {
      Route: "/var-let-const",
      Title: "Var, Let and Const Javascript",
      Content: qa_VLC,
      Description: "Foundation of Javascript",
    },
  },
  {
    attributes: {
      Route: "/promises",
      Title: "Promises",
      Content: qa_promise,
      Description: "Comes Under Category of Asynchronous Javascript",
    },
  },
  {
    attributes: {
      Route: "/async-await",
      Title: "Async and await",
      Content: qa_promise_await,
      Description:
        "Build on top of promises and give use power to write asynchronous code  that more looks looks like synchronous code",
    },
  },
  {
    attributes: {
      Route: "/callback",
      Title: "Callback in javascript",
      Content: qa_callback,
      Description:
        " Callback function is that you can wait for the result of a previous function call and then execute another function call.",
    },
  },
 
];
