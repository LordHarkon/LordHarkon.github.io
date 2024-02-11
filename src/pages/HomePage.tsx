import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/Main";

type ItemProps = {
  title: string;
  description: string;
  cover: string;
  href: string;
  customColor?: string;
  customClass?: string;
};

const Item: FC<ItemProps> = (props) => {
  return (
    <Link to={props.href} className="m-2 h-min w-min">
      <div
        className="h-[448px] w-64 border border-white/50 bg-harry p-4 dark:border-white/10 dark:bg-slate-800"
        style={{ backgroundColor: props.customColor || "rgb(80 200 120)" }}
      >
        <div className="h-72">
          <img
            src={props.cover}
            alt="cover"
            className="h-full w-full border border-white/50 object-cover dark:border-white/10"
          />
        </div>
        <span className={clsx("mt-1 flex items-center justify-center text-xl font-bold text-black", props.customClass)}>
          {props.title}
        </span>
        <p className="text-xs font-semibold text-gray-800 dark:text-slate-500">
          {props.description.length > 200 ? props.description.substring(0, 200) + "..." : props.description}
        </p>
      </div>
    </Link>
  );
};

function HomePage() {
  return (
    <MainLayout
      title="Hooshu's Interactive CYOAs"
      description="Hooshu's personal website for static non-modular CYOAs."
    >
      <h1 className="flex items-center justify-center text-4xl font-bold text-white">Available CYOAs</h1>
      <div className="flex flex-row justify-center p-4">
        <Item
          title="Superpowers"
          cover="/superpowers.jpg"
          href="/superpowers"
          description="A new opportunity appears! You and 99 others are given superpowers. What will you do with them?"
        />
        <Item
          title="Goddess of the Hearth"
          cover="https://i.imgur.com/grzjWIE.jpeg"
          href="/goddess-hearth"
          description="Hestia, the Goddess of Home, offers to create a sanctuary for your soul—a pocket dimension where sickness and pain fade away, and all inhabitants remain forever young and strong."
          customColor="#e9f9ea"
          customClass="satisfy"
        />
      </div>
    </MainLayout>
  );
}

export default HomePage;
