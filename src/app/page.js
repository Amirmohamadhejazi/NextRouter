// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import Link from "next/link";

export default function Page() {
    return <>



        <section className=" flex flex-col">
            <nav className="text-lg flex gap-5  justify-center item-center my-5 mx-6 p-4 rounded-lg bg-blue-200">
                <Link href="/dashboard">dashboard</Link>
            </nav>

            <div className="flex justify-center">
                <h1>Hello, home Page!</h1>
            </div>

        </section>
    </>
}