import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

export function ScheduleSection() {
    return (
        <SectionWrapper id="schedule" className="bg-light-grey">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Train at PureGym London Aldgate.</h2>

                    <div className="space-y-6 text-gray-600 mb-8">
                        <p>
                            All sessions run out of PureGym London Aldgate. It is close to Aldgate, Aldgate East and Tower Hill stations, ideal for City and Shoreditch workers.
                        </p>
                        <p>
                            I coach mainly around commuter hours so you can train before or after work.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                        <h3 className="font-bold text-charcoal mb-4">Common training slots</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Morning: 07:00 – 09:00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Evening: 17:30 – 20:30</span>
                            </li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-4 italic">
                            * Slots can change based on demand. Use the form below to request your preferred times.
                        </p>
                    </div>

                    <Button asChild size="lg">
                        <Link href="#apply">Book a free gym floor intro</Link>
                    </Button>
                </div>

                <div className="h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
                    {/* Placeholder for Map */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-300">
                        <span className="font-medium">Map: PureGym London Aldgate</span>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907727189876!2d-0.0754792230756916!3d51.5149069718151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034b76170d79%3A0x6739377465293831!2sPureGym%20London%20Aldgate!5e0!3m2!1sen!2suk!4v1701637000000!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
