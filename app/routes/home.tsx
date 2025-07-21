import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('images/bg-main.svg')]">
    
    <Navbar/>

   <section className="main-section">
    <div className="page-heading">
<h1>Track Your Application & Resume Rating</h1>
<h2>Review Your Submission and ai powered feedback</h2>
    </div>
   </section>


  </main>;
}
