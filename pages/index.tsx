import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import toast, { Toaster } from "react-hot-toast";

const IndexPage = () => (
  <div className="lg:max-w-6xl mx-auto h-screen overflow-hidden">
    <Head>
      <title>Twitter clone</title>
    </Head>
    <Toaster />
    <main className="grid grid-cols-9">
      <Sidebar />
      <Feed />
      <Widget />
    </main>
  </div>
);

export default IndexPage;
