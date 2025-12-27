import axios from "axios";
import { useState } from "react";

export default function PdfUpload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadPdf = async () => {
    // 1️⃣ Get auth params
    // const authRes = await axios.get(
    //   "http://localhost:4000/imagekit-auth"
    // );

    // const { signature, token, expire } = authRes.data;

    // 2️⃣ Prepare form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("publicKey", 'public_tFNwax3I1e9DkNuJMU6oB1SHkyQ');
    formData.append("signature", signature);
    formData.append("token", token);
    formData.append("expire", expire);
    formData.append("folder", "/pdfs");

    // 3️⃣ Upload to ImageKit
    const uploadRes = await axios.post(
      "https://upload.imagekit.io/api/v1/files/upload",
      formData
    );

    setUrl(uploadRes.data.url);
  };

  return (
    <div className="mt-48">
      <input
        type="file"
        accept="application/pdf"
        className="bg-amber-700"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="bg-amber-400" onClick={uploadPdf}>Upload PDF</button>

      {url && (
        <p>
          Uploaded PDF:{" "}
          <a href={url} target="_blank" rel="noreferrer">
            View PDF
          </a>
        </p>
      )}
    </div>
  );
}
