"use client";
import { FormEvent } from "react";

export default function DownloadFile() {
  async function onClickHandler(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Log: Download Button pressed by the user");
  }
  return <button onClick={onClickHandler}>Download File</button>;
}
