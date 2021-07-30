import json from './data/signin.json';
export const signinFun = (req, res, ctx) => {
  const { username } = req.body;
  return res(ctx.status(200), ctx.json(json));
};
