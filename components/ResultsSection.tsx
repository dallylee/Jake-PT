import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";

const results = [
    {
        name: "Marina",
        result: "8 weeks – minus 6 kg and plus 15 kg on her deadlift.",
        imageAlt: "Marina before and after transformation"
    },
    {
        name: "Tom",
        result: "12 weeks – minus 9 cm on his waist and plus 20 kg on his bench.",
        imageAlt: "Tom before and after transformation"
    },
    {
        name: "Aisha",
        result: "10 weeks – minus 7 kg and now confident squatting with free weights instead of hiding in the corner.",
        imageAlt: "Aisha before and after transformation"
    }
];

export function ResultsSection() {
    return (
        <SectionWrapper id="results" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Real results on the PureGym Aldgate floor.</h2>
                <p className="text-lg text-gray-600">
                    Every client has different numbers, but the process is the same. We set a clear target, track everything and adjust as we go.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {results.map((item, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md">
                        <div className="aspect-[4/3] bg-gray-100 relative">
                            {/* Placeholder for Result Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                <span className="text-sm font-medium">Result: {item.name}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-800 font-medium leading-relaxed">
                                <span className="font-bold text-charcoal">{item.name}</span> – {item.result}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
                Results shown are from real clients. Individual results will vary based on starting point and consistency.
            </p>
        </SectionWrapper>
    );
}
