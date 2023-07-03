import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(_req, res) {

  console.log('Trying here')

  console.log('Trying here 2')

  const client = createClient({url:'rediss://red-cih7qf5gkuvojj9mo5k0:EGUwp7CBTKqdEtfYGDGzu0fa8mEMAi7A@singapore-redis.render.com:6379'});

  client.on("error", (err) => console.log("Other Errors", err));

  await client.connect();

  const value = await client.get('test');

  console.log(value);

  console.log('Done')

  // fetch('https://test-nodejs:10000/api')
  // .then((response) => res.status(200).send(response))
  // // .then((data) => {
  // //   return res.status(200).send(data)  
  // // })
  // .catch((err) => res.status(500).send('Nope ' + err))

  // console.log('Fetched')

  //return res.status(200).send({people: ['Yes']})
}
