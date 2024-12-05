import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

app.get("/", (req: Request, res: Response) => {
    const appRootDir: string = dirname(fileURLToPath(import.meta.url));
    const indexFile: string = join(appRootDir, "public", "index.html");
    res.sendFile(indexFile);
});

app.get("/person", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({
        name: "John Doe",
        age: 25,
    });
});

app.get("/greeting/:name", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(`Hello ${req.params.name}`);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});