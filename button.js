 // -----------다운로드 버튼 클릭 시 현재페이지 다운로드----------------------------------------
const download_btn = document.querySelector(".Download_button") ;
download_btn.addEventListener('click', function(){
    alert('이 페이지를 다운로드 하시겠습니까?');
    let htmlContent = document.documentElement.outerHTML;
    let blob = new Blob([htmlContent], { type: 'text/html' });

    // a 태그를 생성하고 Blob 객체를 URL로 변환하여 다운로드 링크 설정
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = '현재페이지.html';

    // a 태그를 클릭하여 다운로드 진행
    document.body.appendChild(a);
    a.click();

    // 다운로드 후에는 a 태그를 제거
    document.body.removeChild(a);
})

 // _______________________hover 버튼 클릭시 페이지 상단으로 이동__________________________
 let scroll_top = document.getElementById('scroll_top');
 function mouseover (){
     scroll_top.setAttribute("src","scroll-top-btn-overmouse.png");
 }
 function mouseleave (){
     scroll_top.setAttribute("src","scroll-top-btn.png");
 }
 scroll_top.addEventListener('click', function(){
     document.documentElement.scrollTop=0;
 })

 // _______________________Subcribe 버튼 클릭시 모달창 open,close 이동__________________________
 const modal = document.querySelector('.modal');
 const btnOpenModal=document.querySelector('#subscribe_button');
 const btnCloseModal = document.querySelector('#subscribe_close_button');
 let change_text = document.querySelector('#change_text')
 function isValidEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
 }

 btnOpenModal.addEventListener("click", function(event){
     event.preventDefault();

     const input_mail=document.querySelector('#input_mail');
     if(input_mail.value){
         if(isValidEmail(input_mail.value)){
             change_text.innerHTML= (`구독해주셔서 감사합니다.<br> 구독한 이메일: ${input_mail.value}`);
             modal.style.display="block";
         }
         else{
             alert("이메일 형식으로 입력해주세요!")
         }
     }else{
         alert("구독할 이메일을 입력해 주세요!");
     }
 })

 btnCloseModal.addEventListener("click", function(){
     modal.style.display="none"
 })