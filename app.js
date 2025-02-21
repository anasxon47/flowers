let chat_id = 5713072735;
var telegram_bot_id = "6532459408:AAHg_XFliI-y668pgEFr2Y9gn7VxS7cfS0U"; 

var sendtelegram = function () {
    let inps = document.querySelectorAll("#form input");
    var ismi = inps[0].value;
    var familya = inps[1].value;

    var message = "Ismi: " + ismi + "\nFamilya: " + familya ;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        let firstname = response.result.chat.first_name;
        console.log(firstname);
    });

    document.getElementById("username1").value = "";
    document.getElementById("username2").value = "";
    document.getElementById("username3").value = "";
    document.getElementById("username4").value = "";

    return false;
};
const translations = {
    uzb: {   
        nav_home: "Bosh Sahifa",
        nav_comfort:"Qulaylik",
        nav_care:"G'amxorlik",
        nav_contact:"Aloqa",
        home_h1:"O'simliklar bilan uyingizga tinchilik olib keling",
        home_p:"Biz bilan uyni bezatish uchun orzuingizdagi o'simlikni toping va biz uni amalga oshiramiz",
        comfort_h1:"Qulayliklar",
        plant_reference:"O'simliklar ma'lumotnomasi",
        delivery_free:"Yetkazib berish Bepul",
        take_money:"Har bir yetkazib berish uchun to'lov olinmaydi",
        location:"Manzil",
        city:"Shahar bo'ylab fillallar ko'pligi",
        time:"24/7 vaqtda",
        fast:"Tezkor aloqa",
        refreshing:"uyingizni tetiklantiruvchi o'simliklar bilan juda qulay qiling",
        how_care:"O'simliklarga qanday g'amxo'rlik qilish kerak ?",
        heart:"O'simliklarga butun qalbingiz bilan g'amxo'rlik qiling",
        addjusting:"Yoritishni sozlash",
        hot:"Yopiq o'simliklarga g'amxo'rlik qilayotganda, xona harorati juda sovuq yoki juda issiq emasligiga ishonch hosil qiling",
        fast_water:"Juda tez-tez suv bermang",
        every_day:"Binoda manzarali o'simliklarni sug'orish har kuni amalga oshirilishi shart emas.",
        plant_care:"O’simlikga g’amho’rlik",
        all_plants:" Hamma o’simliklarga birdek mehr ko’rsatish va ular yordamida tabiatni asrash" ,
        Fertilize_regularly:"Muntazam ravishda urug'lantiring",
        end_card:"Yopiq o'simliklar uchun eng zarur oziq moddalar muvozanat uchun azot va poyaning mustahkamligi uchun kaliydir.    ",
        for_communication:"Aloqa uchun",
        send:"Habarni yubormoq"
    },
    eng: {
        nav_home: "Home",
        nav_comfort:"Comfort",
        nav_care:"Care",
        nav_contact:"Contact",
        home_h1:"Bring peace to your home with plants",
        home_p:"Find your dream houseplant with us and we will make it happen",
        comfort_h1:"Comforts",
        plant_reference:"Plant Reference",
        delivery_free:"Free shipping",
        take_money:"There is no charge per delivery",
        location:"Address",
        city:"Lots of branch across the city",
        time:"24/7 time",
        fast:"Fast Contact",
        refreshing:"make your home very comfortable with refreshing plants",
        how_care:"How to care for plants ?",
        heart:"Care for plants with all your heart do it",
        addjusting:"Adjusting the lighting",
        hot:"When caring for indoor plants, make sure that the room temperature is not too cold or too hot",
        fast_water:"Do not water too often",
        every_day:"Watering ornamental plants in the building every day does not need to be done.",
        plant_care:"Plant care",
        all_plants:"Showing equal love to all plants and using them to protect nature",
        Fertilize_regularly:"Fertilize regularly",
        end_card:"The most essential nutrients for indoor plants are nitrogen for balance and potassium for stem strength.",
        for_communication:"for communication",
        send:"Send Message"
    }
};

function switchlanguage(lang) {
    document.getElementById('nav-home').textContent = translations[lang].nav_home;
    document.getElementById('nav-comfort').textContent = translations[lang].nav_comfort;
    document.getElementById('nav-care').textContent = translations[lang].nav_care;
    document.getElementById('nav-contact').textContent = translations[lang].nav_contact;
    document.getElementById('home_h1').textContent = translations[lang].home_h1;
    document.getElementById('home_p').textContent = translations[lang].home_p;
    document.getElementById('comfort_h1').textContent = translations[lang].comfort_h1;
    document.getElementById('delivery_free').textContent = translations[lang].delivery_free;
    document.getElementById('take_money').textContent = translations[lang].take_money;
    document.getElementById('location').textContent = translations[lang].location;
    document.getElementById('city').textContent = translations[lang].city;
    document.getElementById('time').textContent = translations[lang].time;
    document.getElementById('fast').textContent = translations[lang].fast;
    document.getElementById('plant_reference').textContent = translations[lang].plant_reference;
    document.getElementById('refreshing').textContent = translations[lang].refreshing;
    document.getElementById('how_care').textContent = translations[lang].how_care;
    document.getElementById('heart').textContent = translations[lang].heart;
    document.getElementById('addjusting').textContent = translations[lang].addjusting;
    document.getElementById('hot').textContent = translations[lang].hot;
    document.getElementById('fast_water').textContent = translations[lang].fast_water;
    document.getElementById('every_day').textContent = translations[lang].every_day;
    document.getElementById('plant_care').textContent = translations[lang].plant_care;
    document.getElementById('all_plants').textContent = translations[lang].all_plants;
    document.getElementById('Fertilize_regularly').textContent = translations[lang].Fertilize_regularly;
    document.getElementById('end_card').textContent = translations[lang].end_card;
    document.getElementById('for_communication').textContent = translations[lang].for_communication;
    document.getElementById('send').textContent = translations[lang].send;
}
