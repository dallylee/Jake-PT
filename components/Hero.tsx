import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Hero() {
    return (
        <SectionWrapper className="section-gradient soft-grid pt-32 md:pt-40 pb-20 md:pb-28 border-white/10">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" aria-hidden />
            <div className="absolute -right-16 bottom-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" aria-hidden />

            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
                <div className="space-y-6 animate-[slideReveal_0.8s_ease-out]"><span className="inline-flex items-center gap-3 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-orange-200 shadow-inner shadow-orange-500/20">Personal trainer at PureGym London Aldgate</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                        Stronger, leaner, more confident at PureGym Aldgate.
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl">
                        Personal training for busy young professionals who want serious results without wasting hours in the gym.
                    </p>

                    <ul className="space-y-4 text-white/80">
                        {["Train at PureGym London Aldgate before or after work.", "Clear plan, tracked progress, no fluff.", "8 week shred or ongoing strength and muscle coaching."].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="mt-1 h-8 w-8 rounded-full bg-white/10 text-orange-300 flex items-center justify-center shadow-inner shadow-orange-500/20">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button asChild size="lg" className="min-w-[220px] animate-[pulseGlow_2.6s_ease-in-out_infinite]">
                            <Link href="#apply">Apply for coaching</Link>
                        </Button>
                        <Button asChild variant="secondary" size="lg" className="border border-white/20">
                            <Link href="#schedule">Book a free gym floor intro</Link>
                        </Button>
                    </div>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-white/70">
                        {["Trusted by young professionals training in Aldgate, Shoreditch and the City.", "Serious training with measurable weekly progress.", "Tailored plans that fit around commuting and work."]
                            .map((item, index) => (
                                <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                                    {item}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-orange-500/20 via-transparent to-white/5 blur-3xl" aria-hidden />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#111428] via-[#0d0f1e] to-[#0a0b14] shadow-[0_30px_100px_-45px_rgba(0,0,0,0.9)]">
                        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.15),transparent_35%)]" />
                        <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-200">
                            On the floor
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-24 w-24 rounded-full bg-orange-500/20 blur-3xl absolute" aria-hidden />
                            <span className="relative text-lg font-semibold text-white/80">Jake Turner coaching client</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-orange-200">PureGym Aldgate</p>
                                    <p className="text-xl font-bold">1:1 strength coaching</p>
                                </div>
                                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">Real gym energy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
