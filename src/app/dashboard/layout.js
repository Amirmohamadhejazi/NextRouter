import Link from 'next/link';

export const metadata = {
    title: 'Amir Dashboard',
    description: 'Dashboard',
}
export default function DashboardLayout({ children,}) {
    return (
        <section className="flex flex-col">
            <nav className="text-lg flex gap-5  justify-center item-center my-5 mx-6 p-4 rounded-lg bg-blue-200">
                <Link href="/">home</Link>
                <Link href="/dashboard/edit">edit</Link>
                <Link href="/dashboard/setting">setting</Link>
            </nav>


            <div className="flex justify-center">
                {children}
            </div>

        </section>
    );
}