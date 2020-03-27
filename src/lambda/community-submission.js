import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://api.postmarkapp.com/email/withTemplate";
  const json = JSON.parse(event.body)
  const data = json.payload.data
  let { email } = data
  console.log(json)
  const options = {
    from: 'contact@carrythroughcovid.com',
    to: email,
    TemplateId: 17117899,
    TemplateModel: { ...data }
  }


  return fetch(
    API_ENDPOINT,
    { method: 'post',
      body: JSON.stringify(options),
      headers:
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": process.env.POSTMARK_TOKEN
      }
    }
  ).then(response => response.json())
   .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => console.log(error));
};