// src/app/about/page.tsx
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";

type PageData = {
  data: {
    title?: any;
    content?: any;
    slices?: any[];
  };
};

export default async function AboutPage() {
  const client = createClient();

  // Fetch the "page" document with UID "about"
  const page = (await client.getByUID("blogcontent", "about")) as PageData;

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="card">
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          {page.data.title
            ? page.data.title[0]?.text ?? "About Astro Portal"
            : "About Astro Portal"}
        </h1>

        {/* Simple rich-text rendering without slices for now */}
        {page.data.content && page.data.content.length > 0 ? (
          <div className="muted">
            {page.data.content.map((block: any, index: number) => (
              <p key={index} style={{ marginBottom: "0.75rem" }}>
                {block.text}
              </p>
            ))}
          </div>
        ) : (
          <p className="muted">
            This page is powered by Prismic. Add content in your Prismic
            dashboard to change what appears here.
          </p>
        )}
      </section>
    </div>
  );
}
