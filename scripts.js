
const cardList = [
    {
      title: "Michael Jordan",
      image: "images/MJ.jpg",
      link: "#",
      description: "The Greatest of all time"
    },
    {
      title: "Tim Duncan",
      image: "images/TD.jpg",
      link: "#",
      description: "Greatest Power Forward of all time"
    },
    {
      title: "Lebron James",
      image: "images/LBJ.jpg",
      link: "#",
      description: "Flop King Supreme"
    },
  ];
  
  const clickMe = () => {
    alert("I am glad you clicked me. Hope we clik  *wink");
  };
 
  const submitForm = () => {
    let formData = {};
    formData.image = $('#image').val();
    formData.title = $('#title').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();
    console.log("Form Data Submitted: ", formData);
    $.post('/api/cards', formData, function(response) {
            console.log("Server response:", response);
    });
    // addedData.push(formData);
}
// const submitForm = () => {
//   let formData = {
//       image: $('#image').val(),
//       title: $('#title').val(),
//       link: $('#link').val(),
//       description: $('#description').val()
//   };

//   // Use jQuery to send a POST request to the server
//   $.post('/api/addFormData', formData, function(response) {
//       console.log("Server response:", response);
//       // You can do something here after the data is added, like showing a message to the user
//   }).fail(function(error) {
//       console.error("Error adding form data:", error);
//   });
// }

// const submitForm = () => {
//   let formData = {};
//   formData.title = $('#title').val();
//   formData.subTitle = $('#subTitle').val();
//   formData.path = $('#path').val();
//   formData.description = $('#description').val();

//   console.log(formData);
//   postCat(formData);
// }
  const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = `
        <div class="col s4 center-align">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
              <p><a href="${item.link}">Learn more about this guy</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
      $("#card-section").append(itemToAppend);
    });
  };
  
// const getcards = () => {
//     $.get('/api/cards', (response) => {
//         if(response.statusCode == 200){
//             addCards(response.data);
//         }
//     })
// }

// // const getcards = () => {
// //   $.get('/api/cards', (response) => {
// //       if(response.statusCode === 200){
// //           cardList = cardList.concat(response.data);
// //           addCards(cardList);
// //       }
// //   }).fail((jqXHR, textStatus, errorThrown) => {
// //       console.error('Error fetching cards:', textStatus, errorThrown);
// //   });
// // }


  // $(document).ready(function() {
  //   $('.materialboxed').materialbox();
  //   $('#clickMeButton').click(() => {
  //     clickMe();
  //   });
  //   $('#formSubmit').click(() =>{
  //       submitForm();
  //   })
  //   getcards();
  //   // $('.modal').modal();
  //   addCards(cardList);
  //   $('.modal').modal();
  // });

  $(document).ready(function(){
  $('.materialboxed').materialbox();
$('#clickMeButton').click(() => {
  clickMe();
});
  $('#formSubmit').click(()=>{
      submitForm();
  });
  $('.modal').modal();
  addCards(cardList);

  // getAllCats();
});
// const cardList = [
//     {
//       title: "Michael Jordan",
//       image: "images/MJ.jpg",
//       link: "#",
//       description: "The Greatest of all time"
//     },
//     {
//       title: "Tim Duncan",
//       image: "images/TD.jpg",
//       link: "#",
//       description: "Greatest Power Forward of all time"
//     },
//     {
//       title: "Lebron James",
//       image: "images/LBJ.jpg",
//       link: "#",
//       description: "Flop King Supreme"
//     }
//   ];

  // const addCards = (items) => {
  //   items.forEach(item => {
  //     let itemToAppend = `
  //       <div class="col s4 center-align">
  //         <div class="card medium">
  //           <div class="card-image waves-effect waves-block waves-light">
  //             <img class="activator" src="${item.path}">
  //           </div>
  //           <div class="card-content">
  //             <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
  //             <p><a href="${item.subTitle}">Learn more about this guy</a></p>
  //           </div>
  //           <div class="card-reveal">
  //             <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
  //             <p>${item.description}</p>
  //           </div>
  //         </div>
  //       </div>`;
  //     $("#card-section").append(itemToAppend);
  //   });
  // };
  
  // const addCards = (items) => {
  //   items.forEach(item => {
  //     let itemToAppend = `
  //       <div class="col s4 center-align">
  //         <div class="card medium">
  //           <div class="card-image waves-effect waves-block waves-light">
  //             <img class="activator" src="${item.image}">
  //           </div>
  //           <div class="card-content">
  //             <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
  //             <p><a href="${item.link}">Learn more about this guy</a></p>
  //           </div>
  //           <div class="card-reveal">
  //             <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
  //             <p>${item.description}</p>
  //           </div>
  //         </div>
  //       </div>`;
  //     $("#card-section").append(itemToAppend);
  //   });
  // };
// const addCards = (items) => {
//   items.forEach((item) => {
//       let itemToAppend =
//           '<div class="col s4 center-align">' +
//           '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
//           item.path +
//           '">' +
//           '</div><div class="card-content">' +
//           '<span class="card-title activator grey-text text-darken-4">' +
//           item.title +
//           '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
//           "</a></p></div>" +
//           '<div class="card-reveal">' +
//           '<span class="card-title grey-text text-darken-4">' +
//           item.subTitle +
//           '<i class="material-icons right">close</i></span>' +
//           '<p class="card-text">' +
//           item.description +
//           "</p>" +
//           "</div></div></div>";
//       $("#card-section").append(itemToAppend);
//   });
// };

// const submitForm = () => {
//   let formData = {};
//   formData.title = $('#title').val();
//   formData.subTitle = $('#subTitle').val();
//   formData.path = $('#path').val();
//   formData.description = $('#description').val();

//   console.log(formData);
//   postCat(formData);
// }

  // const clickMe = () => {
  //   alert("I am glad you clicked me. Hope we clik  *wink");
  // };
//   const submitForm = () => {
//     let formData = {};
//     formData.image = $('#image').val();
//     formData.last_name = $('#last_name').val();
//     formData.password = $('#password').val();
//     formData.email = $('#email').val();

//     console.log("Form Data Submitted: ", formData);
//     postCat(formData);

// }

const getcards = () => {
  $.get('/api/cards', (response) => {
      if(response.statusCode === 200){
          cardList = cardList.concat(response.data);
          addCards(cardList);
      }
  }).fail((jqXHR, textStatus, errorThrown) => {
      console.error('Error fetching cards:', textStatus, errorThrown);
  });
}

