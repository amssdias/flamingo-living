interface ImportMetaEnv {
  readonly PUBLIC_HUBSPOT_PORTAL_ID?: string;
  readonly PUBLIC_HUBSPOT_FORM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
