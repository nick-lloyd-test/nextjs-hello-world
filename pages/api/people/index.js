import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(_req, res) {
  return res.status(200).json({peoples: ['John']})
}
