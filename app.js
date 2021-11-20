// // // Reply using AIML Parser
// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const AIMLParser = require('aimlparser')

// const app = express()
// const port = process.env.PORT || 4000
// const aimlParser = new AIMLParser({ name: 'WarongkornBot' })
// aimlParser.load(['./test-aiml.xml']

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//   let reply_token = req.body.events[0].replyToken
//   let msg = req.body.events[0].message.text
//   aimlParser.getResult(msg, (answer, wildCardArray, input) => {
//         reply(reply_token, answer)
//     })
//     res.sendStatus(200)
// })

// app.listen(port)
// function reply(reply_token, msg) {
//   let headers = {
//     'Content-Type': 'application/json',
//     Authorization:
//       'Bearer duMhSiSLxyiZ/ROTJXtEfZOZ1En2WyGbmgXnz6OkbWcvCLmcDRFi9tpzHsaSa7Gi6hRn6cFJlqMBRdYLsTDRQ54Qk3H8uwGEKlo53Ha48kE+7xDHrap+BVPPBseg2cMT5HWFlfl+r1uz557jc6EY5QdB04t89/1O/w1cDnyilFU=',
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

//AIML Interpreter

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const AIMLInterpreter = require('aimlinterpreter')

const app = express()
const port = process.env.PORT || 4000
const aimlInterpreter = new AIMLInterpreter({ name: 'HelloBot' })

aimlInterpreter.loadAIMLFilesIntoArray(['./test-aiml.xml'])

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  let msg = req.body.events[0].message.text
  // aimlInterpreter.findAnswerInLoadedAIMLFiles(
  //   msg,
  //   (answer, wildCardArray, input) => {
  //     reply(reply_token, answer)
  //   }
  // )
  reply(reply_token, 'hello')
  res.sendStatus(200)
})

app.listen(port)

function reply(reply_token, msg) {
  let headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer duMhSiSLxyiZ/ROTJXtEfZOZ1En2WyGbmgXnz6OkbWcvCLmcDRFi9tpzHsaSa7Gi6hRn6cFJlqMBRdYLsTDRQ54Qk3H8uwGEKlo53Ha48kE+7xDHrap+BVPPBseg2cMT5HWFlfl+r1uz557jc6EY5QdB04t89/1O/w1cDnyilFU=',
  }

  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: 'text',
        text: msg,
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

// normal reply
// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')

// const app = express()
// const port = process.env.PORT || 4000
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.post('/webhook', (req, res) => {
//   let reply_token = req.body.events[0].replyToken
//   let msg = req.body.events[0].message.text
//   reply(reply_token, msg)
//   res.sendStatus(200)
// })
// app.listen(port)
// function reply(reply_token, msg) {
//   let headers = {
//     'Content-Type': 'application/json',
//     Authorization:
//       'Bearer duMhSiSLxyiZ/ROTJXtEfZOZ1En2WyGbmgXnz6OkbWcvCLmcDRFi9tpzHsaSa7Gi6hRn6cFJlqMBRdYLsTDRQ54Qk3H8uwGEKlo53Ha48kE+7xDHrap+BVPPBseg2cMT5HWFlfl+r1uz557jc6EY5QdB04t89/1O/w1cDnyilFU=',
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
