// lib/products.js

export async function getProducts() {

 try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products` ,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const products = await res.json();
      return products;
   } catch (err: any) {
    console.error("Failed to fetch products:", err.message);
   }
}

