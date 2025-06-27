
    const text = "bienvenue sur mon portfolio !";
    let i =0;

    function typewriter() {
      if(i<text.length) {
        document.getElementById("writer").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 100 );
      }
    }
    window.onload = typewriter;

    const faders = document.querySelectorAll('.fade-in');
    function showElementsOnscroll() {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
          el.classList.add('visible');
        }
      })
    }
    const fader = document.querySelectorAll('.fade-ine');
    function showElementOnscroll() {
      fader.forEach(e => {
        const rec = e.getBoundingClientRect();
        if(rec.top < window.innerHeight - 100){
          e.classList.add('visiblee');
        }
      })
    }
    window.addEventListener('scroll', showElementsOnscroll);
    window.addEventListener('load',showElementsOnscroll)
     window.addEventListener('scroll', showElementOnscroll);
    window.addEventListener('load',showElementOnscroll)