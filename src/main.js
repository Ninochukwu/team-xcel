import { server } from "./app.setup.js";
import { config } from "./lib/config.lib.js";
import { connectToDatabase } from "./lib/db.lib.js";
import "./lib/association.lib.js";

(async () => {
  try {
    const port = parseInt(config.getOrThrow("PORT"));
    await connectToDatabase();
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

