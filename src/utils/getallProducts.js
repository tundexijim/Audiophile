export const getallProducts = async () =>{
    const res = await fetch('http://localhost:3000/api/products', {
        cache: "no-store",
      });
    
      if (!res.ok) {
        throw new Error("Failed!");
      }
    
      return res.json();
}