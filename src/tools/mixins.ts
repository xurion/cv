enum Breakpoints {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}

const breakpoint = (bp: Breakpoints, styles: string) => `
  @media (min-width: ${bp}px) {
    ${styles}
  }
`;

export const sm = (styles: string) => breakpoint(Breakpoints.sm, styles);
export const md = (styles: string) => breakpoint(Breakpoints.md, styles);
export const lg = (styles: string) => breakpoint(Breakpoints.lg, styles);
export const xl = (styles: string) => breakpoint(Breakpoints.xl, styles);
