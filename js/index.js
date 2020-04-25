let area = document.getElementById('area')
let move = 0
area.addEventListener('click', function(event) {
    if (move %2 === 0) {
        event.target.innerHTML = 'X'
    }
    else {
        event.target.innerHTML = 'O'
    }
    move++
    check()
})


function check(){
    let boxex = document.getElementsByClassName('box')
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],


        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ]

for (let i = 0 ; i<arr.length; i++) {

    if(boxex[arr[i][0]].innerHTML == 'X' && boxex[arr[i][1]].innerHTML == 'X' && boxex[arr[i][2]].innerHTML == 'X') {
alert('победили крестики')
location.reload()

    }


else if (boxex[arr[i][0]].innerHTML == 'O' && boxex[arr[i][1]].innerHTML == 'O' && boxex[arr[i][2]].innerHTML == 'O') 
{
alert('победили Нолики') 
location.reload()

}



else if (boxex[arr[i][0]].innerHTML == 'O' && boxex[arr[i][1]].innerHTML == 'O' && boxex[arr[i][2]].innerHTML == 'O') 
{
alert('победили Нолики') 
location.reload()

}

}


}