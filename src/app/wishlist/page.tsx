import Card from "../components/Card";

export default function Links() {
    return (
    <div className="mx-4 p-2">
        {/* 
        *
        * Steam wishlist 
        *
        */}
        <h2 className="mt-4 text-2xl">My steam wishlist (<a className="text-blue-400 hover:underline" href="https://steamcommunity.com/profiles/76561198312523853/wishlist/">link</a>):</h2>
        <p className="text-sm text-gray-400">In order.</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="Beat Saber"
            description="Right now the game I want the most, I used to be able to play it through a family share on Steam but that system has changed now."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620980/header.jpg"
            link="https://store.steampowered.com/app/620980/Beat_Saber/"/>
        <Card
            title="Dance Dash"
            description="Cool FBT rythm game (underrated check it out)."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2005050/header.jpg"
            link="https://store.steampowered.com/app/2005050/Dance_Dash/"/>
        <Card
            title="HELLDIVERS™ 2"
            description="I always see friends playing this game together and having a bunch of fun with it. FOR DEMOCRACY!"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg"
            link="https://store.steampowered.com/app/553850/HELLDIVERS_2/"/>
        <Card
            title="Poly Bridge 3"
            description="I have Poly Bridge 1 & 2, I think these are fantastic games, music is great too. I would like the 3rd one at some point."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850160/header.jpg"
            link="https://store.steampowered.com/app/553850/HELLDIVERS_2/"/>
        <Card
            title="Factorio"
            description="Have had an eye on it ever since it was still €12. Lately I've been really on the brink of buying it. "
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/header.jpg"
            link="https://store.steampowered.com/app/427520/Factorio/"/>
        <Card
            title="Mars First Logistics"
            description="Looks like a cool puzzle sandbox game, my friend recommended me it."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1532200/header.jpg"
            link="https://store.steampowered.com/app/1532200/Mars_First_Logistics/"/>
        <Card
            title="BONEWORKS"
            description="This game always seemed interesting to me, but never came around to buy it."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/823500/header.jpg"
            link="https://store.steampowered.com/app/823500/BONEWORKS/"/>
        <Card
            title="Space Engineers 2"
            description="Wouldn't buy it at full price, but seems like a cool improvement over the original Space Engineers"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1133870/header.jpg"
            link="https://store.steampowered.com/app/1133870/Space_Engineers_2/"/>
        <Card
            title="Planet Coaster 2"
            description="I've played Planet Coaster 1 for a while. I really enjoy the game, I wouldn't buy this game at full price in it's current state, from what I've seen so far it's kinda like the old game with some cool improvements."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2688950/header.jpg"
            link="https://store.steampowered.com/app/2688950/Planet_Coaster_2/"/>
        </div>


        {/* 
        *
        * Music
        *
        */}
        <h2 className="mt-4 text-2xl">Music:</h2>
        <p className="text-sm text-gray-400">My bandcamp user is also luckyw0lf. (this list is also in order)</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="Still Chasing - Assertive"
            description="Assertive makes banger boolegs & sets, not very many (published ones) though! This is a recent album of theirs."
            src="https://f4.bcbits.com/img/a1548503840_10.jpg"
            link="https://assertivef.bandcamp.com/album/still-chasing" 
            />
        <Card
            title="cyonatype - Synthion"
            description="I really enjoy Synthion (Fav artist), I'd love to own her discography. (album is 3USD, discography is 14.63USD)"
            src="https://f4.bcbits.com/img/a1874905329_16.jpg"
            link="https://synthion.bandcamp.com/album/cyanotype" 
            />
        <Card
            title="NOTHING - N33T"
            description="Recently found this artist, really like their vocals  (3.45USD)"
            src="https://f4.bcbits.com/img/a2307733973_16.jpg"
            link="https://bitbird.bandcamp.com/album/nothing-3" 
            />    
        <Card
            title="エ​イ​リ​ア​ン​☆​ポ​ッ​プ IV (Alien Pop IV) - Snail's House"
            description="Any song from Snail's House slaps, I'd be happy with any song/album of this artist. This album I enjoy in particular. (7USD)"
            src="https://f4.bcbits.com/img/a0420294145_16.jpg"
            link="https://0101.bandcamp.com/album/iv" 
            />
            
        <Card
            title="Wanderstop FM - C418"
            description="C418 always makes bangers, This atmospheric album is really cool! (7USD)"
            src="https://f4.bcbits.com/img/a0265938150_16.jpg"
            link="https://c418.bandcamp.com/album/wanderstop-fm" 
            />
        <Card
            title="SUPER DREAM ZONE - Kobaryo"
            description="Awesome album. (you could give me an independent song too as it's quite pricey)"
            src="https://f4.bcbits.com/img/a2340891607_16.jpg" 
            link="https://hitnex.bandcamp.com/album/super-dream-zone"
            />
        </div>

        {/* <h2 className="mt-4 text-2xl">Other stuff:</h2>
        <p className="text-sm text-gray-400">:D</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
         <Card
            title="Pi Compute Module 4 2GB (8GB EEMC)"
            description="This module will replace the so called CB1 in my 3d printer. You can see it as the main computer that runs the 3d printer, it's a bit slow and anoying at times, would love an upgrade for that :))"
            src="https://www.raspberrystore.nl/PrestaShop/1889-large_default/compute-module-4-wifi-2gb-memory-8gb-emmc-cm4102008.jpg" 
            link="https://www.raspberrystore.nl/PrestaShop/nl/industrieel/536-compute-module-4-wifi-2gb-memory-8gb-emmc-cm4102008-0728886755301.html"
            />
        </div> */}
        {/* 
        *
        * PC Parts (mostly)
        *
        */}

        <h2 className="mt-4 text-2xl">These are also just things that I want, not necessarily want people to buy for me:</h2>
        <p className="text-sm text-gray-400">Mostly because of the price.</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="Quattrobox"
            description="I really want to do multicolor/multi-material on my 3d printer, I want an open source solution, this one looks awesome! This would be the next big upgrade for my printer. about €260 for everything. (and a lot of manual work putting it together (which is the fun part))"
            src="https://github.com/Batalhoti/QuattroBox/raw/main/Images/QuattroBox_V1_View02.jpg"
            link="https://github.com/Batalhoti/QuattroBox?tab=readme-ov-file" />
        <Card
            title="RX 9070XT"
            description="This is something I'm working towards myself, as of right now it's around €659"
            src="https://www.megekko.nl/productimg/1661201/nw/1_Gigabyte-Radeon-RX-9070-XT-Gaming-16GB-OC-Videokaart.jpg"
            link="https://www.megekko.nl/product/1962/1661201/AMD-Videokaarten/Gigabyte-Radeon-RX-9070-XT-Gaming-16GB-OC-Videokaart" />
        </div>

        <h2 className="mt-4 text-2xl">Achieved goals / gifted games:</h2>
        <p className="text-sm text-gray-400">Thanks :D</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="Formbot kit VORON 2.4"
            description="Was grinding out my supermarket job to get this crazy beast of a 3D printer :)) Around €1300,- with printed parts. Special thanks to Jamie from JB3D.uk for all the custom printed parts for all the mods I wanted to do. Made my first dream 3d printer a reality! You should deffo check out their store! (click picture to JB3D.uk)"
            src="/voron.jpg" 
            link="https://jb3d.uk/"
            />
        <Card
            title="VTOL VR"
            description="Thanks Bonvi :))"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/667970/ed3d0e7991c6e91203a3b707942ca91439ed0eba/capsule_616x353.jpg?t=1732654698" 
            link="https://store.steampowered.com/app/667970/VTOL_VR/"
            />
        <Card
            title="Test Your Might LP - Senchineru"
            description="Bought it for myself and a friend. This is some music made by a friend of mine, £5,- Goes hard AS FUCK btw."
            src="https://f4.bcbits.com/img/a2484993789_16.jpg" 
            link="https://slabsaudio.bandcamp.com/album/test-your-might-lp-slabs001"
            />
        <Card
            title="TRUTHEAR PURE In-ear Monitor"
            description="Bought it myself, sounds awesome :))"
            src="https://cdn.prod.website-files.com/63bcdfa5158ffcd72a7a8d8e/685fad71f604944334a84a61_PURE-BIG.jpg"
            link="https://truthear.com/products/pure" />
            </div>
        {/* 
        *
        * 3d Models
        *
        */}
        {/* <h2 className="mt-4 text-2xl">3d Models, to edit and use for VRChat:</h2>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="エイラ (Eira) base model"
            description="It's around €32 euros converted from 5200 JPY"
            src="https://booth.pximg.net/70c03f34-f561-4b7a-af1a-6bec13229237/i/5426070/1f5b51f2-9bbd-4d23-a359-8372a7052e6b_base_resized.jpg" 
            link="https://booth.pm/en/items/5426070"
            />
        </div> */}
    </div>
    )
}