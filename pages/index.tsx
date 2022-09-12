import Head from "next/head";
import { SVGProps } from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const IndexPage = () => (
  <div className="bg-black h-screen overflow-hidden font-sans">
    <Head>
      <title>spotify clone</title>
    </Head>
    {/* sidebar */}
    <Sidebar />
  </div>
);

export default IndexPage;
