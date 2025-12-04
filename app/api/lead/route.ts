import { NextResponse } from "next/server";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    goal: z.string().min(10),
    experience: z.string(),
    preferredTime: z.string(),
    membershipStatus: z.string(),
    source: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = formSchema.parse(body);

        // In a real application, you would send an email here using Resend, SendGrid, etc.
        // Example with Resend:
        // await resend.emails.send({
        //   from: 'Jake Turner PT <onboarding@resend.dev>',
        //   to: process.env.EMAIL_TO || 'jake@jaketurnerpt.com',
        //   subject: `New Lead: ${validatedData.name}`,
        //   html: `...`
        // });

        console.log("New Lead Received:", validatedData);

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({ success: true, message: "Application received" });
    } catch (error) {
        console.error("Form submission error:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
