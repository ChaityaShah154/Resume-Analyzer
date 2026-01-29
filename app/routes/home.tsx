import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "AI analyzer for your resume" },
  ];
}

export default function Home() {
  return <Welcome />;
}
