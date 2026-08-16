import ResizerModule from "react-image-file-resizer";

const Resizer = ResizerModule.default ?? ResizerModule;

export const resizeFile = (file) =>
  new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      (err) => reject(err),
    );
  });
