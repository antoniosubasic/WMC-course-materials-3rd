import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

app.get("/chuck.html", (req, res) => {
    res.send("Hello NOT from Chuck, but from a hard-coded route!");
});

const appRootDir: string = dirname(fileURLToPath(import.meta.url));
const staticHostingDir: string = join(appRootDir, "public");
app.use(express.static(staticHostingDir, { extensions: ["html"] }));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});