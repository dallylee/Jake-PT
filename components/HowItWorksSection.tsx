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
        <SectionWrapper id="how-it-works" className="bg-charcoal text-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How coaching with me works.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-700 -z-10" />

                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-electric-blue flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-900/20 ring-4 ring-charcoal">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <Button asChild size="lg" className="bg-white text-charcoal hover:bg-gray-100">
                    <Link href="#apply">Apply for coaching</Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
