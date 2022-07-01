import { createTransport } from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: "ytk.jagaimo@gmail.com",
      pass: 'uqgjdiljftjvvnxe',
    },
  });

  const data = JSON.parse(req.body);
  await transporter.sendMail({
    from: "info@trybe.co.jp",
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    タイトル
    ${data.title}

    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });
  await transporter.sendMail({
    from: 'sender@mail.com',
    to: "ytk0202@docomo.ne.jp",
    subject: `【お問い合わせ】${data.name}様より`,
    text: `
    タイトル
    ${data.title}

    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });

  res.status(200).json({
    success: true,
  });
};