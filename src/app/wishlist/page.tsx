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
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620980/header.jpg?t=1734095750"
            link="https://store.steampowered.com/app/620980/Beat_Saber/"/>
        <Card
            title="HELLDIVERS™ 2"
            description="I always see friends playing this game together and having a bunch of fun with it. FOR DEMOCRACY!"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1734382355"
            link="https://store.steampowered.com/app/553850/HELLDIVERS_2/"/>
        <Card
            title="BONEWORKS"
            description="This game always seemed interesting to me, but never came around to buy it."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/823500/header.jpg?t=1581381377"
            link="https://store.steampowered.com/app/823500/BONEWORKS/"/>
        <Card
            title="Space Engineers 2"
            description="Wouldn't buy it at full price, but seems like a cool improvement over the original Space Engineers"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1133870/header.jpg?t=1735901470"
            link="https://store.steampowered.com/app/1133870/Space_Engineers_2/"/>
        <Card
            title="Planet Coaster 2"
            description="I've played Planet Coaster 1 for a while. I really enjoy the game, I wouldn't buy this game at full price in it's current state, from what I've seen so far it's kinda like the old game with some cool improvements."
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2688950/header.jpg?t=1734083698"
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
            title="Test Your Might LP - Senchineru"
            description="Some music made by a friend of mine £5,- Goes hard AS FUCK btw."
            src="https://f4.bcbits.com/img/a2484993789_16.jpg" 
            link="https://slabsaudio.bandcamp.com/album/test-your-might-lp-slabs001"
            />
        <Card
            title="cyonatype - Synthion"
            description="I really enjoy Synthion, I'd love to own her discography. (album is 3USD, discography is 14,63USD)"
            src="https://f4.bcbits.com/img/a1874905329_16.jpg"
            link="https://synthion.bandcamp.com/album/cyanotype" 
            />
        <Card
            title="エ​イ​リ​ア​ン​☆​ポ​ッ​プ IV (Alien Pop IV) - Snail's House"
            description="Any song from Snail's House slaps, I'd be happy with any song/album of this artist. This album I enjoy in particular. (7USD)"
            src="https://f4.bcbits.com/img/a0420294145_16.jpg"
            link="https://0101.bandcamp.com/album/iv" 
            />
        <Card
            title="SUPER DREAM ZONE - Kobaryo"
            description="Awesome album. (you could give me an independent song too as it's quite pricey)"
            src="https://f4.bcbits.com/img/a2340891607_16.jpg" 
            link="https://hitnex.bandcamp.com/album/super-dream-zone"
            />
        </div>


        {/* 
        *
        * PC Parts (mostly)
        *
        */}
        <h2 className="mt-4 text-2xl">These are also just things that I want, not necessarily want people to buy for me:</h2>
        <p className="text-sm text-gray-400">Mostly because of the price.</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="M.2 PCIE gen 4 drive (2TB)"
            description="Now that I have a new motherboard, my SATA m.2 doesn't work on it anymore, this drive is price to preformance and has some nice speeds. €120,-"
            src="https://www.megekko.nl/productimg/963759/nw/1_Lexar-LNQ790-2TB-M-2-SSD.jpg" 
            link="https://www.megekko.nl/product/0/963759/Lexar-LNQ790-2TB-M-2-SSD"
            />
        <Card
            title="RX 7800XT"
            description="This is something I'm working towards myself, It's around €500,-"
            src="https://azerty.nl/media/catalog/product/C/b/CboGp8.a3e266af6f61601adbe53287bdacd72f-2fd2a582_1.jpg"
            link="https://azerty.nl/product/gigabyte-radeon-rx-7800-xt-gaming-oc-videokaart/6123912" />
        </div>


        {/* 
        *
        * 3d Models
        *
        */}
        <h2 className="mt-4 text-2xl">3d Models, to edit and use for VRChat:</h2>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
        <Card
            title="エイラ (Eira) base model"
            description="It's around €32 euros converted from 5200 JPY"
            src="https://booth.pximg.net/70c03f34-f561-4b7a-af1a-6bec13229237/i/5426070/1f5b51f2-9bbd-4d23-a359-8372a7052e6b_base_resized.jpg" 
            link="https://booth.pm/en/items/5426070"
            />
        </div>
    </div>
    )
}