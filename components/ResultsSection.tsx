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
        <SectionWrapper id="results" className="bg-[#0d0f1d]/90 border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <p className="text-orange-300 uppercase tracking-[0.25em] text-xs">Results</p>
                <h2 className="text-3xl md:text-4xl font-black text-white">Real results on the PureGym Aldgate floor.</h2>
                <p className="text-lg text-white/75">
                    Every client has different numbers, but the process is the same. We set a clear target, track everything and adjust as we go.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {results.map((item, index) => (
                    <Card key={index} className="overflow-hidden border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-black/40">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.2),transparent_40%)]" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/70 backdrop-blur-sm">
                                <span className="text-sm font-semibold">Result: {item.name}</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            <p className="text-white/90 font-semibold leading-relaxed">
                                <span className="font-bold text-white">{item.name}</span> – {item.result}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>

            <p className="text-center text-xs text-white/50 mt-8">
                Results shown are from real clients. Individual results will vary based on starting point and consistency.
            </p>
        </SectionWrapper>
    );
}
