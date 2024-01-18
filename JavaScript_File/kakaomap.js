
//----------------------------------지도 초기 설정--------------------------------------------------
const mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.4423464, 126.5714548), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

//--------------------- 지도를 표시할 div와  지도 옵션으로  지도를 생성--------------------------
const map = new kakao.maps.Map(mapContainer, mapOption);

//-------------------------- 마커(파란 핀) 생성---------------------------------------------
let marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(33.4423464, 126.5714548)
})
marker.setMap(map);

//----------------- 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성-----------
var mapTypeControl = new kakao.maps.MapTypeControl();

//--------------------------지도에 컨트롤을 추가해야 지도위에 표시-------------------------------
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//------------------------지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다---------------------
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
//------------------------------------지도 새로고침 버튼 생성-------------------------------------
function panTo() {
    // 이동할 위도 경도 위치를 생성
    var moveLatLon = new kakao.maps.LatLng(33.4423464, 126.5714548);

    // 지도 중심을 부드럽게 이동
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
    map.panTo(moveLatLon);
}
//--------------------------------------지도 확장 버튼 생성---------------------------------------
function Expansion(){

}