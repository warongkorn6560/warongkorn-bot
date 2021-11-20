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
const aimlInterpreter = new AIMLInterpreter({ name: 'HelloBot', age: '25' })

aimlInterpreter.loadAIMLFilesIntoArray(['./test.aiml.xml'])
const aimlPromise = function (question) {
  return new Promise(function (resolve, reject) {
    aimlInterpreter.findAnswerInLoadedAIMLFiles(
      question,
      function (answer, wildCardArray, input) {
        return resolve(answer)
        //should also handle reject!!! this is demo code only :)
      }
    )
  })
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  let msg = req.body.events[0].message.text

  aimlPromise(msg).then((res) => reply(reply_token, res))

  // aimlInterpreter.findAnswerInLoadedAIMLFiles(
  //   req.body.events[0].message.text,
  //   (answer, wildCardArray, input) => reply(reply_token, input)
  // )
  res.sendStatus(200)
})

app.listen(port)

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
