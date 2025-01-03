import Card from "../components/Card";

export default function Links() {
    return (
        <div className="flex justify-center m-4 p-4">
        <div className="grid grid-cols-1 grid-rows-3 place-items-center md:grid-cols-3 w-full 2xl:w-2/3 gap-4">
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
            title="Buy Me A Coffee"
            description="Only if you want to."
            src="/buymeacoffee.png"
            link="https://buymeacoffee.com/luckyw0lf"
            />
            <Card 
            title="E-mail"
            description="mcluckyw0lf@gmail.com"
            src="/gmail.svg"
            link=""
            />
        </div>
        </div>

    )}