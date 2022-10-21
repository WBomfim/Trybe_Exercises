import ILens from "../../src/interfaces/Lens";

export const lensMock: ILens = {
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: true,
};

export const lensMockWithId: ILens & { _id: string } = {
  _id: "62cf1fc6498565d94eba52cd",
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: true,
};
