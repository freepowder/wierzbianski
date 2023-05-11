
export type APP_CONFIG = {
    API_URL: string,

}

// export const CONFIG: APP_CONFIG = {
//   API_HOST: import.meta.env.VITE_API_HOST,
//   API_BASE: import.meta.env.VITE_API_BASE,
//   TOURNAMENTS_API_HOST: import.meta.env.VITE_TOURNAMENTS_API_HOST,
//   TOURNAMENTS_API_BASE: import.meta.env.VITE_TOURNAMENTS_API_BASE,
//   TOURNAMENTS_API_URL: import.meta.env.VITE_TOURNAMENTS_API_HOST + import.meta.env.VITE_TOURNAMENTS_API_BASE,
//   TOURNAMENTS_API_KEY: import.meta.env.VITE_TOURNAMENTS_API_KEY,
//   WC_BUNDLE_HREF: import.meta.env.VITE_WC_BUNDLE_HREF,
//   API_URL: import.meta.env.VITE_API_HOST + import.meta.env.VITE_API_BASE
// }

// MF EXAMPLE
export const CONFIG: APP_CONFIG = {
  API_URL: 'https://api.freepowder.io/'
}

