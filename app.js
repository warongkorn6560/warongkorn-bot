// // Reply using AIML
// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const AIMLInterpreter = require('aimlinterpreter')

// const app = express()
// const port = process.env.PORT || 4000
// const aimlInterpreter = new AIMLInterpreter({ name: 'WarongkornBot' })

// aimlInterpreter.loadAIMLFilesIntoArray(['./test-aiml.xml'])

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//   let reply_token = req.body.events[0].replyToken
//   let msg = req.body.events[0].message.text
//   aimlInterpreter.findAnswerInLoadedAIMLFiles(
//     msg,
//     (answer, wildCardArray, input) => {
//       reply(reply_token, answer)
//     }
//   )
//   res.sendStatus(200)
// })

// app.listen(port)

// function reply(reply_token, msg) {
//   let headers = {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer {xxxxx}',
//   }

//   let body = JSON.stringify({
//     replyToken: reply_token,
//     messages: [
//       {
//         type: 'text',
//         text: msg,
//       },
//     ],
//   })

//   request.post(
//     {
//       url: 'https://api.line.me/v2/bot/message/reply',
//       headers: headers,
//       body: body,
//     },
//     (err, res, body) => {
//       console.log('status = ' + res.statusCode)
//     }
//   )
// }

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  reply(reply_token)
  res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
  let headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer d74fa631e540526a6e2152b614299049',
  }
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: 'text',
        text: 'Hello',
      },
      {
        type: 'text',
        text: 'How are you?',
      },
    ],
  })
  request.post(
    {
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log('status = ' + res.statusCode)
    }
  )
}
