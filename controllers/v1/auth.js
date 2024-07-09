import jwt from "jsonwebtoken"

let users = [
  {
    username: "admin",
    password: "adminPassword"
  }
]

const secretKey = process.env.JWT_SECRET_KEY

export const loginUser = (req, res) => {
  const {username, password} = req.body

  const user = users.find(user => user.username === username && user.password === password)

  if(user) {
    const tokenPayload = {
      username: user.username
    }
    const accessToken = jwt.sign(tokenPayload, secretKey)
    res.json({accessToken})
  } else {
    res.send(`Username or Password is incorrect.`)
  }
}

export const authenticateUser = (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers.authorization

  if(authHeader){
    const token = authHeader.split(" ")[1]
    jwt.verify(token, secretKey, (error, user) => {
      if (error) return res.sendStatus(403)
      
      req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
}