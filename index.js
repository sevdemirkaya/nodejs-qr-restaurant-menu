const express = require('express');
const app = express();

console.log("DOSYA CALISTI");

let orders = [];

app.use(express.json());
app.use(express.static('public'));

/* ---------------- MENU ---------------- */
app.get('/menu', (req, res) => {
    res.json([
        {
            category: "Sıcak İçecekler",
            items: [
 { id:1, name:"Espresso", price:120, image:"/images/espresso.jpeg" },
 { id:2, name:"Filtre Kahve", price:130, image:"/images/filtercoffee.jpeg" },
 { id:3, name:"Americano", price:135, image:"/images/americano.jpeg" },
 { id:4, name:"Caffe Latte", price:150, image:"/images/cafelatte.jpeg" },
 { id:5, name:"Flat White", price:155, image:"/images/flatwhite.jpeg" },
 { id:6, name:"White Chocolate Mocha", price:170, image:"/images/whitechocolatemocha.jpeg" },
 { id:7, name:"Türk Kahvesi", price:100, image:"/images/turkishcoffe.jpeg" }
]
        },
        {
    category: "Soğuk  İçecekler",
    items: [
        {id: 8, name: "Su", price:50, image:"/images/su.jpeg" },
        { id: 9, name: "Iced Americano", price:155, image:"/images/icedamericano.jpeg" },
        { id: 10, name: "Iced Caffe Latte", price:170, image:"/images/icedcafelatte.jpeg" },
        { id: 11, name: "Iced Caffe Mocha", price:185, image:"/images/icedcoffemocha.jpeg" },
        { id: 12, name: "Iced White Chocolate Mocha", price:185, image:"/images/icedwhitechocolatemocha.jpeg" },
        { id: 13, name: "Iced Caramel Mocha", price:185, image:"/images/icedcaramellatte.jpeg" },
        {id : 14, name: "Limonata", price:120, image:"/images/limonata.jpeg" },
        {id : 15, name: "Ice Tea", price:100, image:"/images/icetea.jpeg" },
        {id : 16, name: "Meyve Suyu", price:130, image:"/images/fruitjuice.jpeg" },
        {id : 17, name: "Smoothie", price:150, image:"/images/smoothie.jpeg" },
        {id: 18, name: "Kola", price:185, image:"/images/kola.jpeg" },
        {id: 19, name: "Fanta", price:185, image:"/images/fanta.jpeg" },
        {id: 20, name: "Sprite", price:185, image:"/images/sprite.jpeg" },
        {id: 21, name: "Milkshake", price:185, image:"/images/milkshake.jpeg" },
        {id: 22, name: "Bubble Tea", price:300, image:"/images/bubbletea.jpeg" },
        {id: 23, name: "Matcha latte", price:450, image:"/images/coffee-milkshake.jpeg" },


    ]
},
        {
            category: "Tatlılar",
            items: [
                { id: 24, name: "Limonlu Cheesecake", price:215, image:"/images/lemoncheesecake.jpeg" },
                { id: 25, name: "Brownie", price:220, image:"/images/brownie.jpeg" },
                { id: 26, name: "Bella Vista", price:220, image:"/images/bellavista.jpeg" },
                {id: 27, name: "San Sebastian", price:220, image:"/images/sansebastian.jpeg" },
                {id: 28, name: "Cup Cake", price:150, image:"/images/cupcake.jpeg" },
                {id: 29, name: "Waffle Combo", price:800, image:"/images/waffle.jpeg" }
            ]
        },
        {
            category: "Sandviçler",
            items: [
                { id: 30, name: "Sandviç Ev", price:190 ,image:"/images/evsandvic.jpeg" },
                { id: 31, name: "Kahvaltı Sandviç", price:215, image:"/images/kahvaltisandvic.jpeg" },
                { id: 32, name: "Tavuk Izgara Sandviç", price:215, image:"/images/tavuksandvic.jpeg" },
                { id: 33, name: "Dana Janbon Sandviç", price:215, image:"/images/danajambon.jpeg" }
            ]   
        },
        {
    category: "Ana Yemekler",
    items: [
        { id: 34, name: "Izgara Tavuk", price: 295 , image:"/images/izgaratavuk.jpeg" },
        { id: 35, name: "Köfte Tabağı", price: 310, image:"/images/kofte.jpeg" },
        { id: 36, name: "Dana Antrikot", price: 420, image:"/images/danaantrikot.jpeg" },
        { id: 37, name: "Fettuccine Alfredo", price: 280, image:"/images/fettucinialfredo.jpeg" },
        { id: 38, name: "Napoli Pizza", price: 300, image:"/images/napolipizza.jpeg" }
    ]
},

{
    category:"Asya Mutfağı",
    items:[
        { id: 39, name: "Sushi California Roll", price: 350, image:"/images/californiaroll.jpeg" },
        { id: 40, name: "Pad Thai", price: 320, image:"/images/padthai.jpeg" },
        { id: 41, name: "Ramen", price: 300, image:"/images/ramen.jpeg" },
        { id: 42, name: "Kung Pao Tavuk", price: 310, image:"/images/kungpao.jpeg" },
        { id: 43, name: "Spring Roll", price: 150, image:"/images/springroll.jpeg" },
        { id: 44, name: "Salmon Nigiri", price: 380, image:"/images/salmonnigiri.jpeg" },
        { id: 45, name: "Tempura Roll", price: 360, image:"/images/tempuraroll.jpeg" }
    ]
},
{
    category:"Burger",
    items:[
        { id: 46, name: "Smoke Chili Burger", price: 400, image:"/images/smokechiliburger.jpeg" },
        { id: 47  , name: "Şefin Özel Burgeri", price: 500, image:"/images/sefinozel.jpeg" },
        { id: 48, name: "Vejetaryen Burger", price: 450, image:"/images/vegieburger.jpeg" },
        { id: 49, name: "Tavuk Burger", price: 300, image:"/images/tavukburger.jpeg" },
        { id: 50, name: "Cheeseburger", price: 330, image:"/images/cheeseburger.jpeg" },
        { id: 51, name: "Meat Burger", price: 350, image:"/images/meatburger.jpeg" }
    ]
},
{
 category: "Salatalar",
    items: [
        { id: 52, name: "Sezar Salata", price: 180, image:"/images/sezarsalata.jpeg" },
        { id: 53, name: "Yunan Salata", price: 160, image:"/images/yunansalata.jpeg" },
        { id: 54, name: "Akdeniz Salata", price: 170, image:"/images/akdenizsalata.jpeg" },
        { id: 55, name: "Ton Balıklı Salata", price: 190, image:"/images/tunasalata.jpeg" },
        { id: 56, name: "Kinoa Salatası", price: 200, image:"/images/kinoasalata.jpeg" }
    ]  
},
{
    category: "Başlangıç",
    items: [
        { id: 57, name: "Çıtır Tavuk", price: 200, image:"/images/citirtavuk.jpeg" },
        { id: 58, name: "Peynir Çubukları", price: 150, image:"/images/mozarella.jpeg" },
        { id: 59, name: "Patates Kızartması", price: 200, image:"/images/fries.jpeg" },
        { id: 60, name: "Soğan Halkaları", price: 150, image:"/images/onionring.jpeg" },
        { id: 61, name: "Garlic Bread", price: 150, image:"/images/garlicbread.jpeg" }
    ]   
},
{
    category: "Kids Menu",
    items: [
        { id: 62, name: "Mini Pizza", price: 200, image:"/images/minipizza.jpeg" },
        { id: 63, name: "Mini Kızartması", price: 200, image:"/images/fries.jpeg" },
        { id: 64, name: "Dino Nuggets", price: 230, image:"/images/dinonuggets.jpeg" },
        { id: 65, name: "Mini Burger", price: 200, image:"/images/miniburger.jpeg" },
        { id: 66, name: "Maxi Burger", price: 300, image:"/images/cocukburger.jpeg" },
        { id: 67, name: "Neşeli IceCream", price: 150, image:"/images/neselidondurma.jpeg" },
        { id: 68, name: " Kitty Pasta", price: 299, image:"/images/hellokittypasta.jpeg" }
    ]
},
{
    category: "Combo Kasa Menüler",
    items:[
        { id: 69, name: "Heinz Combo Kasa 1", price: 3500, image:"/images/combobox.jpeg" },
        { id: 70, name: "Tavuk Combo Kasa 2", price: 800, image:"/images/tavukcombo.jpeg" },
        { id: 71, name: "Sweet Burger Combo Kasa 3", price: 2500, image:"/images/soslutavukcombo.jpeg" },
        { id: 72, name: "Friends Combo Kasa 4", price: 600, image:"/images/friendscombo.jpeg" },
        { id: 73, name: "Hot Dog Combo Kasa 5", price: 2000, image:"/images/hotdog.jpeg" }
         ]
},
{ 
    category: "Kahvaltı",
    items:[
        { id: 74, name: "Serpme  Kahvaltı", price: 2000, image:"/images/serpmekahvalti.jpeg" },
        { id: 75, name: "Mini Serpme Kahvaltı", price: 500, image:"/images/minikahvalti.jpeg" },
        { id: 76, name: "Patates Tabağı", price: 300, image:"/images/kahvaltipatatesi.jpeg" },
        { id: 77, name: "Simit Tabağı", price: 400, image:"/images/simittabagi.jpeg" },
        { id: 78, name: "Menemen", price: 200, image:"/images/Menemen.jpeg" },
        { id: 79, name: "Sucuklu Yumurta", price: 200, image:"/images/sucukluyumurta.jpeg" },
        { id: 80, name: "Peynir Tabağı", price: 300, image:"/images/peynirtabagi.jpeg" },
        { id: 81, name: "Kuymak", price: 300, image:"/images/kuymak.jpeg" },
        { id: 82, name: "Sucuklu Tost", price: 300, image:"/images/tost.jpeg" },
        {id: 83, name: "Kasarli Tostu", price: 300, image:"/images/kasarlitost.jpeg" },
        {id: 84, name: "Kuru Hasan", price: 250, image:"/images/kuruhasan.jpeg" }
]
},
{
    category: "Kokteyller",
    items: [
        { id: 85, name: "Margarita Pizza", price: 600, image:"/images/margarita.jpeg" },
        { id: 86, name: "Mojito", price: 600, image:"/images/mojito.jpeg" },
        { id: 87, name: "Piña Colada", price: 600, image:"/images/pina.jpeg" },
        { id: 88, name: "Cosmopolitan", price: 600, image:"/images/cosmopolitan.jpeg" },
        { id: 89, name: "Tequila", price: 600, image:"/images/tequila.jpeg" }
    ]
},
{
    category: "Vegan",
    items: [
        { id: 90, name: "Vegan Burger", price: 450, image:"/images/veganb.jpeg" },
        { id: 91, name: "Vegan Pizza", price: 400, image:"/images/veganpizza.jpeg" },
        { id: 92, name: "Vegan Salata", price: 350, image:"/images/vegans.jpeg" },
        { id: 93, name: "Vegan Tatlı", price: 300, image:"/images/vegantatli.jpeg" },
        { id: 94, name: "Vegan Smoothie", price: 250, image:"/images/vegansmothie.jpeg" }
     ]
},
{
    category: "Kampanyalar",
    items: [
        { id: 95, name: "Kampanya Tatlı", price: 100, image:"/images/kampanya1.jpeg" },
        { id: 96, name: "Kampanya Burger", price: 200, image:"/images/kampanya2.jpeg" },
        { id: 97, name:" Kampanya Burger 2", price: 300, image:"/images/kampanya3.jpeg" },
        { id: 98, name: "Latte ve Tatlı", price: 400, image:"/images/kampanya4.jpeg" },
        { id: 99, name: "2 kahve ve tatlı", price: 500, image:"/images/tatlive2kahve.jpeg" }
    ]
},
{    category: "Bowl",
    items: [
        { id: 100, name: "Acai Bowl", price: 250, image:"/images/acaibowl.jpeg" },
        { id: 101, name: "Mango Bowl", price: 250, image:"/images/mangobowl.jpeg" },
        { id: 102, name: "Çilekli Bowl", price: 250, image:"/images/strawberrybowl.jpeg" },
        { id: 103, name: "Kahveli Bowl", price: 250, image:"/images/coffeebowl.jpeg" },
        { id: 104, name: "Fıstık Ezmeli Bowl", price: 250, image:"/images/peanutbowl.jpeg" }
     ]
}
    
]);
});

