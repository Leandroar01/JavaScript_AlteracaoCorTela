function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML=`Agora sao ${hora} horas.`
    
   if (hora >= 0 && hora <12){
        //bom dia!
        img.src ='picture_manha_ed.jpg'
        document.body.style.background='#9cbece'

    } else if(hora >=12 && hora <18){
        //Boa Tarde
        img.src = 'picture_tarde_ed.jpg'
        document.body.style.background='#9da274'

    } else{
        //Boa Noite
        img.src = 'picture_noite_ed.jpg'
        document.body.style.background='#012f3f'
    }
   
}
