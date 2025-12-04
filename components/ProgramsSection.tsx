import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";

const programs = [
    {
        title: "8 Week Shred Programme",
        tagline: "Drop body fat, keep strength, feel sharper in your clothes.",
        description: "For men and women who want to drop 5 to 10 kg, tighten up and see clear definition in 8 weeks. We keep it simple and aggressive, without you living on chicken and broccoli.",
        bullets: [
            "2 or 3 PT sessions per week at PureGym Aldgate.",
            "Structured training plan with progressive overload.",
            "Calorie target that fits your lifestyle, not a crash diet.",
            "Weekly check ins and progress photos so you can see the changes."
        ],
        price: "From £X per month depending on sessions per week."
    },
    {
        title: "Strength and Muscle Coaching",
        tagline: "Build numbers on the bar and size on your frame.",
        description: "For lifters who already train but feel stuck. You want more strength, more muscle and better technique on the big lifts.",
        bullets: [
            "Ongoing coaching focused on squat, bench, deadlift and key accessories.",
            "Form checks and coaching cues so you lift heavier without stupid injuries.",
            "Personalised progression plan based around your week and recovery.",
            "Everything tracked so you know you are getting stronger."
        ],
        price: "From £X per month for weekly or twice weekly sessions."
    },
    {
        title: "Gym Confidence Kickstart",
        tagline: "Stop feeling lost on the gym floor.",
        description: "For beginners and returners who feel anxious on the weights floor. You want to know what to do, how to do it and how to not feel like everyone is watching you.",
        bullets: [
            "4 to 6 focused PT sessions at PureGym Aldgate.",
            "Learn key movements with safe technique on machines and free weights.",
            "Simple starter programme you can follow on your own between sessions.",
            "Confidence to step onto the gym floor without second guessing yourself."
        ],
        price: "Fixed price package. Details covered in your intro session."
    }
];

export function ProgramsSection() {
    return (
        <SectionWrapper id="programmes" className="bg-[#0a0c15]/90 border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
                <p className="text-orange-300 uppercase tracking-[0.25em] text-xs">Programmes</p>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Programmes at PureGym Aldgate.</h2>
                <p className="text-lg text-white/75">Pick the coaching set up that matches your goal and schedule.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <Card
                        key={index}
                        className="flex flex-col h-full border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-black/40"
                    >
                        <div className="mb-6 space-y-3">
                            <h3 className="text-xl font-bold text-white">{program.title}</h3>
                            <p className="text-orange-200 font-semibold text-sm">{program.tagline}</p>
                            <p className="text-white/70 text-sm leading-relaxed">{program.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {program.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                    <span className="mt-0.5 h-6 w-6 rounded-full bg-white/10 text-orange-300 flex items-center justify-center shadow-inner shadow-orange-500/20">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between text-sm text-white">
                            <p className="font-semibold">{program.price}</p>
                            <span className="rounded-full bg-orange-500/10 border border-orange-400/30 px-3 py-1 text-orange-200">{index === 0 ? "Popular" : "Focused"}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
