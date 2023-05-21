'use strict';

// $(document).ready(function() {

//     // Вариант с возможностью открыть контент вне зависимомти от других открытых контентов
//     // $('.accordeon-item-jq__trigger').click(function() {
//     //     // $(this).next('.accordeon-item-jq__content').toggle();  //быстрое переключение

//     //     // $(this).next('.accordeon-item-jq__content').slideToggle(1000); //медленное переключение с указанием duration

//     //     //открытие независимо от других элементов
//     //     $(this).parent('.accordeon-item-jq').toggleClass('accordeon-item-jq__active')  //имя парента можно убрать
//     // })

//     // Вариант: открываешь один контент - другой закрывается
//     $('.accordeon-item-jq__trigger').click(function() {

//         const parent = $(this).parent('.accordeon-item-jq');

//         if (parent.hasClass('accordeon-item-jq__active')) {
//             $(parent).removeClass('accordeon-item-jq__active')
//         } else {
//             $('.accordeon-item-jq').removeClass('accordeon-item-jq__active');
//             $(parent).addClass('accordeon-item-jq__active');
//         }
//     })
// })


document.addEventListener('DOMContentLoaded', () => {

    //независимое открывание разных контентов
    // document.querySelectorAll('.accordeon-item-js__trigger').forEach((item) => {
    //    item.addEventListener('click', function() {
    //     const parent = item.parentNode;
    //     parent.classList.toggle('accordeon-item-js__active');
    //    })
    // })

    //открываешь один контент, закрывается другой
    // document.querySelectorAll('.accordeon-item-js__trigger').forEach((item) => {
    //     item.addEventListener('click', () => {
    //         let parent = item.parentNode;

    //         if (parent.classList.contains('accordeon-item-js__active')) {
    //             parent.classList.remove('accordeon-item-js__active')
    //         } else {
    //             document
    //             .querySelectorAll('.accordeon-item-js')
    //             .forEach((child) => {
    //                 child.classList.remove('accordeon-item-js__active');
    //             })
    //             parent.classList.add('accordeon-item-js__active');
    //         }
    //     })
    // })


    document.querySelectorAll('.accordeon-item-js__trigger').forEach((item) => {
        item.addEventListener('click', () => {
            let content = item.nextElementSibling;

    

            if(content.style.maxHeight) {
                document.querySelectorAll('.accordeon-item-js__content').forEach ( el => el.style.maxHeight = null);
                
            } else {
                document.querySelectorAll('.accordeon-item-js__content').forEach ( el => el.style.maxHeight = null);    
                content.style.maxHeight = content.scrollHeight + 'px';  
                content.style.border = '1px';
                content.style.borderColor = 'red';
                content.style.borderStyle = 'solid';
                content.style.borderTop = 'none';
                
                content.style.opacity = '1';

                
            }

        })
    })
})


// const defaultSelect = () => {
//     const element = document.querySelector('.default');
//     const choices = new Choices(element, {
//         // searchEnabled: false,    
//         itemSelectText: '',
//     });
// }

// defaultSelect();

