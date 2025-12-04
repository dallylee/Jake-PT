"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { FieldError } from "@/components/ui/FieldError";
import { SectionWrapper } from "@/components/SectionWrapper";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    goal: z.string().min(10, "Please tell me a bit more about your goal"),
    experience: z.enum(["Beginner", "Training 1–2 years", "Training 2+ years"]),
    preferredTime: z.string().min(1, "Preferred time is required"),
    membershipStatus: z.enum(["Yes, already a member", "Not yet, but I plan to join in the next 30 days", "Not sure yet"]),
    source: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function LeadFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <SectionWrapper id="apply" className="bg-[#0d0f1d]/90 border-white/10 text-center">
                <div className="max-w-xl mx-auto py-12 space-y-6">
                    <div className="w-16 h-16 bg-green-400/15 text-green-300 rounded-full flex items-center justify-center mx-auto mb-2 ring-2 ring-green-400/40">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-black text-white">Application Received</h2>
                    <p className="text-white/70">Thanks. Your application is in. I will get back to you within one working day to set up your free intro session.</p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mx-auto">
                        Send another application
                    </Button>
                </div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="apply" className="bg-[#0d0f1d]/90 border-white/10">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10 space-y-3">
                    <p className="text-orange-300 uppercase tracking-[0.25em] text-xs">Apply</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white">Apply for coaching at PureGym Aldgate.</h2>
                    <p className="text-white/70">
                        Fill out the form below. I will get back to you within one working day to set up your free 30 minute intro session or answer any questions.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-1">Name <span className="text-orange-300">*</span></label>
                        <Input id="name" {...register("name")} error={!!errors.name} placeholder="Your name" />
                        <FieldError>{errors.name?.message}</FieldError>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">Email <span className="text-orange-300">*</span></label>
                        <Input id="email" type="email" {...register("email")} error={!!errors.email} placeholder="your@email.com" />
                        <FieldError>{errors.email?.message}</FieldError>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-1">Phone number (optional)</label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="07700 900000" />
                    </div>

                    <div>
                        <label htmlFor="goal" className="block text-sm font-semibold text-white mb-1">Main training goal <span className="text-orange-300">*</span></label>
                        <Textarea id="goal" {...register("goal")} error={!!errors.goal} placeholder="What do you want to achieve?" rows={3} />
                        <FieldError>{errors.goal?.message}</FieldError>
                    </div>

                    <div>
                        <label htmlFor="experience" className="block text-sm font-semibold text-white mb-1">Training experience</label>
                        <Select id="experience" {...register("experience")}>
                            <option value="Beginner" className="bg-black text-white">Beginner</option>
                            <option value="Training 1–2 years" className="bg-black text-white">Training 1–2 years</option>
                            <option value="Training 2+ years" className="bg-black text-white">Training 2+ years</option>
                        </Select>
                    </div>

                    <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-white mb-1">Preferred training time <span className="text-orange-300">*</span></label>
                        <Input id="preferredTime" {...register("preferredTime")} error={!!errors.preferredTime} placeholder="e.g. Mornings, Mon/Wed/Fri" />
                        <FieldError>{errors.preferredTime?.message}</FieldError>
                    </div>

                    <div>
                        <span className="block text-sm font-semibold text-white mb-2">Are you a member of PureGym Aldgate?</span>
                        <div className="space-y-2">
                            {["Yes, already a member", "Not yet, but I plan to join in the next 30 days", "Not sure yet"].map((status) => (
                                <label key={status} className="flex items-center gap-2">
                                    <input type="radio" value={status} {...register("membershipStatus")} className="text-orange-400 focus:ring-orange-400 bg-white/10" />
                                    <span className="text-sm text-white/80">{status}</span>
                                </label>
                            ))}
                        </div>
                        <FieldError>{errors.membershipStatus?.message}</FieldError>
                    </div>

                    <input type="hidden" {...register("source")} value="Website" />

                    {error && (
                        <div className="p-3 bg-red-500/10 text-red-200 text-sm rounded-md border border-red-500/30">
                            {error}
                        </div>
                    )}

                    <Button type="submit" size="lg" className="w-full shadow-lg shadow-orange-500/25" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send my application"}
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
}
