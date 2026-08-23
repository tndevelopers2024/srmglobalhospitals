import React from "react";

export interface DeptCardOverviewStat {
  value: string | number;
  label: string;
  color?: string;
}

export interface DeptCardOverviewProps {
  title?: string;
  paragraphs: string[];
  stats: DeptCardOverviewStat[];
}

export default function DeptCardOverview({
  title = "About the Department",
  paragraphs,
  stats,
}: DeptCardOverviewProps) {
  return (
    <div className="overview-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
      <div className="overview-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
        <div>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#8b3dff",
              borderRadius: "2px",
              marginBottom: "20px",
            }}
          />
          <h2
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: "32px",
              color: "#14092b",
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            {title}
          </h2>
          {paragraphs.map((p, index) => (
            <p
              key={index}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#555",
                margin: index === paragraphs.length - 1 ? 0 : "0 0 14px",
              }}
            >
              {p}
            </p>
          ))}
        </div>
        <div
          className="overview-stats-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          {stats.map((stat, index) => {
            const color = stat.color || (index % 2 === 0 ? "#8b3dff" : "#1fb6e0");
            return (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "24px 20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: color,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
