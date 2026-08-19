export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  tags: string[];
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("/blog-posts/manifest.json");
    if (!res.ok) return [];
    const data = await res.json();

    // Suporta manifest como array de objetos OU array de slugs (strings)
    const posts: BlogPost[] = await Promise.all(
      data.map(async (item: BlogPost | string) => {
        if (typeof item === "string") {
          // manifest é array de slugs → busca o JSON individual
          try {
            const r = await fetch(`/blog-posts/${item}.json`);
            if (!r.ok) return null;
            return (await r.json()) as BlogPost;
          } catch {
            return null;
          }
        }
        // manifest já é array de objetos completos
        return item as BlogPost;
      })
    );

    return posts
      .filter((p): p is BlogPost => p !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/blog-posts/${slug}.json`);
    if (!res.ok) return null;
    return (await res.json()) as BlogPost;
  } catch {
    return null;
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
