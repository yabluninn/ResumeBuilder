import "../../styles/MainPage.css";
import PageHeader from "./PageHeader";
import SectionForm from "./sections/SectionForm";
// import { useState } from "react";

export default function MainPage() {
  // const [isWelcome, setIsWelcome] = useState(false);

  return (
    <div className="page-container">
      <PageHeader />
      <SectionForm />
      {/* {isWelcome ? <ResumeWelcome /> : <ResumeForm />} */}
    </div>
  );
}
