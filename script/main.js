let totop = 0;
let toleft = 0;

document.addEventListener('click', function(ev) {
    console.log(ev.target);
    if ( ev.target.className === 'down key' && totop < 250 ) {
        if (toleft > 0 && toleft < 100 && totop >= 250 && totop <= 250) {
        } else {
            if (toleft > 100 && toleft < 200 && totop >= 100 && totop <= 200) {
            } else {            
                totop = totop + 10;
                document.getElementsByClassName('square')[0].style.top = totop + 'px';
            }
        }   
    }
    if (ev.target.className === 'up key' && totop > 0) {
        if (toleft > 0 && toleft < 100 && totop >= 200 && totop <= 250) {
        } else {
            if (toleft > 100 && toleft < 200 && totop >= 100 && totop <= 100) {
            } else {
                totop = totop - 10;
                document.getElementsByClassName('square')[0].style.top = totop + 'px';
            }
        }
    }
    if (ev.target.className=='right key' && toleft<250) {
        if (toleft>=0 && toleft<=0 && totop>200 && totop<250) {
        } else {
            if (toleft>=100 && toleft<200 && totop>100 && totop<200) {
            } else {
                toleft = toleft+10;
                document.getElementsByClassName('square')[0].style.left = toleft+'px';
            }
        }
    }
    if (ev.target.className=='left key' && toleft>0) {
        if (toleft>50 && toleft<=100 && totop>200 && totop<250) {
        } else {
            if (toleft>100 && toleft<=200 && totop>100 && totop<200) {
            } else {
                toleft = toleft-10;
                document.getElementsByClassName('square')[0].style.left = toleft+'px';
            }
        }
    }
    console.log(totop, toleft);
  });