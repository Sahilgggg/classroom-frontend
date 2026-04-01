import { createAuthClient } from "better-auth/react";
import { BACKEND_BASE_URL, USER_ROLES } from "../constants";

export const authClient = createAuthClient({
  baseURL: "https://classroom-backend-production-72d4.up.railway.app/api/auth",
  fetchOptions: {
    credentials: "include", // 🔥 THIS IS THE FIX
  },
  user: {
    additionalFields: {
      role: {
        type: USER_ROLES,
        required: true,
        defaultValue: "student",
        input: true,
      },
      department: {
        type: "string",
        required: false,
        input: true,
      },
      imageCldPubId: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
});
