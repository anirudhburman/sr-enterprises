import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
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
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(130deg, #f0f6ff 0%, #ffffff 100%)",
          color: "#1c4e94",
          fontFamily: "Arial"
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 700 }}>SR Enterprises</div>
        <div style={{ fontSize: 30, marginTop: 14 }}>
          Acrylic Fabrication | CNC Cutting | UV Printing | Signage
        </div>
        <div style={{ fontSize: 24, marginTop: 28, color: "#2f75d6" }}>
          Bangalore
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
