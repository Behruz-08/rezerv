import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext";
import { PostsContextProvider } from "./context/PostsContext";
import { ChatContextProvider } from "./context/ChatContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <PostsContextProvider>
      <ChatContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChatContextProvider>
    </PostsContextProvider>
  </AuthContextProvider>
);
