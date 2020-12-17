const express = require('express')
const app = express()
const PORT = 5000
app.use(express.static('public'))


// Wir sagen express welche Template Engine er verwenden soll. Diese muss nicht importiert werden! Das macht Express im Hintergrund für uns!
app.set('view engine', 'ejs')

// Express sucht automatisch in einem views Ordner nach den Templates!
// Wenn man einen anderen Ordner haben wollte muss man das Express auch noch sagen!
const myData = [
    { name: "Superman", age: 22 },
    { name: "Wonderwoman", age: 21 },
    { name: "Batman", age: 42 },
    { name: "Iron Man", age: 24 },
]
app.get('/', (req, res) => {
    // Kein sendfile! Sonder render! Da die Template Engine das noch verarbeiten muss / HTML erzeugen muss!
    // nur den Dateinamen! Den Ordner und die Dateiendung weiß er durch das app.set('view engine', 'ejs') 
    // view engine => Ordner views
    // ejs => Dateiendung ejs
    res.render('index', { title: "My super Homepage!", msg: "Willkommen auf meiner HP!", isLoggedin: true, userName: "Batman", data: myData })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About us" })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact us!" })
})
app.get('/faq', (req, res) => {
    res.render('faq', { title: "Our FAQ Section" })
})



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))