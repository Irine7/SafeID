import { AuthClient } from "@dfinity/auth-client";

let authClient: AuthClient | null = null;

export async function initAuth() {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
  return authClient;
}

export async function login() {
  const client = await initAuth();
  await client.login({
    identityProvider: "https://identity.ic0.app",
    onSuccess: () => {
      window.location.reload();
    },
  });
}

export async function logout() {
  const client = await initAuth();
  await client.logout();
  window.location.reload();
}

export async function isAuthenticated() {
  const client = await initAuth();
  return await client.isAuthenticated();
}

export async function getIdentity() {
  const client = await initAuth();
  return client.getIdentity();
}