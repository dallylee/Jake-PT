import { SectionWrapper } from "@/components/SectionWrapper";

export function WhoIWorkWithSection() {
    return (
        <SectionWrapper className="mt-12 bg-[#0c0e1a]/90 border-white/10">
            <div className="max-w-4xl mx-auto space-y-10 text-center">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                        Personal training for busy young professionals in Aldgate.
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        You work hard. You train when you can. You want to look stronger, leaner and actually see progress from the time you put in.
                    </p>
                    <p className="text-lg text-white/80 leading-relaxed">
                        I work with men and women in their 20s and 30s who already train or want to start at PureGym London Aldgate. You are not looking for wellness fluff. You want a clear plan, heavy weights done safely, and a coach who keeps you accountable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {["City and Shoreditch professionals who train before or after work.", "People who want to lose 5 to 10 kg and build visible muscle.", "Lifters who want better technique and serious strength numbers."].map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/40 p-5 text-left shadow-lg shadow-black/50"
                        >
                            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange-500/15 blur-2xl" aria-hidden />
                            <div className="relative z-10 flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-200 border border-orange-400/30">
                                    {index + 1}
                                </span>
                                <p className="text-white/90 font-semibold leading-relaxed">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
