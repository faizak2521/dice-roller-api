# 🎲 Dice Roller API  

**Author:** Faiza Khan  

A simple Node.js + Express API that generates random dice rolls.  
This API can be reused in *any* dice roller app, game, or project that needs random numbers.  

---

## 🌐 Live API  
You can try it right now in your browser:  
👉 [Dice Roller API](https://dice-roller-api-fak-cybpc2h6djf5c5ex.canadacentral-01.azurewebsites.net/api/random?min=1&max=6)  

---

## 🚀 How It Works  
The API listens for requests and returns a random number between a minimum and maximum range.  
- Default: a **6-sided dice** roll  
- Custom: you can pass `min` and `max` in the query string  

---

## Usage in a JS file (copy and paste)
```js
async function rollDice() {
  const res = await fetch('https://dice-roller-api-fak-cybpc2h6djf5c5ex.canadacentral-01.azurewebsites.net/api/random?min=1&max=6')
  const data = await res.json()
  console.log("You rolled:", data.value)
}
