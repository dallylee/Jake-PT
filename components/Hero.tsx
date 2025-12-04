import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Hero() {
    return (
        <SectionWrapper className="pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-electric-blue font-semibold tracking-wide uppercase text-sm">
                        Personal trainer at PureGym London Aldgate
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                        Stronger, leaner, more confident at PureGym Aldgate.
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg">
                        Personal training for busy young professionals who want serious results without wasting hours in the gym.
                    </p>

                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Train at PureGym London Aldgate before or after work.
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Clear plan, tracked progress, no fluff.
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            8 week shred or ongoing strength and muscle coaching.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg">
                            <Link href="#apply">Apply for coaching</Link>
                        </Button>
                        <Button asChild variant="secondary" size="lg">
                            <Link href="#schedule">Book a free gym floor intro</Link>
                        </Button>
                    </div>

                    <p className="text-sm text-gray-500 pt-4 border-t border-gray-100 mt-8">
                        Trusted by young professionals training in Aldgate, Shoreditch and the City.
                    </p>
                </div>

                <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                    {/* Placeholder for Hero Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                        <span className="text-lg font-medium">Jake Turner coaching client</span>
                    </div>
                    {/* <Image src="/images/hero-jake-pt.jpg" alt="Jake Turner coaching a client on a barbell squat at PureGym London Aldgate." fill className="object-cover" priority /> */}
                </div>
            </div>
        </SectionWrapper>
    );
}
