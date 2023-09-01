export const getallProducts = async () =>{
    const res = await fetch(`${process.env.BASE_URL}/api/products`, {
        cache: "no-store",
      });
    
      if (!res.ok) {
        throw new Error("Failed!");
      }
    
      return res.json();
}