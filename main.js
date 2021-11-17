var reasons=[
"Reason 2: Trees Give Us Food",
"Reason 3: Trees Provide Shelter For Animals",
"Reason 4: Trees Are Natural Medicines",
"Reason 5: Trees Purify The Air",
];

var images=[
"https://images.unsplash.com/photo-1533951136101-bbb1874729b0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
"https://images.unsplash.com/photo-1447095477835-572f940f49a0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
"https://images.unsplash.com/photo-1489402954857-207e3f591c0f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
"https://images.unsplash.com/photo-1503155134907-05ff21a59bb9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
];

var i=0;
function nextslide(){
document.getElementById("reason1").innerHTML=reasons[i];
document.getElementById("image").src=images[i];
i++;
}