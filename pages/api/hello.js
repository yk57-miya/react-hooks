// req = HTTP incoming message, res = HTTP server response
const handler = (req, res) => {
  console.log(req, res);

  res.status(200).json({ text: 'Hello' });
};

export default handler;
