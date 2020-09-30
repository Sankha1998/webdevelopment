
const wallpaper = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
let counter = 1;

document.querySelector('#next').addEventListener('click',function(){
	counter = counter%wallpaper.length;
	document.querySelector('#picture').src=`images/${wallpaper[counter]}`;
	counter++;
})


setInterval(function(){
	counter = counter%wallpaper.length;
	document.querySelector('#picture').src=`images/${wallpaper[counter]}`;
	counter++;
},4000)


