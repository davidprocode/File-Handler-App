import DownloadFile from "@/src/components/DownloadFile";
import ShowFile from "@/src/components/ShowFile";
import UploadFileForm from "@/src/components/UploadFileForm";

export default function Page() {
  return (
    <main className="">
      <h1>Hello to File Handler!</h1>
      <UploadFileForm />
      <ShowFile />
      <DownloadFile />
    </main>
  );
}
