import { aboutConfig } from "@/config/pages/about";

export default function AboutStory() {
  const { story } = aboutConfig;

  return (
    <section className="relative w-full py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {story.title}
            </h2>
            <p className="text-lg text-white/60">
              {story.subtitle}
            </p>
          </div>

          {/* Story Content */}
          <div className="space-y-8 text-white/70 leading-relaxed">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
