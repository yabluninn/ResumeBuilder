import ResumeForm from "./ResumeForm";

import "../../styles/MainPage.css";
import { useState } from "react";
import ResumeWelcome from "./ResumeWelcome";

export default function MainPage() {
  const [isWelcome, setIsWelcome] = useState(true);

  return (
    <div className="page-container">
      {isWelcome ? <ResumeWelcome /> : <ResumeForm />}
    </div>
  );
}
