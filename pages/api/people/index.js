import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(_req, res) {

  fetch('https://test-nodejs-qzou.onrender.com/api')
  .then((response) => response.json())
  .then((data) => {
    return res.status(200).send(data)  
  });

  //return res.status(200).send({people: ['Yes']})
}
