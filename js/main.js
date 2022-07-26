const robots = [
    {
        id: 1,
        name : "Mir Rakib",
        email : 'Rakib@gmail.com'
    },
    {
        id: 2,
        name : "sobahan Mondol",
        email : 'sobahan@gmail.com'
    },
    {
        id: 3,
        name : "kuddus Ali",
        email : 'kuddus@gmail.com'
    },
    {
        id: 4,
        name : "rohim uddin",
        email : 'rohim@gmail.com'
    },
    {
        id: 5,
        name : "Md moniruzzam",
        email : 'moniruzzam@gmail.com'
    },
    {
        id: 6,
        name : "Yusuf Julekha",
        email : 'Yusuf@gmail.com'
    },
    {
        id: 7,
        name : "Rohima begum",
        email : 'Rohima@gmail.com'
    },
    {
        id: 8,
        name : "Akash Dey",
        email : 'Akash@gmail.com'
    },
    {
        id: 9,
        name : "sopna",
        email : 'sopna@gmail.com'
    },
    {
        id: 10,
        name : "arpita",
        email : 'arpita@gmail.com'
    },
    {
        id: 11,
        name : "sabnur",
        email : 'sabnur@gmail.com'
    },
    {
        id: 12,
        name : "salman",
        email : 'salman@gmail.com'
    },
    {
        id: 13,
        name : "sharuk",
        email : 'sharuk@gmail.com'
    },
    {
        id: 14,
        name : "hritik",
        email : 'hritik@gmail.com'
    },
    {
        id: 15,
        name : "barun",
        email : 'barun@gmail.com'
    },
    {
        id: 16,
        name : "sweety",
        email : 'sweety@gmail.com'
    },
    {
        id: 17,
        name : "cutey",
        email : 'cutey@gmail.com'
    },
    {
        id: 18,
        name : "julekha ",
        email : 'julekha@gmail.com'
    },
    {
        id: 19,
        name : "nilima",
        email : 'nilima@gmail.com'
    },
    {
        id: 20,
        name : "ahona",
        email : 'ahona@gmail.com'
    },


    
]

const showingDiv = document.querySelector('.cards');

for(let robot of robots){
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src="https://robohash.org/${robot.id}?set=set4 " class="card-img-top" alt="..." >
                        <div class="card-body">
                        <h5 class="card-title name">${robot.name}</h5>
                        <p class="card-text description">${robot.email}</p>
                        </div>`
    showingDiv.appendChild(div);
}

document.querySelector('#person-name').addEventListener('keyup',function(e){
    let keywordName = e.target.value.toLowerCase();
    console.log(keywordName)
})

let firend = document.querySelectorAll(".cards");
for (let friends of firend){
    console.log(friends.children)
}

