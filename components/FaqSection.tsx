"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do I need to be a PureGym Aldgate member?",
        answer: "Yes. Coaching runs inside PureGym London Aldgate. You either need to already be a member or be ready to join in the next 30 days."
    },
    {
        question: "I am a complete beginner. Is this for me?",
        answer: "Yes. The Gym Confidence Kickstart is built for beginners and returners. We go at your pace, keep things simple and make sure you feel safe and confident on the gym floor."
    },
    {
        question: "Do you offer online coaching?",
        answer: "Right now I focus on in person coaching at PureGym Aldgate. Online support may be added later, but the main results come from us training together in person."
    },
    {
        question: "What does the free intro session involve?",
        answer: "We meet on the gym floor, talk through your goal, look at your training history and try a few simple movements. There is no hard sell. If we are a good fit, we talk about the best programme and times for you."
    },
    {
        question: "How much does it cost?",
        answer: "Prices depend on how many sessions per week you want and which programme you pick. Most clients train 2 or 3 times per week. We cover all prices clearly in your free intro session."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionWrapper id="faq" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">FAQ.</h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                        >
                            <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                            <svg
                                className={cn(
                                    "w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0",
                                    openIndex === index ? "transform rotate-180" : ""
                                )}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out bg-gray-50",
                                openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <p className="p-4 md:p-6 pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
