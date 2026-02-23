const { data, error } = await supabase
  .from("comandas")
  .insert([{ mesa_id: idMesa, estado: "abierta", total: 0 }]);
