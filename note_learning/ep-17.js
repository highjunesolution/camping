// Server
// วิธีการ Import route แบบ dynamic
const routeFiles = fs.readdirSync(path.join(import.meta.dirname, "routes"));
for (const item of routeFiles) {
  const routeModule = await import(`./routes/${item}`);
  app.use("/api", routeModule.default);
  console.log(routeModule)
  console.log(`Loaded route: ${item}`);
}