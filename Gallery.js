//lodash Test

var _ = require('lodash');

var array = [1,2,3,4,5,6,7]
console.log('array without 3:', _.without(array, 3))


//正式code

const gallery = document.querySelectorAll('.gallery .image')
const previewbox = document.querySelector('.preview-box')
// const previewImg = previewbox.querySelector('.openingImg')
const previewImg = previewbox.querySelector('img')
const closeIcon = document.querySelector('.icon')

const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

const currentImg = document.querySelector('.current-image')
const totalImg = document.querySelector('.total-image')

window.onload = ()=>{  //once window loaded 
    
    let newIndex = 0 //給btnPrev和btnNext使用的index參數
    
    for (let index = 0; index < gallery.length; index++) {
        // console.log(index)
        gallery[index].addEventListener('click', function(){
            newIndex = index
            openPreviewBox(index) //在事件監聽器傳值的寫法
        })
    }

    btnPrev.addEventListener('click', function(){
    
        // if(newIndex > 0) {
            newIndex--
            openPreviewBox(newIndex) 
        // }
    })
    btnNext.addEventListener('click', function(){
        newIndex++
        
        // if(!(newIndex < gallery.length)){
            
        //     newIndex = gallery.length -1
        // }else{
            openPreviewBox(newIndex)
        // }
        //將Prev和Next用css語法隱藏起來，就不用做這個防呆機制
    })
    closeIcon.addEventListener('click', closePreview)  
     
}

function openPreviewBox(index){
    // console.log(e.target)
    console.log(index)
    // console.log(this.innerHTML)
    if(index===0) {
        btnPrev.style.display = 'none'
    } else{
        btnPrev.style.display = 'block'
    }

    if(index === (gallery.length - 1)){
        btnNext.style.display = 'none'
    }else{
        btnNext.style.display = 'block'
    }
    
    currentImg.textContent = index + 1
    totalImg.textContent = gallery.length

    previewbox.classList.add('show')
    previewImg.src = gallery[index].querySelector('img').src
    // previewImg.innerHTML = this.innerHTML  
    //(另一種寫法，輸入innerHTML屬性的型態必須是字串，才會寫入HTML檔案裡，正常顯示出畫面)
   
}

function closePreview(){
    console.log('bye' )
    previewbox.classList.remove('show')
}

