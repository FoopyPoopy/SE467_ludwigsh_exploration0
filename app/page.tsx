import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500 text-white">
      <Image
        src="/osu-logo.svg"
        alt="Oregon State University Logo"
        width={150}
        height={150}
        priority
      />
      <h1 className="text-4xl font-bold mt-4">Hello from Ludwigsh!</h1>
      <p className="text-lg mt-2">This was deployed automaticall via Github Actions!</p>
    </div>
  );
}
