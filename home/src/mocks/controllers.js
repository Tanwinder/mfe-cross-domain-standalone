import json from './data/signin.json';
export const signinFun = (req, res, ctx) => {
  const { username } = req.body;
  debugger;
  return res(ctx.status(200), ctx.json(json));
};
