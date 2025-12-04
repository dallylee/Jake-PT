import { SectionWrapper } from "@/components/SectionWrapper";

export function WhoIWorkWithSection() {
    return (
        <SectionWrapper className="bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                    Personal training for busy young professionals in Aldgate.
                </h2>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        You work hard. You train when you can. You want to look stronger, leaner and actually see progress from the time you put in.
                    </p>
                    <p>
                        I work with men and women in their 20s and 30s who already train or want to start at PureGym London Aldgate. You are not looking for wellness fluff. You want a clear plan, heavy weights done safely, and a coach who keeps you accountable.
                    </p>
                </div>

                <ul className="mt-8 space-y-4">
                    {[
                        "City and Shoreditch professionals who train before or after work.",
                        "People who want to lose 5 to 10 kg and build visible muscle.",
                        "Lifters who want better technique and serious strength numbers."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}
