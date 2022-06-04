// var editorconfi = {
//     skin: "rounded-corner",
//     toolbar: "basic"
// }
// var editor1 = new RichTextEditor("#description", editorconfi);

// Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/imageUploader', ImageUploader);

// "圖片連結提示"icon
var icons = Quill.import('ui/icons');
icons['imageurl'] = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/></svg>';

var quill = new Quill("#quilledit", {
  theme: "snow",
  modules: {
    imageResize: {
        displaySize: true
    },
    toolbar: {
      container: [            
        ['bold', 'italic'],
        [{ 'size':  ['small', false, 'large', 'huge'] }], // 文字大小
        ['link'],   
        ['image'],
        ['imageurl']
      ],
      handlers: {
        imageurl: imageHandler
      },
    },
    imageUploader: {
        upload: file => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                );
            }, 3000);
        });
      },
    },
  }
});

// "圖片連結提示" function
function imageHandler() {
    var range = this.quill.getSelection();
    var value = prompt('請貼上圖片連結');
    if(value){
        this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
    }
}

