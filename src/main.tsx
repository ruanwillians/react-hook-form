import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormHookForm from "./FormHookForm";
import FormState from "./FormState";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormHookForm />
    {/* <FormState /> */}
  </React.StrictMode>
);
