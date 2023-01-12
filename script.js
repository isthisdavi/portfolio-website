
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
    navToggle.classList.toggle('colortoggle');
});

// const navBarItem = document.querySelectorAll('.navbar-item');

// navBarItem.forEach( function(link){
//     link.addEventListener('onmouseover', function(e){
//         const currentlink = links.currentTarget.addEventListener;
//         if(currentlink.contains('item1')){
//             currentlink.add('current-page');
//         }
//     })
// })


const arr = [-2,3,4,50,309,304,2039,-12,-23,-1939,203,45,567,-356];

function findingSmall (arrayOfIntegers){
    let smallest;

  for(let i = 0; i < arrayOfIntegers.length; i++){

    if(i === 0){
      smallest = arrayOfIntegers[i];
    }

    if(arrayOfIntegers[i] < smallest){
    smallest = arrayOfIntegers;
    }
    return smallest;
    }
    
} 
console.log('mumu');
console.log(findingSmall(arr));