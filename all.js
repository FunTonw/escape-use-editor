// var editorconfi = {
//     skin: "rounded-corner",
//     toolbar: "basic"
// }
// var editor1 = new RichTextEditor("#description", editorconfi);

// Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/imageUploader', ImageUploader);
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
        ['image']
      ],
    //   handlers: {
    //     image: imageHandler
    //   },
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

// function imageHandler() {
//     var range = this.quill.getSelection();
//     var value = prompt('請貼上圖片連結');
//     if(value){
//         this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
//     }
// }