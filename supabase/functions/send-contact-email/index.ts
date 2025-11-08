import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to visitor
    const confirmationResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Change to your verified domain
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,<br>Your Portfolio</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    // Send notification email to you
    const notificationResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Change to your verified domain
      to: ["yanikamanikanta24@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email sent successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
