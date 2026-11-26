const characters = [
    // Saint Seiya
    {
        name: "Seiya de Pégaso",
        aliases: ["seiya", "cavaleiro de pegaso","Cavaleiro de pegasos", "pégaso","cavaleiro de pegaso","Cavaleiro de pégaso"],
        anime: "Saint Seiya",
        image: "img/seiya.webp", // High quality placeholder or representative art
        realImage: "img/seiya.webp",
        clue: "Protagonista destemido que veste a armadura de bronze de Pégaso e possui o golpe Meteoro de Pégaso."
    },
    {
        name: "Ikki de Fênix",
        aliases: ["ikki", "fenix", "cavaleiro de fenix", "cavaleiro de fenix", "Cavaleiro de fênix", "cavaleiro de fênix"],
        anime: "Saint Seiya",
        image: "img/ikki.webp",
        realImage: "img/ikki.webp",
        clue: "Conhecido como o Cavaleiro mais solitário e implacável; sua armadura renasce das cinzas."
    },
   
    {
        name: "Shun de Andrômeda",
        aliases: ["shun", "cavaleiro de andrômeda", "Shun", "Cavaleiro de Andrômeda"],
         anime: "Saint Seiya",
        image: "img/shun.webp",
        realImage: "img/shun.webp",
        clue: "Cavaleiro mais puro"
    },
    {
        name:"Hyoga de Cisne",
        aliases:["Hyoga", "hyoga", "Cavaleiro de cisne", "cavaleiro de cisne"],
         anime: "Saint Seiya",
        image:"img/hyoga.webp",
        realImage:"img/hyoga.webp",
        clue:"Cavaleiro congelante"
    },
    {
        name:"Shiryu de Dragão",
         aliases:["shiryu", "Shiryu", "cavaleiro de dragão", "Cavaleiro de dragão", "cavaleiro de dragao", "Cavaleiro de Dragao" ],
          anime: "Saint Seiya",
         image:"img/shiryu.webp",
         realImage:"img/shiryu.webp",
         clue:"cavaleiro cego, luta mais sem sua armadura que com"
    },
     {
        name: "Shaka de Virgem",
        aliases: ["shaka", "virgem", "shaka de virgem", "Shaka de Virgem", "shaka de Virgem", "Shaka de virgem", "cavaleiro de virgem"],
        anime: "Saint Seiya",
        image: "img/shaka.webp",
        realImage: "img/shaka.webp",
        clue: "Considerado o homem mais próximo de Deus, costuma manter os olhos fechados para elevar seu cosmo."
    },
    {
        name:"Mu de Áries",
        aliases:["Mu", "mu", "mu de aries", "Mu de aries", "mu de áries", "Mu de áries", "Mu de Áries", "cavaleiro de aries"],
         anime: "Saint Seiya",
        image:"img/Mu.webp",
        realImage:"img/Mu.webp",
        clue:"Cavaleiro de oouro com dom na arte da reparação"
    },

    {
        name:"Aldebaran de Touro",
        aliases:["aldebaran de touro", "Aldebaran de touro", "aldebaran", "Aldebaran", "cavaleiro de touro"],
         anime: "Saint Seiya",
         image:"img/aldabaran.jpg",
         realImage:"img/aldabaran.jpg",
         clue: "cavaleiro de ouro maior que uma muralha"
    },

    {
        name:"Aiolos de Sagitário",
        aliases:["Aiolos", "aiolos", "Cavaleiro de sagitário", "Cavaleiro de sagiario", "Cavaleiro de Sagitário", "cavaleiro de sagitário", "cavaleiro de sagitario",],
        anime:"Saint Seiya",
        image:"img/aioros.webp",
        realImage:"img/aioros.webp",
        clue:"A justiça do santuario"
    },
    {
        name:"Aiolia de Leão",
        aliases:["Aiolia", "aiolia", "Aiolia de Leão", "cavaleiro de leao" ,"Aiolia de leão",  "Aiolia de Leao",  "Aiolia de leao", "aiolia de Leão",  "aiolia de leão",  "aiolia de Leao", "aiolia de leao"],
        anime:"Saint Seiya",
        image:"img/aiolia.webp",
        realImage:"img/aiolia.webp",
        clue:"O mais nobre e corajoso e de puro coração"
    },
    {
        name:"Camus de Aquário",
        aliases:["Camus", "camus", "Camus de Aquário", "cavaleiro de aquario" ,"Camus de Aquario", "Camus de aquario", "Camus de aquário", "camus de Aquario", "camus de aquario", "camus de aquário"],
        anime:"Saint Seiya",
        image:"img/Camus.webp",
        realImage:"img/Camus.webp",
        clue:"É um dos Cavaleiros de Ouro mais poderoso e respeitado do universo de Os Cavaleiros do Zodíaco, guardião da 11ª Casa Zodiacal."
    },
    {
        name:"Afrodite de peixes",
        aliases:["Afrodite", "afrodite", "cavaleiro de peixes" ,"Afrodite de Peixes", "Afrodite de peixes", "afrodite de peixes", "afrodite de Peixes"],
        anime:"Saint Seiya",
        image:"img/afrodite.webp",
        realImage:"img/afrodite.webp",
        clue:" Acredita que ,a força é a justiça, seguindo o falso Grande Mestre (Saga de Gêmeos) sob a convicção de que a paz na Terra só pode ser mantida através do poder."
    },
    {
        name:"Saga de Gêmeos",
        aliases:["Saga de Gêmeos", "cavaleiro de gemeos" ,"Saga de Gemeos", "saga", "Saga"],
        anime:"Saint Seiya",
        image:"img/Saga.webp",
        realImage:"img/Saga.webp",
        clue:"Ele é o ying yang, 2 personalidades dividindo um mental, a bondade de um anjo e um demonio furtivo é mais veloz do que a luz"

    },
    {
        name:"Shura de Capricórnio",
        aliases:["Shura", "shura", "Shura de Capricórnio", "cavaleiro de capricornio" ,"Shura de Capricornio", "Shura de capricórnio", "Shura de capricornio", "shura de capricórnio", "shura de capricornio"],
        anime:"Saint Seiya",
        image:"img/Shura.webp",
        realImage:"img/Shura.webp",
        clue:"Espartano que possui o golpe Excalibur"
    },
    {
        name:"Máscara da Morte de Câncer",
        aliases:["Máscara da Morte de Câncer", "Máscara da Morte", "mascara da morte" ,"Mascara da Morte de Cancer", "máscara da morte de câncer", "mascara da morte de cancer", "cavaleiro de cancer"],
        anime:"Saint Seiya",
        image:"img/mascaradamorte.jpg",
        realImage:"img/mascaradamorte.jpg",
        clue:"o ceifador de almas entre os cavaleiros de ouro"
    },
    {
        name:"Dohko de Libra",
        aliases:["Dohko de Libra", "dohko de libra","Dohko", "dohko", "cavaleiro de libra", "Cavaleiro de Libra"],
        anime:"Saint Seiya",
        image:"img/Dohko.webp",
        realImage:"img/Dohko.webp",
        clue:"Mestre e criador do colera do dragão, herdeiro das 12 armas, cavaleiro de ouro"
    },
    {
        name:"Milo de Escorpião",
        aliases:["Milo de Escorpião", "milo de escorpião", "Milo", "milo", "cavaleiro de escorpiao"],
        anime:"Saint Seiya",
        image:"img/Milo.webp",
        realImage:"img/Milo.webp",
        clue:"Cavaleiro de ouro, sorrateiro e perigoso",
    },
{
    name:"Saori Kido",
    aliases:["Saori", "saori", "Athena", "athena"],
    anime:"Saint Seiya",
    image:"img/saori.jpg",
    realImage:"img/saori.jpg",
    clue:"Atual reencarnação da deusa da sabedoria e da guerra"
},


    // To Love-Ru
    {
        name: "Lala Satalin Deviluke",
        aliases: ["lala", "Lala" ,"lala Deviluke", "lala deviluke"],
        anime: "To Love-Ru",
        image: "img/lala.jpg",
        realImage: "img/lala.jpg",
        clue: "Princesa herdeira do planeta Deviluke, de cabelos rosados, famosa por criar invenções malucas."
    },
    {
        name: "Momo Belia Deviluke",
        aliases: ["momo", "Momo"],
        anime: "To Love-Ru",
        image: "img/momo.webp",
        realImage: "img/momo.webp",
        clue: "Irmã mais nova de Lala, especialista em plantas e estrategista charmosa do harém."
    },
    {
        name: "Yami (Golden Darkness)",
        aliases: ["yami", "golden darkness", "konjiki no yami"],
        anime: "To Love-Ru",
        image: "img/yami(darkness).jpg",
        realImage: "img/yami(darkness).jpg",
        clue: "Assassina lendária capaz de transformar partes do seu corpo em armas mortais. Adora taiyaki."
    },
    {
        name:"Yūki Rito",
        aliases:["yuuki rito", "Yuuki rito", "yukki Rito", "Yuuki Rito"],
        anime:"To Love-Ru",
        image:"img/Rito.webp",
        realImage:"img/Rito.webp",
        clue:"protagonista do anime",
    },
    {
        name:"Nana Astar Deviluke",
        aliases:["Nana", "nana", "Nana deviluke", "Nana Deviluke", "nana deviluke"],
        anime:"To Love-Ru",
        image:"img/Nana.webp",
        realImage:"img/Nana.webp",
        clue:"Irmã gêmea de Momo",
    },
    {
        name:"Mikan Yūki",
        aliases:["Mikan", "mikan", "Yuuki Mikan", "yuuki Mikan", "Yuuki mikan", "yuuki mikan"],
        anime:"To Love-Ru",
        image:"img/mikan.jpg",
        realImage:"img/mikan.jpg",
        clue:"Irmã da protagonista"
    },
    {
        name:"Haruna Sairenji",
        aliases:["Sairenji", "sairenji", "Haruna", "Haruno", "haruna" , "haruno"],
        anime:"To Love-Ru",
        image:"img/haruno.jpg",
        realImage:"img/haruno.jpg",
        clue:"Primeira paixão do protagonista"
    },
    {
        name:"Mea Kurosaki",
        aliases:["Mea", "mea"],
        anime:"To Love-Ru",
        image:"img/Mea.webp",
        realImage:"img/Mea.webp",
        clue:"Irmã daa assassina, ama o protagonista"
    },
    {
        name:"Celine",
        aliases:["Celine", "celine"],
        anime:"To Love-Ru",
        image:"img/celine.jpp",
        realImage:"img/celine.jpg",
        clue:"presente de aniversario da Lala para o Rito, basicamente uma filha adotiva"
    },
    {
        name:"Run Elsie Jewelria",
        aliases:["Run", "run"],
        anime:"To Love-Ru",
        image:"img/Run.webp",
        realImage:"img/Run.webp",
        clue:"Princesa do planeta Memorze"
    },
    {
        name:"Ren Elsie Jewelria",
        aliases:["Ren",  "ren"],
        anime:"To Love-ru",
        image:"img/ren.jpg",
        realImage:"img/ren.jpg",
        clue:"principe de Memorse, e lado masculino de Run"
    },
    {
        name:"Yui Kotegawa",
        aliases:["Kogetawa", "kogetawa"],
        anime:"To Love-Ru",
        image:"img/kogetawa.webp",
        realImage:"img/kogetawa.webp",
        clue:"•  Delegada de turma rígida e moralista. Tenta manter a ordem na escola, mas vive em situações embaraçosas por causa do caos causado por Lala e os outros."
    },
    {
        name:"Tearju Lunatique",
        aliases:["tearju", "Tearju"],
        anime:"To Love-Ru",
        image:"img/tearju.jpg",
        realImage:"img/tearju.jpg",
        clue:" Uma cientista brilhante em biotecnologia do universo (criadora de Yami e Mea) que se torna professora no colégio de Rito"
    },
    {
        name:"Nemesis",
        aliases:["nemesis", "Nemesis"],
        anime:"To Love-Ru",
        image:"img/nemesis.webp",
        realImage:"img/nemesis.webp",
        clue:" Uma entidade misteriosa e poderosa capaz de alterar sua forma física, com um papel central nos eventos de Darkness."
    },
    {
        name:"Kyouko Kirisaki",
        aliases:["kyouko", "Kyouko"],
        anime:"To Love-Ru",
        image:"img/kyouko.webp",
        realImage:"img/kyouko.webp",
        clue:"Uma idol de TV que na verdade é uma híbrida meio-humana e meio-flamiana"
    },
    {
        name:"Murasame Shizu ",
        aliases:["Shizu", "shizu", "Oshizu","oshizu"],
        anime:"To Love-Ru",
        image:"img/Oshizu.webp",
        realImage:"img/Oshizu.webp",
        clue:" Uma garota com poderes espirituais que consegue ver e interagir com fantasmas (e ela própria divide o corpo com uma fantasma)."
    },
    // Re:Zero
    {
        name: "Rem",
        aliases: ["rem", "rem re zero"],
        anime: "Re:Zero",
        image: "img/rem.jpg",
        realImage: "img/rem.jpg",
        clue: "Maid oni de cabelos azuis que trabalha na mansão Roswaal e é extremamente devota a Subaru."
    },
    {
        name: "Emilia",
        aliases: ["emilia", "emilia-tan"],
        anime: "Re:Zero",
        image: "img/emilia.jpg",
        realImage: "img/emilia.jpg",
        clue: "Meio-elfa de cabelos prateados candidata ao trono de Lugunica, acompanhada pelo espírito Puck."
    },
    {
        name: "Echidna",
        aliases: ["echidna", "bruxa da ganancia"],
        anime: "Re:Zero",
        image: "img/equidna.jpg",
        realImage: "img/equidna.jpg",
        clue: "A Bruxa da Ganância, dona do misterioso castelo dos sonhos onde serve chá de forma enigmática."
    },

    {
        name: "Satella",
        aliases: [" satella", " Satella", " bruxa da inveja", " Bruxa da inveja"],
        anime: "Re:Zero",
        image: "img/satella.jpg",
        realImage: "img/satella.jpg",
        clue: "A Bruxa da Inveja, destruio o mundo a 400 anos"
    },
    {
        name:"Subaru Natsuki",
        aliases:["Subaru", "subaru"],
        anime: "Re:Zero",
        image:"img/subaru.jpeg",
        realImage:"img/subaru.jpeg",
        clue:"protagonista que consegue voltar no tempo sempre que morre"
    },
    {
        name:"Ram",
        aliases:["Ram", "ram"],
        anime:"Re:Zero",
        image:"img/ram.jpg",
        realImage:"img/ram.jpg",
        clue:"empregada de cabelo rosa devota ao Roswaal"
    },
    {
        name:"Chusch",
        aliases:["chusch", "Chusch"],
        anime:"Re:Zero",
        image:"img/chusch.webp",
        realImage:"img/chusch.webp",
        clue:"candidata real que tambem é uma cavaleira"
    },
    {
        name:"Priscilla Barielle",
        aliases:["priscilla", "Priscilla"],
        anime:"Re:Zero",
        image:"img/priscilla.jpg",
        realImage:"img/priscilla.jpg",
        clue:"candidata real, muito mimada",
    },
    {
        name:"Anastasia Hoshin",
        aliases:["anastasia", "Anastasia"],
        anime:"Re:Zero",
        image:"img/anastasia.jpg",
        realImage:"img/anastasia.jpg",
        clue:" É a poderosa chefe da Companhia Hoshin (um império comercial) e conta com o apoio dos mercenarios Presa de Ferro (Iron Fang)"
    },
    {
        name:"Felt",
        aliases:["felt", "Felt"],
        anime:"Re:Zero",
        image:"img/felt.webp",
        realImage:"img/felt.webp",
        clue:"candidata real, que tem como cavaleiro pessoal o Santo da Espada"
    },
    {
        name:"Reinhard Van Astrea",
        aliases:["Reinhard", "reinhard", "santo da espada", "Santo da espada"],
        anime:"Re:Zero",
        image:"img/reinhard.jpeg",
        realImage:"img/reinhard.jpeg",
        clue:"considerado o cavaleiro entre os cavaleiros o homem mais forte"
    },
    {
        name:"Minerva",
        aliases:["minerva", "Minerva", "Bruxa da Ira", "bruxa da ira"],
        anime:"Re:Zero",
        image:"img/Minerva.jpg",
        realImage:"img/Minerva.jpg",
        clue:"tem o poder  de curara os outros apenas dando um soco"
    },
    {
        name:"Carmilla",
        aliases:["carmilla", "Carmilla"],
        anime:"Re:Zero",
        image:"img/carmilla.jpg",
        realImage:"img/carmilla.jpg",
        clue:"pode parecer sacanagem, mas ela é fofa e gentil mas representa o pecado da luxuria"
    },
    {
        name:"Pandora",
        aliases:["pandora", "Pandora"],
        anime:"Re:Zero",
        image:"img/Pandora.webp",
        realImage:"img/Pandora.webp",
        clue:"bruxa da vangloria, com o poder de manipular a realidade"
    },
    {
        name:"Sekhmet",
        aliases:["sekhmet", "Sekhmet"],
        anime:"Re:Zero",
        image:"img/Sekhmet.webp",
        realImage:"img/Sekhmet.webp",
        clue:"faz carater a seu pecado faz tudo deitada"
    },
    {
        name:"Typhon",
        aliases:["typhon", "Typhon"],
        anime:"Re:Zero",
        image:"img/Typhon.webp",
        realImage:"img/Typhon.webp",
        clue:"Ela tem a habilidade de quebra seu adversario em partes, se ele tiver um coração bom, ele não sentira dor"
    },
    {
        name:"Daphne",
        aliases:["daphne", "Daphne"],
        anime:"Re:Zero",
        image:"img/Daphne.jpg",
        realImage:"img/Daphne.jpg",
        clue:"criou as 3 grandes bestas"
    },
    {
        name:"Beatrice",
        aliases:["beatrice", "Beatrice"],
        anime:"Re:Zero",
        image:"img/beatrice.jpg",
        realImage:"img/beatrice.jpg",
        clue:"espirito artificial criada pela bruxa da ganancia guardiã da biblioteca com mais de 400 anos"
    },
    {
        name:"Julius",
        aliases:["julius", "Julius"],
        anime:"Re:Zero",
        image:"img/julius.webp",
        realImage:"img/julius.webp",
        clue:"Guarda Real de Lugnica e Cavaleiro Oficial da candidata ao trono Anastasia Hoshin."
    },
    {
        name:"Petra",
        aliases:["petra", "Petra"],
        anime:"Re:Zero",
        image:"img/petra.jpg",
        realImage:"img/petra.jpg",
        clue:"Conhecida por seu temperamento prestativo e afeto por Subaru Natsuki, ela evoluiu de uma simples criança do campo para uma integrante dedicada do acampamento de Emilia."
    },

    // Naruto
    {
        name: "Naruto Uzumaki",
        aliases: ["naruto", "naruto uzumaki", "uzumaki naruto", "Naruto", "Naruto Uzumaki", "Uzumaki Naruto"],
        anime: "Naruto / Shippuden",
        image: "img/naruto.png",
        realImage: "img/naruto.png",
        clue: "Ninja tagarela de Konoha que sonha em se tornar Hokage e tem a Raposa de Nove Caudas selada em si."
    },
    {
        name: "Kakashi Hatake",
        aliases: ["kakashi", "kakashi hatake", "ninja copia", "Kakashi", "Kakashi Hatake", "hatake kakashi", "Hatake Kakashi"],
        anime: "Naruto",
        image: "img/kakashi.jpg",
        realImage: "img/kakashi.jpg",
        clue: "O famoso 'Ninja Copiador' com Sharingan coberto por sua bandana e fã dos livros de Icha Icha."
    },
    {
        name:"Sasuke Uchiha",
        aliases:["sasuke", "Sasuke", "Uchiha Sasuke", "uchiha sasuke", "sasuke uchiha", "Sasuke Uchiha"],
        anime:"Naruto",
        image:"img/sasuke.webp",
        realImage:"img/sasuke.webp",
        clue:"considerado o sobrevivente do seu clã"
    },
    {
        name:"Sakura Haruno",
        aliases:["sakura", "Sakura", "Sakura Haruno", "sakura haruno", "Haruno Sakura", "haruno sakura"],
        anime:"Naruto",
        image:"img/sakura.webp",
        realImage:"img/sakura.webp",
        clue:"Ela é aprendiz de hokage, e apaixonada no sasuke"
    },
    {
        name:"Shikamaru Nara",
        aliases:["Shikamaru", "shikamaru"],
        anime:"Naruto",
        image:"img/shikamaru.webp",
        realImage:"img/shikamaru.webp",
        clue:"não tem preguiçoso igual"
    },
    {
        name:"Gaara",
        aliases:[" gaara", " Gaara"],
        anime:"Naruto",
        image:"img/Gaara.webp",
        realImage:"img/Gaara.webp",
        clue:"tem a bijuu conhecida como demonio da areia"
    },
    {
        name:"Tsunade Senju",
        aliases:["Tsunade", "tsunade", "Tsunade Senju", "tsunade senju"],
        anime:"Naruto",
        image:"img/tsunade.jpg",
        realImage:"img/tsunade.jpg",
        clue:"Quinta Hokage"
    },
    {
        name:"Hiruzen Sarutobi",
        aliases:["hiruzen", "Hiruzen"],
        anime:"Naruto",
        image:"img/hiruzen.jpg",
        realImage:"img/hiruzen.jpg",
        clue:"O terceiro hokage, e pessimo cuidador de criancas"
    },
    {
        name:"Minato Namikaze",
        aliases:["minato", "Minato"],
        anime:"Naruto",
        image:"img/minato.webp",
        realImage:"img/minato.webp",
        clue:"O relampago amarelo de konoha"
    },
    {
        name:"Hashirama Senju",
    aliases:["Hashirama", "hashirama"],
    anime:"Naruto",
    image:"img/hashirama.webp",
    realImage:"img/hashirama.webp",
    clue:"O primeiro hokage, conhecido como Deus Shinobi"
    },
    {
        name:"Tobirama Senju",
        aliases:["Tobirama", "tobirama"],
        anime:"Naruto",
        image:"img/tobirama.jpg",
        realImage:"img/tobirama.jpg",
        clue:"O ninja criador da anbu"
    },
    {
        name:"Hinata Hyuga",
        aliases:["Hinata", "hinata"],
        anime:"Naruto",
        image:"img/hinata.webp",
        realImage:"img/hinata.webp",
        clue:"A princesa do clã hyuga"
    },
    // Dragon Ball
    {
        name: "Goku",
        aliases: ["goku", "son goku", "kakaroto"],
        anime: "Dragon Ball Z / Super",
        image: "img/kakaroto.webp",
        realImage: "img/kakaroto.webp",
        clue: "Guerreiro Saiyajin criado na Terra que adora lutar contra oponentes fortes e comer muito."
    },
    {
        name: "Vegeta",
        aliases: ["vegeta", "principe dos saiyajins"],
        anime: "Dragon Ball Z",
        image: "img/Vegeta.jpg",
        realImage: "img/Vegeta.jpg",
        clue: "Orgulhoso Príncipe dos Saiyajins que busca constantemente superar o poder de Goku."
    },
    {
        name:"Bulma",
        aliases:["bulma", "Bulma"],
        anime:"Dragon Ball Z",
        image:"img/bulma.jpg",
        realImage:"img/bulma.jpg",
        clue:"cientista, inventora e engenheira genial, herdeira da Corporação Cápsula e a primeira amiga de Goku"
    },
    {
        name:"Chi-chi",
        aliases:["Chi-Chi", "chi-chi", "Chi-chi"],
        anime:"Dragon Ball Z",
        image:"img/chichi.jpg",
        realImage:"img/chichi.jpg",
        clue:"Esposa do Goku"
    },
    {
        
    },

    // One Piece
    {
        name: "Monkey D. Luffy",
        aliases: ["luffy", "monkey d luffy", "chapeu de palha"],
        anime: "One Piece",
        image: "img/luffy.webp",
        realImage: "img/luffy.webp",
        clue: "Capitão dos Piratas do Chapéu de Palha que comeu a Gomu Gomu no Mi e quer ser o Rei dos Piratas."
    },
    {
        name: "Roronoa Zoro",
        aliases: ["zoro", "roronoa zoro", "cacador de piratas"],
        anime: "One Piece",
        image: "img/zoro.webp",
        realImage: "img/zoro.webp",
        clue: "Espadachim usuário do estilo de três espadas (Santoryu) que tem um péssimo senso de direção."
    },

    // Yu-Gi-Oh!
    {
        name:"Yami Yugi",
        aliases:["Yugi", "yugi"],
        anime:"Yu-Gi-Oh!",
        image:"img/yugi.webp",
        realImage:"img/yugi.webp",
        clue:"sente o coração das cartas"
    },
    {
        name:"Rengoku",
        aliases:["rengoku", "Rengoku"],
        anime:"Demon Slayer",
        image:"img/rengoku.webp",
        realImage:"img/rengoku.webp",
        clue:"O hashira das chamas"
    },
    {
        name:"Sung Jin-Woo",
        aliases:["sung jin-woo", "Sung Jin-Woo", "Sung jin-woo"],
        anime:"Solo Leveling",
        image:"img/sung.webp",
        realImage:"img/sung.webp",
        clue:"o caçador mais fraco que se torna o mais forte",
    }
];
