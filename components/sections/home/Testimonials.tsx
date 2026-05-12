import { testimonialsConfig } from "@/config/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { title, subtitle } = testimonialsConfig.section;
  const trustpilotRating = testimonialsConfig.trustpilotRating;
  const trustpilotReviews = testimonialsConfig.trustpilotReviews;
  const trustpilotStarColor = testimonialsConfig.trustpilotStarColor || "#00b67a";
  const reviews = testimonialsConfig.reviews;

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/60 mb-8">{subtitle}</p>
          {/* Trustpilot Badge */}
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 9.5L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5L9.5 9.5L12 2Z" fill={trustpilotStarColor}/>
              </svg>
              <span className="text-sm font-semibold text-white">Trustpilot</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4" style={{ color: trustpilotStarColor, fill: trustpilotStarColor }} />
              ))}
            </div>
            <div className="w-px h-5 bg-white/10" />
            <span className="text-sm">
              <span className="font-semibold text-white">{trustpilotRating}</span>
              <span className="text-white/50 ml-1">({trustpilotReviews?.toLocaleString()} reviews)</span>
            </span>
          </div>
        </div>
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Marquee */}
          <div className="flex gap-4 animate-marquee hover:pause-marquee">
            {/* First set */}
            {reviews.map((review, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[380px] rounded-lg border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                {/* Quote */}
                <Quote className="w-7 h-7 text-white/[0.06] mb-3" />
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-sm text-white truncate">{review.name}</p>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-white/50 mt-0.5">{review.role} · {review.game}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[380px] rounded-lg border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                {/* Quote */}
                <Quote className="w-7 h-7 text-white/[0.06] mb-3" />
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-sm text-white truncate">{review.name}</p>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-white/50 mt-0.5">{review.role} · {review.game}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
