import { uploadBytesResumable, storage, getDownloadURL, ref } from "./firebase";

const uploadFile = async (filename, path, imageData, callbackFn) => {
    let res = {};
    const storageRef = ref(storage, path + filename);
    const uploadTask = uploadBytesResumable(storageRef, imageData);
    uploadTask.on(
        "state_changed",
        snapshot => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        },
        error => {
            res.status = false;
            res.message = error.message;
            callbackFn(res);
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case "storage/unauthorized":
                    // User doesn't have permission to access the object
                    console.log(
                        "User doesnt have permission to access the object"
                    );
                    break;
                case "storage/canceled":
                    // User canceled the upload
                    console.log("user canceled the upload");
                    break;

                // ...
                case "storage/unknown":
                    // Unknown error occurred, inspect error.serverResponse
                    console.log(
                        "Unknown error occurred, inspect error.serverResponse"
                    );
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                console.log("File available at", downloadURL);
                res.status = true;
                res.message = downloadURL;
                callbackFn(res);
            });
        }
    );
};

export { uploadFile };
