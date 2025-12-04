import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

const steps = [
    {
        number: "01",
        title: "Complete the short form.",
        description: "Tell me your main goal, training experience and when you can train at PureGym Aldgate."
    },
    {
        number: "02",
        title: "Free 30 minute gym floor intro.",
        description: "We meet at PureGym London Aldgate. We talk through your goal, check a few key movements and decide if we are a good fit to work together."
    },
    {
        number: "03",
        title: "Start your personalised training plan.",
        description: "If we both want to go ahead, we set your programme, lock in your training slots and start tracking your progress from day one."
    }
];

export function HowItWorksSection() {
    return (
        <SectionWrapper id="how-it-works" className="bg-[#0a0b16]/90 border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <p className="text-orange-300 uppercase tracking-[0.25em] text-xs">Process</p>
                <h2 className="text-3xl md:text-4xl font-black text-white">How coaching with me works.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative">
                <div className="hidden md:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" aria-hidden />
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl" aria-hidden />
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-orange-500/40 ring-4 ring-black/60">
                                {step.number}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-14">
                <Button asChild size="lg" className="shadow-lg shadow-orange-500/30">
                    <Link href="#apply">Apply for coaching</Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
