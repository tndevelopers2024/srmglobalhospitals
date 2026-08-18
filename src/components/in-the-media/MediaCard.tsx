interface MediaCardProps {
  imageSrc: string;
  imageAlt: string;
  source: string;
  sourceColor: "purple" | "blue" | "default";
  title: string;
  description: string;
  linkText: string;
  linkUrl?: string;
}

export default function MediaCard({
  imageSrc,
  imageAlt,
  source,
  sourceColor,
  title,
  description,
  linkText,
  linkUrl = "#"
}: MediaCardProps) {
  const getBadgeColors = () => {
    switch (sourceColor) {
      case "purple":
        return { bg: "#f3eff8", text: "#6B4A98" };
      case "blue":
        return { bg: "#e8f4fc", text: "#2294D3" };
      default:
        return { bg: "#f3eff8", text: "#6B4A98" };
    }
  };

  const badgeColors = getBadgeColors();

  return (
    <div className="media-card" style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={imageAlt} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", background: "#f3eff8" }} />
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <div style={{ background: badgeColors.bg, borderRadius: "6px", padding: "4px 10px", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: badgeColors.text }}>
            {source}
          </div>
        </div>
        <h4 style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.4 }}>{title}</h4>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#777", lineHeight: 1.5, margin: "0 0 14px" }}>{description}</p>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#6B4A98", fontWeight: 500, cursor: "pointer" }}>
          {linkText}
        </div>
      </div>
    </div>
  );
}
