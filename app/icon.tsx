import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          background: "linear-gradient(135deg, #0a0d12 0%, #111a2a 100%)",
          border: "1.5px solid rgba(0,242,254,0.55)",
          borderRadius: 8,
          color: "#00f2fe",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        DA
      </div>
    ),
    { ...size },
  );
}
