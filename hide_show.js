
    let div = document.getElementById('main')
    let display = 0;

    function hideShow(){
        if(display==1){
            div.style.display='block';
            display=0;
        }
        else{
            div.style.display='none';
            display=1;
        }
    }
