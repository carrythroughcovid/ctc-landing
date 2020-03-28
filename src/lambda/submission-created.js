import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://api.postmarkapp.com/email/withTemplate";
  const BUSINESS_TEMPLATE = 17062289
  const COMMUNITY_TEMPLATE = 17117899
  const json = JSON.parse(event.body)
  const data = json.payload.data
  let { email } = data
  const isBusinessForm = "businessName" in data
  console.log("DATA: ", data)

  let options = {
    from: 'contact@carrythroughcovid.com',
    to: email,
    TemplateModel: { ...data }
  }

  const notEmpty = field => (
    (field in data) && (data[field] !== "")
  )

  if (isBusinessForm) {
    const businessType = notEmpty("businessTypeOther") ? data.businessTypeOther : data.businessType
    const offeringType = notEmpty("offeringTypeOther") ? data.offeringTypeOther : data.offeringType

    options = {
      ...options,
      TemplateId: BUSINESS_TEMPLATE,
      TemplateModel: { ...options.TemplateModel, businessType, offeringType }
    }
  } else {
    options = {
      ...options,
      TemplateId: COMMUNITY_TEMPLATE
    }
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