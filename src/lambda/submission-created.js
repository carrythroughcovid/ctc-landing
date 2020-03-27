import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://api.postmarkapp.com/email/withTemplate";
  const json = JSON.parse(event.body)
  const { email } = json.payload.data
  console.log(json)
  const options = {
    from: 'contact@carrythroughcovid.com',
    to: email,
    TemplateId: 17062289,
    TemplateModel: { ...json.payload.data, product_name: "Carry Through Covid" }
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