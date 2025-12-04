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
        <SectionWrapper id="programmes" className="bg-light-grey">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Programmes at PureGym Aldgate.</h2>
                <p className="text-lg text-gray-600">Pick the coaching set up that matches your goal and schedule.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <Card key={index} className="flex flex-col h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-charcoal mb-2">{program.title}</h3>
                            <p className="text-electric-blue font-medium text-sm mb-4">{program.tagline}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {program.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-gray-100 mt-auto">
                            <p className="text-sm font-medium text-dark-grey">{program.price}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
