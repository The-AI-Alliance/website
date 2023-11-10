import { NextApiRequest, NextApiResponse } from 'next';
import sg from '@sendgrid/mail';
import EmailParams from '@type/emailParams';

const emailFrom = process.env.EMAIL_FROM;
const emailTo = (process.env.EMAIL_TO ?? '').split(',');
const apiKey = process.env.SEND_GRID_API_KEY;
apiKey && sg.setApiKey(apiKey);

const sendEmail = async (params: EmailParams) => {
  if (!apiKey || !emailFrom || !emailTo) {
    throw new Error('Email service not configured');
  }

  const msg = {
    to: emailTo,
    from: emailFrom,
    replyTo: {
      email: params.email || '',
      name: `${params.firstName} ${params.lastName}`,
    },

    subject: 'New message from AI Alliance page',
    html: `
      <p><strong>${params.firstName || ''} ${
        params.lastName || ''
      }</strong> (email: ${params.email || ''}) from <strong>${
        params.organization || ''
      }</strong> sent you a message from AI Alliance page:</p>
      <p>Message: ${params.message || ''}</p>
      <br />
      <p style="max-width:700px;text-align:justify;"><small>
        Privacy notice: This email contains business contact \
        information entered by a user in the contact form at \
        <a href='https://thealliance.ai'>thealliance.ai</a>. \
        This information should only be used to respond to the \
        user’s inquiry by email and not for any other purposes. \
        The user indicated they allow IBM to store and process \
        the personal information submitted to provide the content \
        requested.
      </small></p>
    `,
  };

  try {
    const response = await sg.send(msg);
    if (response[0]?.statusCode !== 202) {
      throw response;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e.response?.body || e);
  }
};

const getValidatedBody = (
  body: NextApiRequest['body'],
): EmailParams | { error: string } => {
  try {
    const params = JSON.parse(body);
    if (
      !params.firstName ||
      !params.lastName ||
      !params.email ||
      !params.organization
    ) {
      throw new Error('required value missing');
    }
    return params as EmailParams;
  } catch (e) {
    console.error('[validateBody] Invalid request body:', body, e);
    return { error: String(e) };
  }
};

const hasError = (b: EmailParams | { error: string }): b is { error: string } =>
  b.hasOwnProperty('error');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });
  if (!apiKey)
    return res.status(503).json({ message: 'Mail service not configured' });

  try {
    const body = getValidatedBody(req.body);
    if (hasError(body)) return res.status(400).send(body.error);

    await sendEmail(JSON.parse(req.body));
    res.status(202).send(null);
  } catch (e) {
    res.status(500).send(e);
  }
}
