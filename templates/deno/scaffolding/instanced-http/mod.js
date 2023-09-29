import { handler } from "f/function"

const port = 8080;
const hostname = '0.0.0.0';

Deno.serve({ port, hostname }, handler);