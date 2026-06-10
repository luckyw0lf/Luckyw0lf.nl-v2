import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <><div className="p-4 rounded-2">
        <h2 className="text-2xl">Good to see you here; thanks for checking out my page.</h2>
        <p className="text-gray-800 text-base lg:w-2/3">
          Who actually clicks on these links? I'm surprised to even hear anyone about this website. <br />
          <br />
          I'm Luckyw0lf, also known as Ruben. I enjoy new technologies and things surrounding virtual reality, gaming and Internet of Things (IoT).
          Some people might know me as the guy who can't stop yapping about <a className="text-blue-400 hover:underline" href="https://slimevr.dev/" target="_blank">SlimeVR</a> or other related open source VR technologies like <a className="text-blue-400 hover:underline" href="https://babble.diy/" target="_blank">Project Babble</a> or <a className="text-blue-400 hover:underline" href="https://docs.eyetrackvr.dev/" target="_blank">EyeTrackVR</a>
        </p>
        <br />
        <br />
        <h2 className="text-xl">I'm selling <span className="slimevr font-extrabold">SlimeVR</span> sets!</h2>
        <p className="text-gray-800 text-base lg:w-2/3">
         Recently I've opened up orders again for SlimeVR FBT(Full Body Tracking) sets.
          All sets are including straps, chest harness and dongle. <br />
          Set of 6 trackers: €199,- excl shipping. <br />
          Set of 8 trackers: €245,- excl shipping. <br /> 
          Set of 10 trackers: €289,- excl shipping. <br /> 
          <span className="text-gray-400 text-sm">The prices stated here aren't final as the cost for resources for making these trackers change, shipping outside of the EU might come with extra costs for the buyer like import rights and VAT.</span> <br />
          <br />
          <span className="text-black">If you're interested contact me Discord, Email(might take longer) or approach me on VRChat if that's more convenient.</span> <br />
          <br />
          <span className="text-red-400 font-bold">ATTENTION</span> <br />
          These are Smol slimes (aka NRF slimes). These are the next generation slime trackers and are experimental, this does mean that they are future proof as the firmware is actively in development and has been gaining more attention. more info about them <a className="text-blue-400 hover:underline" href="https://docs.shinebright.dev/diy/smol-slime.html">here</a>. <br />
        </p>
      <br />
      <br />
      <h2 className="text-xl">Study</h2>
      <p className="text-gray-800 text-base w-full md:w-2/3">
        As of now, I'm studying Embedded Systems Engineering, a passion of mine!
      </p>
      <p>
        I'll put more info here about this later.
      </p>
    </div></>
  );
}
