import Card from "../components/Card";

export default function Links() {
    return (
        <div className="flex justify-center m-4 p-4">
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full 2xl:w-2/3 gap-4 pt-2">
            <Card 
            title="Discord"
            description="My personal Discord account."
            src="discord-mark-blue.svg"
            link="https://discord.com/users/711012156233089115"
            />
            <Card 
            title="GitHub"
            description="Check out my GitHub repositories."
            src="/github-mark.svg"
            link="https://github.com/luckyw0lf"
            />
            <Card 
            title="Steam"
            description="ruben0770"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png"
            link="https://steamcommunity.com/id/Ruben0770"
            />
            <Card 
            title="Buy Me A Coffee"
            description="Only if you want to."
            src="/buymeacoffee.png"
            link="https://buymeacoffee.com/luckyw0lf"
            />
            <Card 
            title="E-Mail"
            description="mcluckyw0lf@gmail.com"
            src="/gmail.svg"
            link=""
            />
        </div>
        </div>

    )}