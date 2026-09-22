import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website design or development project with Code & Design Hub.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-6 sm:py-10">
      <ContactCTA />
    </div>
  );
}
