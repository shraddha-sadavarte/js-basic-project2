window.addEventListener("mousemove", function(details){
    //console.log(details.clientX);

    var rect = document.querySelector("#rect")
    var xval = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100+rect.getBoundingClientRect().width/2, //aadha card andar aayega + 100 points aur andar aa jayega  
        window.innerWidth - (100+rect.getBoundingClientRect().width/2), 
        details.clientX)

    gsap.to('#rect', {
        left: xval+"px",
        ease:Power3,
    })
})