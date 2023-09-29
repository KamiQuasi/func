/**
 * foo
 */
export function Handle(ctx, res, req) {
  console.info("Received request");
  console.log(JSON.stringify(req,undefined,2))
  
  return new Response(JSON.stringify(req,undefined,2));
}

export const handler = Handle;