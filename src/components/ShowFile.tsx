"use client";
import { FormEvent, useState } from "react";

export default function ShowFile() {
  const [fileData, setFileData] = useState(undefined);

  return <div className="">{fileData ?? <p>No File</p>}</div>;
}
