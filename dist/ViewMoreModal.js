
// let cereals = product.filter(function (items) {
//     return items.category === "cereals";
// }).map(function (items) {
//     {return items};
// })
// // let mainContent = cereals.filter(function (single) {
// //     return single.id === 0
// // })

// const viewModal=`<div  id="mainDiv" class=" w-full justify-center text-center items-center p-3 flex flex-col rounded-[3rem] mt-10"  >
                                    
// </div>`

// let modalHTML=''
// document.getElementById('mainDiv').innerHTML = mainDivContent.map((items) => {
//     var { image, name, description, price } = items;
    
//     return(
//         modalHTML += `
//         <div id="myModal" class=" inset-0 z-50 hidden px-5  mt-10 max-sm:px-0 w-full  gap-5 max-lg:flex-col rounded-[3rem] justify-center items-center ">
// 	<div class="absolute flex inset-0 bg-black opacity-50"></div>
//         <div  class="w-[400px] mt-3  h-[500px] max-sm:w-full justify-center items-center text-center flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
//         style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//         <div class="object-contain mt-50">
//             <img id="mainImg" src=${image} alt="" class="rounded-full object-cover">
//         </div>
//         <div class="mt-10 ">
//         <button id="mainPrice" class=" mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">$ ${price}</button>
//         </div>
//     </div>

//     <div  class="w-[400px] mt-3 h-[500px] max-sm:w-full  justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent "
//             style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//             <div class="group flex flex-col justify-center items-center text-center">
//                 <h2 id="mainName" class="font-bold text-white text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
//                 <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
//             </div>
//             <div class="flex mt-10 justify-center items-center text-center">
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//             </div>
//             <div class=" text-white p-10 max-sm:p-0 w-full h-full  justify-center items-center text-center  ">
//                 <p id="mainDescription" class="leading-12 text-[25px] max-xl:text-[20px] max-sm:text-[18px]"><i>"
//                     <br>${description}
//                     <br>
//                     "</i></p>
//                     <div class="text-right mt-4">
//                     <button id='modalCloseButton' class='w-full z-50 py-2 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500'>Close</button>
//                   </div>
//             </div>
//         </div>
//     </div>
//         `
//     )
// })


// // Add the modal HTML to your page
// document.body.insertAdjacentHTML("beforeend", viewModal);


// function logger(image, name, price, description) {
//     var mainImg = document.getElementById("mainImg");
//     var mainName = document.getElementById("mainName");
//     var mainPrice = document.getElementById("mainPrice");
//     var mainDescription = document.getElementById("mainDescription");

//     mainImg.src = image;
//     mainName.textContent = name;
//     mainPrice.textContent = '$' + price;
//     mainDescription.textContent = description;

//     // Show the modal when the "View Details" button is clicked
//     openModal();
// }


// // JavaScript functions to open and close the modal
// function openModal() {
//     var modal = document.getElementById("myModal");
//     modal.classList.remove("hidden");
// }

// function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.classList.add("hidden");
// }

// // Add an event listener to the "Close" button in the modal to close it
// // document.getElementById("modalCloseButton").addEventListener("click", closeModal);

// // Add an event listener to the "Charge" button
// document.getElementById("charge").addEventListener("click", function () {
//     // Get the details from the main div
//     var image = mainImg.src;
//     var name = mainName.textContent;
//     var price = mainPrice.textContent;
//     var description = mainDescription.textContent;

//     // Update the main div
//     logger(image, name, price, description);
// });



// let cereals = product.filter(function (items) { 
//     return items.category === "cereals"; 
// }).map(function (items) { 
//     {return items}; 
// });

// const viewModal = `<div id="myModal" class="inset-0 z-50 hidden px-5 mt-10 max-sm:px-0 w-full gap-5 max-lg:flex-col rounded-[3rem] justify-center items-center ">
//     <div class="absolute flex inset-0 bg-black opacity-50"></div>
//     <div  class="w-[400px] mt-3  h-[500px] max-sm:w-full justify-center items-center text-center flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
//         style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//         <div class="object-contain mt-50">
//             <img id="mainImg" src=${image} alt="" class="rounded-full object-cover">
//         </div>
//         <div class="mt-10 ">
//         <button id="mainPrice" class=" mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">$ ${price}</button>
//         </div>
//     </div>

//     <div  class="w-[400px] mt-3 h-[500px] max-sm:w-full  justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent "
//             style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//             <div class="group flex flex-col justify-center items-center text-center">
//                 <h2 id="mainName" class="font-bold text-white text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
//                 <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
//             </div>
//             <div class="flex mt-10 justify-center items-center text-center">
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//                 <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
//             </div>
//             <div class=" text-white p-10 max-sm:p-0 w-full h-full  justify-center items-center text-center  ">
//                 <p id="mainDescription" class="leading-12 text-[25px] max-xl:text-[20px] max-sm:text-[18px]"><i>"
//                     <br>${description}
//                     <br>
//                     "</i></p>
//                     <div class="text-right mt-4">
//                     <button id='modalCloseButton' class='w-full z-50 py-2 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500'>Close</button>
//                   </div>
//             </div>
//         </div>
    
// </div>`;

// // Add the modal HTML to your page
// document.body.insertAdjacentHTML("beforeend", viewModal);

// function logger(image, name, price, description) {
//     // Get the modal elements
//     var mainImg = document.getElementById("mainImg");
//     var mainName = document.getElementById("mainName");
//     var mainPrice = document.getElementById("mainPrice");
//     var mainDescription = document.getElementById("mainDescription");

//     // Update the modal content
//     mainImg.src = image;
//     mainName.textContent = name;
//     mainPrice.textContent = '$' + price;
//     mainDescription.textContent = description;

//     // Show the modal
//     openModal();
// }

// // JavaScript functions to open and close the modal
// function openModal() {
//     var modal = document.getElementById("myModal");
//     modal.classList.remove("hidden");
// }

// function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.classList.add("hidden");
// }

// // Add an event listener to the "Close" button in the modal to close it
// document.getElementById("modalCloseButton").addEventListener("click", closeModal);

// // Add an event listener to the "Charge" button
// document.getElementById("charge").addEventListener("click", function () {
//     // Get the details from the main div
//     var image = mainImg.src;
//     var name = mainName.textContent;
//     var price = mainPrice.textContent;
//     var description = mainDescription.textContent;

//     // Update the modal content
//     logger(image, name, price, description);
// });



