
var dias= document.getElementById('dias')
var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var text = document.getElementById('text')

setInterval(function () {
    var data= new Date()
    var hoje = 23
    
    var dayOfMonth = data.getDate();
    var day = 31 - dayOfMonth
    day = zero(day)
    
    var month = data.getMonth() + 1
if(month ==11){
    text.textContent="os descontos terminarão em:"
}

    var hour= data.getHours()
    var hour1 = hoje - hour
    hour1 = zero(hour1)
    hour1 = seg(hour1)

    var minute =data.getMinutes()
    var minute1 = 60 - minute
    minute1 = zero(minute1)
    minute1 = seg(minute1)

    var second = data.getSeconds()
    var second1 = 60 - second
     second1 = zero(second1)
     second1 = seg(second1)
    
    dias.textContent = day 
    horas.innerHTML = hour1
    minutos.innerHTML = minute1
    segundos.innerHTML = second1
   

},1000)

function seg(x) {
    if (x == 60) {
        x = 0 + '0';
    } else {
        x = x;
    }
    return x;
}

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
