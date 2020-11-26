
//====== Document.getElementByTagName, getElementById, and getElementByClassName ===// //

// let titles = document.getElementsByClassName('title');


// //======= this will create an error coz html collection is not the same as the array collection. to make it work you have to make it into an array ==== //

// // titles.forEach(item => {
// //     console.log(item);
// });
// // console.log(Array.isArray(titles)); // == this will give false because it is not an array
// // console.log(Array.isArray(Array.from(titles))); //=== now this will be true after it has been converted into an array

// // Array.from(titles).forEach(item =>{
// //     console.log(item); //====== now this is the code of converting it into an array
// // });

// // ==== Document.QuerySelector =============// //

// const wrap = document.querySelector('#video-list li:nth-child(2) .name');
// // console.log(wrap);

// let videos = document.querySelector('#video-list li .name');
// //console.log(video);

// videos = document.querySelectorAll('#video-list li .name'); //=== showing all the collection
// // console.log(videos); 

// // Array.from(videos).forEach(video =>{ //==== this will show all the collection by converting them into an array. Yahh look at that vooogooos!!!! however we can directly display all the elements without converting them into an array.
// videos.forEach(item => { // ==== just like this one.. since it creates a nodelist and not html collection. Only Html collection needs conversion into an array and it will only happen when using getElementByTagName, ClassName, and Id
//     console.log(item);
// });
//     console.log(video);
// });

//============ changing the text using innerHTML and textContent ====== //

// let books = document.querySelectorAll('#video-list li .name');

// books.forEach(book => {
//     //console.log(book.textContent);
//     //=== to change something
//     //book.textContent = ' bobot all';
//     //=== to append
//     book.textContent += '(By Bobot)';
// });

// const videoList = document.querySelector('#video-list');
// videoList.innerHTML = '<h2> Videos and More Videos...</h2>';
// videoList.innerHTML += '<p> This is How you Add HTML</p>';

// ======= nodes ====== every single element inside the DOM is a node
// - text node
// - comment node
// -attribute node

// ============= traversing the DOM










// ============ Events
// ====== this will delete the video
// let btns = document.querySelectorAll('#video-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){

//         const li = e.target.parentElement;

//         li.parentNode.removeChild(li)
//     });
// });

// // ======= attaching events that will prohibit the page from 
// // ======= navigating the site

// const link = document.querySelector('#page-banner .google-link');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigating to:', e.target.textContent, 'was prohibited');
// });

// ============ Event bubbling
// ====== it's the bubbling of event within the parent node of the element is attach to in this case ul;
// ====== hovewer when in the future you want to add a book that added book can not be deleted;
// ====== this is the drawback of the code below

// let btns = document.querySelectorAll('#video-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){

//         const li = e.target.parentElement;

//         li.parentNode.removeChild(li)
//     });
// });
//  ====== to do it successfully follow this code

// const list = document.querySelector('#video-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li)
//     }
// });

// // ======= interacting the form

// const addForms = document.querySelector('#add-video');

// addForms.addEventListener('submit', function(e){
//     e.preventDefault();
//     const value = addForms.querySelector('input[type="text"]').value;
//     // console.log(value);

//     // create elements to pass into the browser
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //adding content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value

    
//     // ===== changing styles and classes to beautify our content to be added above
//     // === style on the fly
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');


//     // appending span to the document
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);

//     // append li to the list; list variable was already declared above
//     list.appendChild(li);


// });

// ======== changing an attributes
// just type this in the console
//  let video = document.querySelector('li:first-child .name');
//  video //--- enter and this output to undefine, of course bubu
//  book.getAttribute('class'); // --- this will output to "name"
//  book.getAttribute('href'); // ---- this will output to null
//  book.setAttribute('class', 'name-2'); // ----- this will change the className "name" to "name-2"

// ======= checkboxes and change events
const list = document.querySelector('#video-list ul');
const forms = document.forms;

// ===== delete the videos
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
});

// ======= adding videoss
// const addForms = document.querySelector('#add-video');
const addForms = forms['add-video'];

addForms.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForms.querySelector('input[type="text"]').value;

    // create elements to pass into the browser
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //adding content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value

    
    // ===== changing styles and classes to beautify our content to be added above
    // === style on the fly
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');


    // appending span to the document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    // append li to the list; list variable was already declared above
    list.appendChild(li);


});

// ==== hide the videos

const hideVideo = document.querySelector('#hide');

hideVideo.addEventListener('change', function(e){
    if(hideVideo.checked){
        list.style.display = "none";
    }else {
        list.style.display ="initial";
    }
});

// ==== addding a search filter 
// grab a reference to the form

const searchBar = document.forms['search-video'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const videos = list.getElementsByTagName('li');
    Array.from(videos).forEach(video => {
        const title = video.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            video.style.display = 'block';
        }else{
            video.style.display = 'none';
        }
    });
});

// ==== tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }
        });
    }
});

