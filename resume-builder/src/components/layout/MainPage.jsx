import "../../styles/MainPage.css";
import PageHeader from "./PageHeader";
// import { useState } from "react";

export default function MainPage() {
  // const [isWelcome, setIsWelcome] = useState(false);

  return (
    <div className="page-container">
      <PageHeader />
      {/* {isWelcome ? <ResumeWelcome /> : <ResumeForm />} */}
    </div>
  );
}
