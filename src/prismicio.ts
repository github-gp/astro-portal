// src/prismicio.ts
import {
  createClient as baseCreateClient,
  ClientConfig,
  Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName =
  process.env.PRISMIC_REPOSITORY_NAME ?? "CHANGE_ME";

// Map Prismic document types to site routes
const routes: Route[] = [
  { type: "blogcontent", path: "/:uid" },
  { type: "blogcontent", path: "/blog/:uid" },
];

export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
