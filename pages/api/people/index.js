import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(_req, res) {

  console.log('Trying here')

  fetch('https://test-nodejs-qzou:10000/api')
  .then((response) => res.status(200).send(response))
  // .then((data) => {
  //   return res.status(200).send(data)  
  // })
  .catch((err) => res.status(500).send('Nope ' + err))

  console.log('Fetched')

  //return res.status(200).send({people: ['Yes']})
}
