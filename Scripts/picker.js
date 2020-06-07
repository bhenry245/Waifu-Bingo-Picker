$(document).ready(function(){

    var waifuDescriptions = ["Zero Two - Darling in the Franxx","Ichigo - Darling in the Franxx","Rem - Re:Zero","Emilia - Re:Zero","Asuka Langley - Evangelion", "Ayanami Rei - Evangelion", "Rukia Kuchiki - Bleach", "Orihime Inoue - Bleach", "Yoruichi Shihouin - Bleach", "Hinata Hyuga - Naruto",
                             "Sakura Haruno - Naruto", "Ten Ten - Naruto", "", "Simca - Air Gear", "Akame - Akame Ga Kill", "Revy Lee - Black Lagoon", "Black Rock Shooter - Black Rock Shooter", "Ochaco Uraraka - My Hero Academia", "Tsuyu Asui - My Hero Academia", "Toru Hagakure - My Hero Academia",
                             "S.A.M. - Cannon Busters", "Clare - Claymore", "C.C - Code Geass", "Faye Valentine - Cowboy Bebop", "Kyoko Kirigiri - Danganronpa", "Ringo Noyamano - Air Gear", "Junko Enoshima - Danganronpa", "Chiyuki - Death Parade", "Rin Tohsaka - Fate Series" ,
                             "Saber - Fate Series", "Sakura Matou - Fate Series", "Inori Yuzuriha - Guilty Crown", "Rias Gremory - High School DxD", "Elsie - The World God Only Knows", "Jabami Yumeko - Kakegurui", "Ryūko Matoi - Kill la Kill", "Megumin - Konosuba", "Darkness - Konosuba", "Aqua - Konosuba", "Motoko Kusanagi - Ghost in the Shell",
                             "Esdeath - Akame Ga Kill", "Gasai Yuno - Mirai Nikki", "San - Princess Mononoke", "Jibril - No Game No Life", "Tornado - One Punch Man", "Panty - Panty & Stocking", "Stocking - Panty & Stocking", "Mizore - Rosario Vampire", "Inner Moka - Rosario Vampire", "Re-L - Ergo Proxy", 
                             "Mikasa - Attack On Titan", "Blair - Soul Eater", "Kurisu Makise - Steins;Gate", "Haruhi Suzumiya - The Melancholy of Haruhi Suzumiya", "Touka - Tokyo Ghoul", "Violet Evergarden - Violet Evergarden", "Chika - Kaguya-Sama", "Raphtalia - Shield Hero", "Sagiri - Eromanga Sensei", "Senjougahara - Bakemonogatari", 
                             "AE3803 - Cells at Work", "Shinobu - Demon Slayer", "Nikumi - Food Wars", "Hestia - DanMachi", "Rikka - Gridman", "Mai - Bunny Girl Senpai", "Bishamon - Noragami", "Shiro - Deadman Wonderland", "Alex Benedetto - Gangsta", " Akane Tsunemori - Psycho-Pass",
                             "Meiko Shiraki - Prison School", "Sakura Hibiki - Dumbbell Nan Kilo Moteru?", "Hana Midorikawa - Prison School", "Celty Sturluson - Durarara!!", "Winry Rockbell - Fullmetal Alchemist", "Seras Victoria - Hellsing", "Saeko Busujima - High School of the Dead", "Mumei - Kabaneri of the Iron Fortress", "Android 18 - DBZ", "Mirko - My Hero Academia", 
                             "Shinoa Hīragi - Seraph of the End", "Lucy Heartfilia - Fairy Tail", "Nadeko Sengoku - Bakemonogatari", "Yoko Littner - Gurren Lagann", "Albedo - Overlord", "Maki Oze - Fire Force", "Misaka Mikoto - A Certain Scientific Railgun", "Mio Akiyama - K-ON!", "Sasha Blouse - Attack On Titan", "Hiyori - Noragami",
                             "Kallen Kōzuki - Code Geass", "Misty - Pokemon", "Sinon - Sword Art Online", "Haruko Haruhara - FLCL", "Sonoshee McLaren - RedLine", "Kuroyukihime - Accel World", "Sailor Moon - Sailor Moon", "Misa Amane - Death Note", "Holo - Spice & Wolf", "Tohru - Miss Kobayashi's Dragon Maid"]

    var waifuImg = $('#mainImg');
    var selectedList = $('.selected');
    var randomNumbers = chance.unique(chance.natural, 100, {min: 1, max: 100});
    randomNumbers.splice(randomNumbers.indexOf(13), 1);


    var i = 0;
    $('#pickerBtn').click(function() {
        if( i >= 99) {
            alert("That's all the waifus in the game, I've claimed the rest!\nThanks for playing!");
        }

        var imgSrc = 'Images/Waifu' + randomNumbers[i] + '.png';
        $('#description').text(waifuDescriptions[randomNumbers[i] - 1]);
        selectedList.append("<li><img src=" + imgSrc + " class='center-piece'></li>" );


        waifuImg.attr('src', imgSrc)
        waifuImg.show();
        i++;
    })





})
