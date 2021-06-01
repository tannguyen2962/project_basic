var index = 0;
hienThiSlide1();
hienThiSlide(index);

function hienThiSlideKeTiep()
{
  index++;
  hienThiSlide(index);
}

function hienThiSlideTruocDo()
{
  index--;
  hienThiSlide(index);
}

function hienThiSlide(n)
{
  var slides = document.getElementsByClassName("slides");
  for (var i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  if (n > slides.length - 1)
    index = 0;
  if (n < 0)
    index = slides.length - 1;
  slides[index].style.display = "block";
}

function hienThiSlide1() {
    var i;
    var slides = document.getElementsByClassName("slides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    if (index > slides.length - 1) {index = 0} 
    
    slides[index].style.display = "block"; 
    index++;
    setTimeout(hienThiSlide1, 3000); 
}