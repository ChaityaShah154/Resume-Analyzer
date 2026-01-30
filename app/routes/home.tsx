import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "AI analyzer for your resume" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main-1.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Welcome to CVision</h1>
        <h2>Track your application and check AI - Powered feedback</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}

  </main>
}
