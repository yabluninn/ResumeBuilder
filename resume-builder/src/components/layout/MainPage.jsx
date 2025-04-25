import "../../styles/MainPage.css";
import PageHeader from "./PageHeader";
import SectionForm from "./sections/SectionForm";

export default function MainPage() {
  return (
    <div className="page-container">
      <PageHeader />
      <SectionForm />
    </div>
  );
}
