// let
let Choosefile = document.querySelector("#choose_img button");
let Choose = document.querySelector("#choose_img input");
let imgSrc = document.querySelector("#i img");
let input_range = document.querySelector("#Change #Value input");
let Per = document.querySelector("#Change #par #per p");
let pe = document.querySelector("#Change #par #per");
let Box = document.querySelector("#Box");
let Resfil = document.querySelector("#Image-Editings #Reset");
let Savimg = document.querySelector("#Image-Editings #Save");
let Name = document.querySelector("#Change #par #name p");
let filters = document.querySelectorAll("#Filter Div button");
let Fianro = document.querySelectorAll("#Rotate_And_Filp Div button");
let filters_name = "Brightness";
let Brightness = 100;
let contrast = 100;
let saturate = 100;
let invert = 0;
let blurs = 0;
let Rotate = 0;
let Flip_X = 1;
let Flip_Y = 1;
let marlef = Box.style.width;


// code



// select file
Choosefile.addEventListener('click', () => Choose.click());


// start
// window load

// window.addEventListener('load', () => Per.style.marginleft = marlef + "px");




// image print and on the tools


// start
Choose.addEventListener("change", () => {
    // image print
    let fil = Choose.files[0];
    if (!fil) return;
    imgSrc.src = URL.createObjectURL(fil);
    // on the tools
    imgSrc.addEventListener("load", () => {
        document.querySelector("#tool").classList.remove("disable");
    });
    // end
});
// full end



// start
// Change Per
input_range.addEventListener('input', () => {
    Per.innerHTML = input_range.value + "%"
    if(filters_name === "Brightness")
    {
        Brightness = input_range.value
    }
    else if(filters_name === "Contrast")
    {
        contrast = input_range.value
    }
    else if(filters_name === "Saturate")
    {
        saturate = input_range.value
    }
    else if(filters_name === "Invert")
    {
        invert = input_range.value
    }
    else if(filters_name === "Blur")
    {
        blurs = input_range.value
    };
    // console.log(Brightness, contrast, saturate, invert, blurs);
    // debugger;
    imgSrc.style.filter = `Brightness(${Brightness}%) Contrast(${contrast}%) Saturate(${saturate}%) Invert(${invert}%) Blur(${blurs}px)`
})



// start
// change active



filters.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".Active").classList.remove("Active");
        element.classList.add("Active");
        filters_name = element.title;
        if(filters_name === "Brightness")
        {
            input_range.value = Brightness;
            Per.innerHTML = input_range.value + "%"
            input_range.max = 200;
            Name.innerHTML = "Brightness";
        }
        if(filters_name === "Contrast")
        {
            input_range.value = contrast;
            Per.innerHTML = input_range.value + "%"
            input_range.max = 200;
            Name.innerHTML = "Contrast";
        }
        if(filters_name === "Saturate")
        {
            input_range.value = saturate;
            Per.innerHTML = input_range.value + "%"
            input_range.max = 200;
            Name.innerHTML = "Saturate";
        }
        if(filters_name === "Invert")
        {
            input_range.value = invert;
            Per.innerHTML = input_range.value + "%"
            input_range.max = 100;
            Name.innerHTML = "Invert";
        }
        if(filters_name === "Blur")
        {
            input_range.value = blurs;
            Per.innerHTML = input_range.value + "%"
            input_range.max = 100;
            Name.innerHTML = "Blur";
        }
    });
});
// end


// start
// flip x and flip y and rotate function



Fianro.forEach((btn) => {
    btn.addEventListener('click', () => {
        // debugger;
        if (btn.title === "Rotate Left") {
            Rotate -= 90;
        }
        else if (btn.title === "Rotate Right") {
            Rotate += 90;
        }
        else if (btn.title === "Filp X") {
            Flip_X = Flip_X === 1 ? -1 : 1;
        }
        else if (btn.title === "Filp Y") {
            Flip_Y = Flip_Y === 1 ? -1 : 1;
        };
        imgSrc.style.transform = `rotate(${Rotate}deg) scale(${Flip_X}, ${Flip_Y})`;
    })
});
// end



// start



// Reset Filters


Resfil.addEventListener('click', () => {
    // debugger;
    Brightness = 100;
    contrast = 100;
    saturate = 100;
    invert = 0;
    blurs = 0;
    Rotate = 0;
    Flip_X = 1;
    Flip_Y = 1;
    if(filters_name === "Brightness")
    {
        input_range.value = Brightness;
        Per.innerHTML = input_range.value + "%"

    }
    if(filters_name === "Contrast")
    {
        input_range.value = contrast;
        Per.innerHTML = input_range.value + "%"

    }
    if(filters_name === "Saturate")
    {
        input_range.value = saturate;
        Per.innerHTML = input_range.value + "%"

    }
    if(filters_name === "Invert")
    {
        input_range.value = invert;
        Per.innerHTML = input_range.value + "%"

    }
    if(filters_name === "Blur")
    {
        input_range.value = blurs;
        Per.innerHTML = input_range.value + "%"
    }
    imgSrc.style.transform = `rotate(${Rotate}deg) scale(${Flip_X}, ${Flip_Y})`;
    imgSrc.style.filter = `Brightness(${Brightness}%) Contrast(${contrast}%) Saturate(${saturate}%) Invert(${invert}%) Blur(${blurs}px)`
})
// end



// start



// Save Image


Savimg.addEventListener('click', () => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = imgSrc.naturalWidth;
    canvas.height = imgSrc.naturalHeight;
    ctx.filter = `brightness(${Brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blurs}px)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(Flip_X, Flip_Y);
    ctx.drawImage(
      imgSrc,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = `${Date()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
})
// end
// end of code
