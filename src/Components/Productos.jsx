const { data, error } = await supabase.from("productos").select("*");
if (error) {
  console.error("Error fetching products:", error);
}
