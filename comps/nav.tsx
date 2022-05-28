import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav(props: any) {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <>
      <nav className="flex flex-row justify-center items-center border-b-2 shadow-md tw-border-solid border-gray-500/25  mb-2 p-3">
        <Head>
          <title>UnnamedSoftware</title>
          <meta name="description" content="UnnamedSoftware official website" />
          <link rel="icon" href="/tyler.jpeg" />
        </Head>
        <Link href="/">
          <a className={`${router.pathname === "/" ? "font-bold" : ""}`}>
            Unnamed
          </a>
        </Link>
        |
        <Link href="/software">
          <a
            className={` ${router.pathname === "/software" ? "font-bold" : ""}`}
          >
            Software
          </a>
        </Link>
      </nav>
      {props.children}
    </>
  );
}
