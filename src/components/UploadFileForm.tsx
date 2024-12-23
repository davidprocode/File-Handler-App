"use client";
import { FormEvent } from "react";

export default function UploadFileForm() {
  async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("api/filehandler", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(formData);
  }
  return (
    <main className="">
      <form onSubmit={onSubmitHandler}>
        <input type="file" name="file" />
        <button type="submit">Upload File</button>
      </form>
    </main>
  );
}
