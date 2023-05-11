"use client"
import {CONFIG} from "../config/config";
import {Auth, LoginCredentials} from "../types/auth-types";
import {JSON_HEADERS, PATHS} from "../constants";
export async function login(payload: LoginCredentials): Promise<Auth> {
  const URL= CONFIG.API_URL + PATHS.FP.LOGIN;
  const response = await fetch(URL, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: JSON_HEADERS
  })
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }
  const data = await response.json()
  return data;
}

export async function logout(): Promise<Auth> {
  const URL= CONFIG.API_URL + PATHS.FP.LOGOUT;
  const response = await fetch(URL, {
    method: 'GET',
    headers: JSON_HEADERS
  })
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }
  const data = await response.json()
  return data;
}
