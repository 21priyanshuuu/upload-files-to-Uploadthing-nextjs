"use client";
 
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import Image from "next/image";
 
export default function Home() {
    const [imageurl,setimageurl]=useState<string>('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setimageurl(res[0].url);
          console.log(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />


    <>
    {imageurl.length?(
        <div>

            <Image src={imageurl} alt='my-image' width={500} height={500}/>
        </div>
    ):null}
    </>
    </main>
  );
}