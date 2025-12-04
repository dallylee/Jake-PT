import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/80 text-white border-t border-white/10">
            <SectionWrapper className="py-12 md:py-16 bg-transparent border-none shadow-none">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-2 space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <span className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-black font-bold">JT</span>
                            <span className="text-lg font-bold">Jake Turner PT</span>
                        </div>
                        <p className="text-white/70 max-w-sm">
                            Personal trainer at PureGym London Aldgate. Helping busy professionals build strength, confidence and a physique they are proud of.
                        </p>
                        <p className="text-white/70">
                            <a href="mailto:jake@jaketurnerpt.com" className="hover:text-white transition-colors">
                                jake@jaketurnerpt.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#programmes" className="hover:text-white transition-colors">Programmes</Link></li>
                            <li><Link href="#results" className="hover:text-white transition-colors">Results</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
                            <li><Link href="#schedule" className="hover:text-white transition-colors">Schedule</Link></li>
                            <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#apply" className="hover:text-white transition-colors">Apply</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Social</h4>
                        <ul className="space-y-2 text-white/70">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© {currentYear} Jake Turner PT. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </SectionWrapper>
        </footer>
    );
}
