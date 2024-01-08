import { NextApiRequest, NextApiResponse } from 'next';
import { hasError, validateContactForm } from '@utils/validator';
import ContactFormParams from '@type/contactFormParams';

const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const portalID = process.env.HUBSPOT_PORTAL_ID;
const formGUID = process.env.HUBSPOT_FORM_GUID;
const URL = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalID}/${formGUID}`;

const getPageName = (referer?: string) => {
  if (referer?.includes('/learn')) return 'Learn more';
  if (referer?.includes('/members')) return 'Members';
  if (referer?.includes('/focusareas')) return 'Focus areas';
  if (referer?.includes('/news')) return 'News';
  if (referer?.endsWith('/')) return 'Home';
  return '';
};

const submitForm = async (params: ContactFormParams, referer?: string) => {
  const payload = {
    submittedAt: Date.now(),
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: params.firstName,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: params.lastName,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: params.email,
      },
      {
        objectTypeId: '0-1',
        name: 'company',
        value: params.organization,
      },
      {
        objectTypeId: '0-1',
        name: 'message',
        value: params.message,
      },
    ],
    context: {
      // hutk: ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      pageUri: referer,
      pageName: getPageName(referer),
    },
    legalConsentOptions: {
      legitimateInterest: {
        value: true,
        subscriptionTypeId: 1,
        legalBasis: 'LEAD',
        text: params.consentText,
      },
    },
  };
  if (!accessToken) {
    throw new Error('Service not configured');
  }
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.status !== 200) {
      throw response;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error('HubSpot error:', e, '\nResponse body:', e.response?.body);
    throw new Error(e.response?.body || e);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });
  if (!accessToken)
    return res.status(503).json({ message: 'Service not configured' });

  try {
    const body = validateContactForm(req.body);
    if (hasError(body)) return res.status(400).send(body.error);

    await submitForm(JSON.parse(req.body), req.headers.referer);
    res.status(202).send(null);
  } catch (e) {
    res.status(500).send(e);
  }
}
