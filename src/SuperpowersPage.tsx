import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { deals, powers, tasks } from "~/data/powers";
import MainLayout from "~/layouts/Main";
import {
  abandonedPowerForTaskAtom,
  abandonedPowersAtom,
  empoweredNumberAtom,
  selectedDealsAtom,
  selectedPowersAtom,
  selectedSwappedPowerAtom,
  selectedTaskAtom,
  swappedPowersAtom,
} from "./atoms";
import { generateUniqueNumbers } from "./utils";

type TabsType = "powers" | "deals" | "tasks" | "result";

type InformationBoxProps = {
  title?: string;
  hidden?: boolean;
  centered?: boolean;
  children: ReactNode;
};

const InformationBox: FC<InformationBoxProps> = (props) => {
  return !props.title ? (
    <div
      className={clsx("mx-auto rounded border border-white/40 bg-harry p-4 dark:bg-slate-700 lg:w-2/3", {
        hidden: props.hidden,
        "text-center": props.centered,
      })}
    >
      {props.children}
    </div>
  ) : (
    <div
      className={clsx(
        "mx-auto rounded border border-gray-400/40 bg-red-500 px-4 pb-4 dark:border-white/10 dark:bg-red-700 lg:w-2/3",
        {
          hidden: props.hidden,
          "text-center": props.centered,
        },
      )}
    >
      <h2 className="my-2 flex w-full items-center justify-center border-b border-white/10 text-2xl">{props.title}</h2>
      {props.children}
    </div>
  );
};

type CategoryProps = {
  children: ReactNode;
  hidden?: boolean;
};

const Category: FC<CategoryProps> = (props) => {
  return (
    <div
      className={clsx("flex-wrap justify-around p-4", {
        hidden: props.hidden,
        flex: !props.hidden,
      })}
    >
      {props.children}
    </div>
  );
};

type TabNavigationProps = {
  activeTab: TabsType;
  setActiveTab: Dispatch<SetStateAction<TabsType>>;
};

