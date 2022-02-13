import userModel from "./models/user";

export const context = async ({ request, connection }) => ({
  request,
  connection,
  userModel,
});
