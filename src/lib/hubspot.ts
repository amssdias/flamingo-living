export type LeadFields = Record<string, string>;

interface HubSpotPayload {
  fields: { name: string; value: string }[];
  context: { pageUri: string; pageName: string };
}

const PORTAL_ID = import.meta.env.PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = import.meta.env.PUBLIC_HUBSPOT_FORM_ID;

export function buildPayload(fields: LeadFields, pageName: string): HubSpotPayload {
  return {
    fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
    context: { pageUri: location.href, pageName },
  };
}

/**
 * Sends the lead to the HubSpot Forms API. Until the portal and form ids are
 * configured (see .env.example) it only logs the payload and resolves, so the
 * form flow can be exercised end to end.
 */
export async function submitLead(payload: HubSpotPayload): Promise<void> {
  if (!PORTAL_ID || !FORM_ID) {
    console.info('[HubSpot] Not configured, payload not sent:', payload);
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  );
  if (!response.ok) throw new Error(`HubSpot responded ${response.status}`);
}
