import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white border-t border-gray-800">
            <SectionWrapper className="py-12 md:py-16">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-2">
                        <h3 className="text-xl font-bold mb-4">Jake Turner PT</h3>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Personal trainer at PureGym London Aldgate. Helping busy professionals build strength, confidence and a physique they are proud of.
                        </p>
                        <p className="text-gray-400">
                            <a href="mailto:jake@jaketurnerpt.com" className="hover:text-electric-blue transition-colors">
                                jake@jaketurnerpt.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#programmes" className="text-gray-400 hover:text-white transition-colors">Programmes</Link></li>
                            <li><Link href="#results" className="text-gray-400 hover:text-white transition-colors">Results</Link></li>
                            <li><Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it works</Link></li>
                            <li><Link href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</Link></li>
                            <li><Link href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#apply" className="text-gray-400 hover:text-white transition-colors">Apply</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-gray-200">Social</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} Jake Turner PT. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
                    </div>
                </div>
            </SectionWrapper>
        </footer>
    );
}
