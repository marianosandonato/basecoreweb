export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: readonly string[] }
  | {
      type: "table";
      caption: string;
      headers: readonly string[];
      /** First cell of each row is rendered as the row header (`<th scope="row">`). */
      rows: readonly (readonly string[])[];
    };

export type BlogCta = {
  label: string;
  href: string;
};

export type BlogPost = {
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  body: readonly BlogBlock[];
  cta: BlogCta;
};
