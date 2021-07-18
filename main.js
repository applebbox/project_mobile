const foodData = [
    { 
      imgUrl: 'images/pizza01.jpg', // 이미지 주소
      name: "콤비네이션", // 피자 이름
      type: "pizza"
    },
    { 
      imgUrl: 'images/pizza02.jpg',
      name: "페퍼로니",
      type: "pizza"
    },
    { 
      imgUrl: 'images/pizza03.jpg',
      name: "하와이안",
      type: "pizza"
    },
    { 
      imgUrl: 'images/pizza04.jpg',
      name: "마르게리타",
      type: "pizza"
    },
    { 
      imgUrl: 'images/pizza05.jpg',
      name: "스테이크",
      type: "pizza"
    },
    { 
      imgUrl: 'images/pizza06.jpg',
      name: "치즈",
      type: "pizza"
    },
    { 
      imgUrl: 'images/spagetti01.jpg',
      name: "페투치니",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/spagetti02.jpg',
      name: "파파르델레",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/spagetti03.jpg',
      name: "라자냐",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/spagetti04.jpg',
      name: "가르파넬리",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/spagetti05.jpg',
      name: "스파게티",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/spagetti06.jpg',
      name: "나르팔레",
      type: "spagetti"
    },
    { 
      imgUrl: 'images/chicken01.jpg',
      name: "프라이드",
      type: "chicken"
    },
    { 
      imgUrl: 'images/chicken02.jpg',
      name: "양념",
      type: "chicken"
    },
    { 
      imgUrl: 'images/chicken03.jpg',
      name: "간장",
      type: "chicken"
    },
    { 
      imgUrl: 'images/chicken04.jpg',
      name: "허니",
      type: "chicken"
    },
    { 
      imgUrl: 'images/chicken05.jpg',
      name: "갈릭",
      type: "chicken"
    },
    { 
      imgUrl: 'images/chicken06.jpg',
      name: "후라이드반양념반",
      type: "chicken"
    },
  ];

  function getfoodData(type){
     let html ='';
  
    for (var i= 0; i < foodData.length; i++){
      if(foodData[i].type ==type){
        html +=
        `<li>
          <a href="#">
            <img src="${foodData[i].imgUrl}"
            alt="${foodData[i].name}">
            <div class="caption">
            <h4>${foodData[i].name}</h4>
            </div>
          </a>
          </li>`
      }
    }
    $('.tribe_list').html(html)
    }

    /* 메인 함수 */
$(function(){
  // 현재 페이지 URL값에서 type 값을 가져오기
  let query = location.search.split('=');
  let type = query[1]
  console.log(query[1]);

  // 동물 출력 함수: getPetData(type)
  // undefined는 전달된 값이 없을때 기본 데이터(개)
  if(query[1] == undefined) {
    getfoodData('pizza');
  } else {
    getfoodData(type);
  }

});