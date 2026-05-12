"use client";

import { useState } from "react";
import { Check, Copy, AlertCircle, CheckCircle, AlertTriangle, XCircle, Image as ImageIcon } from "lucide-react";
import { ContentBlock } from "@/config/blog/types";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-0">
      {blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock content={block.content} />;
    case "heading":
      return <HeadingBlock level={block.level} content={block.content} />;
    case "list":
      return <ListBlock items={block.items} ordered={block.ordered} />;
    case "code":
      return <CodeBlock language={block.language} code={block.code} filename={block.filename} />;
    case "image":
      return <ImageBlock src={block.src} alt={block.alt} caption={block.caption} />;
    case "youtube":
      return <YouTubeBlock videoId={block.videoId} caption={block.caption} />;
    case "alert":
      return <AlertBlock variant={block.variant} content={block.content} />;
    default:
      return null;
  }
}

function ParagraphBlock({ content }: { content: string }) {
  // Parse bold text (**text**)
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return (
    <p className="text-white/70 leading-relaxed mb-6">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </p>
  );
}

function HeadingBlock({ level, content }: { level: 1 | 2 | 3 | 4; content: string }) {
  const classes = {
    1: "text-3xl sm:text-4xl font-bold text-white mt-8 mb-4",
    2: "text-2xl sm:text-3xl font-bold text-white mt-8 mb-4",
    3: "text-xl sm:text-2xl font-semibold text-white mt-6 mb-3",
    4: "text-lg sm:text-xl font-semibold text-white mt-4 mb-2"
  };

  const headings = {
    1: <h1 className={classes[1]}>{content}</h1>,
    2: <h2 className={classes[2]}>{content}</h2>,
    3: <h3 className={classes[3]}>{content}</h3>,
    4: <h4 className={classes[4]}>{content}</h4>
  };

  return headings[level];
}

function ListBlock({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  const listClass = ordered ? "list-decimal" : "list-disc";
  
  return (
    <Tag className={`ml-6 space-y-2 ${listClass} mb-6`}>
      {items.map((item, i) => {
        const parts = item.split(/(\*\*.*?\*\*)/g);
        return (
          <li key={i} className="text-white/70 leading-relaxed">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="font-semibold text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </li>
        );
      })}
    </Tag>
  );
}

function CodeBlock({ language, code, filename }: { language: string; code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden my-6">
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2">
          <span className="text-xs text-white/50">{filename}</span>
          <span className="rounded bg-white/[0.05] px-2 py-0.5 text-xs text-white/40">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className="text-sm text-green-400 font-mono">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/50 p-2 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-black/70"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-white/60" />
          )}
        </button>
      </div>
    </div>
  );
}

function ImageBlock({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [error, setError] = useState(false);

  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        {!error ? (
          <img
            src={src}
            alt={alt}
            className="w-full"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-white/40">
            <ImageIcon className="mb-2 h-12 w-12" />
            <p className="text-sm">Image not available</p>
            <p className="text-xs">{src}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function YouTubeBlock({ videoId, caption }: { videoId: string; caption?: string }) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        <div className="relative pb-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function AlertBlock({ variant, content }: { variant: "info" | "success" | "warning" | "error"; content: string }) {
  const config = {
    info: {
      icon: AlertCircle,
      bg: "bg-blue-500/5",
      border: "border-blue-500/20",
      text: "text-blue-400",
      iconColor: "text-blue-400"
    },
    success: {
      icon: CheckCircle,
      bg: "bg-green-500/5",
      border: "border-green-500/20",
      text: "text-green-400",
      iconColor: "text-green-400"
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-orange-500/5",
      border: "border-orange-500/20",
      text: "text-orange-400",
      iconColor: "text-orange-400"
    },
    error: {
      icon: XCircle,
      bg: "bg-red-500/5",
      border: "border-red-500/20",
      text: "text-red-400",
      iconColor: "text-red-400"
    }
  };

  const { icon: Icon, bg, border, text, iconColor } = config[variant];

  return (
    <div className={`flex gap-3 rounded-xl border ${border} ${bg} p-5 my-6`}>
      <Icon className={`h-5 w-5 flex-shrink-0 ${iconColor}`} />
      <p className={`text-sm leading-relaxed ${text}`}>{content}</p>
    </div>
  );
}