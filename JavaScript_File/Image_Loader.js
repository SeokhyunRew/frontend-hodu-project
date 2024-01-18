
// ----------------------------------변수 선언-------------------------------
const show_more = document.documentElement.querySelector('#show_more');
let onoff = 0;
let pageToFetch = 1;
const scroll_area = document.querySelector('.Scroll_Area');

// --------------------------------고양이 랜덤사진 API fetch-------------------------------
async function fetchImages(pageNum){
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?page=${1}&limit=${33}&w=${100}&h=${100}`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();
        makeImageList(datas)
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}
// ----------------------------------fetch한 이미지를 요소에 넣기-------------------------------
function makeImageList(datas){
    let groupHtml = '';
    datas.forEach((item, index) => {
        groupHtml += `<li><img src="${item.url}" alt="" class="resized-image"></li>`;
        if ((index + 1) % 3 === 0) {
            // 3개씩 그룹화된 경우, 현재 그룹을 추가하고 초기화
            scroll_area.innerHTML += `<ul>${groupHtml}</ul>`;
            groupHtml = '';
        }
    })
}

// ----------------------------------infinity scroll-------------------------------
let infiniteScrollActive = false;
scroll_area.addEventListener('scroll', () => {
    // 현재 스크롤 위치 + 화면 높이 >= 전체 컨텐츠 높이 - 일정 여백(여기서는 10px)
    if (infiniteScrollActive && scroll_area.scrollTop + scroll_area.clientHeight + 10 >= scroll_area.scrollHeight) {
        // 스크롤이 하단에 도달하면 새로운 이미지를 가져옴
        fetchImages(pageToFetch++);
    }
});
// ----------------------------------Show more 버튼 toggle-------------------------------
show_more.addEventListener('click',function(){
    if(onoff===0){
        onoff = 1;
        show_more.innerHTML=('Close picture');
        fetchImages();
        infiniteScrollActive = true;
    }else{
        onoff = 0;
        infiniteScrollActive = false;
        scroll_area.innerHTML = ''
        scroll_area.innerHTML +=
            `<ul>
                <li><img id="img_1_1.png" src="Png_File/img_1_1.png" alt="1열1번 사진"></li>
                <li><img id="img_1_2.png" src="Png_File/img_1_2.png" alt="1열2번 사진"></li>
                <li><img id="img_1_3.png" src="Png_File/img_1_3.png" alt="1열3번 사진"></li>
            </ul>
            <ul>
                <li><img id="img_2_1.png" src="Png_File/img_2_1.png" alt="2열1번 사진"></li>
                <li><img id="img_2_2.png" src="Png_File/img_2_2.png" alt="2열2번 사진"></li>
                <li><img id="img_2_3.png" src="Png_File/img_2_3.png" alt="2열3번 사진"></li>
            </ul>`
        show_more.innerHTML=('Show more');
    }
})