const TabNavigation: FC<TabNavigationProps> = (props) => {
  const possibleTab: Array<TabsType> = ["powers", "deals", "tasks", "result"];
  const previousTab = () => {
    const index = possibleTab.indexOf(props.activeTab);
    if (index > 0) {
      props.setActiveTab(possibleTab[index - 1]);
    }
  };

  const nextTab = () => {
    const index = possibleTab.indexOf(props.activeTab);
    if (index < possibleTab.length - 1) {
      props.setActiveTab(possibleTab[index + 1]);
    }
  };

  const hasPreviousTab = () => {
    return props.activeTab !== "powers";
  };

  const hasNextTab = () => {
    return props.activeTab !== "result";
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className={clsx("flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20", {
          "cursor-not-allowed opacity-50": !hasPreviousTab(),
        })}
        onClick={previousTab}
        disabled={!hasPreviousTab()}
      >
        <HiChevronDoubleLeft />
      </button>
      <button
        className={clsx("flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20", {
          "cursor-not-allowed opacity-50": !hasNextTab(),
        })}
        onClick={nextTab}
        disabled={!hasNextTab()}
      >
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};

type CategoryItemProps = {
  category: "deal" | "swap" | "combination" | "power" | "task" | "showcase";
  index: number;
  title: string;
  description: string;
  image?: string;
  selectable?: boolean;
};

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const [selectedDeals, setSelectedDeals] = useAtom(selectedDealsAtom);
  const [abandonedPowers, setAbandonedPowers] = useAtom(abandonedPowersAtom);
  const [selectedTask, setSelectedTask] = useAtom(selectedTaskAtom);
  const [swappedPowers, setSwappedPowers] = useAtom(swappedPowersAtom);
  const [selectedSwappedPower, setSelectedSwappedPower] = useAtom(selectedSwappedPowerAtom);

  const isIncompatible = () => {
    if (props.category !== "deal") return false;
    const incompatibleDeals = deals.find((deal) => deal.index === props.index)?.incompatible;
    if (incompatibleDeals && incompatibleDeals.some((deal) => selectedDeals.includes(deal))) return true;
    return false;
  };

  const checkIfSelected = () => {
    if (props.category === "deal") {
      return selectedDeals.includes(props.index);
    } else if (props.category === "swap") {
      return swappedPowers.includes(props.index);
    } else if (props.category === "power") {
      return abandonedPowers.includes(props.index);
    } else if (props.category === "task") {
      return props.index === selectedTask;
    }
  };

  const toggleItem = () => {
    const { category, index } = props;
    if (!props.selectable) return;
    if (category === "deal") {
      if (isIncompatible()) return;

      if (selectedDeals.includes(index)) {
        setSelectedDeals(selectedDeals.filter((item) => item !== index));
      } else {
        setSelectedDeals([...selectedDeals, index]);
      }
    } else if (category === "swap") {
      if (swappedPowers.includes(index)) {
        if (swappedPowers.length === 3) setSelectedSwappedPower(0);
        setSwappedPowers(swappedPowers.filter((item) => item !== index));
      } else {
        if (swappedPowers.length >= 3) setSwappedPowers((prev) => [...prev.slice(1), index]);
        else setSwappedPowers([...swappedPowers, index]);
      }
    } else if (category === "power") {
      if (abandonedPowers.includes(index)) {
        setAbandonedPowers(abandonedPowers.filter((item) => item !== index));
      } else {
        // if the power has been selected in the swap deal, remove it from there before adding it to the abandoned powers
        if (swappedPowers.includes(index)) {
          setSwappedPowers(swappedPowers.filter((item) => item !== index));
          setSelectedSwappedPower(0);
        }
        if (abandonedPowers.length >= 3) setAbandonedPowers((prev) => prev.slice(1));
        setAbandonedPowers((prev) => [...prev, index]);
      }
    }
  };

  const incompatibleWith = () => {
    if (props.category !== "deal") return;
    const incompatibleDeals = deals.find((deal) => deal.index === props.index)?.incompatible;
    if (incompatibleDeals) {
      return (
        <div className="text-center">
          {incompatibleDeals.map((deal) => (
            <p
              key={deal}
              className={clsx("text-xs", {
                "text-red-600 dark:text-red-500": !checkIfSelected(),
                "text-red-300": checkIfSelected(),
              })}
            >
              Incompatible with:{" "}
              <span className="font-semibold">{deals.find((dealItem) => dealItem.index === deal)?.name}</span>
            </p>
          ))}
        </div>
      );
    }
  };

  return (
    <div
      className={clsx(
        "m-4 flex w-80 cursor-pointer flex-col items-center space-y-2 border border-white/30 p-4 dark:border-white/10",
        {
          "select-none blur": isIncompatible(),
          "h-[400px]": props.image,
          "h-[176px]": !props.image,
          "bg-harry dark:bg-slate-900": !checkIfSelected(),
          "bg-red-500 dark:bg-blue-600": checkIfSelected(),
        },
      )}
      onClick={toggleItem}
      id={`${props.category}-${props.index}`}
    >
      {props.image ? (
        <img
          src={props.image}
          alt="cover"
          className="h-56 w-56 border border-white/10 object-cover dark:border-white/10"
        />
      ) : null}
      <span className="mt-1 flex items-center justify-center text-center text-xl font-bold capitalize">
        {props.index ? props.index + ". " : null}
        {props.title}
      </span>
      {incompatibleWith()}
      <p
        className={clsx("custom-scroll-light dark:custom-scroll-dark max-h-24 overflow-auto text-xs font-semibold", {
          "text-gray-800 dark:text-slate-500": !checkIfSelected(),
          "text-gray-200 dark:text-slate-200": checkIfSelected(),
        })}
      >
        {props.description}
      </p>
    </div>
  );
};

