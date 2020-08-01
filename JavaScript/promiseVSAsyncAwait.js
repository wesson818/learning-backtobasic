const userPromise = new Promise((resolve,reject) => {
    const error = false
    setTimeout(()=>{
        if(error){
            reject("Cannot find user data")
        }else{
            resolve({
                name: 'John',
                email: 'john@me.com'
            })
        }
    },1000)
})

userPromise
    .then(response => console.log(response))
    .catch(error=> console.log(error))

// async & await
const photos = [];

(function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 2000)
    })
    
    let result = uploadStatus;
    
    console.log('photoUpload:',result);
    console.log('photoUpload:',photos.length);
})();


(async function photoUploadAsyncAwait() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 2000)
    })
    
    let result = await uploadStatus;
    
    console.log('photoUploadAsyncAwait:',result);
    console.log('photoUploadAsyncAwait:',photos.length);
})();
