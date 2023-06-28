import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(_req, res) {

  console.log('Trying here')

  fetch('https://test-nodejs-qzou.onrender.com/api')
  .then((response) => response.json())
  .then((data) => {
    return res.status(200).send(data)  
  })
  .error((err) => res.status(500).send('Nope ' + err))

  console.log('Fetched')

  //return res.status(200).send({people: ['Yes']})
}