const SuperpowersPage = () => {
  const [empoweredNumber, setEmpoweredNumber] = useAtom(empoweredNumberAtom);
  const [selectedDeals, setSelectedDeals] = useAtom(selectedDealsAtom);
  const [selectedPowers, setSelectedPowers] = useAtom(selectedPowersAtom);
  const [abandonedPowers, setAbandonedPowers] = useAtom(abandonedPowersAtom);
  const [swappedPowers, setSwappedPowers] = useAtom(swappedPowersAtom);
  const [selectedSwappedPower, setSelectedSwappedPower] = useAtom(selectedSwappedPowerAtom);
  const [selectedTask, setSelectedTask] = useAtom(selectedTaskAtom);
  const [abandonedPowerForTask, setAbandonedPowerForTask] = useAtom(abandonedPowerForTaskAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTaskPower, setIsOpenTaskPower] = useState(false);
  const [activeTab, setActiveTab] = useState<TabsType>("powers");

  const handleRoll = () => {
    const powers = generateUniqueNumbers(10, 1, 150);
    setSelectedPowers(powers);
    setEmpoweredNumber(Math.floor(Math.random() * (100 - 1 + 1) + 1));
  };

  const resetBuild = () => {
    setEmpoweredNumber(0);
    setSelectedDeals([]);
    setSelectedPowers([]);
    setAbandonedPowers([]);
    setSwappedPowers([]);
    setSelectedSwappedPower(0);
    setSelectedTask(0);
    setAbandonedPowerForTask(0);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainLayout
      title="Superpowers | Hooshu's Static Interactive CYOAs"
      description="Hooshu's personal website for static non-modular CYOAs."
    >
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto h-[512px] w-[512px] max-w-lg border border-white/10 bg-harry p-4 text-black backdrop-blur dark:bg-slate-800 dark:text-white">
              <Dialog.Title className="text-center text-lg font-bold">Select Your Desired Power</Dialog.Title>
              <div className="custom-scroll-light dark:custom-scroll-dark h-[448px] overflow-auto">
                {powers
                  .filter((power) => !selectedPowers.includes(power.index))
                  .filter((power) => !abandonedPowers.includes(power.index))
                  .map((power) => (
                    <div
                      key={power.index}
                      className="mr-1 flex cursor-pointer flex-col border border-gray-500 p-2 dark:border-white/10 [&:not(:first-child)]:[&:not(:last-child)]:my-1"
                      onClick={() => {
                        setSelectedSwappedPower(power.index);
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-sm font-semibold">
                        {power.index}. {power.name}
                      </span>
                      <span className="text-xs">{power.description}</span>
                    </div>
                  ))}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <Dialog open={isOpenTaskPower} onClose={() => setIsOpenTaskPower(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto h-[512px] w-[512px] max-w-lg border border-white/10 bg-harry p-4 text-black backdrop-blur dark:bg-slate-800 dark:text-white">
              <Dialog.Title className="text-center text-lg font-bold">Select Power To Give Up</Dialog.Title>
              <div className="custom-scroll-light dark:custom-scroll-dark h-[448px] overflow-auto">
                {powers
                  .filter((power) => selectedPowers.includes(power.index) || selectedSwappedPower === power.index)
                  .filter((power) => !abandonedPowers.includes(power.index))
                  .filter((power) => !swappedPowers.includes(power.index))
                  .map((power) => (
                    <div
                      key={power.index}
                      className={clsx(
                        "mr-1 flex cursor-pointer flex-col border border-gray-500 p-2 dark:border-white/10 [&:not(:first-child)]:[&:not(:last-child)]:my-1",
                        {
                          "bg-red-500 dark:bg-blue-600": power.index === abandonedPowerForTask,
                        },
                      )}
                      onClick={() => {
                        setAbandonedPowerForTask(power.index);
                        setIsOpenTaskPower(false);
                      }}
                    >
                      <span className="text-sm font-semibold">
                        {power.index}. {power.name}
                      </span>
                      <span className="text-xs">{power.description}</span>
                    </div>
                  ))}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <h1 className="flex items-center justify-center text-4xl font-bold text-white underline">Superpowers CYOA</h1>
      <p className="flex items-center justify-center text-sm text-gray-500 dark:text-slate-600">
        <Link to="https://i.4pcdn.org/tg/1439155834194.pdf" className="mr-1 underline">
          Static version
        </Link>{" "}
        created by Jaundice. Interactive version created by Hooshu. This is version 1.0.
      </p>
      <div className="flex items-center justify-center space-x-3 text-xl font-semibold">
        <div
          className={clsx({
            "text-sky-400 underline": activeTab === "powers",
            "cursor-pointer text-white hover:underline": activeTab !== "powers",
          })}
          onClick={() => setActiveTab("powers")}
        >
          Powers
        </div>
        <HiChevronDoubleRight className="text-white" />
        <div
          className={clsx({
            "text-sky-400 underline": activeTab === "deals",
            "cursor-pointer text-white hover:underline": activeTab !== "deals",
          })}
          onClick={() => setActiveTab("deals")}
        >
          Deals
        </div>
        <HiChevronDoubleRight className="text-white" />
        <div
          className={clsx({
            "text-sky-400 underline": activeTab === "tasks",
            "cursor-pointer text-white hover:underline": activeTab !== "tasks",
          })}
          onClick={() => setActiveTab("tasks")}
        >
          Task
        </div>
        <HiChevronDoubleRight className="text-white" />
        <div
          className={clsx({
            "text-sky-400 underline": activeTab === "result",
            "cursor-pointer text-white hover:underline": activeTab !== "result",
          })}
          onClick={() => setActiveTab("result")}
        >
          Result
        </div>
      </div>
      <div
        className={clsx("flex flex-col space-y-2", {
          hidden: activeTab !== "powers",
        })}
      >
        <InformationBox>
          When you next fall asleep you will have a dream. In it you will be standing in a totally flat, white plane,
          nothing around you at all. You turn around to see a black number hovering away and up from you. As you turn
          you see more numbers to a total of ten.
        </InformationBox>
        <InformationBox>
          <button
            className="cursor-pointer rounded border border-white/20 bg-green-700 px-1 disabled:cursor-default disabled:bg-gray-600 dark:bg-slate-800 dark:disabled:bg-slate-600"
            onClick={handleRoll}
            disabled={!!selectedPowers.length}
          >
            Roll 10x
          </button>{" "}
          and you will gain the boon attributed to each number. After you have 10 powers chose 3 of them to relinquish.
          These powers vanish (unless you take{" "}
          <span
            className="cursor-pointer text-blue-600 underline dark:text-blue-400"
            onClick={() => scrollTo("deal-2")}
          >
            Life Plan
          </span>
          ).
        </InformationBox>
        <InformationBox>
          Once you see all the numbers you wake up, the numbers burned into your mind, you feel strange, you feel
          powerful.
        </InformationBox>
        <InformationBox>
          There are 99 randomly selected others who all have the same choice as you, when one of the 100 empowered
          (that’s you lot) dies another human is selected at random. You can sense briefly each time one of you dies and
          is chosen. You are no. {empoweredNumber !== 0 ? empoweredNumber : "UNKNOWN"}.
        </InformationBox>
        <InformationBox centered title="Powers" hidden={selectedPowers.length === 0}>
          Powers are the main part of this CYOA. You can have up to 10 powers if you take{" "}
          <span
            className="cursor-pointer text-blue-600 underline dark:text-blue-400"
            onClick={() => scrollTo("deal-2")}
          >
            Life Plan
          </span>
          .{" "}
          <span
            className="cursor-pointer text-blue-600 underline dark:text-blue-400"
            onClick={() => scrollTo("deal-3")}
          >
            Glass Cannon
          </span>{" "}
          doesn't count since you will very soon die.
          <p className="mt-3 font-bold">Choose 3 to discard.</p>
        </InformationBox>
        <Category hidden={selectedPowers.length === 0}>
          {powers
            .filter((power) => selectedPowers.includes(power.index))
            .map((power) => (
              <CategoryItem
                key={power.index}
                category="power"
                index={power.index}
                title={power.name}
                description={power.description}
                image={power.image}
                selectable
              />
            ))}
        </Category>
      </div>
      <div
        className={clsx("flex flex-col space-y-2", {
          hidden: activeTab !== "deals",
        })}
      >
        <InformationBox centered title="Deals" hidden={selectedPowers.length === 0}>
          Deals are ways to get more powers. Be careful of what you choose.
          <p className="mt-3 font-bold">Choose however many you can.</p>
        </InformationBox>
        <Category hidden={selectedPowers.length === 0}>
          {deals.map((deal) => (
            <CategoryItem
              key={deal.index}
              category="deal"
              index={deal.index}
              title={deal.name}
              description={deal.description}
              image={deal.image}
              selectable
            />
          ))}
        </Category>
        <InformationBox centered title="Swap Deal" hidden={!selectedDeals.some((d) => d === 1)}>
          Here you will select which powers you want to swap for your desired one.
          <p className="mt-3 font-bold">Choose 3 to swap.</p>
        </InformationBox>
        <Category hidden={!selectedDeals.some((d) => d === 1)}>
          {powers
            .filter((power) => selectedPowers.includes(power.index))
            .filter((power) => !abandonedPowers.includes(power.index))
            .map((power) => (
              <CategoryItem
                key={power.index}
                category="swap"
                index={power.index}
                title={power.name}
                description={power.description}
                image={power.image}
                selectable
              />
            ))}
        </Category>
        <InformationBox centered title="Select Power For Swap" hidden={swappedPowers.length < 3}>
          Here's where you will select the power you want to swap for.
          <p className="mt-3 font-bold">Choose 1 to get.</p>
        </InformationBox>
        <Category hidden={swappedPowers.length < 3}>
          <div>
            <div
              className="cursor-pointer border border-white/30 bg-harry p-4 text-center font-bold dark:border-white/10 dark:bg-slate-900"
              onClick={() => setIsOpen(true)}
            >
              Open Menu
            </div>
            {powers
              .filter((power) => power.index === selectedSwappedPower)
              .map((power) => (
                <CategoryItem
                  key={power.index}
                  category="showcase"
                  index={power.index}
                  title={power.name}
                  description={power.description}
                  image={power.image}
                  selectable
                />
              ))}
          </div>
        </Category>
      </div>
      <div
        className={clsx("flex flex-col space-y-2", {
          hidden: activeTab !== "tasks",
        })}
      >
        <InformationBox hidden={selectedPowers.length === 0}>
          Over the next year or so, if you manage to survive that long, the numbers which correlate to your power will
          begin to appear on your back. Faint at first like a faded scar but growing stronger and more prominent the
          more you use that power. Slowly all the numbers will climb upwards towards your face, the more you use your
          powers, the faster they will climb.
        </InformationBox>
        <InformationBox hidden={selectedPowers.length === 0}>
          Given time, whether you will it or not, you will come to meet the other Empowered. At first only in ones and
          twos and you might not even recognise each other but in time you will come to know each other. For there is
          something trailing you, all of you.
        </InformationBox>
        <InformationBox hidden={selectedPowers.length === 0}>
          Out of sight but ever present, it comes to challenge the 100. This creature, this Challenger, is relentless,
          every night it comes for one of the Empowered. All Empowered must face the Challenger it is only a matter of
          time, though it gives them a choice. Give up a power and be spared or face a challenge.
        </InformationBox>
        <InformationBox hidden={selectedPowers.length === 0}>
          This must be done after you have got your powers and chosen any deals. This number will determine which of the
          Empowered you are. The Challenger will come for no. 1 first, no. 2 second and so on. You are no.{" "}
          {empoweredNumber || "UNKNOWN"}.
        </InformationBox>
        <InformationBox centered title="Tasks" hidden={selectedPowers.length === 0}>
          Once you have done that{" "}
          <button
            className="cursor-pointer rounded border border-white/20 bg-green-700 px-1 disabled:cursor-default disabled:bg-gray-600 dark:bg-slate-800 dark:disabled:bg-slate-600"
            onClick={() => setSelectedTask(Math.floor(Math.random() * (10 - 1 + 1) + 1))}
            disabled={selectedTask !== 0}
          >
            roll
          </button>{" "}
          to determine what task you are given. You can always opt to give up a power and the Challenger will leave you
          alone forever. However if you choose the challenge and fail you will have a power taken from you and you will
          be challenged again 1 year from then, you cannot back out of this next challenge. If you succeed the
          Challenger will never come for you again.
          <p className="mt-3 font-bold">One will be chosen upon rolling.</p>
        </InformationBox>
        <Category hidden={selectedPowers.length === 0}>
          <div className="flex w-full items-center justify-center space-x-6">
            <button
              className={clsx("cursor-pointer border border-white/20 bg-slate-800 px-4 py-2 text-white", {
                "bg-harry dark:bg-blue-500": abandonedPowerForTask === -1,
              })}
              onClick={() => setAbandonedPowerForTask(-1)}
            >
              Do Task
            </button>
            <button
              className={clsx("cursor-pointer border border-white/20 bg-slate-800 px-4 py-2 text-white", {
                "bg-harry dark:bg-blue-500": abandonedPowerForTask > 0,
              })}
              onClick={() => setIsOpenTaskPower(true)}
            >
              Give Up Power
            </button>
          </div>
          {tasks.map((task) => (
            <CategoryItem
              key={task.index}
              category="task"
              index={task.index}
              title={task.name}
              description={task.description}
              image={task.image}
            />
          ))}
        </Category>
      </div>
      <div
        className={clsx("flex flex-col space-y-2", {
          hidden: activeTab !== "result",
        })}
      >
        <InformationBox title="Build">
          You are empowered no. <strong>{empoweredNumber !== 0 ? empoweredNumber : "UNKNOWN"}</strong>.
          <br />
          <br />
          You have the following powers:
          {selectedPowers.length > 0 ? (
            <ul className="list-inside list-disc">
              {powers
                .filter((power) => selectedPowers.includes(power.index) || selectedSwappedPower === power.index)
                .filter((power) => !abandonedPowers.includes(power.index))
                .filter((power) => !swappedPowers.includes(power.index))
                .filter((power) => power.index !== abandonedPowerForTask)
                .map((power) => (
                  <li key={power.index}>
                    {power.index}. {power.name}
                  </li>
                ))}
            </ul>
          ) : (
            <ul className="list-inside list-disc">
              <li>None</li>
            </ul>
          )}
          <br />
          You have chosen the following deal(s):
          {selectedDeals.length > 0 ? (
            <ul className="list-inside list-disc">
              {selectedDeals
                .sort((a, b) => a - b)
                .map((deal) => {
                  const dealData = deals.find((d) => d.index === deal) as Deal;
                  return (
                    <li key={deal}>
                      {dealData.index}. {dealData.name}
                    </li>
                  );
                })}
            </ul>
          ) : (
            <ul className="list-inside list-disc">
              <li>None</li>
            </ul>
          )}
          <br />
          Your task is:{" "}
          {selectedDeals.length > 0 ? (
            <ul className="list-inside list-disc">
              {tasks
                .filter((task) => task.index === selectedTask)
                .map((task) => {
                  return (
                    <li key={task.index}>
                      {task.index}. {task.name}{" "}
                      {abandonedPowerForTask > 0
                        ? `(Removed: ${powers.find((p) => p.index === abandonedPowerForTask)?.index}. ${
                            powers.find((p) => p.index === abandonedPowerForTask)?.name
                          })`
                        : "(Needs to be done)"}
                    </li>
                  );
                })}
            </ul>
          ) : (
            <ul className="list-inside list-disc">
              <li>None</li>
            </ul>
          )}
          <br />
          <div className="flex flex-row items-center justify-center space-x-4">
            {/* <button className="rounded border border-green-300/20 bg-green-600 px-2 py-1 text-white hover:bg-harry dark:border-white/10 dark:bg-slate-800 dark:hover:bg-slate-700">
              Import Build
            </button>
            <button className="rounded border border-green-300/20 bg-green-600 px-2 py-1 text-white hover:bg-harry dark:border-white/10 dark:bg-slate-800 dark:hover:bg-slate-700">
              Export Build
            </button> */}
            <button
              className="rounded border border-green-300/20 bg-green-600 px-2 py-1 text-white hover:bg-harry dark:border-white/10 dark:bg-slate-800 dark:hover:bg-slate-700"
              onClick={resetBuild}
            >
              Reset Build
            </button>
            {/* <button className="rounded border border-green-300/20 bg-green-600 px-2 py-1 text-white hover:bg-harry dark:border-white/10 dark:bg-slate-800 dark:hover:bg-slate-700">
              Open Master List
            </button> */}
          </div>
        </InformationBox>
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </MainLayout>
  );
};

export default SuperpowersPage;
