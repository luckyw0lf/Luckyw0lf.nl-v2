import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <><div className="p-4 rounded-2">
      <h2 className="text-2xl">Good to see you here; thanks for checking out my page.</h2>
      <p className="text-gray-800 text-base w-2/3">
        Who actually clicks on these links? I'm surprised to even hear anyone about this website. <br />
        <br />
        I'm Luckyw0lf, also known as Ruben. I enjoy new technologies and things surrounding virtual reality, gaming and Internet of Things (IoT). <br />
        Some people might know me as the guy who can't stop yapping about <a className="text-blue-400 hover:underline" href="https://slimevr.dev/" target="_blank">SlimeVR</a> or other related open source VR technologies like <a className="text-blue-400 hover:underline" href="https://babble.diy/" target="_blank">Project Babble</a> or <a className="text-blue-400 hover:underline" href="https://docs.eyetrackvr.dev/" target="_blank">EyeTrackVR</a>
      </p>
      <br />
      <h2 className="text-xl">Developing</h2>
      <p className="text-gray-800 text-base w-full md:w-2/3">
        Many already know that I'm an aspiring developer. I specialize in Typescript and own a few certificates.
        As of right now, I'm looking for a job in the Software Development industry. Check out <a className="text-blue-400 hover:underline" href="/links.html">links</a> to get in touch!
      </p>
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
          title="Java certification"
          description=""
          src="/certiport-logo.png" />
        <Card
          title="Python certification"
          description=""
          src="/certiport-logo.png" />
        <Card
          title="JavaScript certification"
          description=""
          src="/certiport-logo.png" />
      </div>
    </div></>
  );
}
