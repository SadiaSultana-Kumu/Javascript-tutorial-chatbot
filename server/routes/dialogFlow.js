const express = require('express');
const router = express.Router();
const dialogflow = require('@google-cloud/dialogflow');
const sessionId = require('uuid');

// Create a new session
const sessionClient = new dialogflow.SessionsClient(
    {
        keyFilename: process.env.KEY_FILE_NAME
    }
);
const sessionPath = sessionClient.projectAgentSessionPath(projectId = process.env.AGENT_PPROJECT_ID, sessionId);

// We will make two routes 


// Text Query Route

router.post('/text-query', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,

                // The language used by the client (en-US)
                languageCode: process.env.LANGUAGE_CODE,
            }

        }
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})


module.exports = router;