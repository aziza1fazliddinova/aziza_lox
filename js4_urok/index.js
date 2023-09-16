let name = prompt('Как вас зовут').toLowerCase().trim()

if (name==='alex'){

    let account = prompt ('Номер счета') 

    if(account == 7777) {
        
        let money = prompt('Сколько обналичить')

        if (money <= 10000 && money > 0){
            alert('все отлично')
            alert(10000 - money)
        } else{
            alert('Недостаточно средств!')
        }

    } else{
        alert('Пользователь не найден')
    }

} else{
    alert('Пользователь не найден')
}
