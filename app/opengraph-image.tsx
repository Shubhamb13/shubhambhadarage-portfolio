import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#05060a",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.55), transparent 50%), radial-gradient(circle at 80% 75%, rgba(217,70,239,0.4), transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #6366f1, #d946ef)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 26,
              }}
            >
              SB
            </div>
            <span
              style={{ fontSize: 20, color: "#a5b4fc", fontFamily: "monospace" }}
            >
              {"< Software Engineer />"}
            </span>
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              marginTop: 28,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#e7e9f0",
              marginTop: 8,
              fontWeight: 600,
            }}
          >
            React.js • MERN Stack • TypeScript
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              marginTop: 20,
              lineHeight: 1.6,
              maxWidth: 900,
            }}
          >
            Specializing in responsive UIs, REST APIs, and scalable full-stack
            web experiences.
          </div>
        </div>
      </div>
    ),
    size
  );
}