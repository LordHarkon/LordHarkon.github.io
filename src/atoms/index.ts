import { atomWithStorage } from "jotai/utils";

export const empoweredNumberAtom = atomWithStorage<number>("empoweredNumber", 0);
empoweredNumberAtom.debugLabel = "Empowered Number";

export const selectedDealsAtom = atomWithStorage<number[]>("selectedDeals", []);
selectedDealsAtom.debugLabel = "Selected Deals";

export const selectedPowersAtom = atomWithStorage<number[]>("selectedPowers", []);
selectedPowersAtom.debugLabel = "Selected Powers";

export const abandonedPowersAtom = atomWithStorage<number[]>("abandonedPowers", []);
abandonedPowersAtom.debugLabel = "Abandoned Powers";

export const swappedPowersAtom = atomWithStorage<number[]>("swappedPowers", []);
swappedPowersAtom.debugLabel = "Swapped Powers";

export const selectedSwappedPowerAtom = atomWithStorage<number>("selectedSwappedPower", 0);
selectedSwappedPowerAtom.debugLabel = "Selected Swapped Power";

export const selectedTaskAtom = atomWithStorage<number>("selectedTask", 0);
selectedTaskAtom.debugLabel = "Selected Task";

export const abandonedPowerForTaskAtom = atomWithStorage<number>("abandonedPowerForTask", 0);
abandonedPowerForTaskAtom.debugLabel = "Abandoned Power For Task";
