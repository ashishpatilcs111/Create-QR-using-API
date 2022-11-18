async function show(){
    var fname =document.getElementById('name').value;
    let image=document.getElementById("image");
    let imgSrc="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+fname;
    image.src=imgSrc;
}