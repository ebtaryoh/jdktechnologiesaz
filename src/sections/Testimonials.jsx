import Section from "../components/Section";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { TESTIMONIALS } from "../data/content";
import { Star } from "lucide-react";

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-teal-600" : "text-navy-200"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted for clarity and execution"
      subtitle="What clients say when the work becomes more structured, measurable, and easier to lead."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <Reveal key={t.name + idx} delay={idx * 0.04}>
            <Card className="h-full">
              <Stars rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-navy-700">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-navy-100 pt-4">
                <p className="text-sm font-extrabold text-navy-950">{t.name}</p>
                <p className="text-xs font-bold text-navy-600">{t.org}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}