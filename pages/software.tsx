import Nav from "../comps/nav";

/* eslint-disable @next/next/no-img-element */
export default function SoftwarePage() {
  return (
    <Nav>
      <main className="my-7 flex justify-center items-center">
        <div className="flex items-center flex-col sm:flex-row ">
          <h3 className="mr-7 text-center text-md sm:text-sm max-w-md">
            <a
              href="https://sfs.unnamedsoftware.com"
              className="underline font-medium hover:font-bold hover:no-underline"
            >
              SFS
            </a>
            <br />
            SFS is a {"Static File Sever"} or S.F.S for sort.Its based on a
            opensource docker image running go for the backend on a openSuse
            linux-64x server.
          </h3>
          <a href="https://sfs.unnamedsoftware.com">
            <img
              src="/sfs.unnamedsoftware.png"
              className="md:max-w-lg lg:max-w-lg sm:max-w-none md:w-auto sm:w-1"
              alt="sfs"
            />
          </a>
        </div>
      </main>
    </Nav>
  );
}
