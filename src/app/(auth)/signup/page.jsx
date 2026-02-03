import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="flex min-h-screen bg-white">
            {/* LEFT SIDE: FORM */}
            <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 lg:px-20 xl:px-32">
                <div className="mx-auto w-full max-w-sm">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-blue-700 mb-10">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-12 flex items-center justify-center text-white text-sm italic">F</div>
                        FreshMart
                    </Link>

                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Create an account</h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 underline-offset-4 hover:underline">
                            Log in here
                        </Link>
                    </p>

                    <form className="mt-10 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">First Name</label>
                                <input type="text" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Last Name</label>
                                <input type="text" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all" placeholder="name@company.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700">Password</label>
                            <input type="password" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" />
                        </div>

                        <button type="submit" className="flex w-full justify-center rounded-xl bg-blue-600 px-4 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE */}
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                    alt="Fresh groceries"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex flex-col justify-end p-20">
                    <blockquote className="text-white">
                        <p className="text-2xl font-medium italic">"The freshest produce I've ever had delivered."</p>
                        <footer className="mt-4 text-lg font-bold">— Sarah J., Lagos</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}