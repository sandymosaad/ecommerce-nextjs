// lib/products.js

function buildApiUrl(path: string) {
  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  if (configuredBaseUrl) {
    return `${configuredBaseUrl}${path}`;
  }

  // Browser fetch can use relative URLs, but server-side fetch needs an absolute URL.
  if (typeof window !== "undefined") {
    return path;
  }

  const runtimeBaseUrl =
    process.env.APP_URL ||
    process.env.NEXTAUTH_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    "http://localhost:3000";

  return `${runtimeBaseUrl.replace(/\/$/, "")}${path}`;
}

export async function getProducts() {

 try{
      const res = await fetch(buildApiUrl(`/api/products`) ,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const products = await res.json();
      return products;
   } catch (err: any) {
    console.error("Failed to fetch products:", err.message);
   }
}

export async function getProductById(id: string) {

 try{ 
   const res = await fetch(buildApiUrl(`/api/products/${encodeURIComponent(id)}`) ,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

      if (!res.ok) {
         return null;
      }

    const product = await res.json();
    console.log(`Fetched product with id ${id}:`, product);
      return product;
   } catch (err: any) {
    console.error(`Failed to fetch product with id ${id}:`, err.message);
      return null;
   }  
 }

