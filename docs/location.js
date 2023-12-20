let map;

function initMap() {
  // Google マップの初期化
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.261537, lng: 140.870658 },
    zoom: 16,
  });
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const locationElement = document.getElementById("location");
        locationElement.innerHTML = `緯度: ${latitude}<br>経度: ${longitude}`;

        // マップをユーザーの現在位置にセンタリング
        map.setCenter({ lat: latitude, lng: longitude });

        // 現在位置のためのマーカーを作成
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: "あなたの位置",
        });
      },
      (error) => {
        console.error("現在位置を取得できませんでした。", error);
        alert("現在位置を取得できませんでした。");
      }
    );
  } else {
    alert("お使いのブラウザはGeolocationに対応していません。");
  }
}