/* ---------------- ORDER POST ---------------- */
app.post('/order', (req,res)=>{
    console.log("POST GELDI 🔥");
    console.log("Gelen veri:", req.body);

    const order = {
        ...req.body,
        id: Date.now(),
        time: Date.now(),
        status: "waiting"
    };

    orders.push(order);

    console.log("Guncel orders:", orders);

    res.json(order);
});

/* ---------------- ORDER GET ---------------- */
app.get('/orders', (req,res)=>{
    res.json(orders);
});

/* ---------------- ROOT ---------------- */
app.get('/', (req, res) => {
    res.send('Server calisiyor 🚀');
});
app.delete("/delete/:id",(req,res)=>{

const id = Number(req.params.id)

orders = orders.filter(o => o.id !== id)

console.log("Sipariş silindi:", id)

res.json({status:"deleted"})

})

/* ---------------- LISTEN (EN SON) ---------------- */
app.listen(3000, () => {
    console.log('Server 3000 portunda calisiyor');
});
app.post("/pay/:id",(req,res)=>{

const id = Number(req.params.id)

const order = orders.find(o => o.id == id)

if(order){
    order.payment = req.body.payment
    order.paid = true
    order.status = "paid"
}

res.json({status:"ok"})

})
app.post("/status/:id",(req,res)=>{

const id = Number(req.params.id)

const order = orders.find(o => o.id === id)

if(order){
    order.status = req.body.status
}

res.json({status:"updated"})

})
app.post('/order', (req,res)=>{

const order = {
    id: Date.now(),
    table: req.body.table,   // QR'den gelen masa
    items: req.body.items,
    total: req.body.total,
    status: "waiting",
    time: Date.now()
};

orders.push(order);

res.json(order);

});