import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-white">
            {/* --- LEFT SIDE: THE FORM (Animated) --- */}
            <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 lg:px-20 xl:px-32 animate-in fade-in slide-in-from-left duration-700">
                <div className="mx-auto w-full max-w-sm">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-blue-700 mb-10 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-12 flex items-center justify-center text-white text-sm italic">F</div>
                        FreshMart
                    </Link>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Welcome back</h2>
                        <p className="text-sm text-slate-500">
                            New to FreshMart?{" "}
                            <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 underline-offset-4 hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>

                    <form className="mt-10 space-y-5">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input
                                type="email"
                                className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                placeholder="name@company.com"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium text-slate-700">Password</label>
                                <Link href="#" className="text-xs font-semibold text-blue-600 hover:underline">Forgot password?</Link>
                            </div>
                            <input
                                type="password"
                                className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-slate-600">Remember me for 30 days</label>
                        </div>

                        <button type="submit" className="flex w-full justify-center rounded-xl bg-blue-600 px-4 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200">
                            Sign In
                        </button>
                    </form>

                    {/* Social Login Separator */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Or continue with</span></div>
                    </div>

                    <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-all">
                        <img src="https://www.svgrepo.com/show/475656/google.svg" className="h-5 w-5" alt="Google" />
                        Google
                    </button>
                </div>
            </div>

            {/* --- RIGHT SIDE: THE IMAGE (Animated) --- */}
            <div className="relative hidden w-0 flex-1 lg:block overflow-hidden">
                <img
                    className="absolute inset-0 h-full w-full object-cover animate-in fade-in zoom-in duration-1000"
                    src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1974&auto=format&fit=crop"
                    alt="Modern supermarket aisle"
                />
                {/* Blue Overlay Layer */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex flex-col justify-end p-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                    <div className="max-w-md">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
                    Member Benefit
                </span>
                        <h3 className="text-4xl font-bold text-white leading-tight">Fastest delivery, <br/> Guaranteed quality.</h3>
                        <p className="mt-4 text-blue-100/80 text-lg">Join 10,000+ families getting fresh groceries delivered daily to their doorstep.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}