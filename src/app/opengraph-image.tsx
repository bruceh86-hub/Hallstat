import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Hallstat — a nurse-designed Foley catheter system";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/hallstat-wordmark-white.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#26336a",
          color: "#ffffff",
        }}
      >
        <img src={src} width={488} height={101} alt="" />
        <div style={{ marginTop: 56, fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>Stopping CAUTI Before It Starts</div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#c3cae6" }}>
          A nurse-designed Foley catheter system
        </div>
      </div>
    ),
    size,
  );
}
