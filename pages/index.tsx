import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../comps/nav";
import Offline from "../public/offline.gif";
const Home: NextPage = () => {
  return (
    <Nav>
      <main className="flex justify-center items-center flex-col">
        <h3 className="font-bold text-center max-w-xl">
          We are very sorry. We are under maintence. <br /> Please come back at
          a later time <br /> {"(*_ _)人"}
        </h3>
        <div className="max-w-2xl">
          <Image src={Offline} className="max-h-1" alt="offline gif" />
        </div>
      </main>
    </Nav>
  );
};

export default Home;
